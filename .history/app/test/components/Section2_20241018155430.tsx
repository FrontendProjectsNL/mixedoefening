interface SectionProps {}

const Section: React.FC<SectionProps> = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 px-4 md:px-8">
      <p>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ad
        eveniet nulla quas eligendi in totam nihil, dicta vitae, qui, impedit
        delectus amet illo exercitationem pariatur natus necessitatibus libero
        ex?
      </p>
    </div>
  );
};

export default Section;
