"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-sm text-[#C4956A] tracking-wide">
        Welkom bij Misitas. We houden je op de hoogte.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-stretch gap-0 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Jouw e-mailadres"
        required
        className="flex-1 bg-white border border-[#E8E0D4] px-5 py-4 text-sm text-[#1C1C1C] placeholder:text-[#8A8A8A] focus:outline-none focus:border-[#C4956A] transition-colors"
      />
      <button
        type="submit"
        className="bg-[#1C1C1C] text-[#F5F0E8] px-6 hover:bg-[#C4956A] transition-colors flex items-center"
      >
        <ArrowRight size={16} />
      </button>
    </form>
  );
}
