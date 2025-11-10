import { Toaster } from "@/components/ui/sonner";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      {/* <MenuBar /> */}

      <Hero />

      <AboutMe />
      <Projects />
      <ContactMe />
      <BackToTop />
      <Toaster />
    </>
  );
}

export default App;
