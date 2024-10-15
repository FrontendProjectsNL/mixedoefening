import Image from 'next/image';

const Masonry = () => {
  return (
    <div className="p-5 sm:p-8">
      {[...Array(15)].map((_, i) => (
        <div className="rounded-md overflow-hidden relative" key={i}>
          <Image
            src={`/featured/featured${i + 1}.jpg`}
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
};
export default Masonry;
