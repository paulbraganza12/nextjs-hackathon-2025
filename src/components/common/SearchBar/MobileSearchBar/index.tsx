export const MobileSearchBar = () => {
  return (
    <div className="flex md:hidden border border-gray-200 rounded-full shadow-lg bg-white w-full p-3 h-14 justify-center items-center">
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
      <p className="text-xs font-semibold ml-2.5">Start your search</p>
    </div>
  );
};
