import React from "react";
import ProjectCard from "./ProjectCard";
import oil4med from "../../assets/oil.png";
import fooddelivery from "../../assets/fooddelivery.png";
import gestemp from "../../assets/gestionemp.png";
import gestcours from "../../assets/gestcours.jpg";
import todo from "../../assets/todo.png";

const Projects = () => {
  return (
    <div id="Project" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Oil4Med"
          img={oil4med}
          main="Mise en œuvre d’une Plateforme Logistique pour l’Approvisionnement en Huile
d’Olive des Petits Producteurs Méditerranéens"
          techno={1}
          link="https://github.com/Hadil-mlika/devops-automation"
        />
        <ProjectCard
          img={fooddelivery}
          title="MenuMaster"
          techno={2}
          link="https://github.com/Hadil-mlika/foodDelivery-front"
          main="Application web pour passer des commandes de nourriture auprès de restaurants. "
        />
        <ProjectCard
          img={gestcours}
          title="Educanet"
          techno={3}
          link="https://github.com/Hadil-mlika/ProjetGestionDesCours"
          main="Application web de gestion des cours "
        />
        <ProjectCard
          img={gestemp}
          title="WorkForce"
          techno={4}
          link="https://github.com/Hadil-mlika/projetTBSback"
          main="Application web de gestion des employés d'une entreprise "
        />
        <ProjectCard
          img={todo}
          title="To do list"
          techno={5}
          link="https://github.com/Hadil-mlika/todolist-nextjs"
          main="Déploiement d'une application web de gestion des taches  "
        />{" "}
      </div>
    </div>
  );
};

export default Projects;
