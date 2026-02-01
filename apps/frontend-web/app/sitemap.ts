import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? "https://example.com";
  return [
    { url: base, changeFrequency: "daily" as const, priority: 1 },
    { url: `${base}/categories`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/cart`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/checkout`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/orders`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/login`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/register`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/dashboard`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${base}/wishlist`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${base}/coupons`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/special-offers`, changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${base}/campaigns`, changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${base}/terms`, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${base}/privacy`, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${base}/refund`, changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${base}/contact`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/about`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/sitemap`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${base}/vendor/login`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${base}/vendor/register`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${base}/vendor/dashboard`, changeFrequency: "weekly" as const, priority: 0.7 },
  ];
}
