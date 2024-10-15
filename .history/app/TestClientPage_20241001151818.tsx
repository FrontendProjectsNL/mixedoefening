'use client';

import { useState } from 'react';

function TestClientPage() {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div onClick={() => alert('Hallo')} className="cursor-pointer">
      TestClientPage
    </div>
  );
}
export default TestClientPage;
