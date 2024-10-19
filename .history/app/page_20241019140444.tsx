import Hero from './test/components/Hero';
import Section from './test/components/Section2';

export default function Home() {
  return (
    // <div className="max-w-7xl w-full  mx-auto">
    //   <Hero />
    //   <Section />
    //   <section className="p-8 h-[200vh]">
    //     <h1 className="text-3xl font-bold">Welcome to the Homepage</h1>
    //     <p>Scroll down to see the navbar shrink!</p>
    //   </section>
    // </div>
    <div>
      <div className="block -berry edge--bottom">
        <h1>Bottom Angled Edge</h1>
      </div>

      <div className="block -blue edge--bottom--reverse">
        <h1>Bottom Angled Edge</h1>
        <p>Reversed</p>
      </div>

      <div className="block -berry edge--top">
        <h1>Top Angled Edge</h1>
      </div>

      <div className="block -blue edge--top--reverse">
        <h1>Top Angled Edge</h1>
        <p>Reversed</p>
      </div>

      <div className="block -orange edge--both">
        <h1>Top & Bottom Angled Edges</h1>
      </div>

      <div className="block -green edge--both--reverse">
        <h1>Top & Bottom Angled Edges</h1>
        <p>Reversed</p>
      </div>
    </div>
  );
}
