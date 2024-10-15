import Image from 'next/image';
import { useState } from 'react';
import TestClientPage from './TestClientPage';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full  max-w-5xl items-center justify-between font-mono text-sm lg:flex lg:flex-col lg:text-2xl">
        <p>Dit is een test!</p>
        <TestClientPage />
      </div>
    </main>
  );
}
