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

interface PageProps {}

const Header: React.FC<PageProps> = () => {
  return (
    <div className="w-screen h-16  lg:w-[80%] lg:m-auto flex justify-center items-center">
      <Link href={'/'} className="mr-8">
        {' '}
        <Car className="w-7 h-7" />{' '}
      </Link>
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
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} `}
              >
                Documentation 1
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation 2
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation 3
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
  );
};

export default Header;
