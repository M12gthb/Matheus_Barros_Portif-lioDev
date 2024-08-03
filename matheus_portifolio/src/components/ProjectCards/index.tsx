import React from "react";
import { FaGithub } from "react-icons/fa";
import { ReposType } from "@/interfaces/Repositorys";
import { FiGithub } from "react-icons/fi";

function ProjectCard({ repository }: { repository: ReposType }) {
  return (
    <>
      {repository.homepage && (
        <li className="max-w-[280px] flex flex-col gap-4 rounded-sm border-2 border-black animate-slide-down ">
          <div className="w-full h-[150px] rounded-sm bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-black hover:text-white ">
            <FiGithub className="w-[50px] h-[50px]" />
          </div>
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
