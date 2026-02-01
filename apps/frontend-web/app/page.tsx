import Link from "next/link";
import { PlaceholderImage } from "@/components/layout/placeholder";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CategorySidebar } from "@/components/layout/category-sidebar";
import { MobileCategoryMenu } from "@/components/layout/mobile-category-menu";
import { PromoBanner } from "@/components/layout/promo-banner";
import { Flame } from "lucide-react";

const sectionTypes = [
  { id: "shop-category", title: "Shop by Category", slug: "categories" },
  { id: "top-trending", title: "Top Trending", slug: "top-trending" },
  { id: "hot-deals", title: "Hot Deals", slug: "hot-deals" },
  { id: "limited-offers", title: "Limited Offers", slug: "limited-offers" },
  { id: "new-arrivals", title: "New Arrivals", slug: "new-arrivals" },
  { id: "best-sellers", title: "Best Sellers", slug: "best-sellers" },
  { id: "flash-sale", title: "Flash Sale", slug: "flash-sale" },
  { id: "clearance", title: "Clearance", slug: "clearance" },
  { id: "vendor-picks", title: "Vendor Picks", slug: "vendor-picks" },
  { id: "featured", title: "Featured Products", slug: "featured" },
  { id: "seasonal", title: "Seasonal Deals", slug: "seasonal" },
  { id: "under-50", title: "Under $50", slug: "under-50" },
  { id: "top-rated", title: "Top Rated", slug: "top-rated" },
  { id: "bundles", title: "Bundle Deals", slug: "bundles" },
  { id: "today-deals", title: "Today&apos;s Deals", slug: "today-deals" },
];

const sampleProducts = (section: string) =>
  Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    name: `${section} Product ${i + 1}`,
    price: 60 + i * 20,
    oldPrice: 100 + i * 25,
    off: 25 + i * 5,
  }));

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Main layout: Sidebar + Content */}
      <div className="flex gap-6">
        <aside className="hidden lg:block">
          <CategorySidebar />
        </aside>

        <div className="flex-1 min-w-0">
          {/* Mobile: Categories dropdown */}
          <MobileCategoryMenu />
          {/* Hero Banner - Flash Sale */}
          <section className="relative h-80 md:h-[420px] rounded-lg overflow-hidden mb-6">
            <PlaceholderImage
              width={1200}
              height={420}
              text="75% OFF - 3 DAYS FLASH SALE"
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-black/25 flex items-end md:items-center">
              <div className="p-6 md:p-12 max-w-xl">
                <div className="inline-block bg-primary px-4 py-1 rounded-full text-white font-bold text-lg mb-3">
                  75% OFF
                </div>
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
                  DON&apos;T FORGET 3 DAYS FLASH SALE
                </h1>
                <Button size="lg" className="bg-primary hover:bg-primary-600 mt-4">
                  Shop now
                </Button>
                <p className="text-white/90 text-sm mt-2">WEDNESDAY | 12AM - 6PM</p>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-2 rounded text-sm font-mono">
              532D : 9M : 55S
            </div>
          </section>

          {/* Promo blocks below hero */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link href="/special-offers" className="block">
              <div className="h-40 md:h-48 rounded-lg overflow-hidden relative bg-pink-100">
                <PlaceholderImage width={600} height={200} text="40% OFF EVERYTHING" className="w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800 bg-white/80 px-4 py-2 rounded">
                    40% OFF EVERYTHING
                  </span>
                </div>
              </div>
            </Link>
            <Link href="/campaigns" className="block">
              <div className="h-40 md:h-48 rounded-lg overflow-hidden relative bg-sky-100">
                <PlaceholderImage width={600} height={200} text="SALE FLAT 70% OFF" className="w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800 bg-white/80 px-4 py-2 rounded">
                    SALE FLAT 70% OFF
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* 15 Category Sections with promo banners in between */}
          {sectionTypes.map((section, idx) => (
            <div key={section.id}>
              <section className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-1 bg-primary rounded" />
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <Flame className="h-5 w-5 text-primary" />
                    {section.title}
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {sampleProducts(section.title).map((p) => (
                    <Link key={p.id} href={`/products/${p.id}`}>
                      <Card className="overflow-hidden hover:shadow-lg transition h-full">
                        <PlaceholderImage width={280} height={180} text={p.name} className="w-full" />
                        <CardContent className="p-3">
                          <h3 className="font-medium text-sm truncate">{p.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-bold text-primary">${p.price}</span>
                            <span className="text-xs text-gray-500 line-through">${p.oldPrice}</span>
                            <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">-{p.off}%</span>
                          </div>
                          <Button size="sm" className="w-full mt-2">Add to Cart</Button>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
              {/* Full-width promo banner after every 5 sections */}
              {(idx + 1) % 5 === 0 && idx < sectionTypes.length - 1 && (
                <PromoBanner text={idx === 4 ? "Limited Time Offer - Shop Now!" : "Weekend Sale - Extra 20% Off"} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="py-12 border-t mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full bg-primary-100 mx-auto mb-2 flex items-center justify-center">🚚</div>
            <h3 className="font-semibold">Free Shipping</h3>
            <p className="text-sm text-gray-600">On order over $100</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 mx-auto mb-2 flex items-center justify-center">🔒</div>
            <h3 className="font-semibold">Secure Payment</h3>
            <p className="text-sm text-gray-600">We value your security</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 mx-auto mb-2 flex items-center justify-center">💬</div>
            <h3 className="font-semibold">24/7 Support</h3>
            <p className="text-sm text-gray-600">Always here to help</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 mx-auto mb-2 flex items-center justify-center">💰</div>
            <h3 className="font-semibold">Cash on Delivery</h3>
            <p className="text-sm text-gray-600">Pay when you receive</p>
          </div>
        </div>
      </section>
    </div>
  );
}
