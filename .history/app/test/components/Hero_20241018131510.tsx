interface PageProps {}

const Hero: React.FC<PageProps> = () => {
  return (
    <div className="grid grid-cols-3 px-4 bg-slate-300">
      <div className="col-span-2 min-h-[500px]">Left side</div>
      <div className="col-span-1"> right side</div>
    </div>
  );
};

export default Hero;
