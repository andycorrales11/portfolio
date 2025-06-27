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
  {
    id: 2,
    name: 'Fantasy Football Workbench',
    summary: 'A fully open‑source, Python‑powered fantasy football analysis tool.',
    tags: ['data analysis', 'python', 'pandas'],
    link: 'https://github.com/andycorrales11/CSCE-462-Remote-Controlled-Hamster-Ball',
  },
  {
    id: 3,
    name: 'REAL Application',
    summary: 'Software Engineering class group project for a real estate student organization at Texas A&M University.',
    tags: ['SaaS', 'ruby on rails', 'agile'],
    link: 'https://github.com/andycorrales11/CSCE-431-Organizational-App',
  },
  {
    id: 4,
    name: 'Colorblindness Helper',
    summary: 'A Chrome extension that applies color filters to web pages to assist users with color vision deficiencies.',
    tags: ['accessibility', 'javascript', 'chrome extension'],
    link: 'https://github.com/andycorrales11/CSCE-432-Colorblindness-Corrector',
  },
  {
    id: 5,
    name: 'Portfolio Website',
    summary: 'The source code for this portfolio website, built with Next.js, React, and Tailwind CSS.',
    tags: ['web dev', 'typescript', 'react'],
    link: 'https://github.com/andycorrales11/CSCE-432-Colorblindness-Corrector',
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
