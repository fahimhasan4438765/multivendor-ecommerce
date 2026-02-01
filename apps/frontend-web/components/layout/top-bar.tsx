"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MapPin, Mail, Truck, ShoppingCart, ChevronDown, User, Store } from "lucide-react";

export function TopBar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="hidden md:block bg-sky-100 text-gray-800 border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
        <Link href="/" className="font-bold text-primary-600 flex items-center gap-1">
          TOPDEAL
        </Link>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            100 S Manhattan St, Amarillo, TX 79104
          </span>
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Sales@TopDeal.Com (+123) 456 7890
          </span>
          <span className="flex items-center gap-2">
            <Truck className="h-4 w-4" />
            Free Delivery On order over $89.00
          </span>
        </div>
        <div className="relative" ref={ref}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 font-medium hover:text-primary-600"
          >
            <ShoppingCart className="h-5 w-5" />
            Shopping Cart 0 item(s) - $0.00
            <ChevronDown className="h-4 w-4" />
          </button>
          {open && (
            <div className="absolute right-0 top-full mt-1 bg-white shadow-lg rounded-lg border py-2 min-w-[180px] z-50">
              <Link
                href="/login"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                <User className="h-4 w-4" />
                Login
              </Link>
              <Link
                href="/vendor/login"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                <Store className="h-4 w-4" />
                Vendor Panel
              </Link>
              <Link
                href="/cart"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 border-t"
                onClick={() => setOpen(false)}
              >
                <ShoppingCart className="h-4 w-4" />
                View Cart
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
