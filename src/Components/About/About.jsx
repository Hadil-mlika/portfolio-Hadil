import React from "react";
import AboutImg from "../../assets/hadil.jpg";
import eniso from "../../assets/eniso.jpg";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">Formation</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-60 rounded" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Ingénierie en génie Informatique
                </h1>
                <h2>École Nationale d’Ingénieurs de Sousse-Tunisie (ENISo)</h2>
              </span>
              {/* <img className="md:h-40" src={eniso} alt="eniso" /> */}
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Cycle préparatoire Maths-Physique
                </h1>
                <h2>
                  École supérieure des sciences et de la technologie de Hammam
                  Sousse (ESSTHS)
                </h2>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Baccalauréat mathématiques Mention Bien
                </h1>
                <h2>Lycée Hammem Sousse 2</h2>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
