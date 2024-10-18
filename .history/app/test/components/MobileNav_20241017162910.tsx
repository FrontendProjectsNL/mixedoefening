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
import { Car, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

interface PageProps {}

const MobileNav: React.FC<PageProps> = () => {
  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // To handle closing animation
  const pathname = usePathname(); // Watch for changes in the path
  const router = useRouter(); // App Router navigation hook

  useEffect(() => {
    if (open) {
      // Trigger the closing animation when the pathname changes
      setIsClosing(true);

      // Close the sheet after a delay (adjust this value for slower animation)
      const closeTimeout = setTimeout(() => {
        setOpen(false);
        setIsClosing(false);
      }, 500); // 500ms delay for slower close

      // Cleanup the timeout if the pathname changes or component unmounts
      return () => clearTimeout(closeTimeout);
    }
  }, [pathname, open]);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Sheet</button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          className={`${isClosing ? 'transition-all duration-500' : ''}`} // Slow close effect
        >
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description of the sheet</SheetDescription>
          </SheetHeader>
          <p>Some content here...</p>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
