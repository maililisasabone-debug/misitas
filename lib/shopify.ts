const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;
const endpoint = `https://${domain}/api/2024-01/graphql.json`;

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data as T;
}

// ─── Types ───────────────────────────────────────────────────────────────────

export type ShopifyProduct = {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
  images: { edges: { node: { url: string; altText: string | null } }[] };
  variants: { edges: { node: { id: string; title: string; availableForSale: boolean; price: { amount: string; currencyCode: string } } }[] };
  metafields?: ({ key: string; value: string } | null)[];
};

export type CartLine = {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    product: { title: string; handle: string; images: { edges: { node: { url: string } }[] } };
    price: { amount: string; currencyCode: string };
  };
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: { totalAmount: { amount: string; currencyCode: string } };
  lines: { edges: { node: CartLine }[] };
};

// ─── Fragments ───────────────────────────────────────────────────────────────

const CART_FRAGMENT = `
  id
  checkoutUrl
  totalQuantity
  cost { totalAmount { amount currencyCode } }
  lines(first: 50) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            title
            price { amount currencyCode }
            product {
              title
              handle
              images(first: 1) { edges { node { url } } }
            }
          }
        }
      }
    }
  }
`;

// ─── Products ────────────────────────────────────────────────────────────────

export async function getAllProducts(): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(`
    query GetProducts {
      products(first: 100) {
        edges {
          node {
            id title handle description
            priceRange { minVariantPrice { amount currencyCode } }
            images(first: 1) { edges { node { url altText } } }
            variants(first: 1) { edges { node { id title availableForSale price { amount currencyCode } } } }
          }
        }
      }
    }
  `);
  return data.products.edges.map((e) => e.node);
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<{ product: ShopifyProduct | null }>(`
    query GetProduct($handle: String!) {
      product(handle: $handle) {
        id title handle description
        priceRange { minVariantPrice { amount currencyCode } }
        images(first: 5) { edges { node { url altText } } }
        variants(first: 20) {
          edges { node { id title availableForSale price { amount currencyCode } } }
        }
        metafields(identifiers: [
          { namespace: "custom", key: "origin" }
          { namespace: "custom", key: "maker" }
          { namespace: "custom", key: "material" }
        ]) { key value }
      }
    }
  `, { handle });
  return data.product;
}

// ─── Cart ─────────────────────────────────────────────────────────────────────

export async function createCart(): Promise<Cart> {
  const data = await shopifyFetch<{ cartCreate: { cart: Cart } }>(`
    mutation CreateCart {
      cartCreate {
        cart { ${CART_FRAGMENT} }
      }
    }
  `);
  return data.cartCreate.cart;
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const data = await shopifyFetch<{ cart: Cart | null }>(`
    query GetCart($cartId: ID!) {
      cart(id: $cartId) { ${CART_FRAGMENT} }
    }
  `, { cartId });
  return data.cart;
}

export async function addToCart(cartId: string, variantId: string, quantity = 1): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesAdd: { cart: Cart } }>(`
    mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart { ${CART_FRAGMENT} }
      }
    }
  `, { cartId, lines: [{ merchandiseId: variantId, quantity }] });
  return data.cartLinesAdd.cart;
}

export async function removeFromCart(cartId: string, lineId: string): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesRemove: { cart: Cart } }>(`
    mutation RemoveFromCart($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart { ${CART_FRAGMENT} }
      }
    }
  `, { cartId, lineIds: [lineId] });
  return data.cartLinesRemove.cart;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function formatPrice(amount: string, currencyCode: string): string {
  return new Intl.NumberFormat("nl-NL", { style: "currency", currency: currencyCode }).format(parseFloat(amount));
}

// ─── Customer ─────────────────────────────────────────────────────────────────

export type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  orders: {
    edges: {
      node: {
        id: string;
        orderNumber: number;
        processedAt: string;
        financialStatus: string;
        fulfillmentStatus: string;
        currentTotalPrice: { amount: string; currencyCode: string };
        lineItems: { edges: { node: { title: string; quantity: number } }[] };
      };
    }[];
  };
};

export async function customerCreate(
  email: string, password: string, firstName: string, lastName: string
): Promise<{ customer: Customer | null; errors: string[] }> {
  const data = await shopifyFetch<{
    customerCreate: { customer: Customer | null; customerUserErrors: { message: string }[] };
  }>(`
    mutation CustomerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer { id firstName lastName email }
        customerUserErrors { message }
      }
    }
  `, { input: { email, password, firstName, lastName } });
  return {
    customer: data.customerCreate.customer,
    errors: data.customerCreate.customerUserErrors.map((e) => e.message),
  };
}

export async function customerLogin(
  email: string, password: string
): Promise<{ token: string | null; errors: string[] }> {
  const data = await shopifyFetch<{
    customerAccessTokenCreate: {
      customerAccessToken: { accessToken: string } | null;
      customerUserErrors: { message: string }[];
    };
  }>(`
    mutation CustomerLogin($input: CustomerAccessTokenCreateInput!) {
      customerAccessTokenCreate(input: $input) {
        customerAccessToken { accessToken }
        customerUserErrors { message }
      }
    }
  `, { input: { email, password } });
  return {
    token: data.customerAccessTokenCreate.customerAccessToken?.accessToken ?? null,
    errors: data.customerAccessTokenCreate.customerUserErrors.map((e) => e.message),
  };
}

export async function customerLogout(token: string): Promise<void> {
  await shopifyFetch(`
    mutation CustomerLogout($token: String!) {
      customerAccessTokenDelete(customerAccessToken: $token) {
        deletedAccessToken
      }
    }
  `, { token });
}

export async function getCustomer(token: string): Promise<Customer | null> {
  const data = await shopifyFetch<{ customer: Customer | null }>(`
    query GetCustomer($token: String!) {
      customer(customerAccessToken: $token) {
        id firstName lastName email
        orders(first: 10, sortKey: PROCESSED_AT, reverse: true) {
          edges {
            node {
              id orderNumber processedAt financialStatus fulfillmentStatus
              currentTotalPrice { amount currencyCode }
              lineItems(first: 5) { edges { node { title quantity } } }
            }
          }
        }
      }
    }
  `, { token });
  return data.customer;
}
