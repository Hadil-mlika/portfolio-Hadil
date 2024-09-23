import React from "react";
import { DiJava } from "react-icons/di";
import { FaDocker, FaReact } from "react-icons/fa";
import {
  SiAngular,
  SiGithub,
  SiJenkins,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiSpring,
} from "react-icons/si";

const ProjectCard = ({ title, main, img, techno, link }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80  bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={img} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-l md:text-l  leading-normal">{main}</p>
      <br />
      <h4 className="px-4 text-l md:text-l font-bold leading-normal">
        Techno :
      </h4>
      {techno === 1 && (
        <div className="flex justify-center gap-2">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiJava color="#5382A1" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiSpring color="#6DB33F" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#4DB33D" size={50} />
          </span>
        </div>
      )}

      {techno === 2 && (
        <div className="flex justify-center gap-2">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiAngular color="#DD0031" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiJava color="#5382A1" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiSpring color="#6DB33F" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#4DB33D" size={50} />
          </span>
        </div>
      )}

      {techno === 4 && (
        <div className="flex justify-center gap-2">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiJava color="#5382A1" size={50} />
          </span>
          <div className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiSpring color="#6DB33F" size={50} />
          </div>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#4479A1" size={50} />
          </span>
        </div>
      )}

      {techno === 3 && (
        <div className="flex justify-center gap-2">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiAngular color="#DD0031" size={50} />
          </span>
          <div className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNodedotjs color="#8CC84B" size={50} />
          </div>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#4479A1" size={50} />
          </span>
        </div>
      )}

      {techno === 5 && (
        <div className="flex justify-center gap-2">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaDocker color="#2496ED" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiJenkins color="#D24939" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiGithub color="white" size={50} /> {/* GitHub en blanc */}
          </span>
        </div>
      )}
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        {/* <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button> */}

        <button
          className=" flex justify-center md:mt-10 text-white 
        py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300
         hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
          onClick={() => (window.location.href = link)}
        >
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
