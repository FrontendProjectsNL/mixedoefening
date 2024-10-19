import Hero from './test/components/Hero';
import Section from './test/components/Section2';

export default function Home() {
  return (
    <div className="max-w-7xl w-full  mx-auto">
      <Hero />
      <Section />
      <section className="p-8 h-[200vh]">
        <h1 className="text-3xl font-bold">Welcome to the Homepage</h1>
        <p>Scroll down to see the navbar shrink!</p>
      </section>
    </div>
  );
}
