import { useRef, useState, useEffect, useCallback } from "react";

type InputName = "where" | "checkin" | "checkout" | "checkwho" | null;

export const useInputFocus = () => {
  const [focusedInput, setFocusedInput] = useState<InputName>(null);
  const [hoveredInput, setHoveredInput] = useState<InputName>(null);
  const activeInput = focusedInput || hoveredInput;

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

  return {
    searchBarRef,
    focusedInput,
    hoveredInput,
    setHoveredInput,
    handleFocus,
    activeInput,
    refs,
    isFocused: focusedInput !== null,
  };
};
