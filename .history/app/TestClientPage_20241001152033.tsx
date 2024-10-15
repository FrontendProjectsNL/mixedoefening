'use client';

import { useState } from 'react';

function TestClientPage() {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={`cursor-pointer ${
        isActive ? 'text-green-500' : 'text-red-500'
      }`}
    >
      TestClientPage
    </div>
  );
}
export default TestClientPage;
