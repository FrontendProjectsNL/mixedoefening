'use client';

import { useState } from 'react';

function TestClientPage() {
  const [isActive, setIsActive] = useState<boolean>(false);
  return <div>TestClientPage</div>;
}
export default TestClientPage;
