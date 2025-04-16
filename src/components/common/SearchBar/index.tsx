"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { DestinationDropdown } from "./DestinationDropdown";
import { Dates } from "./Dates";
import { Who } from "./Who";
import { MobileSearchBar } from "./MobileSearchBar";

export const SearchBar = () => {
  type InputName = "where" | "checkin" | "checkout" | "checkwho" | null;

  const [focusedInput, setFocusedInput] = useState<InputName>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  const whereRef = useRef<HTMLInputElement>(null!);
  const checkInRef = useRef<HTMLInputElement>(null!);
  const checkOutRef = useRef<HTMLInputElement>(null!);
  const checkWhoRef = useRef<HTMLInputElement>(null!);

  const refs: Record<string, React.RefObject<HTMLInputElement>> = {
    where: whereRef,
    checkin: checkInRef,
    checkout: checkOutRef,
    checkwho: checkWhoRef,
  };

  const handleFocus = useCallback((inputName: InputName) => {
    setFocusedInput(inputName);
    if (inputName && refs[inputName]?.current) {
      refs[inputName].current.focus();
    }
  }, []);

  const handleBlur = useCallback(() => {
    setFocusedInput(null);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        handleBlur();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleBlur]);

  const getItemClass = (inputName: InputName) => {
    const baseClasses = focusedInput !== inputName ? "hover:bg-gray-100" : "";
    const focusClass = focusedInput === inputName ? "shadow-md bg-white border border-gray-300" : "";
    return `max-h-[66px] border border-transparent ${baseClasses} rounded-full cursor-pointer ${focusClass}`.trim();
  };

  const isFocused = focusedInput !== null;

  return (
    <>
      <div
        ref={searchBarRef}
        className={`hidden rounded-full border border-gray-200 shadow-sm md:flex ${isFocused ? "bg-gray-100" : "bg-white"}`}
      >
        <div className={getItemClass("where")}>
          <DestinationDropdown
            isFocused={focusedInput === "where"}
            onFocus={() => handleFocus("where")}
            inputRef={whereRef}
          />
        </div>
        <div className={getItemClass("checkin")}>
          <Dates
            inputRef={checkInRef}
            type="in"
            onFocus={() => handleFocus("checkin")}
            isFocused={focusedInput === "checkin"}
          />
        </div>
        <div className={getItemClass("checkout")}>
          <Dates
            inputRef={checkOutRef}
            type="out"
            onFocus={() => handleFocus("checkout")}
            isFocused={focusedInput === "checkout"}
          />
        </div>
        <div className={getItemClass("checkwho")}>
          <Who
            inputRef={checkWhoRef}
            onFocus={() => handleFocus("checkwho")}
            isFocused={focusedInput === "checkwho"}
            enableSearchButton={isFocused}
          />
        </div>
      </div>
      <div className="md:hidden mt-3">
        <MobileSearchBar />
      </div>
    </>
  );
};
