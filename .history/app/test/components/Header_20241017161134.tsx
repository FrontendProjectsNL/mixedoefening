'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Ensure you're using next/navigation for the App Router
import MobileNav from './MobileNav';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Ensure the component is mounted on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="w-screen h-16 lg:m-auto flex justify-center items-center">
      <div className="sm:hidden">
        <MobileNav />
      </div>

      <div className="hidden md:flex justify-center items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    mounted &&
                      pathname === '/about' &&
                      '!bg-blue-500 !text-white'
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    mounted &&
                      pathname === '/services' &&
                      '!bg-red-500 !text-white'
                  )}
                >
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    mounted &&
                      pathname === '/contact' &&
                      '!bg-blue-500 !text-white'
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <Button className="px-2 py-1 text-xs" variant={'outline'}>
            Signin
          </Button>
          <Button className="ml-4 px-2 py-1 text-xs hover:bg-slate-300 hover:text-black">
            Sign Up
          </Button>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Header;
