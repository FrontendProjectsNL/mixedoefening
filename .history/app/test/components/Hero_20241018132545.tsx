import '../../../public/me.jpeg';

interface PageProps {}

const Hero: React.FC<PageProps> = () => {
  return (
    <div className="grid grid-cols-3 px-4 gap-4">
      <div className="col-span-1 lg:col-span-2 p-8  min-h-[500px] bg-slate-300 rounded-xl">
        Left side
      </div>
      <div className="col-span-1 bg-slate-300"> right side</div>
      <Image src="src" alt="alt" fill />
    </div>
  );
};

export default Hero;
