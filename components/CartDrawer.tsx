"use client";

import { X, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/shopify";

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeItem } = useCart();

  if (!cartOpen) return null;

  const lines = cart?.lines.edges.map((e) => e.node) ?? [];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/40 z-50"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-warm-white z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-ink" />
            <h2 className="font-body text-sm tracking-widest uppercase text-ink">
              Winkelwagen ({cart?.totalQuantity ?? 0})
            </h2>
          </div>
          <button onClick={() => setCartOpen(false)} className="text-soft-gray hover:text-ink transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {lines.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={40} className="text-border" />
              <p className="font-script text-2xl text-blush">Je winkelwagen is leeg ✦</p>
              <p className="font-body text-sm text-soft-gray">Voeg een stuk toe uit de collectie</p>
              <button
                onClick={() => setCartOpen(false)}
                className="mt-4 font-body text-xs tracking-widest uppercase border border-ink px-8 py-3 hover:bg-ink hover:text-white transition-colors"
              >
                Bekijk collectie
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {lines.map((line) => {
                const img = line.merchandise.product.images.edges[0]?.node.url;
                return (
                  <div key={line.id} className="flex gap-4">
                    {img && (
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden bg-cream rounded-sm">
                        <img src={img} alt={line.merchandise.product.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="font-body text-sm text-ink leading-snug">{line.merchandise.product.title}</p>
                      {line.merchandise.title !== "Default Title" && (
                        <p className="font-body text-xs text-soft-gray mt-0.5">{line.merchandise.title}</p>
                      )}
                      <p className="font-body text-sm text-terracotta mt-1">
                        {formatPrice(line.merchandise.price.amount, line.merchandise.price.currencyCode)}
                      </p>
                      <p className="font-body text-xs text-soft-gray mt-1">Aantal: {line.quantity}</p>
                    </div>
                    <button
                      onClick={() => removeItem(line.id)}
                      className="text-soft-gray hover:text-terracotta transition-colors self-start mt-1"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && cart && (
          <div className="border-t border-border px-6 py-6 flex flex-col gap-4">
            <div className="flex justify-between font-body text-sm">
              <span className="text-soft-gray">Subtotaal</span>
              <span className="text-ink font-medium">
                {formatPrice(cart.cost.totalAmount.amount, cart.cost.totalAmount.currencyCode)}
              </span>
            </div>
            <p className="font-body text-xs text-soft-gray">Verzending wordt berekend bij checkout</p>
            <a
              href={cart.checkoutUrl}
              className="w-full bg-ink text-warm-white font-body text-xs tracking-widest uppercase py-4 text-center hover:bg-terracotta transition-colors block"
            >
              Afrekenen
            </a>
          </div>
        )}
      </div>
    </>
  );
}
