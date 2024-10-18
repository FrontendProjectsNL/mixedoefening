'use client';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Car } from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import MobileNav from './MobileNav';
import { useRouter } from 'next/router';
import { cn } from '@/lib/utils';

interface PageProps {}

const Header: React.FC<PageProps> = () => {
  const router = useRouter();

  return (
    // <div className="w-screen h-16  lg:w-[80%] lg:m-auto flex justify-center items-center">
    <nav className="w-screen h-16  lg:m-auto flex justify-center items-center">
      <div className="sm:hidden">
        <MobileNav />
      </div>

      <div className="hidden md:flex justify-center items-center ">
        <NavigationMenu>
          <NavigationMenuList className="">
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
  className= className={clsx(
    navigationMenuTriggerStyle(),
    router.pathname === "/about" && "bg-blue-500 text-white"
  )}
>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <Button className="px-2 py-1 text-xs" variant={'outline'}>
            Singin
          </Button>
          <Button className="ml-4 px-2 py-1 text-xs hover:bg-slate-300 hover:text-black">
            Sign Up
          </Button>
        </NavigationMenu>
      </div>
    </nav>
    // </div>
  );
};

export default Header;
