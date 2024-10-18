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

        <SheetContent className="rounded-3xl  overflow-hidden">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>

          <div className="flex justify-center items-center gap-4 mt-24">
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
