"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface VerticalScrollContainerProps {
  children: React.ReactNode;
}

export default function VerticalScrollContainer({ children }: VerticalScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showPreviousButton, setShowPreviousButton] = useState(false);

  const updateButtonsVisibility = useCallback(() => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setShowPreviousButton(scrollLeft > 50);
    setShowNextButton(scrollLeft + clientWidth < scrollWidth - 50);
  }, []);

  const scrollLeft = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  }, []);

  const scrollRight = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => updateButtonsVisibility();

    updateButtonsVisibility();
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [updateButtonsVisibility]);

  return (
    <div className="relative mx-3 me-5 px-4">
      <div
        ref={containerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth whitespace-nowrap"
      >
        {children}
      </div>
      {showPreviousButton && (
        <div className="absolute top-1/2 left-0 h-full w-[30px] -translate-y-1/2 transform bg-white">
          <div
            onClick={scrollLeft}
            className="absolute top-1/2 left-0 -translate-y-1/2 transform cursor-pointer rounded-full border border-gray-300 bg-white p-1 transition-all duration-200 hover:scale-[1.1] hover:shadow-xl"
          >
            <ChevronLeft size={20} />
          </div>
        </div>
      )}
      {showNextButton && (
        <div className="absolute top-1/2 -right-[15px] h-full w-[30px] -translate-y-1/2 transform bg-white">
          <div
            onClick={scrollRight}
            className="absolute top-1/2 right-0 -translate-y-1/2 transform cursor-pointer rounded-full border border-gray-300 bg-white p-1 transition-all duration-200 hover:scale-[1.1] hover:shadow-xl"
          >
            <ChevronRight size={20} />
          </div>
        </div>
      )}
    </div>
  );
}
