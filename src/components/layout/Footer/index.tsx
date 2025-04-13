import { Container } from '@/components/common';
import { Getaways } from './Getaways';

export const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div>
        <Container>
          <div>
            <Getaways />
          </div>
        </Container>
      </div>
    </footer>
  );
}