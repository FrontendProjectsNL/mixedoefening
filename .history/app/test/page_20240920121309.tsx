import Image from 'next/image';

const Masonry = () => {
  return (
    <div className="p-5 sm:p-8">
      <div>
        {[...Array(15)].map((_, i) => (
          <div className="rounded-md overflow-hidden relative" key={i}>
            <img
              src={`/featured/featured${i + 1}.jpg`}
              //   src={`/featured/featured1.jpg`}
              //   width={500}
              //   height={500}
              alt="featured image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Masonry;
