import { useEffect } from 'react';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  useEffect(() => {
    window.location.href = 'https://www.google.nl/';
  }, []);
  return (
    <div>
      Dit is the test page!
      {}
    </div>
  );
};

export default Page;
