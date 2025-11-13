import React from "react";
import myImage from "@/assets/images/my-image.png";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ImageParticleBorder from "./ImageParticleBorder";

function AboutMe() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-background py-12 sm:py-20 px-4 sm:px-6 lg:px-8 -mt-32 sm:-mt-40 pt-32 sm:pt-40"
    >
      {/* Top Gradient Overlay for smooth transition from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 bg-linear-to-b from-black/80 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
            About Me
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative group w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Outer Glowing Ring - Multi-layered glow effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-primary via-accent to-primary rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 animate-pulse transition duration-700"></div>
              <div className="absolute -inset-0.5 bg-linear-to-br from-primary/60 via-accent/60 to-primary/60 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700"></div>

              {/* Rotating Gradient Border */}
              <div className="absolute -inset-1 bg-linear-to-r from-primary via-accent to-accent rounded-2xl opacity-0 group-hover:opacity-30 animate-spin-slow blur-md transition duration-700"></div>

              {/* Main Image Container with enhanced shadow */}
              <div className="relative transform group-hover:scale-[1.02] transition-all duration-500 ease-out">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500">
                  {/* Particle Border Effect */}
                  <ImageParticleBorder />

                  {/* Animated Shine Effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-10"></div>

                  {/* Image with better contrast */}
                  <img
                    src={myImage}
                    alt="Lavindu Perera"
                    className="w-full h-auto relative z-0 block"
                  />

                  {/* Ambient Glow Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

                  {/* Bottom Accent Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-primary/30 via-accent/10 to-transparent opacity-60 group-hover:opacity-100 transition duration-500"></div>

                  {/* Corner Highlights */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-linear-to-br from-primary/20 to-transparent rounded-tl-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl from-accent/20 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
              </div>

              {/* Floating Particles Effect - More subtle and positioned better */}
              <div className="absolute -inset-8 hidden lg:block pointer-events-none">
                <div className="absolute top-1/4 -left-4 w-3 h-3 bg-primary rounded-full animate-float-slow opacity-60 blur-sm"></div>
                <div className="absolute top-1/3 -right-4 w-2 h-2 bg-accent rounded-full animate-float-medium opacity-70 blur-sm"></div>
                <div className="absolute bottom-1/3 -left-4 w-2.5 h-2.5 bg-primary rounded-full animate-float-fast opacity-50 blur-sm"></div>
                <div className="absolute bottom-1/4 -right-4 w-3 h-3 bg-accent rounded-full animate-float-slow opacity-60 blur-sm"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-5 sm:space-y-6 order-2 lg:order-2">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
                Hello! I'm <span className="text-primary">Lavindu Perera</span>
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                A passionate Software Engineer with a knack for creating
                engaging and user-friendly digital experiences. With a
                background in IT, I specialize in building web apps, automation,
                and Arduino projects.
              </p>
            </div>

            {/* Skills/Technologies */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-lg sm:text-xl font-semibold text-foreground">
                Technologies I Work With
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "React",
                  "Tailwind CSS",
                  "JavaScript",
                  "HTML/CSS",
                  "SpringBoot",
                  "PostgreSQL",
                  "Node.js",
                  "Python",
                  "Arduino",
                  "Docker",
                  "Selenium",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-card text-card-foreground rounded-lg border border-border hover:border-primary hover:scale-105 transition-all duration-200 text-xs sm:text-sm font-medium cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  3+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Years Exp
                </div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  50+
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Projects
                </div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  100%
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Satisfaction
                </div>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                className="w-full sm:w-auto h-11 sm:h-10 text-base sm:text-sm"
                size="lg"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Lavindu Perera resume.pdf";
                  link.download = "Lavindu_Perera_resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  toast.success("CV Downloaded Successfully!", {
                    description: "Your download has been completed.",
                  });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto h-11 sm:h-10 text-base sm:text-sm"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
