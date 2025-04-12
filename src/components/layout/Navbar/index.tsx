import { Container, Logo, SearchBar } from '@/components/common';
import { Tabs } from './Tabs';
import { RightSection } from './RightSection';
import './index.css';

export const Navbar = () => {
  return (
    <header className="md:min-h-[168px] md:shadow-[0_1px_0_rgb(0_0_0_/_8%)]">
      <Container>
        <div className="h-20 grid items-center justify-between grid-areas-navbar">
          <div className="hidden md:block logo h-20 items-center justify-center">
            <Logo hideOnMobile={true} />
          </div>
          <div className="hidden md:block search-tabs">
            <Tabs />
          </div>
          <div className="hidden md:block profile">
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
