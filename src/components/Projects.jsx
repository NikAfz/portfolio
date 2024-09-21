import useProjectData from "../data/ProjectsData";
import ProjectCard from "./ProjectCard";

function Projects(props) {
  const data = useProjectData();
  const projectselemnt = data.map((project, index) => (
    <ProjectCard
      key={index}
      name={project.name}
      img={project.img}
      code={project.codeLink}
      live={project.liveLink}
    />
  ));
  return (
    <div id="projects" className="project--container">
      <h1 className="project--title">Projects</h1>
      <div className="project-list--container">{projectselemnt}</div>
    </div>
  );
}
export default Projects;
