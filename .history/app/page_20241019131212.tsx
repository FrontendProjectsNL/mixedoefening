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
      <section className="parallax-one flex items-center justify-center text-white">
        <h1 className="text-5xl">Welcome to Parallax 1</h1>
      </section>

      <section className="h-screen bg-gray-800 flex items-center justify-center text-white">
        <p className="text-3xl">Normal content between parallax sections</p>
      </section>

      <section className="parallax-two flex items-center justify-center text-white">
        <h1 className="text-5xl">Welcome to Parallax 2</h1>
      </section>

      <section className="h-screen bg-gray-800 flex items-center justify-center text-white">
        <p className="text-3xl">More normal content here</p>
      </section>

      <section className="parallax-three flex items-center justify-center text-white">
        <h1 className="text-5xl">Welcome to Parallax 3</h1>
      </section>
    </div>
  );
}
