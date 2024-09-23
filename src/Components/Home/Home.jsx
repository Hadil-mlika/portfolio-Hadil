import React from "react";
import avatarImg from "../../assets/profile.png";
import TextChange from "../TextChange";
import { FaDocker, FaGit, FaGithub, FaPhp, FaReact } from "react-icons/fa";
import {
  SiAngular,
  SiGitlab,
  SiJavascript,
  SiJenkins,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiRedux,
  SiSpring,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          Software engineer || Full Stack Developer
        </p>
        <div className="flex justify-center ">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNextdotjs color="white" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiAngular color="#DD0031" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedux color="#764abc" size={50} />
          </span>
        </div>
        <div className="flex justify-center ">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiJava color="#5382A1" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiSpring color="#6DB33F" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPhp color="#8993BE" size={50} />
          </span>
        </div>
        {/* <button
          className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 
        md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </button> */}
        <div className="flex justify-center ">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#4479A1" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
        </div>

        <div className="flex justify-center ">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaDocker color="#2496ED" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGithub color="white" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiGitlab color="#FC6D26" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiJenkins color="#D24939" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPostgresql color="#336791" size={50} /> {/* Icône PostgreSQL */}
          </span>
        </div>
      </div>
      <div>
        <img
          className=""
          src={avatarImg}
          alt=""
          style={{ width: "80%", height: "auto", maxWidth: "500px" }}
        />
      </div>
    </div>
  );
};

export default Home;
