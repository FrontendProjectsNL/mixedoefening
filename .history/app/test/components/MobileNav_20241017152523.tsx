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
import { Car, Menu } from 'lucide-react';

interface PageProps {}

const MobileNav: React.FC<PageProps> = () => {
  return (
    <nav className="">
      <Sheet>
        <SheetTrigger className="w-screen">
          <Menu className="w-8 h-8 ml-auto m-4" />
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
            <div className="bg-green-200 w-3/4 p-2 rounded-xl cursor-pointer hover:bg-red-500">
              <NextLink href="/" passHref legacyBehavior>
                <a className="block w-full p-2 rounded-xl">Home</a>
              </NextLink>
            </div>

            <div className="bg-green-200 w-3/4 p-2 rounded-xl cursor-pointer">
              <Link href="/about">About</Link>
            </div>
            <div className="bg-green-200 w-3/4 p-2 rounded-xl cursor-pointer">
              <Link href="/services">Service</Link>
            </div>
            <div className="bg-green-200 w-3/4 p-2 rounded-xl cursor-pointer">
              <Link href="/price">Price</Link>
            </div>
            <div className="bg-green-200 w-3/4 p-2 rounded-xl cursor-pointer">
              <Link href="/blogtest">Blog</Link>
            </div>

            <div className="bg-green-200 w-3/4 p-2 rounded-xl cursor-pointer">
              <Link href="/">Contact</Link>
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
    </nav>
  );
};

export default MobileNav;
