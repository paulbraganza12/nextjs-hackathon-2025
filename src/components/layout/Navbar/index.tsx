import { Container, Logo, SearchBar } from "@/components/common";
import { Tabs } from "./Tabs";
import { RightSection } from "./RightSection";
import "./index.css";

export const Navbar = () => {
  return (
    <header className="md:min-h-[168px] md:shadow-[0_1px_0_rgb(0_0_0_/_8%)]">
      <Container>
        <div className="grid-areas-navbar grid h-20 items-center justify-between">
          <div className="logo hidden h-20 items-center justify-center md:block">
            <Logo hideOnMobile={true} />
          </div>
          <div className="search-tabs hidden md:block">
            <Tabs />
          </div>
          <div className="profile hidden md:block">
            <RightSection />
          </div>
          <div className="search w-full md:w-fit">
            <SearchBar />
          </div>
        </div>
      </Container>
    </header>
  );
};
