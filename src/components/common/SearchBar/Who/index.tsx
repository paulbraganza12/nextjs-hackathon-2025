import { SearchButton } from '../SearchButton';
import { WhoProps } from './Who';

export const Who = ({ onFocus, inputRef, enableSearchButton }: WhoProps) => {
  return (
    <div>
      <div
        className="px-8 py-3 cursor-pointer flex justify-between items-center relative"
        onClick={onFocus}>
        <div>
          <div className="text-xs font-semibold  ">Who</div>
          <input
            ref={inputRef}
            className="max-w-[218px] border-0 shadow-none pl-0
            py-0 px-0 h-5
            focus-visible:outline-none focus-visible:ring-0 text-sm rounded-none  caret-transparent"
            placeholder="Add guests"
            readOnly
          />
        </div>
        <div className=" absolute right-2 mt-[-3px]">
          <SearchButton isExpanded={enableSearchButton} />
        </div>
      </div>
    </div>
  );
};
