"use client";

import { useState } from "react";
import Link from "next/link";
import { PlaceholderImage } from "@/components/layout/placeholder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { ImageGallery } from "@/components/product/image-gallery";
import { Star, Heart, Bookmark } from "lucide-react";

const colors = ["Red", "Blue", "Black", "White"];
const sizes = ["S", "M", "L", "XL"];

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  const product = {
    name: `Product ${params.id}`,
    price: 122,
    oldPrice: 180,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4.5,
    reviews: 24,
    stock: 15,
  };

  const relatedProducts = [
    { id: 101, name: "Related Product 1", price: 99 },
    { id: 102, name: "Related Product 2", price: 149 },
    { id: 103, name: "Related Product 3", price: 79 },
  ];

  const tabs = [
    {
      id: "details",
      label: "Details",
      content: (
        <div className="space-y-4">
          <p><strong>Material:</strong> Premium quality</p>
          <p><strong>Dimensions:</strong> 10 x 8 x 2 inches</p>
          <p><strong>Weight:</strong> 0.5 kg</p>
          <p><strong>Warranty:</strong> 1 year</p>
          <p>{product.description}</p>
        </div>
      ),
    },
    {
      id: "reviews",
      label: `Reviews (${product.reviews})`,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`h-5 w-5 ${i <= Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="font-medium">{product.rating} out of 5</span>
          </div>
          <div className="border-b pb-4">
            <div className="flex gap-2 mb-2">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-medium">John D.</span>
            </div>
            <p className="text-gray-600 text-sm">Great product! Exactly as described.</p>
          </div>
          <div className="pt-4">
            <h4 className="font-semibold mb-2">Write a review</h4>
            <textarea className="w-full border rounded p-2 text-sm min-h-[80px]" placeholder="Your review..." />
            <Button className="mt-2">Submit Review</Button>
          </div>
        </div>
      ),
    },
    {
      id: "comments",
      label: "Comments",
      content: (
        <div className="space-y-4">
          <div className="border-b pb-4">
            <p className="font-medium mb-1">User123</p>
            <p className="text-gray-600 text-sm">Any discount for bulk order?</p>
          </div>
          <div className="pt-4">
            <h4 className="font-semibold mb-2">Add a comment</h4>
            <textarea className="w-full border rounded p-2 text-sm min-h-[80px]" placeholder="Your comment..." />
            <Button className="mt-2">Post Comment</Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-primary">Home</Link> / <Link href="/categories" className="hover:text-primary">Categories</Link> / <span className="font-medium">{product.name}</span>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ImageGallery />
        <div>
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-full border ${isFavorite ? "bg-red-50 text-red-500 border-red-200" : "hover:bg-gray-100"}`}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
              </button>
              <button
                onClick={() => setIsWishlist(!isWishlist)}
                className={`p-2 rounded-full border ${isWishlist ? "bg-primary-50 text-primary border-primary-200" : "hover:bg-gray-100"}`}
              >
                <Bookmark className={`h-5 w-5 ${isWishlist ? "fill-current" : ""}`} />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 my-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`h-4 w-4 ${i <= Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="text-sm text-gray-600">{product.reviews} reviews</span>
          </div>
          <div className="flex items-center gap-2 my-4">
            <span className="text-2xl font-bold text-primary">${product.price}</span>
            <span className="text-gray-500 line-through">${product.oldPrice}</span>
            <span className="bg-green-500 text-white text-sm px-2 py-0.5 rounded">32% OFF</span>
          </div>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Stock */}
          <p className="mb-4">
            <span className="font-medium">Availability:</span>{" "}
            <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
              {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
            </span>
          </p>

          {/* Color variation */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Color:</label>
            <div className="flex gap-2">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`px-4 py-2 rounded border text-sm transition ${
                    selectedColor === c ? "border-primary bg-primary-50 text-primary" : "border-gray-300 hover:border-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Size variation */}
          <div className="mb-4">
            <label className="block font-medium mb-2">Size:</label>
            <div className="flex gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`w-10 h-10 rounded border text-sm font-medium transition ${
                    selectedSize === s ? "border-primary bg-primary text-white" : "border-gray-300 hover:border-primary"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <label className="text-sm">Quantity:</label>
            <Input type="number" defaultValue={1} min={1} max={product.stock} className="w-20" />
          </div>
          <div className="flex gap-3">
            <Button size="lg">Add to Cart</Button>
            <Button variant="outline" size="lg">Add to Wishlist</Button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t pt-8">
        <Tabs tabs={tabs} />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition">
                <PlaceholderImage width={400} height={250} text={p.name} className="w-full" />
                <CardContent className="p-4">
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-primary font-bold">${p.price}</p>
                  <Button size="sm" className="w-full mt-2">Add to Cart</Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
