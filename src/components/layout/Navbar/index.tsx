import { Container, Logo, SearchBar } from '@/components/common';
import { Tabs } from './Tabs';
import { RightSection } from './RightSection';
import './index.css';

export const Navbar = () => {
  return (
    <header className="min-h-[168px] shadow-[0_1px_0_rgb(0_0_0_/_8%)]">
      <Container>
        <div className="h-20 grid items-center justify-between grid-areas-navbar">
          <div className="hidden md:block logo h-20 items-center justify-center">
            <Logo />
          </div>
          <div className="relative search-tabs">
            <div>
              <Tabs />
            </div>
            <div className="absolute left-1/2  transform -translate-x-1/2 mt-5">
              <SearchBar />
            </div>
          </div>
          <div className="hidden md:block profile">
            <RightSection />
          </div>
        </div>
      </Container>
    </header>
  );
};
