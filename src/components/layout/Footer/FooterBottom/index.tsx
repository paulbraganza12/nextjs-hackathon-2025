import { Container } from '@/components/common';
import Image from 'next/image';

export const FooterBottom = () => {
  return (
    <div className="border-t border-gray-300 mt-10 py-6 text-sm text-gray-600">
<Container className='flex justify-between'>        
        <div className="flex  flex-col items-start ">
          <p>© 2025 Airbnb, Inc.</p>
          <ul className="flex flex-wrap gap-4 text-foreground">
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
            <li><a href="#" className="hover:underline">UK Modern Slavery Act</a></li>
            <li><a href="#" className="hover:underline">Company details</a></li>
            <li><a href="#" className="hover:underline">Airbnb UK Limited S.172 Statement</a></li>
            <li><a href="#" className="hover:underline">Airbnb Payments UK Limited S.172 Statement</a></li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          
          <div className="flex items-center gap-2 hover:underline cursor-pointer">
            <Image
              src="/icons/globe.svg"
              alt="Language"
              width={16}
              height={16}
            />
            <span>English (GB)</span>
          </div>

          <div className="flex items-center gap-1 hover:underline cursor-pointer">
            <span>£</span>
            <span>GBP</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook">
              <Image
                src="/logos/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
              />
            </a>
            <a href="#" aria-label="X (Twitter)">
              <Image
                src="/logos/x.svg"
                alt="X"
                width={20}
                height={20}
              />
            </a>
            <a href="#" aria-label="Instagram">
              <Image
                src="/logos/insta.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
        </Container>
    </div>
  );
};
