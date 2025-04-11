import { Input } from '@/components/ui';
import { DestinationDropdownProps } from './DestinationDropdown';

export const DestinationDropdown = ({ isFocused, onFocus, inputRef }: DestinationDropdownProps) => {
  return (
    <div>
      <div
        className="px-8 py-3 cursor-pointer"
        onClick={onFocus}>
        <div>
          <div className="text-xs font-semibold ">Where</div>
          <Input
            ref={inputRef}
            className="w-[218px] border-0 shadow-none pl-0
            py-0 px-0 h-5
            focus-visible:outline-none focus-visible:ring-0 text-sm rounded-none"
            placeholder="Search destinations"
          />
        </div>
      </div>
    </div>
  );
};
