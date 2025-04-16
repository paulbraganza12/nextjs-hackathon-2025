import { SearchButton } from "../SearchButton";
import { WhoProps } from "./Who";

export const Who = ({ onFocus, inputRef, enableSearchButton }: WhoProps) => {
  return (
    <div>
      <div
        className="relative flex cursor-pointer items-center justify-between px-8 py-3"
        onClick={onFocus}
      >
        <div>
          <div className="text-xs font-semibold">Who</div>
          <input
            ref={inputRef}
            className="h-5 max-w-[218px] rounded-none border-0 px-0 py-0 pl-0 text-sm caret-transparent shadow-none focus-visible:ring-0 focus-visible:outline-none"
            placeholder="Add guests"
            readOnly
          />
        </div>
        <div className="absolute right-2 mt-[-3px]">
          <SearchButton isExpanded={enableSearchButton} />
        </div>
      </div>
    </div>
  );
};
