import BnbCard from "@/components/common/BnbCard";
import { CategoryBarFilter } from "@/components/layout/Navbar/CategoryBarFilter";
import { getRecommendedProperties } from "@/shared/data-access/http-properties-service";

export default async function Home() {
  const properties = await getRecommendedProperties();
  return (
    <div className="px-5">
      <CategoryBarFilter />
      <div className="grid grid-cols-2 gap-6 gap-y-8 px-5 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {properties.map((item) => {
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
