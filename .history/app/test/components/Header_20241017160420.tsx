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
import { useRouter } from 'next/navigation'; // App Router compatible router
import clsx from 'clsx';
import MobileNav from './MobileNav';

const Header: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Ensure the component is mounted on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything that depends on `useRouter` until the client-side has mounted
  if (!mounted) {
    return null; // Optionally, render a fallback or spinner here if needed
  }

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
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehav
