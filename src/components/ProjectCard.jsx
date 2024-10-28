import project1 from "/projects/watchShop.png";
import LaunchIcon from "@mui/icons-material/Launch";
import CodeIcon from "@mui/icons-material/Code";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
function ProjectCard(props) {
  return (
    <div className="project-card--container">
      <img
        className="project-card--img"
        src={props.img}
        alt={props.name}
        loading="lazy"
        height={260}
        width={460}
      />
      <p className="project-card--name">{props.name}</p>
      <div className="project-card-button--container">
        <Tooltip title="code" placement="left" arrow TransitionComponent={Zoom}>
          <a className="project-card--button" href={props.code} target="_blank">
            <CodeIcon fontSize="large" />
          </a>
        </Tooltip>
        <Tooltip
          title="live"
          placement="right"
          arrow
          TransitionComponent={Zoom}
        >
          <a className="project-card--button" href={props.live} target="_blank">
            <LaunchIcon fontSize="large" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
export default ProjectCard;
