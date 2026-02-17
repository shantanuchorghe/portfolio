import { Heart } from "lucide-react";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

export const Footer = () => {
  const socialarray = [
    { social: FaGithub, href: "https://github.com/shantanuchorghe" },
    {
      social: FaLinkedinIn,
      href: "https://www.linkedin.com/in/shantanu-chorghe-7989ba263",
    },
    { social: FaXTwitter, href: "https:/x.com/shantanu_verse" },
  ];
  const navlinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contactus", label: "Contact" },
    ,
  ];
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="container mx-auto px-6">
        <div className="flex flex-col   md:flex-row space-x-120 items-center py-10 border-t border-border max-w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-95">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <a href="#" className="text-xl font-bold tracking-tight">
                SC<span className="text-primary">.</span>
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                © {currentYear} Shantanu Chorghe. All rights reserved.
              </p>
            </div>
            <div className=" rounded-full px-2 py-1 flex items-center gap-1">
              {navlinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="px-4 py-2 text-muted-foreground text-sm hover:text-foreground hover:bg-surface rounded-full"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-5 animate-fade-in animation-delay-400">
              {socialarray.map((ele, index) => (
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
        </div>
      </div>
    </>
  );
};
