'use client';

'use client';

import ProjectCard from '@/components/ProjectCard';

export type Project = {
  id: number | string;
  name: string;
  summary: string;
  tags: string[];
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: 'Gyroscopic Hamster Ball',
    summary: 'Bluetooth‑controlled hamster ball using Raspberry Pi, Python, and PWM motor drivers.',
    tags: ['embedded', 'python', 'hardware'],
    link: 'https://github.com/andycorrales11/CSCE-462-Remote-Controlled-Hamster-Ball',
  },
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-10">
    <h1 className="mb-8 mt-8 text-center text-3xl font-bold tracking-wide">Projects</h1>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </section>
    </main>
  );
}
