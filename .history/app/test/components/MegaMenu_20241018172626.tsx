// components/MegaMenu.tsx
import { useState } from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const MegaMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <ul className="flex space-x-6 p-4">
        {/* First Menu Item */}
        <li>
          <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Category 1</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="grid grid-cols-3 gap-4 p-6 bg-gray-100">
              <div>
                <h3 className="font-semibold mb-2">Subcategory 1</h3>
                <DropdownMenuItem asChild>
                  <Link href="/subcategory1/item1">Item 1</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/subcategory1/item2">Item 2</Link>
                </DropdownMenuItem>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Subcategory 2</h3>
                <DropdownMenuItem asChild>
                  <Link href="/subcategory2/item1">Item 1</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/subcategory2/item2">Item 2</Link>
                </DropdownMenuItem>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Subcategory 3</h3>
                <DropdownMenuItem asChild>
                  <Link href="/subcategory3/item1">Item 1</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/subcategory3/item2">Item 2</Link>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        {/* Add more categories similarly */}
      </ul>
    </nav>
  );
};

export default MegaMenu;
