"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { Cart, createCart, getCart, addToCart, removeFromCart } from "@/lib/shopify";

type CartContextType = {
  cart: Cart | null;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  cartCount: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  // Load or create cart on mount
  useEffect(() => {
    async function initCart() {
      const stored = localStorage.getItem("misitas_cart_id");
      if (stored) {
        const existing = await getCart(stored);
        if (existing) { setCart(existing); return; }
      }
      const newCart = await createCart();
      localStorage.setItem("misitas_cart_id", newCart.id);
      setCart(newCart);
    }
    initCart();
  }, []);

  const addItem = useCallback(async (variantId: string, quantity = 1) => {
    let cartId = cart?.id;
    if (!cartId) {
      const newCart = await createCart();
      localStorage.setItem("misitas_cart_id", newCart.id);
      cartId = newCart.id;
    }
    const updated = await addToCart(cartId, variantId, quantity);
    setCart(updated);
    setCartOpen(true);
  }, [cart]);

  const removeItem = useCallback(async (lineId: string) => {
    if (!cart) return;
    const updated = await removeFromCart(cart.id, lineId);
    setCart(updated);
  }, [cart]);

  const cartCount = cart?.totalQuantity ?? 0;

  return (
    <CartContext.Provider value={{ cart, cartOpen, setCartOpen, addItem, removeItem, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
