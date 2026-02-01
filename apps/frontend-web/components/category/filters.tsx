"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const brands = ["Brand A", "Brand B", "Brand C", "Brand D"];
const genders = ["Men", "Women", "Unisex", "Kids"];
const preferences = ["Eco-Friendly", "Premium", "Budget", "Organic"];

export function CategoryFilters() {
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedPrefs, setSelectedPrefs] = useState<string[]>([]);

  const toggle = (arr: string[], set: (v: string[]) => void, val: string) => {
    if (arr.includes(val)) set(arr.filter((x) => x !== val));
    else set([...arr, val]);
  };

  return (
    <aside className="w-64 flex-shrink-0 space-y-6">
      <div className="bg-white rounded-lg border p-4">
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
            className="w-full border rounded px-2 py-1.5 text-sm"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            className="w-full border rounded px-2 py-1.5 text-sm"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg border p-4">
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" /> Electronics
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" /> Fashion
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" /> Home & Garden
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" /> Sports
          </label>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-4">
        <h3 className="font-semibold mb-3">Brand</h3>
        <div className="space-y-2 text-sm">
          {brands.map((b) => (
            <label key={b} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedBrands.includes(b)}
                onChange={() => toggle(selectedBrands, setSelectedBrands, b)}
              />
              {b}
            </label>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border p-4">
        <h3 className="font-semibold mb-3">Gender</h3>
        <div className="space-y-2 text-sm">
          {genders.map((g) => (
            <label key={g} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedGenders.includes(g)}
                onChange={() => toggle(selectedGenders, setSelectedGenders, g)}
              />
              {g}
            </label>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border p-4">
        <h3 className="font-semibold mb-3">Preference</h3>
        <div className="space-y-2 text-sm">
          {preferences.map((p) => (
            <label key={p} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedPrefs.includes(p)}
                onChange={() => toggle(selectedPrefs, setSelectedPrefs, p)}
              />
              {p}
            </label>
          ))}
        </div>
      </div>

      <Button variant="outline" className="w-full">Clear Filters</Button>
    </aside>
  );
}
