"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCustomer } from "@/context/CustomerContext";
import { formatPrice } from "@/lib/shopify";
import { Package, LogOut } from "lucide-react";

export default function AccountPage() {
  const { customer, loading, logout } = useCustomer();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !customer) router.push("/account/login");
  }, [customer, loading, router]);

  if (loading || !customer) {
    return (
      <div className="pt-16 min-h-screen bg-warm-white flex items-center justify-center">
        <p className="font-script text-2xl text-blush">laden... ✦</p>
      </div>
    );
  }

  const orders = customer.orders.edges.map((e) => e.node);

  async function handleLogout() {
    await logout();
    router.push("/");
  }

  return (
    <div className="pt-16 min-h-screen bg-warm-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <p className="font-script text-2xl text-blush mb-1">jouw account ✦</p>
            <h1 className="font-heading text-3xl text-ink italic">
              Hoi, {customer.firstName}
            </h1>
            <p className="font-body text-sm text-soft-gray mt-1">{customer.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-soft-gray hover:text-terracotta transition-colors"
          >
            <LogOut size={14} /> Uitloggen
          </button>
        </div>

        {/* Orders */}
        <h2 className="font-body text-xs tracking-widest uppercase text-soft-gray mb-6">Bestellingen</h2>

        {orders.length === 0 ? (
          <div className="bg-cream rounded-sm p-10 text-center">
            <Package size={32} className="text-border mx-auto mb-4" />
            <p className="font-body text-sm text-soft-gray mb-6">Je hebt nog geen bestellingen geplaatst.</p>
            <Link
              href="/shop"
              className="font-body text-xs tracking-widest uppercase bg-ink text-warm-white px-8 py-3 hover:bg-terracotta transition-colors rounded-sm"
            >
              Bekijk collectie
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-cream rounded-sm p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-body text-sm text-ink font-medium">Bestelling #{order.orderNumber}</p>
                    <p className="font-body text-xs text-soft-gray mt-0.5">
                      {new Date(order.processedAt).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-body text-sm text-ink">
                      {formatPrice(order.currentTotalPrice.amount, order.currentTotalPrice.currencyCode)}
                    </p>
                    <span className={`font-body text-xs px-2 py-0.5 rounded-sm mt-1 inline-block ${
                      order.fulfillmentStatus === "FULFILLED"
                        ? "bg-green-100 text-green-700"
                        : "bg-sand text-soft-gray"
                    }`}>
                      {order.fulfillmentStatus === "FULFILLED" ? "Verzonden" : "In behandeling"}
                    </span>
                  </div>
                </div>
                <div className="border-t border-border pt-4 flex flex-col gap-1">
                  {order.lineItems.edges.map((li, i) => (
                    <p key={i} className="font-body text-xs text-soft-gray">
                      {li.node.quantity}× {li.node.title}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
