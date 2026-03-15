"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ variantId, available }: { variantId?: string; available: boolean }) {
  const { addItem } = useCart();
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  if (!variantId || !available) {
    return (
      <button disabled className="w-full bg-border text-soft-gray text-xs tracking-widest uppercase py-5 cursor-not-allowed rounded-sm mb-4">
        Uitverkocht
      </button>
    );
  }

  async function handleAdd() {
    setLoading(true);
    await addItem(variantId!);
    setLoading(false);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <button
      onClick={handleAdd}
      disabled={loading}
      className="w-full bg-ink text-warm-white text-xs tracking-widest uppercase py-5 hover:bg-terracotta transition-colors flex items-center justify-center gap-3 mb-4 rounded-sm disabled:opacity-70"
    >
      {added ? (
        <><Check size={14} /> Toegevoegd</>
      ) : loading ? (
        "Bezig..."
      ) : (
        <><ShoppingBag size={14} /> In winkelwagen</>
      )}
    </button>
  );
}
