"use client";
import { useState } from "react";
import Image from "next/image";
import { PiCode, PiEye } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

export const Progectss = [
  {
    name: "React-Blog",
    Tipe: "react",
    imagee: "/projects/react-blog.png",
    URL: "https://zain97z.github.io/React-Blog/",
    code: "https://github.com/Zain97z/React-Blog",
  },
  {
    name: "Sniper",
    Tipe: "static",
    imagee: "/projects/sniper.png",
    URL: "https://montagabalhamawy.github.io/Sniper/",
    code: "https://zain97z.github.io/Sniper/",
  },
  {
    name: "Klinder-Design",
    Tipe: "wordpress",
    imagee: "/projects/klinder-design.png",
    URL: "https://klinder-design.com/",
    code: "#",
  },
  {
    name: "Klinder",
    Tipe: "static",
    imagee: "/projects/klinder.png",
    URL: "https://zain97z.github.io/Klinder/",
    code: "https://github.com/Zain97z/Klinder",
  },
  {
    name: "X-O Game",
    Tipe: "static",
    imagee: "/projects/x-o.png",
    URL: "https://zain97z.github.io/X-O-Game/",
    code: "https://github.com/Zain97z/X-O-Game",
  },
  {
    name: "Notes",
    Tipe: "static",
    imagee: "/projects/note.png",
    URL: "https://zain97z.github.io/Notes/",
    code: "https://github.com/Zain97z/Notes",
  },
];

function Projects() {
  const [filterType, setFilterType] = useState("all");
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col justify-center gap-y-5 items-center px-3 mt-[-60px] mb-5 xl:mb-8 xl:mt-20"
    >
      <motion.div
        variants={fadeIn("down", "tween", 0.2, 1)}
        className="text-center"
      >
        <h1 className="font-500 mt-10 text-2xl text-white font-500 uppercase">
          Projects
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("down", "tween", 0.4, 1)}
        className="flex justify-center items-center xl:gap-x-6 xl:text-xl"
      >
        <p
          className={`text-accent cursor-pointer hover:bg-white/10 transition-all px-4 py-1 rounded-lg ${
            filterType === "all" && "font-black bg-white/10"
          } `}
          onClick={() => setFilterType("all")}
        >
          All
        </p>

        <p
          className={`text-accent cursor-pointer hover:bg-white/10 transition-all px-4 py-1 rounded-lg ${
            filterType === "next" && "font-bold bg-white/10"
          }`}
          onClick={() => setFilterType("next")}
        >
          Next
        </p>
        <p
          className={`text-accent cursor-pointer hover:bg-white/10 transition-all px-4 py-1 rounded-lg ${
            filterType === "react" && "font-bold bg-white/10"
          }`}
          onClick={() => setFilterType("react")}
        >
          React
        </p>
        <p
          className={`text-accent cursor-pointer hover:bg-white/10 transition-all px-4 py-1 rounded-lg ${
            filterType === "static" && "font-bold bg-white/10"
          }`}
          onClick={() => setFilterType("static")}
        >
          Static
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="grid grid-cols-2 xl:grid-cols-3 px-2 xl:px-0 gap-x-5 gap-y-7 xl:gap-x-12 xl:gap-y-10"
      >
        {Progectss.filter(
          (dd) => filterType === "all" || dd.Tipe === filterType
        ).map((dd, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center group"
          >
            <Image
              src={dd.imagee}
              width={250}
              height={100}
              alt=""
              className="rounded-lg"
            />
            <div className="flex justify-center items-center gap-5 xl:gap-10  absolute top-[20%] xl:top-[30%]">
              <Link
                href={dd.code}
                className="border-accent border-solid border-[2px] p-2  rounded-full hover:bg-white/30 hidden group-hover:block transition-all"
              >
                <PiCode className="text-accent font-black text-2xl " />
              </Link>
              <Link
                href={dd.URL}
                className="border-accent border-solid border-[2px] p-2 rounded-full hover:bg-white/30 hidden group-hover:block transition-all"
              >
                <PiEye className="text-accent font-black text-2xl " />
              </Link>
            </div>
            <p className="mt-2 ">{dd.name}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
