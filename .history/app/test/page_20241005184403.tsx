import { useEffect } from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  useEffect(() => {
    window.location.href = 'https://www.google.nl/';
  }, []); // This ensures it only runs once

  return <div>Dit is the test page!</div>;
};

export default Page;
