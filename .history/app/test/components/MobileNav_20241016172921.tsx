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
        <SheetTrigger className="w-full">
          <Menu className="w-8 h-8 ml-auto m-4" />
        </SheetTrigger>

        <div className="w-full h-screen relative">
          <SheetContent className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl flex justify-center items-center h-[30%] overflow-hidden">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </div>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
