"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCustomer } from "@/context/CustomerContext";

export default function LoginPage() {
  const { login } = useCustomer();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    const errs = await login(email, password);
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
        <p className="font-script text-3xl text-blush text-center mb-2">welkom terug ✦</p>
        <h1 className="font-heading text-3xl text-ink text-center italic mb-10">Inloggen</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="font-body text-xs tracking-widest uppercase text-soft-gray block mb-2">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-b border-border bg-transparent py-2 text-sm text-ink focus:outline-none focus:border-ink transition-colors"
            />
          </div>
          <div>
            <label className="font-body text-xs tracking-widest uppercase text-soft-gray block mb-2">Wachtwoord</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
            {loading ? "Bezig..." : "Inloggen"}
          </button>
        </form>

        <p className="font-body text-sm text-soft-gray text-center mt-8">
          Nog geen account?{" "}
          <Link href="/account/register" className="text-ink underline underline-offset-2 hover:text-terracotta transition-colors">
            Registreer hier
          </Link>
        </p>
      </div>
    </div>
  );
}
