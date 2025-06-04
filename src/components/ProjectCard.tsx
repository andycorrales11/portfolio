import { Project } from '@/app/projects/page';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.link} target="_blank" className="rounded-2xl ml-5 mr-5 border border-cyan-500/30 bg-black/30 p-5 shadow-lg shadow-cyan-800/30 backdrop-blur-md transition-transform hover:-translate-y-1 hover:shadow-cyan-500/40">
      <h2 className="mb-2 text-xl font-bold text-cyan-200 drop-shadow-[0_0_4px_rgba(0,255,255,0.6)]">
        {project.name}
      </h2>
      <p className="mb-4 text-sm text-gray-300/90">{project.summary}</p>

      {/* tag chips */}
      <ul className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-cyan-700/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300 backdrop-blur-sm"
          >
            {tag}
          </li>
        ))}
      </ul>
    </a>
  );
}
