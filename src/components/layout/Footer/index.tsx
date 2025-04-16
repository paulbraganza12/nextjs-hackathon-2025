import { Container } from "@/components/common";
import { Getaways } from "./Getaways";
import { FooterMenu } from "./FooterMenu";
import { FooterBottom } from "./FooterBottom";

export const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-100">
      <div>
        <Container className="2xl:container">
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
};
