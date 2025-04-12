import { Input } from "@/components/ui";
import { DestinationDropdownProps } from "./DestinationDropdown";

export const DestinationDropdown = ({ isFocused, onFocus, inputRef }: DestinationDropdownProps) => {
  console.log(isFocused);

  return (
    <div>
      <div
        className="cursor-pointer px-8 py-3"
        onClick={onFocus}
      >
        <div>
          <div className="text-xs font-semibold">Where</div>
          <Input
            ref={inputRef}
            className="h-5 max-w-[218px] rounded-none border-0 px-0 py-0 pl-0 text-sm shadow-none focus-visible:ring-0 focus-visible:outline-none"
            placeholder="Search destinations"
          />
        </div>
      </div>
    </div>
  );
};
