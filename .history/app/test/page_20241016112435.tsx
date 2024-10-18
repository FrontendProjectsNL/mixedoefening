'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const handleMouse = (e) => {};
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-52">rafce test</div>
      <div className="cursor-pointer">
        <Image
          src="https://www.bdsm2day.nl/images/profiles/50/profile_img/14592381407301.jpeg"
          alt="alt"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Page;
