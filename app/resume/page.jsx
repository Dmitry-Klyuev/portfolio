"use client";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {ScrollArea} from "@/components/ui/scroll-area";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiUnrealengine,
  SiExpress,
  SiShadcnui,
} from "react-icons/si";
import {IoSchoolSharp} from "react-icons/io5";
import {DiMongodb} from "react-icons/di";
import {motion} from "framer-motion";


const about = {
  title: "About me",
  description:
    "BTech student passionate about full stack web development, data structures, algorithms, C++, C, Java, and Python programming languages. Eager to apply theoretical knowledge to practical projects and committed to continual learning and growth in the field of computer science.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jihed Mechi",
    },
    {
      fieldName: "Phone",
      fieldValue: "+216 99619052",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Tunisian",
    },
    {
      fieldName: "Email",
      fieldValue: "jihedmechi07@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Arabic,Francais,English",
    },
  ],
};

const education = {
  icon: <IoSchoolSharp/>,
  title: "My education",
  description: ''
};

const skills = {
  title: "My skills",
  description:
    "I have a diverse set of skills in full stack web development and programming. My expertise spans HTML5, CSS, JavaScript, and various frameworks and libraries including Node.js, Express.js, and React.js. Additionally, I am proficient in PHP, Laravel, and have experience with databases like MongoDB, MySQL and styling tools such as Tailwind CSS. I am also familiar with Next.js, ShadCN UI library",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "html 5",
    },
    {
      icon: <FaCss3/>,
      name: "css",
    },
    {
      icon: <FaJs/>,
      name: "Javascript",
    },
    {
      icon: <FaNodeJs/>,
      name: "NodeJs",
    },
    {
      icon: <SiExpress/>,
      name: "ExpressJs",
    },
    {
      icon: <DiMongodb/>,
      name: "MongoDb",
    },
    {
      icon: <FaReact/>,
      name: "ReactJs",
    },
    {
      icon: <SiNextdotjs/>,
      name: "Next.Js",
    },
    {
      icon: <SiShadcnui/>,
      name: "ShadCN",
    },
    {
      icon: <SiTailwindcss/>,
      name: "Tailwind css",
    },
  ],
};

export default function Resume() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 1.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-8 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger
                                className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>

                <div className="max-w-[600px] text-white/60 mx-auto xl:mx-0">

                  <p>
                    I believe that in the IT field, education never ends. My professional journey is about constant
                    development and pursuit of new knowledge.
                  </p>
                  <h2 className={'text-2xl text-white mt-4'}>Formal and Informal Education:</h2>
                  <ul className={'flex flex-col gap-4 mt-2'}>
                    <li>
                      - Completed numerous courses at leading online schools and educational platforms
                    </li>
                    <li>
                      - Study best practices and methodologies from industry experts worldwide
                    </li>
                    <li>
                      - Regularly participate in workshops and professional conferences
                    </li>
                  </ul>
                  <h2 className={'text-2xl text-white mt-4'}>Teaching Experience:</h2>
                  <div>
                    <ul className={'flex flex-col gap-4 mt-2'}>
                      <li>
                        - Share knowledge through lectures and masterclasses
                      </li>
                      <li>
                        - Mentor aspiring developers and help them grow professionally
                      </li>
                      <li>
                        - Create educational content and practical guides
                      </li>
                    </ul>
                  </div>
                  <h2 className={'text-2xl text-white mt-4'}>Learning Philosophy:</h2>

                  My approach is based on three principles:
                  <p> - Continuous Development- daily learning of new technologies and approaches</p>
                  <p> - Practical Application - immediately apply knowledge to real projects</p>
                  <p> - Knowledge Sharing - believe that the best way to solidify knowledge is to teach others</p>
                  <div>
                    Technologies change rapidly, and I take pride in keeping pace with these changes, constantly
                    expanding
                    my skill set and depth of understanding in web development.
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-3xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-2"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}