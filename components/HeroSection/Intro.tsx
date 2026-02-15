import React from "react";
import Image from "next/image";

const techStack = [
  { name: "Java 17", icon: "https://skillicons.dev/icons?i=java" },
  { name: "Spring Boot", icon: "https://skillicons.dev/icons?i=spring" },
  { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
  { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
  { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
  { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
];

const Intro = () => {
  return (
    <section className="pt-10">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="block text-neutral-900 dark:text-white">
          Hi, I&apos;m Gausul Wara —
        </span>
        <span className="block text-neutral-500 dark:text-neutral-400">
          Backend-Focused Software Developer
        </span>
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
        I build performance-driven backend systems with strong foundations in
        system design and distributed system basics. Experienced in developing
        RESTful APIs, real-time analytics services, and production-ready
        applications using clean architecture principles.
      </p>

      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
        Recently built a high-performance analytics engine processing 100K+
        events/day with database-level aggregation and optimized query
        indexing. Passionate about writing maintainable, scalable code that
        performs reliably under load.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <span
            key={tech.name}
            className="inline-flex items-center gap-2 rounded-md border px-3 py-1 text-sm font-medium dark:border-neutral-700"
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={18}
              height={18}
              unoptimized
            />
            {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Intro;
