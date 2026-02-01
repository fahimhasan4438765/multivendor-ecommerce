"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TopBar } from "./top-bar";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-lg">
      <TopBar />
      {/* Main nav - Orange */}
      <div className="bg-primary-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4 flex-1">
              <Link href="/" className="text-xl font-bold">
                TopDeal
              </Link>
              <MegaMenu />
            </div>
            {/* Search with All Categories dropdown */}
            <div className="hidden lg:flex flex-1 max-w-md mx-4">
              <div className="flex w-full rounded overflow-hidden bg-white">
                <select className="px-3 py-2 text-gray-700 text-sm bg-gray-50 border-r">
                  <option>All Categories</option>
                </select>
                <Input
                  placeholder="Search"
                  className="flex-1 border-0 rounded-none"
                />
                <Button className="rounded-none bg-primary-600 hover:bg-primary-700">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Link href="/wishlist">
                <Button variant="ghost" size="icon" className="text-white hover:bg-primary-600">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="text-white hover:bg-primary-600">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="ghost" size="icon" className="text-white hover:bg-primary-600">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-primary-600"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        {/* Mobile search */}
        <div className="lg:hidden px-4 pb-3">
          <div className="flex rounded overflow-hidden bg-white">
            <Input placeholder="Search..." className="border-0" />
            <Button className="rounded-none bg-primary-600">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
