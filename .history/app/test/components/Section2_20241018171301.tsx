import sketch from '../../../public/tech-icons/sketch.svg';
import canva from '../../../public/tech-icons/canva.svg';
import ai from '../../../public/tech-icons/ai.svg';
import figma from '../../../public/tech-icons/figma.svg';
import chatgpt from '../../../public/tech-icons/chatgpt.svg';
import cloud from '../../../public/tech-icons/creativecloud.svg';
import framer from '../../../public/tech-icons/framer.svg';
import github from '../../../public/tech-icons/github.svg';
import slack from '../../../public/tech-icons/slack.svg';
import discord from '../../../public/tech-icons/discord.svg';
import youtube from '../../../public/tech-icons/youtube.svg';
import chrome from '../../../public/tech-icons/chrome.svg';
import pr from '../../../public/tech-icons/pr.svg';
import ps from '../../../public/tech-icons/ps.svg';
import notion from '../../../public/tech-icons/notion.svg';
import micro from '../../../public/tech-icons/micro.svg';
import twitter from '../../../public/twitter.svg';
import insta from '../../../public/insta.svg';
import linkedin from '../../../public/linkedin.svg';
import Image from 'next/image';

interface SectionProps {}

const icons = [
  sketch,
  canva,
  ai,
  figma,
  chatgpt,
  cloud,
  framer,
  github,
  slack,
  discord,
  youtube,
  chrome,
  pr,
  ps,
  notion,
  micro,
];

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

      <div className="col-span-1 lg:col-span-2  rounded-2xl  flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4">
          <div className="bg-orange-200 md:p-8 p-4">
            <h2 className="text-3xl">Explore My Stack!</h2>
            <div className="flex flex-wrap gap-4">
              {icons.map((item) => (
                <Image src={item} alt={item} className="w-16 h-16" key={item} />
              ))}
            </div>
          </div>

          <div className="bg-orange-200 md:p-8 p-4">
            <h2 className="text-3xl">dit is een test</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio non
              quam quidem ipsa veniam, sequi vel, eligendi veritatis reiciendis
              debitis, dicta aperiam dolore! Eaque sit itaque esse asperiores
              placeat molestias?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
