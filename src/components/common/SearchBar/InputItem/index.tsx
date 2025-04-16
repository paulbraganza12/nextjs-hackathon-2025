import React from "react";
import { InputItemProps } from "./InputItem.d";

export const InputItem: React.FC<InputItemProps> = ({
  inputName,
  // activeInput,
  focusedInput,
  setHoveredInput,
  onFocus,
  children,
}) => {
  const isFocused = focusedInput === inputName;
  const baseClasses = !isFocused ? "hover:bg-gray-100" : "";
  const focusClass = isFocused ? "shadow-md bg-white border border-gray-300" : "";
  const itemClass =
    `max-h-[66px] border border-transparent rounded-full cursor-pointer ${baseClasses} ${focusClass}`.trim();

  return (
    <div
      className={itemClass}
      onMouseEnter={() => setHoveredInput(inputName)}
      onMouseLeave={() => setHoveredInput(null)}
      onClick={onFocus}
    >
      {children}
    </div>
  );
};
