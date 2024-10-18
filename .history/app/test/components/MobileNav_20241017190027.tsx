'use client';
import { Button } from '@/components/ui/button';
import NextLink from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link } from '@nextui-org/react';
import { Menu } from 'lucide-react';
import { useState } from 'react';

interface PageProps {}

const MobileNav: React.FC<PageProps> = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="">
      <div className="flex justify-between items-center px-4 py-2">
        {' '}
        {/* Added padding for better spacing */}
        <Link href="/" className="">
          <span className="text-xl">Home</span>
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="cursor-pointer">
            {' '}
            {/* Removed w-screen */}
            <Menu className="w-8 h-8" />
          </SheetTrigger>

          <SheetContent className="rounded-3xl">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>

            <nav className="mt-4 flex flex-col justify-center items-center space-y-1 font-semibold text-center">
              <div className="bg-green-200 w-3/4 p-2 rounded-xl cursor-pointer">
                <NextLink href="/" passHref legacyBehavior>
                  <a
                    className="block w-full p-2 rounded-xl"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </a>
                </NextLink>
              </div>

              <div className="bg-green-200 w-3/4 p-2 rounded-xl cursor-pointer">
                <Link href="/about" onClick={() => setOpen(false)}>
                  About
                </Link>
              </div>
              <div className="bg-green-200 w-3/4 p-2 rounded-xl cursor-pointer">
                <Link href="/services" onClick={() => setOpen(false)}>
                  Service
                </Link>
              </div>
              <div className="bg-green-200 w-3/4 p-2 rounded-xl cursor-pointer">
                <Link href="/price" onClick={() => setOpen(false)}>
                  Price
                </Link>
              </div>
              <div className="bg-green-200 w-3/4 p-2 rounded-xl cursor-pointer">
                <Link href="/blogtest" onClick={() => setOpen(false)}>
                  Blog
                </Link>
              </div>

              <div className="bg-green-200 w-3/4 p-2 rounded-xl cursor-pointer">
                <Link href="/" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </div>
            </nav>

            <div className="flex justify-center items-center gap-4 mt-8">
              <Button variant="outline" className="px-6">
                Signup
              </Button>
              <Button className="px-6">Signin</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobileNav;
