"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { Customer, customerCreate, customerLogin, customerLogout, getCustomer } from "@/lib/shopify";

type CustomerContextType = {
  customer: Customer | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<string[]>;
  register: (email: string, password: string, firstName: string, lastName: string) => Promise<string[]>;
  logout: () => Promise<void>;
};

const CustomerContext = createContext<CustomerContextType | null>(null);

export function CustomerProvider({ children }: { children: React.ReactNode }) {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      const token = localStorage.getItem("misitas_customer_token");
      if (token) {
        const c = await getCustomer(token);
        setCustomer(c);
        if (!c) localStorage.removeItem("misitas_customer_token");
      }
      setLoading(false);
    }
    init();
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<string[]> => {
    const { token, errors } = await customerLogin(email, password);
    if (token) {
      localStorage.setItem("misitas_customer_token", token);
      const c = await getCustomer(token);
      setCustomer(c);
    }
    return errors;
  }, []);

  const register = useCallback(async (
    email: string, password: string, firstName: string, lastName: string
  ): Promise<string[]> => {
    const { errors } = await customerCreate(email, password, firstName, lastName);
    if (errors.length === 0) {
      return login(email, password);
    }
    return errors;
  }, [login]);

  const logout = useCallback(async () => {
    const token = localStorage.getItem("misitas_customer_token");
    if (token) await customerLogout(token);
    localStorage.removeItem("misitas_customer_token");
    setCustomer(null);
  }, []);

  return (
    <CustomerContext.Provider value={{ customer, loading, login, register, logout }}>
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomer() {
  const ctx = useContext(CustomerContext);
  if (!ctx) throw new Error("useCustomer must be used inside CustomerProvider");
  return ctx;
}
