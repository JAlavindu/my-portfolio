import React from "react";
import { Button } from "@/components/ui/button";
import Typewriter from "./Typewriter";
import ParticleAnimation from "./ParticleAnimation";

function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Particle Animation Background */}
      <ParticleAnimation />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <Typewriter text="Turning 'What if' into 'What's next'" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>

      {/* Gradient Overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-linear-to-t from-background to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}

export default Hero;
