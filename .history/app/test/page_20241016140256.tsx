'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouse = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-52">rafce test</div>

      {isMounted && <h1>{mousePosition.x}</h1>}
      <div className="cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out">
        <Image
          src="https://www.bdsm2day.nl/images/profiles/50/profile_img/14592381407301.jpeg"
          alt="alt"
          width={500}
          height={500}
          onMouseMove={(e) => handleMouse(e)}
        />
      </div>
    </div>
  );
};

export default Page;
