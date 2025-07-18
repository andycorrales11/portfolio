import Link from 'next/link';
import { Project } from '@/app/projects/page';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardContent = (
    <div className="border-2 border-cyan-400/50 bg-black/80 shadow-lg rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col transition-all duration-200 hover:border-cyan-400">
      <div className="bg-black/90 text-cyan-200 py-1 px-3 flex justify-between items-center">
        <span className="font-mono text-sm truncate">{project.name}</span>
        <div className="flex space-x-2 items-center">
          <div className="w-2 h-2 rounded-full bg-cyan-400/50"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-400/50"></div>
          <div className="w-2 h-2 rounded-full bg-cyan-400/50"></div>
        </div>
      </div>
      <div className="p-4 flex-grow">
        <p className="text-gray-300 mb-4 text-sm">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-cyan-900/50 text-cyan-200 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (project.link) {
    return (
      <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </Link>
    );
  }

  return <div>{cardContent}</div>;
};

export default ProjectCard;
