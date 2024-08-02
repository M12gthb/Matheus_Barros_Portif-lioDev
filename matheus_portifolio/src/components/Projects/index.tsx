"use client";
import { ReposType } from "@/interfaces/Repositorys";
import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCards";

function Projects() {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://api.github.com/users/M12gthb/repos?sort=created&direction=desc"
        );

        const json = await data.json();
        const reposPublic = json.filter(
          (element: ReposType) => element.private == false
        );
        console.log(json);

        setRepositories(reposPublic);

        return json;
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div
      id="projects"
      className="w-full flex flex-col items-center justify-center px-1 gap-3"
    >
      <h1 className="text-3xl text-gray-300 font-bold">Projects</h1>
      <p className="text-base text-gray-400">Recent projects developed:</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-3">
        {repositories.map((repository) => (
          <ProjectCard key={repository.id} repository={repository} />
        ))}
      </ul>
    </div>
  );
}

export default Projects;
