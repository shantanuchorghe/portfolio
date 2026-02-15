"use client";
import emailjs from "@emailjs/browser";
import { Button } from "./../components/Button";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  SendIcon,
} from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const contact = [
    {
      icon: Mail,
      title: "Email",
      value: "shantanuchorghe@gmail.com",
      href: "mailto:shantanuchorghe@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 88888 27750",
      href: "tel:+918888827750",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pune,Maharashtra,India",
      href: "",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const serviceid = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID;
      const templateid = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID;
      const publicid = process.env.NEXT_PUBLIC_EMAILJS_PUBLICID;

      if (!serviceid || !templateid || !publicid) {
        throw new Error("EMAILJS CONFIG MISSING");
      }

      await emailjs.send(
        serviceid,
        templateid,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicid,
      );
    } catch (err) {
      console.log("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: err.text || "FAiled to send meassage. Please try agai later ",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section id="contactus" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="text-center text-primary text-sm tracking-wider animate-fade-in   ">
            GET IN TOUCH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground text-center">
            Let's build
            <span className="font-serif italic font-normal text-white">
              {" "}
              something great.
            </span>
          </h2>

          <div className="p-2 text-center text-secondary-foreground ">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </div>
        </div>
        {/* grid */}
        <div className="grid lg:grid-cols-2 max-w-5xl gap-12 mx-auto mt-15 px-6">
          {/* left column */}
          <div className="glass p-8  rounded-3xl border-primary/30 animate-fade-in animate-delay-300  ">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name "
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  id="name"
                  type="text"
                  placeholder="Your name..."
                  className=" px-4 py-3 mr-2 glass rounded-2xl w-full border border-border 
              focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all "
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  type="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className=" px-4 py-3 mr-2 glass rounded-2xl w-full border border-border 
              focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all "
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  id="Message"
                  placeholder="Message"
                  className=" px-4 py-3 mr-2 glass rounded-2xl w-full border border-border 
              focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all mb-7 "
                />

                <Button
                  className="w-full"
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
                {submitStatus.type && (
                  <div
                    className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}
              </div>
            </form>
          </div>
          {/* Right Column */}
          <div className="space-y-6 animate-fade-in animate-delay-400 ">
            <div className="p-8 rounded-3xl glass ">
              <div className=" mb-6 font-semibold p-4 text-xl">
                Contact Information
              </div>
              <div className="space-y-4">
                {contact.map((item, idx) => (
                  <div key={idx} className="flex items-center hover:glass ">
                    <div className="p-4 glass rounded-2xl w-20">
                      <item.icon width={50} className="" />
                    </div>
                    <div className="m-2">
                      <div>{item.title}</div>
                      <div>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* currently available */}
            <div className="glass border-primary/50 rounded-3xl p-8">
              <div className="flex items-center">
                <div className="bg-amber-300 w-2 h-2 p-1.5 m-2 animate-pulse rounded-full"></div>

                <div>Currently Available </div>
              </div>
              <p className="m-2 text-muted-foreground">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
