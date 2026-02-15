import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import ProjectsGrid from "./ProjectsGrid";

export type ProjectType = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  status: string;
  link: string;
  githubLink: string;
};

const projects: ProjectType[] = [
  {
    id: "daemon-doc",
    name: "ErrorFixer",
    tagline: "ErrorFixer Crash Intelligence",
    description:
      "ErrorFixer is a local-first developer assistant that automatically intercepts runtime exceptions.",
    image: "/projects/1.png",
    tech: [
      "React",
      "Java",
      "Spring boot",
      "PostgreSQl",
      "H2 Database",
      "System Design",
    ],
    status: "All Systems Operational",
    link: "https://gausul.me",
    githubLink: "https://github.com/gausul9365/ErrorFixer",
  },
  {
    id: "nova-drive",
    name: "Top-K-Analytics",
    tagline: "Analytic Platform",
    description:
      "A production-grade Spring Boot backend that ingests user activity and computes Top-K most viewed items.",
    image: "/projects/2.png",
    tech: ["java", "spring-boot", "priority-queue", "heap", "dsa"],
    status: "All Systems Operational",
    link: "https://gausul.me/",
    githubLink: "https://github.com/gausul9365/Top-K-Analytics",
  },
  {
    id: "dns-server",
    name: "Bazaar Now",
    tagline: "E-commerce But for Local Businesses",
    description:
      "Bazaar Now is a web application that connects users with local businesses, allowing them to discover and support nearby shops and services.",
    image: "/projects/2.png",
    tech: ["Node.js", "NEXT.JS", "Redis", "supabase"],
    status: "All Systems Operational",
    link: "https://gausul.me",
    githubLink: "https://github.com/kaihere14/dns_server",
  },
  {
    id: "title-forge",
    name: "ServeCity",
    tagline: "Get Help at your fingertips",
    description:
      "ServeCity is a web application that connects users with local service providers for quick and reliable assistance.it offers a seamless experience for finding and booking services in your area.",
    image: "/projects/4.png",
    tech: ["React.js", "Node.js", "Supabase", "Zustand"],
    status: "All Systems Operational",
    link: "https://gausul.me",
    githubLink: "https://github.com/kaihere14/Title-Forge",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mt-15">
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-1 text-sm text-neutral-500">Featured</p>
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
            Projects
          </h2>
        </div>
        <Link
          href="https://github.com/gausul9365?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400"
        >
          View All on GitHub
          <ArrowUpRight
            size={12}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>

      <ProjectsGrid projects={projects} initialCount={4} />

      <hr className="mt-15" />
    </section>
  );
};

export default Projects;
