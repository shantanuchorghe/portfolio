import { Link, ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "./../components/AnimatedBorderButton";

const Projects = [
  {
    img: "/projects/project1.png",
    github: "",
    title: "Fintech Dashboard",
    Desc: "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
    tags: ["React", "typescript", "NodeJS"],
  },
  {
    img: "/projects/project1.png",
    github: "",
    title: "E-Commerce Platform",
    Desc: "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
    tags: ["React", "typescript", "NodeJS"],
  },
  {
    img: "/projects/project1.png",
    github: "",
    title: "AI Writing Assistant",
    Desc: "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
    tags: ["React", "typescript", "NodeJS"],
  },
  {
    img: "/projects/project1.png",
    github: "",
    title: "Project Management Tool",
    Desc: "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
    tags: ["React", "typescript", "NodeJS"],
  },
];

export const Project = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden ">
      <div className="contaniner mx-auto px-6 realtive z-10">
        {/* section header */}
        <div className="uppercase text-center text-sm  text-secondary-foreground">
          <span className="font-medium tracking-wider animate-fade-in">
            Featured Work
          </span>
        </div>

        <div className="text-center py-2 mb-16 max-w-3xl mx-auto">
          <span className="text-5xl text-primary  font-semibold ">
            Projects that{" "}
          </span>
          <span className="text-5xl text-white font-serif italic">
            {" "}
            make an impact.
          </span>
          <br />
          <div className="py-4">
            <span className="text-primary ">
              A selection of my recent work, from complex web applications to
              innovative tools that solve real-world <br /> problems.
            </span>
          </div>
        </div>

        <div className="">
          <div className="grid  md:grid-cols-2 gap-8 ">
            {Projects.map((item, idx) => (
              <div
                key={idx}
                className="group glass rounded-2xl overflow-hidden md:row-span-1"
              >
                {/* image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-normal
                    group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                    <a
                      href={Projects.github}
                      className="rounded-full  glass p-3 hover:text-primary-foreground hover:bg-primary transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <a
                      href={Projects.github}
                      className="rounded-full  glass p-3 hover:text-primary-foreground hover:bg-primary transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                {/* content */}
                <div className="space-y-4 p-6  ">
                  <div className="flex justify-center ">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground text-sm pt-2 ">
                        {item.Desc}
                      </p>
                    </div>
                    <div>
                      <a href={item.link}>
                        <ArrowUpRight
                          className="text-muted-foreground w-5 h-5
                      group-hover:translate-x-1
                      group-hover:-translate-y-1 transition-all"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {item.tags.map((tag, tid) => (
                      <div
                        key={tid}
                        className="glass rounded-full px-4 py-1.5 text-xs bg-surface font-medium border border-border/50  text-muted-foreground
                        hover:border-primary/50
                         hover:text-primary
                         transition-all duration-300
                         "
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
