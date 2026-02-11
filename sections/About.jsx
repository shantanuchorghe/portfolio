import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const qualties = [
  {
    Icon: Code2,
    Title: "Clean Code",
    Desc: "Writing maintainable,scalable code that stands the test of time.",
  },
  {
    Icon: Users,
    Title: "Collaboration",
    Desc: "Working closely with teams to bring ideas to life.",
  },
  {
    Icon: Rocket,
    Title: "Performance",
    Desc: "Optimizing for speed and delivering lightning-fast user experiences",
  },
  {
    Icon: Lightbulb,
    Title: "Innovation",
    Desc: "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container px-6 relative z-10 m-auto ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8 ">
            <div className="animate-fade-in">
              <span className="uppercase text-secondary-foreground text-sm font-medium tracking-wider">
                About me
              </span>
            </div>

            <h2 className="text-4xl  md:text-5xl text-muted-foreground font-bold leading-tight animate-fade-in animation-delay-100">
              Building the future,{" "}
              <span className=" text-white font-serif italic font-normal">
                one component at a time.
              </span>
            </h2>
            <div
              className="text-muted-foreground
            space-y-4 animation-delay-200"
            >
              <p>
                I'm a passionate software engineer with over 5 years of
                experience crafting digital products that make a difference. My
                journey started with a curiosity for how things work on the web,
                and it has evolved into a deep expertise in modern frontend
                technologies.
              </p>

              <p>
                I specialize in React, Next.js, and TypeScript, building
                everything from sleek landing pages to complex enterprise
                applications. My approach combines technical excellence with a
                keen eye for design and user experience.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
            <div className="glass glow-border p-6 animate-fade-in rounded-2xl animation-delay-300">
              <p>
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="grid sm:grid-cols-2 gap-6 ">
            {qualties.map((item, idx) => (
              <div key={idx} className="p-6 glass  rounded-2xl animate-fade-in "
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}>

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">

                  <item.Icon className="w-6 h-6 text-primary" />

                </div>
                <h3 className=" font-semibold mb-2 text-lg text-white">{item.Title}</h3>
                <p className="text-sm text-muted-foreground">{item.Desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
