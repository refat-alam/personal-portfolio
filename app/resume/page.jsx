'use client'

import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

// About data
const about = {
  title: "About me",
  description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iure.",
  info: [
    {
      fieldnName: "Name",
      fieldValue: "Refat Alam"
    },
    {
      fieldnName: "Phone",
      fieldValue: "(+86) 13289385336"
    },
    {
      fieldnName: "Experience",
      fieldValue: "4+ Years"
    },
    {
      fieldnName: "Skype",
      fieldValue: "refat.yahoo"
    },
    {
      fieldnName: "Nationality",
      fieldValue: "Bangladeshi"
    },
    {
      fieldnName: "Email",
      fieldValue: "mrefatalam1@gmail.com"
    },
    {
      fieldnName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldnName: "Languages",
      fieldValue: "English, Bangla, Hindi, Urdu"
    },
  ]
}

// Experience
const experience = {
  icon: "/assets/resume/bagde.svg",
  title: "My Experiences",
  description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iure.",

  items: [
    {
      company: "Tech Solutions Inc",
      position: "Software Engineer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Development Firm",
      position: "Junior Deceloper",
      duration: "2017 - 2018",
    },
  ],
}

// Education
const education = {
  icon: "/assets/resume/bagde.svg",
  title: "My Education",
  description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iure.",

  items: [
    {
      institution: "Xi'an Jiaotong University",
      degree: "Master's in Computer Science",
      duration: "2023 - 2025",
    },
    {
      institution: "Yunnan University",
      degree: "Bachelor in Software Engineering",
      duration: "2019 - 2023",
    },
    {
      institution: "FreeCodeCamp",
      degree: "Front End Development Libraries",
      duration: "2023",
    },
    {
      institution: "FreeCodeCamp",
      degree: "Back End Development and APIs",
      duration: "2023",
    },
    {
      institution: "FreeCodeCamp",
      degree: "Responsive Web Design",
      duration: "2023",
    },
    {
      institution: "FreeCodeCamp",
      degree: "JavaScript Algorithms and Data Structures",
      duration: "2022",
    },
    {
      institution: "Google",
      degree: "Advanced_Google_Analytics - Certificate",
      duration: "2022",
    },
    {
      institution: "NVIDIA",
      degree: "Fundamentals of Deep Learning",
      duration: "2022",
    },
  ],
}

// Skills
const skills = {
  title: "My Skills",
  description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iure.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS"
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS"
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS"
    },
  ]
}


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay:2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                      })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-between items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                      })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
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
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldnName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume