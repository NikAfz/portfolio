import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";

function ProjectCard({ name, img, code, live }) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <img
          className="project-card__img"
          src={img}
          alt={`${name} preview`}
          loading="lazy"
          width={640}
          height={360}
        />
      </div>
      <div className="project-card__body">
        <h3 className="project-card__name">{name}</h3>
        <div className="project-card__actions">
          {code ? (
            <a
              className="project-card__link"
              href={code}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CodeIcon fontSize="small" />
              Code
            </a>
          ) : null}
          {live ? (
            <a
              className="project-card__link project-card__link--primary"
              href={live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LaunchIcon fontSize="small" />
              Live
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
