import Image from 'next/image';

const Masonry = () => {
  return (
    <div className="p-5 sm:p-8">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [&>div:not(:first-child)]:mt-8">
        {[...Array(15)].map((_, i) => (
          <div className="rounded-md overflow-hidden relative" key={i}>
            <Image
              src={`/featured/featured${i + 1}.jpg`}
              width={500}
              height={500}
              alt="featured image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Masonry;
