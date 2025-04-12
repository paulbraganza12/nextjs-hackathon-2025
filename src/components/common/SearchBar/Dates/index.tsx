import { DatesProps } from './Dates';

export const Dates = ({ inputRef, onFocus, type }: DatesProps) => {
  return (
    <div>
      <div
        className="px-8 py-3 cursor-pointer"
        onClick={onFocus}>
        <div>
          <div className="text-xs font-semibold  ">Check {type}</div>
          <input
            ref={inputRef}
            className="max-w-[100px] border-0 shadow-none pl-0
            py-0 px-0 h-5
            focus-visible:outline-none focus-visible:ring-0 text-sm rounded-none  caret-transparent"
            placeholder="Add Dates"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};
