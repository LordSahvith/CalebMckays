import Modal from "../../common/modal/Modal";
import { Project } from "./Projects";
import projects from "./data/projects";
import "./ProjectModal.css";

function ProjectModal({ shouldOpen, setShouldOpen, projectId = 0 }) {
  const project = projects.filter((project) => project.id === projectId)[0];
  return (
    <Modal
      modalName="project-modal"
      shouldOpen={shouldOpen}
      setShouldOpen={setShouldOpen}
    >
      {shouldOpen ? <Project project={project} isModal={true} /> : ""}
    </Modal>
  );
}

export default ProjectModal;
