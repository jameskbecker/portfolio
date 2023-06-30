import { siteConfig } from '@/config/site';

import ThemeToggle from '../ThemeToggle';
import MobileMenu from './MobileMenu';
import { NavigationMenu } from './NavigationMenu';

const NavigationBar = () => (
  <nav className="sticky top-0 z-40 w-full border-b border-muted-border bg-background">
    <div className="container flex h-16 items-center space-x-4 sm:justify-between">
      <NavigationMenu items={siteConfig.mainNav} />
      <MobileMenu items={siteConfig.mainNav} />
      <div className="hidden w-[200px] items-center justify-end space-x-4 md:flex">
        <div className="hidden items-center space-x-1 md:flex">
          <ThemeToggle />
        </div>
      </div>
    </div>
  </nav>
);

export default NavigationBar;
