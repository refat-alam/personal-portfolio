"use client"

import Link from "next/link"
import { BsArrowDownRight } from "react-icons/bs"
import { motion } from "framer-motion"


const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    href: "",
  },
  {
    num: "03",
    title: "Software Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    href: "",
  },
  {
    num: "04",
    title: "Ai Integration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    href: "",
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity: 0}} 
          animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return <div  key={index} className="flex flex-1 flex-col gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-semibold text-outline text-transparent group-hover:text-outline-hover transition-all duration-800">{service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-800 flex justify-center items-center hover:rotate-45">
                  <BsArrowDownRight className="text-3xl text-primary"/>
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-800">{service.title}</h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="w-full h-1 bg-accent rounded-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services