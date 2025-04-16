import { Container } from '@/components/common';
import { Getaways } from './Getaways';
import { FooterMenu } from './FooterMenu';
import { FooterBottom } from './FooterBottom';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-20">
      <div>
        <Container>
          <div>
            <Getaways />
          </div>
          <div>
          <FooterMenu />
          </div>
        </Container>
          <div>
            <FooterBottom />
          </div>
      </div>
    </footer>
  );
}