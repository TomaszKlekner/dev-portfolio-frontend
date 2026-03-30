import { Link } from "react-router";
import type { Project } from "~/types";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/projects/${project.documentId}`}
      className="block h-full transform transition duration-300 hover:scale-[1.02]"
    >
      <div className="h-full flex flex-col bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-sm transition hover:shadow-md">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 md:h-60 object-cover"
        />
        <div className="h-full flex flex-col justify-between p-5">
          <div>
            <h3 className="title-3xl font-semibold text-blue-400 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300 mb-6">{project.description}</p>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>{project.category}</span>
            <span>
              {new Date(project.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
