import { ArrowRight, Download, X, Github, Linkedin } from "lucide-react";
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
                { social: Github },
                { social: Linkedin },
                { social: FaXTwitter },
              ].map((ele, index) => (
                <a
                  key={index}
                  href="#"
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
                  src="/profile-photo.jpg"
                  alt="ProfilePic"
                  className="w-full aspect-[4/5] object-cover rounded-2xl "
                />
                {/* floating badge*/}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-2 bg-green-500 rounded-full animate-pulse " />
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
         <div>Technolgies I work with</div>
          <div className="flex shrink-0">
            {[...skills, ...skills].map((skil, ind) => (
              <span key={ind}>{skil} </span>
            ))}
          </div>
      </div>
    </section>
  );
};
