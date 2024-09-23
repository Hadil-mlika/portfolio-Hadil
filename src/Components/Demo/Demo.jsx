"use client";

import { Carousel } from "flowbite-react";
import React, { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import decade from "../../assets/decade.jpg";
import relead from "../../assets/relead.png";

import divalogo from "../../assets/divalogo.png";

import {
  FaCss3,
  FaDocker,
  FaGit,
  FaHtml5,
  FaJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import {
  SiAngular,
  SiJenkins,
  SiMagento,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiRedux,
  SiSpring,
} from "react-icons/si";
import { GiGemini } from "react-icons/gi";
import { DiJava } from "react-icons/di";

const Demo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpenModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };
  return (
    <>
      <div id="Exp" className="p-10 md:p-24 text-white ">
        <h1 className="text-2xl md:text-4xl text-white font-bold">
          Expériences Professionnelles
        </h1>
      </div>
      <div className=" w-full h-full h-100 sm:h-80 xl:h-80 2xl:h-96">
        <Carousel className="rounded-xl h-full w-full">
          <div className="relative h-full w-full">
            <img
              src={decade}
              alt="image 1"
              className=" h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-3xl"
                >
                  PFE Project chez DECADE
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-1 opacity-80"
                >
                  Conception et réalisation d’un Tunnel d’achat et d’un espace
                  client en NextJS et interfaçage API avec Magento
                </Typography>
                <div className="flex justify-center">
                  <Typography
                    variant="h2"
                    color="white"
                    className="mb-0 text-xl md:text-xl lg:text-2xl"
                  >
                    Technologies:
                  </Typography>
                </div>
                <div className="flex justify-center ">
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaReact color="#61DAFB" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiNextdotjs color="white" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiRedux color="#764abc" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiMysql color="#4479A1" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaDocker color="#2496ED" size={50} />
                  </span>
                </div>
                <div className="flex justify-center ">
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiMagento color="#EE6720" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaPhp color="#8993BE" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <FaGit color="#F05032" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiNginx color="#009639" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <GiGemini color="#BB2D45" size={50} />
                  </span>
                </div>

                <div className="flex justify-center">
                  <Button
                    size="lg"
                    color="white"
                    onClick={() =>
                      (window.location.href =
                        "https://drive.google.com/file/d/1hVw5KqpOHoqmdgpMTbQ-QhNyXT5vLHD0/view?usp=drive_link")
                    }
                  >
                    Demo
                  </Button>
                </div>

                {/* <Button size="lg" color="white" variant="text">
                  Demo
                </Button> */}
              </div>
            </div>
          </div>

          <div className="relative  h-full w-full ">
            <img
              src={relead}
              alt="image 1"
              className=" h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-3xl"
                >
                  Stage ingénieur chez Relead
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-1 opacity-80"
                >
                  Conception et Déploiement d’une Plateforme Intégrée pour la
                  Gestion Globale d’un centre éducatif
                </Typography>
                <div className="flex justify-center">
                  <Typography
                    variant="h2"
                    color="white"
                    className="mb-0 text-xl md:text-xl lg:text-2xl"
                  >
                    Technologies:
                  </Typography>
                </div>
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
                    <FaDocker color="#2496ED" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiPostgresql color="#336791" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiJenkins color="#D24939" size={50} />
                  </span>
                </div>
                <div className="flex justify-center gap-2">
                  <Button
                    size="lg"
                    color="white"
                    onClick={() =>
                      (window.location.href =
                        "https://drive.google.com/file/d/1HhXcBkNt9bVb_pS8UChAr1KgCpYmGQHE/view?usp=drive_link")
                    }
                  >
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative ">
            <img
              src={divalogo}
              alt="image 1"
              className=" h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-3xl"
                >
                  Stage initiation
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-1 opacity-80"
                >
                  Développement d’un site web e-commerce pour une nouvelle
                  marque de vêtement Tunisienne Calista
                </Typography>
                <div className="flex justify-center">
                  <Typography
                    variant="h2"
                    color="white"
                    className="mb-0 text-xl md:text-xl lg:text-2xl"
                  >
                    Technologies:
                  </Typography>
                </div>

                <div className="flex justify-center gap-2">
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiAngular color="#DD0031" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiNodedotjs color="#8CC84B" size={50} />
                  </span>
                  <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                    <SiMongodb color="#4DB33D" size={50} />
                  </span>
                </div>
                {/* <div className="flex justify-center gap-2">
                  <Button
                    size="lg"
                    color="white"
                    onClick={() => handleOpenModal(demoRelead)}
                  >
                    Demo
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </Carousel>

        {/* La modale */}
        {selectedVideo && (
          <div className="  fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-25 rounded-lg max-w-xl w-full">
              <div className="flex justify-end">
                <button
                  className="text-black font-bold"
                  onClick={handleCloseModal}
                >
                  X
                </button>
              </div>
              <div className="mt-4">
                <video src={selectedVideo} controls className="w-full h-auto" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Demo;
