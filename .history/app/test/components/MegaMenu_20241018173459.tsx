'use client';
// components/MegaMenu.js
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@shadcn/ui';

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Button onClick={toggleMenu} className="bg-gray-800 text-white">
        Menu
      </Button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-50">
          <div className="grid grid-cols-3 p-4 gap-4">
            <div>
              <h3 className="font-bold text-lg">Category 1</h3>
              <ul>
                <li>
                  <Link href="/link1">Link 1</Link>
                </li>
                <li>
                  <Link href="/link2">Link 2</Link>
                </li>
                <li>
                  <Link href="/link3">Link 3</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg">Category 2</h3>
              <ul>
                <li>
                  <Link href="/link4">Link 4</Link>
                </li>
                <li>
                  <Link href="/link5">Link 5</Link>
                </li>
                <li>
                  <Link href="/link6">Link 6</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg">Category 3</h3>
              <ul>
                <li>
                  <Link href="/link7">Link 7</Link>
                </li>
                <li>
                  <Link href="/link8">Link 8</Link>
                </li>
                <li>
                  <Link href="/link9">Link 9</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
