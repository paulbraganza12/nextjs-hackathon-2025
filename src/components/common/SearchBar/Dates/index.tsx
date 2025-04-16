import { DatesProps } from "./Dates";

export const Dates = ({ inputRef, onFocus, type }: DatesProps) => {
  return (
    <div>
      <div
        className="cursor-pointer px-8 py-3"
        onClick={onFocus}
      >
        <div>
          <div className="text-xs font-semibold">Check {type}</div>
          <input
            ref={inputRef}
            className="h-5 max-w-[100px] rounded-none border-0 px-0 py-0 pl-0 text-sm caret-transparent shadow-none focus-visible:ring-0 focus-visible:outline-none"
            placeholder="Add Dates"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};
