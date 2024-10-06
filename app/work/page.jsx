"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    catagory: "Frontend",
    title: "Project 1",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iure.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    catagory: "Fullstack",
    title: "Project 2",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iure.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    catagory: "Frontend",
    title: "Project 3",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, iure.",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              {/* outline num */}
              <div className="text-8xl leading-none text-transparent text-outline font-extrabold">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px]">{project.catagory} project</h2>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
