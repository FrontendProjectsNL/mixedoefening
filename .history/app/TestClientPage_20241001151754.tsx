'use client';

import { useState } from 'react';

function TestClientPage() {
  const [isActive, setIsActive] = useState<boolean>(false);
  return <div onClick={() => alert('Hallo')}>TestClientPage</div>;
}
export default TestClientPage;
