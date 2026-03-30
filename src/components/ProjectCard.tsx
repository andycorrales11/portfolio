import Link from 'next/link';
import { Project } from '@/app/projects/page';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardContent = (
    <div className="border border-[#00ff41]/40 bg-[#050505]/90 shadow-lg overflow-hidden backdrop-blur-sm h-full flex flex-col transition-all duration-200 hover:border-[#00ff41] hover:shadow-[0_0_12px_rgba(0,255,65,0.3)]">
      <div className="bg-[#050505] text-[#00ff41] py-1 px-3 flex justify-between items-center border-b border-[#00ff41]/20">
        <span className="font-mono text-sm truncate">{project.name}</span>
        <div className="flex space-x-2 items-center">
          <div className="w-2 h-2 rounded-full bg-[#00ff41]/40"></div>
          <div className="w-2 h-2 rounded-full bg-[#00ff41]/40"></div>
          <div className="w-2 h-2 rounded-full bg-[#00ff41]/40"></div>
        </div>
      </div>
      <div className="p-4 flex-grow">
        <p className="text-[#00ff41]/75 mb-4 text-sm font-mono">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-[#003311]/60 text-[#00cc33] text-xs font-mono">
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
