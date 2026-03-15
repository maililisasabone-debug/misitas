import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProductByHandle, formatPrice } from "@/lib/shopify";
import AddToCartButton from "@/components/AddToCartButton";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: handle } = await params;
  const product = await getProductByHandle(handle);

  if (!product) notFound();

  const images = product.images.edges.map((e) => e.node);
  const variants = product.variants.edges.map((e) => e.node);
  const firstVariant = variants[0];
  const price = firstVariant?.price ?? product.priceRange.minVariantPrice;

  const metaOrigin = product.metafields?.find((m) => m?.key === "origin")?.value;
  const metaMaker = product.metafields?.find((m) => m?.key === "maker")?.value;
  const metaMaterial = product.metafields?.find((m) => m?.key === "material")?.value;

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-soft-gray hover:text-ink transition-colors mb-12"
        >
          <ArrowLeft size={12} /> Terug naar shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Images */}
          <div className="flex flex-col gap-4">
            {images.length > 0 ? images.map((img, i) => (
              <div key={i} className={`overflow-hidden bg-cream rounded-sm ${i === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                <img src={img.url} alt={img.altText ?? product.title} className="w-full h-full object-cover" />
              </div>
            )) : (
              <div className="aspect-square bg-cream rounded-sm flex items-center justify-center text-soft-gray text-sm">
                Geen afbeelding
              </div>
            )}
          </div>

          {/* Info */}
          <div className="md:sticky md:top-24 self-start py-4">
            <h1 className="font-heading text-4xl text-ink mb-4 italic">{product.title}</h1>
            <p className="text-2xl text-ink mb-8">
              {formatPrice(price.amount, price.currencyCode)}
            </p>

            <AddToCartButton variantId={firstVariant?.id} available={firstVariant?.availableForSale ?? false} />

            {product.description && (
              <div className="border-t border-border pt-8 mt-8">
                <h3 className="text-xs tracking-widest uppercase text-soft-gray mb-4">Over dit item</h3>
                <p className="text-sm text-ink leading-relaxed mb-8">{product.description}</p>
              </div>
            )}

            {(metaOrigin || metaMaker || metaMaterial) && (
              <div className="flex flex-col gap-3 border-t border-border pt-6">
                {metaOrigin && (
                  <div className="flex justify-between text-sm border-b border-border pb-3">
                    <span className="text-soft-gray">Gevonden in</span>
                    <span className="text-ink">{metaOrigin}</span>
                  </div>
                )}
                {metaMaker && (
                  <div className="flex justify-between text-sm border-b border-border pb-3">
                    <span className="text-soft-gray">Maker</span>
                    <span className="text-ink">{metaMaker}</span>
                  </div>
                )}
                {metaMaterial && (
                  <div className="flex justify-between text-sm border-b border-border pb-3">
                    <span className="text-soft-gray">Materiaal</span>
                    <span className="text-ink">{metaMaterial}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
