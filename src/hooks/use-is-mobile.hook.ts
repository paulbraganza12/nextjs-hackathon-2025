import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handleResize = () => setIsMobile(mediaQuery.matches);

    // Set initial value
    handleResize();

    // Add event listener
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup event listener
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [breakpoint]);

  return isMobile;
}
