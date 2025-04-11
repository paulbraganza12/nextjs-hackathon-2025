import { SearchButtonProps } from './SearchButton';

export const SearchButton = ({ isExpanded }: SearchButtonProps) => {
  return (
    <button
      className={`
       ${isExpanded ? 'bg-[radial-gradient(circle_at_center,#FF385C_0%,#E61E4D_27.5%,#E31C5F_40%,#D70466_57.5%,#BD1E59_75%,#BD1E59_100%)]' : 'bg-primary'} text-white font-semibold
        rounded-full flex items-center justify-center
        transition-all duration-200 ease-in-out
        hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2
        h-12
        ${isExpanded ? 'px-3.5 py-3' : 'px-3.5 py-2'}
      `}>
      <svg
        className="w-5 h-5"
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
      {isExpanded && <span className="ml-2">Search</span>}
    </button>
  );
};
