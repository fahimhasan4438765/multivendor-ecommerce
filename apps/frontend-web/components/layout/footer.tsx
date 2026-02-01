import Link from "next/link";
import { MapPin } from "lucide-react";

const footerLinks = {
  shop: [
    { label: "All Categories", href: "/categories" },
    { label: "Special Offers", href: "/special-offers" },
    { label: "Campaigns", href: "/campaigns" },
    { label: "Coupons", href: "/coupons" },
  ],
  support: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Left: Logo + Office Location */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white block mb-4">
              TopDeal
            </Link>
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">Office Location</p>
                <p className="text-sm mt-1">100 S Manhattan St, Amarillo, TX 79104, North America</p>
              </div>
            </div>
          </div>

          {/* Center: Shop & Support links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-400 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary-400 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Newsletter + Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-3">Subscribe for updates and offers.</p>
            <form className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-600">
                Subscribe
              </button>
            </form>
            <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition">f</a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition">𝕏</a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition">in</a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition">📷</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>Copyright &copy; 2026 Fahim Hasan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
