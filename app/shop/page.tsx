import Link from "next/link";
import { MapPin } from "lucide-react";
import { getAllProducts, formatPrice } from "@/lib/shopify";

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="py-20 px-6 text-center border-b border-border">
        <p className="text-xs tracking-[0.3em] uppercase text-caramel mb-4">Collectie</p>
        <h1 className="font-heading text-5xl text-ink italic">Shop</h1>
      </div>

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-script text-3xl text-blush mb-4">Nog geen producten ✦</p>
            <p className="font-body text-sm text-soft-gray">Voeg producten toe in je Shopify admin.</p>
          </div>
        ) : (
          <>
            <p className="text-xs text-soft-gray mb-10 tracking-wider">{products.length} objecten</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => {
                const image = product.images.edges[0]?.node;
                const price = product.priceRange.minVariantPrice;
                return (
                  <Link key={product.id} href={`/shop/${product.handle}`} className="group">
                    <div className="aspect-[3/4] overflow-hidden bg-cream mb-4 relative rounded-sm">
                      {image ? (
                        <img
                          src={image.url}
                          alt={image.altText ?? product.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-soft-gray text-xs">No image</div>
                      )}
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300 rounded-sm" />
                    </div>
                    <p className="font-body text-sm text-ink mb-1 leading-snug">{product.title}</p>
                    <p className="font-body text-sm text-soft-gray">
                      {formatPrice(price.amount, price.currencyCode)}
                    </p>
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
