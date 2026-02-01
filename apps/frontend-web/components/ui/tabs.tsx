"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);

  return (
    <div>
      <div className="flex border-b gap-4">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={cn(
              "py-3 px-4 font-medium border-b-2 -mb-px transition",
              active === t.id
                ? "border-primary text-primary"
                : "border-transparent text-gray-600 hover:text-gray-900"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {tabs.find((t) => t.id === active)?.content}
      </div>
    </div>
  );
}
