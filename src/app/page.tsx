"use client";

import { CategoryBarFilter } from "@/components/layout/Navbar/CategoryBarFilter";

export default function Home() {
  return (
    <div>
      <CategoryBarFilter onCategorySelected={() => {}} />
    </div>
  );
}
