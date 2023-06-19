'use client';

import { Icons } from '../icons';
import { Button } from '../ui/button';
import { SheetTrigger } from '../ui/sheet';

const MenuTrigger = () => {
  return (
    <SheetTrigger asChild className="md:hidden">
      <Button variant="ghost" size="sm" className="relative">
        <Icons.menu />
        <span className="sr-only">Toggle Menu</span>
      </Button>
    </SheetTrigger>
  );
};

export default MenuTrigger;
