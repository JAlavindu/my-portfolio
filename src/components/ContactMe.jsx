import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function ContactMe() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Web3Forms configuration - Get your access key from https://web3forms.com/
      const accessKey = import.meta.env.VITE_WEB3FORM_ACCESS_KEY;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact: ${formData.subject}`,
          message: formData.message,
          from_name: formData.name,
          to_email: "lavi156perera@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Email sent successfully:", result);

        toast.success("Message Sent Successfully!", {
          description: "Thank you for reaching out! I'll get back to you soon.",
        });

        // Close modal and reset form
        setOpen(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to Send Message", {
        description: "Please try again or contact me directly via email.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-background py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-3 sm:mb-4 px-4">
            Let's collaborate and create something amazing together
          </p>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Email Card */}
          <div className="relative group overflow-hidden">
            {/* Glowing Border Effect - Behind the card */}
            <div className="absolute inset-0 sm:-inset-0.5 bg-linear-to-r from-primary/0 via-primary/50 to-primary/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="absolute inset-0 sm:-inset-0.5 bg-linear-to-br from-accent/30 via-primary/30 to-accent/30 rounded-lg blur-sm opacity-0 group-hover:opacity-70 animate-spin-slow transition duration-500"></div>

            {/* Floating Particles - Around the border */}
            <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden sm:block">
              <div className="absolute top-0 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float-slow blur-[0.5px]"></div>
              <div className="absolute top-1/4 right-0 w-2 h-2 bg-accent rounded-full animate-float-medium blur-[0.5px]"></div>
              <div className="absolute bottom-1/4 left-0 w-1.5 h-1.5 bg-primary rounded-full animate-float-fast blur-[0.5px]"></div>
              <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-accent rounded-full animate-float-slow blur-[0.5px]"></div>
              <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-primary rounded-full animate-float-medium blur-[0.5px]"></div>
              <div className="absolute top-1/3 right-0 w-1.5 h-1.5 bg-accent rounded-full animate-float-fast blur-[0.5px]"></div>
            </div>

            {/* Card Content */}
            <div className="relative p-4 sm:p-6 bg-card rounded-lg border border-border group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg text-center touch-manipulation active:scale-95 sm:active:scale-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 sm:h-8 sm:w-8 text-primary"
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
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                Email
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm break-all">
                lavi156perera@gmail.com
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="relative group overflow-hidden">
            {/* Glowing Border Effect - Behind the card */}
            <div className="absolute inset-0 sm:-inset-0.5 bg-linear-to-r from-primary/0 via-primary/50 to-primary/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="absolute inset-0 sm:-inset-0.5 bg-linear-to-br from-accent/30 via-primary/30 to-accent/30 rounded-lg blur-sm opacity-0 group-hover:opacity-70 animate-spin-slow transition duration-500"></div>

            {/* Floating Particles - Around the border */}
            <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden sm:block">
              <div className="absolute top-0 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float-slow blur-[0.5px]"></div>
              <div className="absolute top-1/4 right-0 w-2 h-2 bg-accent rounded-full animate-float-medium blur-[0.5px]"></div>
              <div className="absolute bottom-1/4 left-0 w-1.5 h-1.5 bg-primary rounded-full animate-float-fast blur-[0.5px]"></div>
              <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-accent rounded-full animate-float-slow blur-[0.5px]"></div>
              <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-primary rounded-full animate-float-medium blur-[0.5px]"></div>
              <div className="absolute top-1/3 right-0 w-1.5 h-1.5 bg-accent rounded-full animate-float-fast blur-[0.5px]"></div>
            </div>

            {/* Card Content */}
            <div className="relative p-4 sm:p-6 bg-card rounded-lg border border-border group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg text-center touch-manipulation active:scale-95 sm:active:scale-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 sm:h-8 sm:w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                Phone
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                +94 71 901 2156
              </p>
            </div>
          </div>

          {/* Location Card */}
          <div className="relative group overflow-hidden">
            {/* Glowing Border Effect - Behind the card */}
            <div className="absolute inset-0 sm:-inset-0.5 bg-linear-to-r from-primary/0 via-primary/50 to-primary/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="absolute inset-0 sm:-inset-0.5 bg-linear-to-br from-accent/30 via-primary/30 to-accent/30 rounded-lg blur-sm opacity-0 group-hover:opacity-70 animate-spin-slow transition duration-500"></div>

            {/* Floating Particles - Around the border */}
            <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none hidden sm:block">
              <div className="absolute top-0 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float-slow blur-[0.5px]"></div>
              <div className="absolute top-1/4 right-0 w-2 h-2 bg-accent rounded-full animate-float-medium blur-[0.5px]"></div>
              <div className="absolute bottom-1/4 left-0 w-1.5 h-1.5 bg-primary rounded-full animate-float-fast blur-[0.5px]"></div>
              <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-accent rounded-full animate-float-slow blur-[0.5px]"></div>
              <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-primary rounded-full animate-float-medium blur-[0.5px]"></div>
              <div className="absolute top-1/3 right-0 w-1.5 h-1.5 bg-accent rounded-full animate-float-fast blur-[0.5px]"></div>
            </div>

            {/* Card Content */}
            <div className="relative p-4 sm:p-6 bg-card rounded-lg border border-border group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg text-center touch-manipulation active:scale-95 sm:active:scale-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 sm:h-8 sm:w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2">
                Location
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Hokandara, Sri Lanka
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
            Connect With Me
          </h3>
          <div className="flex justify-center gap-3 sm:gap-4">
            <a
              href="https://github.com/JAlavindu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 sm:w-10 sm:h-10 hover:bg-primary hover:text-primary-foreground transition-colors touch-manipulation active:scale-95"
              >
                <svg
                  className="h-5 w-5 sm:h-5 sm:w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/lavindu-perera/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 sm:w-10 sm:h-10 hover:bg-primary hover:text-primary-foreground transition-colors touch-manipulation active:scale-95"
              >
                <svg
                  className="h-5 w-5 sm:h-5 sm:w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Button>
            </a>
          </div>
        </div>

        {/* CTA Buttons with Modal */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4">
          <Button
            className="w-full sm:w-auto min-w-[200px] h-12 sm:h-10 text-base sm:text-sm touch-manipulation"
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
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Download CV
          </Button>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full sm:w-auto min-w-[200px] h-12 sm:h-10 text-base sm:text-sm touch-manipulation"
                size="lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact Me
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
              <DialogHeader className="space-y-3">
                <DialogTitle className="text-2xl font-bold text-foreground">
                  Send Me a Message
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-11 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-11 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="h-11 focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[140px] focus-visible:ring-primary resize-none"
                    />
                  </div>
                </div>
                <DialogFooter className="gap-3 sm:gap-2 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setOpen(false)}
                    disabled={isLoading}
                    className="w-full sm:w-auto"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                      </>
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
