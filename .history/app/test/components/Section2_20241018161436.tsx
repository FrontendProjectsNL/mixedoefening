interface SectionProps {}

const Section: React.FC<SectionProps> = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  rounded-2xl min-h-[400px] mt-4">
      <div className="col-span-1 bg-orange-200 rounded-2xl px-4 md:px-8">
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad
          eveniet nulla quas eligendi in totam nihil, dicta vitae, qui, impedit
          delectus amet illo exercitationem pariatur natus necessitatibus libero
          ex?
        </p>
      </div>

      <div className="col-span-1 lg:col-span-2 bg-orange-200 rounded-2xl px-4 md:px-8">
        <h2 className="text-3xl">dit is een test</h2>
      </div>
    </div>
  );
};

export default Section;
