import BnbCard from "@/components/common/BnbCard";
import { CategoryBarFilter } from "@/components/layout/Navbar/CategoryBarFilter";
import { getRecommendedProperties } from "@/shared/data-access/http-properties-service";

export default async function Home() {
  const properties = await getRecommendedProperties();
  return (
    <div>
      <CategoryBarFilter />
      <div className="mt-5 grid grid-cols-1 gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
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
