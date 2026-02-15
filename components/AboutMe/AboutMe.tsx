import Image from "next/image";

type SkillCategory = {
  title: string;
  skills: { src: string; alt: string }[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Systems",
    skills: [
      { src: "https://skillicons.dev/icons?i=java", alt: "Java" },
      { src: "https://skillicons.dev/icons?i=spring", alt: "Spring Boot" },
      { src: "https://skillicons.dev/icons?i=nodejs", alt: "Node.js" },
      { src: "https://skillicons.dev/icons?i=ts", alt: "TypeScript" },
    ],
  },
  {
    title: "Database & Messaging",
    skills: [
      { src: "https://skillicons.dev/icons?i=mysql", alt: "MySQL" },
      { src: "https://skillicons.dev/icons?i=postgres", alt: "PostgreSQL" },
      { src: "https://skillicons.dev/icons?i=mongodb", alt: "MongoDB" },
      { src: "https://skillicons.dev/icons?i=redis", alt: "Redis" },
      { src: "https://skillicons.dev/icons?i=kafka", alt: "Kafka" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { src: "https://skillicons.dev/icons?i=aws", alt: "AWS" },
      { src: "https://skillicons.dev/icons?i=docker", alt: "Docker" },
      { src: "https://skillicons.dev/icons?i=kubernetes", alt: "Kubernetes" },
      { src: "https://skillicons.dev/icons?i=vercel", alt: "Vercel" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { src: "https://skillicons.dev/icons?i=react", alt: "React" },
      { src: "https://skillicons.dev/icons?i=nextjs", alt: "Next.js" },
      { src: "https://skillicons.dev/icons?i=js", alt: "JavaScript" },
      { src: "https://skillicons.dev/icons?i=tailwind", alt: "Tailwind CSS" },
    ],
  },
];

const AboutMe = () => {
  return (
    <section className="mx-auto mt-16 max-w-4xl px-4 pb-12">
      <h2 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
        About
      </h2>

      <h1 className="mb-6 text-3xl font-bold md:text-4xl">Gausul Wara</h1>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Profile Image */}
        <div className="shrink-0">
          <div className="flex h-56 w-56 items-center justify-center overflow-hidden rounded-2xl bg-sky-200 dark:bg-amber-300">
            <Image
              src="/without_glasses.png"
              alt="Gausul Wara"
              width={220}
              height={220}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </div>

        {/* About Content */}
        <div className="flex-1">
          <p className="mb-4 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            Backend-focused Software Developer with strong foundations in system
            design, distributed systems basics, and performance optimization. I
            build production-grade services with clean architecture principles,
            database-level optimizations, and scalable API design.
          </p>

          <p className="mb-6 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
            Experienced in developing real-time analytics systems, RESTful APIs,
            and containerized applications using Docker. Passionate about
            writing clean, maintainable code and designing systems that scale
            efficiently.
          </p>

          {/* Skills */}
          <div className="space-y-4">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-sm font-semibold text-neutral-500">
                  {category.title}
                </h3>

                <div className="mt-2 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Image
                      key={skill.alt}
                      src={skill.src}
                      alt={skill.alt}
                      width={30}
                      height={30}
                      className="rounded bg-neutral-200 p-1 dark:bg-neutral-800"
                      unoptimized
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="mt-16" />
    </section>
  );
};

export default AboutMe;
