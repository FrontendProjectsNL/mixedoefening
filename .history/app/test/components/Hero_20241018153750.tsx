import Image from 'next/image';
import me from '../../../public/me.jpeg';
import Link from 'next/link';

interface PageProps {}

const Hero: React.FC<PageProps> = () => {
  return (
    <div className="grid grid-cols-3 px-4 gap-4">
      <div className="col-span-1 lg:col-span-2 p-8  min-h-[500px] bg-slate-300 rounded-2xl">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            architecto minus distinctio. Incidunt dolorem quisquam
            necessitatibus aspernatur voluptates voluptatum, voluptate dolor
            modi tempore nobis, odio ea vitae quis velit recusandae.
          </p>
        </div>

        <Link
          className="mt-auto px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
          href="/download"
        >
          Download CV
        </Link>
      </div>

      <Image
        src={me}
        alt="alt"
        className="col-span-1 h-[500px] rounded-2xl"
        priority
      />
    </div>
  );
};

export default Hero;
