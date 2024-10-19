interface PageProps {}

const Hero: React.FC<PageProps> = () => {
  return (
    <div className="grid grid-cols-12 px-4">
      <p>Dit is hero page</p>
    </div>
  );
};

export default Hero;
