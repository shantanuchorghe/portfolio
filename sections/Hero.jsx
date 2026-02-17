import { ArrowRight,ChevronDown, Download, X, Github, Linkedin } from "lucide-react";
import { Button } from "../components/Button";
import { FaXTwitter } from "react-icons/fa6";

import { AnimatedBorderButton } from "./../components/AnimatedBorderButton";

const skills = [
  // Core (must-have)
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "next.js",
  "tailwind css",
  "node.js",
  "express.js",
  "mongodb",
  "mongoose",
  "rest api",
  "jwt",
  "authentication",
  "git",
  "github",
  "vercel",
  "npm",
  "postman",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="bg image"
          className="w-full h-full inset-0 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* green dots */}
      <div>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60 pointer-events-none"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s
            ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className=" container mx-auto px-6 pt-32 pb-20 relative z-10 ">
        <div className=" grid lg:grid-cols-2 gap-12 items-center">
          {/* left column text contanier */}
          <div className="space-y-8">
            <div className="animate-fade-in ">
              <span className="inline-flex items-center gap-2 px-2 py-2 rounded-full text-sm text-primary glass  ">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>
            {/* headline */}
            <div className=" space-y-4">
              <h1
                style={{ "animation-delay": "100ms" }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 "
              >
                Crafting{" "}
                <span className=" text-primary glow-text ">Digital</span>
                <br />
                experiences with
                <br />
                <span className=" font-serif italic font-normal text-white ">
                  precision
                </span>
              </h1>
              <p
                style={{ "animation-delay": "200ms" }}
                className="text-lg text-muted-foreground max-w-lg animate-fade-in  animation-delay-800 "
              >
                This is Shantanu Chorghe - a Software Engineer specialzing in
                React, Next.js and Typescript. I build scalable ,perfomant web
                applications that users love.
              </p>
            </div>
            {/* CTA BUTTON */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                Download CV
                <Download className="w-5 h-5" />
              </AnimatedBorderButton>
            </div>
            <div className="flex items-center gap-2.5 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me</span>
              {[
                { social: Github , href:'https://github.com/shantanuchorghe'},
                { social: Linkedin ,href: 'https://www.linkedin.com/in/shantanu-chorghe-7989ba263' },
                { social: FaXTwitter , href: 'https:/x.com/shantanu_verse'},
              ].map((ele, index) => (
                <a
                  key={index}
                  href={ele.href}
                  className="p-2 glass text-white hover:bg-primary/10 hover:text-primary rounded-full "
                >
                  {<ele.social className="w-5 h-5" />}{" "}
                </a>
              ))}
            </div>
          </div>
          {/* RIGHT colum profile picture  */}
          <div className="animate-fade-in animation-delay-300  ">
            {/* profile picture */}
            <div className="relative max-w-md mx-auto  ">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse " />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.png"
                  alt="ProfilePic"
                  className="w-full aspect-[4/5] object-cover rounded-2xl "
                />
                {/* floating badge*/}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse " />
                    <span className="text-sm font-medium">
                      Availble for work
                    </span>
                  </div>
                </div>
                {/* stats badge */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            I work with this technologies
          </p>
          <div className="relative  overflow-hidden   ">
             <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className=" flex animate-marquee ">
            {[...skills, ...skills].map((skill, ind) => (
              <div key={ind} className="px-8 py-4  flex shrink-0 ">
                  <span key={ind} className=" text-xl  font-semibold  text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                  {skill}
                  </span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a href="#about"
         className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce"></ChevronDown>
        </a>
      </div>
    </section>
  );
};
