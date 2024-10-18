import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link } from '@nextui-org/react';
import { Car } from 'lucide-react';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  return (
    <nav>
      <div className="cursor-pointer">
        <Link href={'/'} className="mr-16 flex gap-2">
          {' '}
          <Car className="w-7 h-7" />{' '}
          <span className=" font-semibold">Home</span>
        </Link>
      </div>

      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
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

export default Page;
