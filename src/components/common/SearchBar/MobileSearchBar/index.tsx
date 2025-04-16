export const MobileSearchBar = () => {
  return (
    <div className="flex h-14 w-full items-center justify-center rounded-full border border-gray-200 bg-white p-3 shadow-md md:hidden">
      <svg
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
      <p className="ml-2.5 text-xs font-semibold">Start your search</p>
    </div>
  );
};
