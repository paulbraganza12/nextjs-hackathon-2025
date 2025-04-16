"use client";

import { Container, Logo, SearchBar } from "@/components/common";
import { Tabs } from "./Tabs";
import { RightSection } from "./RightSection";
import "./index.css";
import { useScrollTrigger } from "@/hooks";

export const Navbar = () => {
  const scrolledUp = useScrollTrigger(20);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolledUp ? "md:min-h-[150px]" : "md:min-h-[168px]"
      } md:shadow-[0_1px_0_rgb(0_0_0_/_8%)]`}
    >
      <Container>
        <div className="grid-areas-navbar grid h-20 items-center justify-between">
          <div className="logo hidden h-20 items-center justify-center md:block">
            <Logo hideOnMobile={true} />
          </div>
          <div
            className={`search-tabs hidden transition-all duration-300 md:block ${
              scrolledUp ? "pointer-events-none -translate-y-4 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <Tabs />
          </div>
          <div className="profile hidden md:block">
            <RightSection />
          </div>
          <div
            className={`search w-full transition-all duration-300 md:w-fit ${
              scrolledUp ? "scale-80 md:translate-y-[-70px]" : "md:translate-y-0"
            }`}
          >
            <SearchBar />
          </div>
        </div>
      </Container>
    </header>
  );
};
