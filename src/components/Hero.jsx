import React from "react";
import { Button } from "@/components/ui/button";
import Typewriter from "./Typewriter";
import ParticleAnimation from "./ParticleAnimation";

function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black touch-pan-y">
      {/* Particle Animation Background */}
      <ParticleAnimation />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
          <Typewriter text="Turning 'What if' into 'What's next'" />

          {/* CTA Buttons - Enhanced mobile spacing */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center pt-6 sm:pt-8">
            <Button
              size="lg"
              className="w-full sm:w-auto min-w-[200px] h-12 text-base sm:text-sm"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-w-[200px] h-12 text-base sm:text-sm"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 cursor-pointer hover:border-white/80 transition-colors"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>

      {/* Gradient Overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-linear-to-t from-background to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}

export default Hero;
