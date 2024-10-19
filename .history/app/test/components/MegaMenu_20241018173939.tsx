'use client';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button variant="primary" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </Button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-50">
          <div className="grid grid-cols-3 gap-6 p-6">
            {/* Category 1 */}
            <div>
              <h3 className="font-bold text-lg">Category 1</h3>
              <ul>
                <li>
                  <a href="/link1" className="block py-2">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="/link2" className="block py-2">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="/link3" className="block py-2">
                    Link 3
                  </a>
                </li>
              </ul>
            </div>

            {/* Category 2 */}
            <div>
              <h3 className="font-bold text-lg">Category 2</h3>
              <ul>
                <li>
                  <a href="/link4" className="block py-2">
                    Link 4
                  </a>
                </li>
                <li>
                  <a href="/link5" className="block py-2">
                    Link 5
                  </a>
                </li>
                <li>
                  <a href="/link6" className="block py-2">
                    Link 6
                  </a>
                </li>
              </ul>
            </div>

            {/* Category 3 */}
            <div>
              <h3 className="font-bold text-lg">Category 3</h3>
              <ul>
                <li>
                  <a href="/link7" className="block py-2">
                    Link 7
                  </a>
                </li>
                <li>
                  <a href="/link8" className="block py-2">
                    Link 8
                  </a>
                </li>
                <li>
                  <a href="/link9" className="block py-2">
                    Link 9
                  </a>
                </li>
              </ul>
            </div>

            {/* Category 4 */}
            <div>
              <h3 className="font-bold text-lg">Category 4</h3>
              <ul>
                <li>
                  <a href="/link10" className="block py-2">
                    Link 10
                  </a>
                </li>
                <li>
                  <a href="/link11" className="block py-2">
                    Link 11
                  </a>
                </li>
                <li>
                  <a href="/link12" className="block py-2">
                    Link 12
                  </a>
                </li>
              </ul>
            </div>

            {/* Category 5 */}
            <div>
              <h3 className="font-bold text-lg">Category 5</h3>
              <ul>
                <li>
                  <a href="/link13" className="block py-2">
                    Link 13
                  </a>
                </li>
                <li>
                  <a href="/link14" className="block py-2">
                    Link 14
                  </a>
                </li>
                <li>
                  <a href="/link15" className="block py-2">
                    Link 15
                  </a>
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
