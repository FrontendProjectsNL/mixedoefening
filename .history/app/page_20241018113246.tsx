import Image from 'next/image';
import { useState } from 'react';
import { Roboto } from 'next/font/google';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-roboto">
      <div className="z-10 w-full  max-w-5xl items-center justify-between font-mono text-sm lg:flex lg:flex-col lg:text-2xl">
        <p className="">Dit is een test!</p>
      </div>
    </main>
  );
}
