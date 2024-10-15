interface PageProps {}

const Page: React.FC<PageProps> = () => {
  return (
    <div>
      Dit is the test page!
      {(window.location.href = 'https://www.google.nl/')}
    </div>
  );
};

export default Page;
