import Image from 'next/image';

interface PageProps {}

const Page: React.FC<PageProps> = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-52">rafce test</div>
      <Image
        src="https://www.bdsm2day.nl/images/profiles/50/profile_img/14592381407301.jpeg"
        alt="alt"
        // width={500}
        // height={500}
        cover
      />
    </div>
  );
};

export default Page;
