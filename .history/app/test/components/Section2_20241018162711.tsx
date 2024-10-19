interface SectionProps {}

const Section: React.FC<SectionProps> = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  rounded-2xl min-h-[400px] mt-4">
      <div className="col-span-1 bg-orange-200 rounded-2xl  md:p-8 p-4">
        <p>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad
          eveniet nulla quas eligendi in totam nihil, dicta vitae, qui, impedit
          delectus amet illo exercitationem pariatur natus necessitatibus libero
          ex?
        </p>
      </div>

      <div className="col-span-1 lg:col-span-2 bg-orange-200 rounded-2xl md:p-8 p-4">
        <h2 className="text-3xl">dit is een test</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non quam
          quidem ipsa veniam, sequi vel, eligendi veritatis reiciendis debitis,
          dicta aperiam dolore! Eaque sit itaque esse asperiores placeat
          molestias?
        </p>
      </div>
    </div>
  );
};

export default Section;
