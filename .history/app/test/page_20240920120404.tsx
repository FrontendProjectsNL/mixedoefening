import Image from 'next/image';

const Masonry = () => {
  return (
    <div className="p-5 sm:p-8">
      <div className="rounded-md overflow-hidden relative">
        <Image src={`/featured/featured1.jpg`} width={500} height={500} />
      </div>
    </div>
  );
};
export default Masonry;
