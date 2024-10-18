import { Button } from '@/components/ui/button';
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

          <nav className="flex flex-col justify-center items-center space-y-4">
            <div className="bg-green-200 w-full p-4">
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/">About</Link>
            </div>
            <div>
              <Link href="/">Service</Link>
            </div>
            <div>
              <Link href="/">Price</Link>
            </div>
            <div>
              <Link href="/">Contact</Link>
            </div>
          </nav>

          <div className="flex justify-center items-center gap-4">
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
