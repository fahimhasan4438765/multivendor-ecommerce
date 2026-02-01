import Link from "next/link";
import { PlaceholderImage } from "@/components/layout/placeholder";

interface PromoBannerProps {
  text?: string;
  href?: string;
}

export function PromoBanner({ text = "Special Offer Banner", href = "/special-offers" }: PromoBannerProps) {
  return (
    <Link href={href} className="block w-full my-8">
      <div className="w-full h-32 md:h-40 rounded-lg overflow-hidden relative bg-gradient-to-r from-primary-400 to-primary-600">
        <PlaceholderImage width={1200} height={160} text={text} className="w-full h-full opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            {text}
          </span>
        </div>
      </div>
    </Link>
  );
}
