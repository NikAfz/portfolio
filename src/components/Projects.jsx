import useProjectData from "../data/ProjectsData";
import ProjectCard from "./ProjectCard";

function Projects() {
  const data = useProjectData();

  return (
    <section id="projects" className="section projects">
      <div className="section__inner">
        <div className="section__header">
          <p className="section__eyebrow">Work</p>
          <h2 className="section__title">Selected projects</h2>
          <p className="section__lede">
            Production apps and experiments — open the live site or peek at the
            source.
          </p>
        </div>

        <div className="projects__grid">
          {data.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              img={project.img}
              code={project.codeLink}
              live={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
