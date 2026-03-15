"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCustomer } from "@/context/CustomerContext";

export default function RegisterPage() {
  const { register } = useCustomer();
  const router = useRouter();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    const errs = await register(form.email, form.password, form.firstName, form.lastName);
    if (errs.length === 0) {
      router.push("/account");
    } else {
      setErrors(errs);
    }
    setLoading(false);
  }

  return (
    <div className="pt-16 min-h-screen bg-warm-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <p className="font-script text-3xl text-blush text-center mb-2">join misitas ✦</p>
        <h1 className="font-heading text-3xl text-ink text-center italic mb-10">Account aanmaken</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-soft-gray block mb-2">Voornaam</label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                required
                className="w-full border-b border-border bg-transparent py-2 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-soft-gray block mb-2">Achternaam</label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                required
                className="w-full border-b border-border bg-transparent py-2 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="font-body text-xs tracking-widest uppercase text-soft-gray block mb-2">E-mail</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              required
              className="w-full border-b border-border bg-transparent py-2 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
            />
          </div>
          <div>
            <label className="font-body text-xs tracking-widest uppercase text-soft-gray block mb-2">Wachtwoord</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => update("password", e.target.value)}
              required
              minLength={5}
              className="w-full border-b border-border bg-transparent py-2 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
            />
          </div>

          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-sm p-3">
              {errors.map((e, i) => <p key={i} className="text-xs text-red-600">{e}</p>)}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-ink text-warm-white font-body text-xs tracking-widest uppercase py-4 hover:bg-terracotta transition-colors disabled:opacity-60 mt-2 rounded-sm"
          >
            {loading ? "Bezig..." : "Account aanmaken"}
          </button>
        </form>

        <p className="font-body text-sm text-soft-gray text-center mt-8">
          Al een account?{" "}
          <Link href="/account/login" className="text-ink underline underline-offset-2 hover:text-terracotta transition-colors">
            Log hier in
          </Link>
        </p>
      </div>
    </div>
  );
}
