"use client";
import { DestinationDropdown } from "./DestinationDropdown";
import { Dates } from "./Dates";
import { Who } from "./Who";
import { MobileSearchBar } from "./MobileSearchBar";
import { SearchBarProps } from "./SearchBar";
import { TopNavBar } from "./TopNavBar";
import { InputItem } from "./InputItem";
import { Separator } from "./Seperator";
import { useInputFocus } from "./useInputFocus";

export const SearchBar = ({ isTop }: SearchBarProps) => {
  const { searchBarRef, focusedInput, setHoveredInput, handleFocus, activeInput, refs, isFocused } = useInputFocus();

  return (
    <>
      <div
        ref={searchBarRef}
        className={`hidden rounded-full border border-gray-200 shadow-sm md:flex ${isFocused ? "bg-gray-100" : "bg-white"}`}
      >
        {isTop ?
          <TopNavBar />
        : <>
            <InputItem
              inputName="where"
              activeInput={activeInput}
              focusedInput={focusedInput}
              setHoveredInput={setHoveredInput}
              onFocus={() => handleFocus("where")}
            >
              <DestinationDropdown
                isFocused={focusedInput === "where"}
                onFocus={() => handleFocus("where")}
                inputRef={refs.where}
              />
            </InputItem>

            <Separator hide={activeInput === "where" || activeInput === "checkin"} />

            <InputItem
              inputName="checkin"
              activeInput={activeInput}
              focusedInput={focusedInput}
              setHoveredInput={setHoveredInput}
              onFocus={() => handleFocus("checkin")}
            >
              <Dates
                inputRef={refs.checkin}
                type="in"
                onFocus={() => handleFocus("checkin")}
                isFocused={focusedInput === "checkin"}
              />
            </InputItem>

            <Separator hide={activeInput === "checkin" || activeInput === "checkout"} />

            <InputItem
              inputName="checkout"
              activeInput={activeInput}
              focusedInput={focusedInput}
              setHoveredInput={setHoveredInput}
              onFocus={() => handleFocus("checkout")}
            >
              <Dates
                inputRef={refs.checkout}
                type="out"
                onFocus={() => handleFocus("checkout")}
                isFocused={focusedInput === "checkout"}
              />
            </InputItem>

            <Separator hide={activeInput === "checkout" || activeInput === "checkwho"} />

            <InputItem
              inputName="checkwho"
              activeInput={activeInput}
              focusedInput={focusedInput}
              setHoveredInput={setHoveredInput}
              onFocus={() => handleFocus("checkwho")}
            >
              <Who
                inputRef={refs.checkwho}
                onFocus={() => handleFocus("checkwho")}
                isFocused={focusedInput === "checkwho"}
                enableSearchButton={isFocused}
              />
            </InputItem>
          </>
        }
      </div>

      <div className="mt-3 md:hidden">
        <MobileSearchBar />
      </div>
    </>
  );
};
