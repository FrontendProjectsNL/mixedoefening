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
      <div className="parallax h-[100vh] flex justify-center items-center text-white text-4xl font-bold">
        Parallax Background
      </div>
      <section className="p-8 h-[200vh] bg-gray-100">
        <h1 className="text-3xl font-bold">
          Scroll Down to See the Parallax Effect
        </h1>
        <p className="mt-4">
          This section is scrollable, and the background image will move at a
          different speed.
        </p>
      </section>
    </div>
  );
}
