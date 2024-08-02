import React from "react";
import { FaGithub } from "react-icons/fa";
import { ReposType } from "@/interfaces/Repositorys";
import Image from "next/image";

function ProjectCard({ repository }: { repository: ReposType }) {
  return (
    <>
      {repository.homepage && (
        <li className="max-w-[280px] flex flex-col gap-4 rounded-sm border-2 border-black animate-slide-down ">
          <Image
            width={200}
            height={150}
            src="projects.jpg"
            alt={`${repository.name} social preview`}
            className="social-preview w-full rounded-sm"
          />
          <h1 className="text-white w-full px-2 h-[20px]">{repository.name}</h1>
          <div className="flex justify-between px-2">
            <a
              href={repository.homepage}
              className="text-white text-sm hover:border-black hover:bg-white font-medium hover:text-black bg-black rounded-md px-2 border-2"
            >
              See project
            </a>
            <a
              href={repository.html_url}
              className="bg-white rounded-full flex"
            >
              <FaGithub className="bg-white h-6 w-6 rounded-full border-x-2 hover:border-black hover:bg-black hover:text-white border-white " />
            </a>
          </div>
        </li>
      )}
    </>
  );
}

export default ProjectCard;
