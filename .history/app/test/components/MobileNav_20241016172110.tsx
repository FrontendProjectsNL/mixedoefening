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
    <nav className="w-screen h-screen">
      <Sheet>
        <SheetTrigger className="w-full">
          <Menu className="w-8 h-8 ml-auto m-4" />
        </SheetTrigger>

        <SheetContent className=" rounded-3xl flex justify-center items-center h-[30%] overflow-hidden">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
