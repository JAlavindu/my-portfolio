import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import unisyncImage from "@/assets/projectImages/unisyncImage.png";
import freshPlusImage from "@/assets/projectImages/FreshPlus.png";
import smartGasShutoffSystemImage from "@/assets/projectImages/SmartGassShutOffSystem.jpeg";
import ChatWithPDF from "@/assets/projectImages/ChatWithPDF.png";

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "UniSync",
    description:
      "A collaborative platform designed to help university students manage academic tasks, events, and group projects seamlessly. It integrates task tracking, announcements, and file sharing into one unified dashboard, making student collaboration and productivity effortless.",
    image: unisyncImage,
    technologies: ["React", "SpringBoot", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/UniSyncUSJ/UniSync-web",
    category: "Web App",
  },
  {
    id: 2,
    title: "FreshPlus",
    description:
      "A digital marketplace that directly connects farmers with consumers, eliminating middlemen to ensure fair prices for farmers and affordable, fresh produce for consumers. It aims to empower local agriculture and create a more transparent, efficient food supply chain.",
    image: freshPlusImage,
    technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com/JAlavindu/fresh-plus",
    category: "Web App",
  },
  {
    id: 3,
    title: "SmartGasShutoffSystem",
    description:
      "An IoT safety system that automatically detects gas leaks and shuts off the gas supply to prevent explosions. Built with ESP32 and MQ-2 sensor, it monitors gas levels in real-time and triggers a solenoid valve when dangerous concentrations are detected. The system sends instant push notifications via a React Native mobile app using Firebase, and includes multi-level alerts with buzzer and LED indicators for comprehensive home safety.",
    image: smartGasShutoffSystemImage,
    technologies: ["React-Native", "Firebase", "Expo", "Arduino"],
    liveUrl: "#",
    githubUrl: "https://github.com/JAlavindu/SmartGasShutOffSystem",
    category: "IOT",
  },
  {
    id: 4,
    title: "ChatWithPDF",
    description:
      "A web application that allows users to interact with PDF documents using natural language. Built with React and OpenAI's GPT-3, it enables users to ask questions about the content of their PDFs and receive instant, accurate responses.",
    image: ChatWithPDF,
    technologies: ["React", "OpenAI API", "pinecone"],
    liveUrl: "#",
    githubUrl: "https://github.com/JAlavindu/chat-with-pdf-challenge",
    category: "Web App",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-background py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            A showcase of my recent work and creative solutions
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative px-4 sm:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <Card className="h-full flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/50">
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden bg-muted">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Category Badge */}
                        <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm">
                          {project.category}
                        </Badge>
                      </div>

                      {/* Card Content */}
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className=" text-sm">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="grow">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="pt-0">
                        <Button
                          variant="ghost"
                          className="w-full group-hover:bg-accent transition-colors"
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
                        >
                          GitHub
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12 bg-card border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
            <CarouselNext className="hidden sm:flex -right-12 bg-card border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
          </Carousel>
        </div>

        {/* Navigation Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.slice(0, 6).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-muted-foreground/30 hover:bg-primary transition-colors cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
