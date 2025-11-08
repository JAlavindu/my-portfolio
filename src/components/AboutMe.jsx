import React from "react";
import myImage from "@/assets/images/my-image.png";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ImageParticleBorder from "./ImageParticleBorder";

function AboutMe() {
  return (
    <section className="relative min-h-screen bg-background py-12 sm:py-20 px-4 sm:px-6 lg:px-8 -mt-32 sm:-mt-40 pt-32 sm:pt-40">
      {/* Top Gradient Overlay for smooth transition from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 bg-linear-to-b from-black/80 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative group">
              {/* Animated Rotating Gradient Rings */}
              <div className="absolute -inset-4 bg-linear-to-r from-primary via-accent to-primary rounded-lg blur-xl opacity-30 group-hover:opacity-60 animate-pulse transition duration-500"></div>
              <div className="absolute -inset-2 bg-linear-to-br from-primary/50 via-accent/50 to-primary/50 rounded-lg blur-lg opacity-40 group-hover:opacity-70 animate-spin-slow transition duration-500"></div>

              {/* Floating Particles Effect */}
              <div className="absolute -inset-6">
                <div className="absolute top-0 left-1/4 w-2 h-2 bg-primary rounded-full animate-float-slow opacity-60"></div>
                <div className="absolute top-1/4 right-0 w-3 h-3 bg-accent rounded-full animate-float-medium opacity-50"></div>
                <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-primary rounded-full animate-float-fast opacity-70"></div>
                <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-accent rounded-full animate-float-slow opacity-60"></div>
              </div>

              {/* Main Image Container */}
              <div className="relative transform group-hover:scale-105 transition-transform duration-500 ease-out">
                <div className="relative overflow-hidden rounded-lg">
                  {/* Inner Glow Border */}
                  <div className="absolute inset-0 rounded-lg border-4 border-primary/20 group-hover:border-primary/40 transition duration-500"></div>

                  {/* Particle Border Effect */}
                  <ImageParticleBorder />

                  {/* Animated Shine Effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                  {/* Image */}
                  <img
                    src={myImage}
                    alt="Lavindu Perera"
                    className="w-full max-w-md h-auto relative z-10 shadow-2xl"
                  />

                  {/* Bottom Glow Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 order-2 lg:order-2">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
                Hello! I'm <span className="text-primary">Lavindu Perera</span>
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                A passionate web developer with a knack for creating engaging
                and user-friendly digital experiences. With a background in IT,
                I specialize in building responsive and dynamic websites using
                modern technologies.
              </p>
            </div>

            {/* Skills/Technologies */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">
                Technologies I Work With
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "Tailwind CSS",
                  "Vite",
                  "JavaScript",
                  "HTML/CSS",
                  "Node.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-card text-card-foreground rounded-lg border border-border hover:border-primary transition-colors duration-200 text-sm font-medium"
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
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="w-full sm:w-auto"
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
                Download CV
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
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
