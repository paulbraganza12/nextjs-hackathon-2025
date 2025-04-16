import { SearchButton } from "../SearchButton";

export const TopNavBar = () => {
  return (
    <div className="items-center gap-4 rounded-full border border-gray-200 py-1 pr-1 pl-7 shadow-sm md:flex">
      <div className="flex items-center gap-4">
        <div className="cursor-pointer text-lg font-semibold">Anywhere</div>
        <div className="h-6 w-px bg-gray-300" />
        <div className="cursor-pointer text-lg font-semibold">Any week</div>
        <div className="h-6 w-px bg-gray-300" />
        <div className="cursor-pointer text-lg font-semibold">Add guest</div>
      </div>
      <div className="scale-[0.8]">
        <SearchButton isExpanded={false} />
      </div>
    </div>
  );
};
