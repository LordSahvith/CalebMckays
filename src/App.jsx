import "./App.css";
import { useState, useEffect } from "react";
import MainNavigation from "./components/layout/navigation/MainNavigation";
import Hero from "./components/layout/hero/Hero";
import About from "./components/layout/about/About";
import Experience from "./components/layout/experience/Experience";
import { Projects } from "./components/layout/projects/Projects";
import Contact from "./components/layout/contact/Contact";
import Footer from "./components/layout/footer/Footer";
import ContactModal from "./components/layout/contact/ContactModal";
import ProjectModal from "./components/layout/projects/ProjectModal";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  const [isContactModalOpen, setContactIsModalOpen] = useState(false);
  const [isProjectModalOpen, setProjectIsModalOpen] = useState(false);
  const [projectId, setProjectid] = useState(null);

  const openContactModal = function () {
    setContactIsModalOpen(true);
  };

  const openProjectModal = function (id) {
    setProjectIsModalOpen(true);
    setProjectid(id);
  };

  return (
    <>
      <MainNavigation />
      <main>
        <Hero windowSize={windowSize} setWindowSize={setWindowSize} />
        <About modalAction={openContactModal} />
        <Experience windowSize={windowSize} />
        <Projects modalAction={openProjectModal} />
        <Contact modalAction={openContactModal} />
        <ContactModal
          shouldOpen={isContactModalOpen}
          setShouldOpen={setContactIsModalOpen}
        />
        <ProjectModal
          shouldOpen={isProjectModalOpen}
          setShouldOpen={setProjectIsModalOpen}
          projectId={projectId}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
