import Image from "next/image";
import { memo } from "react";

interface IconButtonProps {
  icon: string;
  label: string;
  active?: boolean;
}
function IconButton({ icon, label, active = false, ...props }: IconButtonProps & React.ComponentProps<"button">) {
  return (
    <button
      className={`relative flex flex-col items-center p-2`}
      aria-label={label}
      aria-pressed={active} // Indicates the active state for assistive technologies
      {...props}
    >
      <div
        className={`transication-all relative flex flex-col items-center duration-300 ease-out after:absolute after:top-[60px] after:left-0 after:h-[2px] after:transition-all active:scale-[0.85] ${
          active ?
            "opacity-100 after:w-full after:bg-black"
          : "cursor-pointer opacity-60 hover:opacity-100 hover:after:w-full hover:after:bg-gray-300"
        }`}
      >
        <Image
          src={`/icons/${icon}.svg`}
          alt={label}
          aria-hidden="true"
          width={24}
          height={24}
          priority
        />
        <span
          className={`mt-2 text-xs leading-[16px] font-medium text-nowrap ${active ? "text-black" : "text-gray-700"}`}
        >
          {label}
        </span>
      </div>
    </button>
  );
}
export default memo(IconButton);
