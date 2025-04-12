"use client";

import BnbCard from "@/components/common/BnbCard";
import { CategoryBarFilter } from "@/components/layout/Navbar/CategoryBarFilter";
import { propertyData } from "@/lib/data/property.data";

export default function Home() {
  return (
    <div className="px-5">
      <CategoryBarFilter onCategorySelected={() => {}} />
      <div className="grid grid-cols-2 gap-6 gap-y-8 px-5 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {propertyData.map((item) => {
          return (
            <BnbCard
              key={item.id}
              property={item}
            />
          );
        })}
      </div>
    </div>
  );
}
