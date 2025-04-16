"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { DestinationDropdown } from "./DestinationDropdown";
import { Dates } from "./Dates";
import { Who } from "./Who";
import { MobileSearchBar } from "./MobileSearchBar";
import { SearchBarProps } from "./SearchBar";
import { TopNavBar } from "./TopNavBar";

export const SearchBar = ({ isTop }: SearchBarProps) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {isTop ?
          <TopNavBar />
        : <>
            <div className={getItemClass("where")}>
              <DestinationDropdown
                isFocused={focusedInput === "where"}
                onFocus={() => handleFocus("where")}
                inputRef={whereRef}
              />
            </div>

            {focusedInput !== "where" && focusedInput !== "checkin" && <div className="my-auto h-6 w-px bg-gray-300" />}

            <div className={getItemClass("checkin")}>
              <Dates
                inputRef={checkInRef}
                type="in"
                onFocus={() => handleFocus("checkin")}
                isFocused={focusedInput === "checkin"}
              />
            </div>

            {focusedInput !== "checkin" && focusedInput !== "checkout" && (
              <div className="my-auto h-6 w-px bg-gray-300" />
            )}

            <div className={getItemClass("checkout")}>
              <Dates
                inputRef={checkOutRef}
                type="out"
                onFocus={() => handleFocus("checkout")}
                isFocused={focusedInput === "checkout"}
              />
            </div>

            {focusedInput !== "checkout" && focusedInput !== "checkwho" && (
              <div className="my-auto h-6 w-px bg-gray-300" />
            )}

            <div className={getItemClass("checkwho")}>
              <Who
                inputRef={checkWhoRef}
                onFocus={() => handleFocus("checkwho")}
                isFocused={focusedInput === "checkwho"}
                enableSearchButton={isFocused}
              />
            </div>
          </>
        }
      </div>
      <div className="mt-3 md:hidden">
        <MobileSearchBar />
      </div>
    </>
  );
};
