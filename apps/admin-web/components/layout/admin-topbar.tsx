"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, User, Settings, LogOut, Bell, MessageSquare } from "lucide-react";

export function AdminTopbar() {
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
    <header className="sticky top-0 z-40 h-16 border-b bg-white flex items-center justify-end px-6 gap-2">
      <Link
        href="/notifications"
        className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
        title="Notifications"
      >
        <Bell className="h-5 w-5" />
      </Link>
      <Link
        href="/messaging"
        className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
        title="Messaging"
      >
        <MessageSquare className="h-5 w-5" />
      </Link>
      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100"
        >
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white text-sm font-medium">
            A
          </div>
          <ChevronDown className={`h-4 w-4 text-gray-500 ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border py-1 z-50">
            <Link
              href="/profile"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              <User className="h-4 w-4" />
              Profile
            </Link>
            <Link
              href="/admin-settings"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              <Settings className="h-4 w-4" />
              Admin Settings
            </Link>
            <hr className="my-1" />
            <button
              className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-50 text-red-600"
              onClick={() => setOpen(false)}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
