import js from "/javascript.svg";
import ts from "/typescript.png";
import rrd from "/rrd.svg";
import vite from "/vite.svg";
import redux from "/redux.svg";
import git from "/git.png";
import react from "/react.svg";
import html from "/html.svg";
import css from "/css.svg";
import mui from "/material-ui.svg";
import npm from "/npm.svg";
import api from "/r-api.svg";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
function Skills(props) {
  return (
    <div className="skills--container" id="skills">
      <div className="skills-left--container">
        <h2 className="skills-left--title">teck skills</h2>
        <div className="skills-left-item--container">
          <Tooltip TransitionComponent={Zoom} title="Html5" arrow>
            <img src={html} alt="html5" loading="lazy" />
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Css3" arrow>
            <img src={css} alt="css3" loading="lazy" />
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="JavaScript" arrow>
            <img src={js} alt="Js" loading="lazy" />
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="TypeScript" arrow>
            <img src={ts} alt="Ts" loading="lazy" />
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="React" arrow>
            <img src={react} alt="React" loading="lazy" />
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Vite" arrow>
            <img src={vite} alt="Vite" loading="lazy" />
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="ReactRouter" arrow>
            <img src={rrd} alt="ReactRouterDom" loading="lazy" />
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Redux" arrow>
            <img src={redux} alt="Redux" loading="lazy" />
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="MUI" arrow>
            <img src={mui} alt="MUI" loading="lazy" />
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="npm" arrow>
            <img src={npm} alt="npm" loading="lazy" />
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Git" arrow>
            <img src={git} alt="Git" loading="lazy" />
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="RestApi" arrow>
            <img src={api} alt="RestApi" loading="lazy" />
          </Tooltip>
        </div>
      </div>
      <div className="skills-right--container">
        <h2 className="skills-left--title">language skills</h2>
        <div className="skills-right-item--container">
          <div className="skills-right-item">
            <h4>Persian {"( فارسی )"}:</h4>
            <p>Native</p>
          </div>
          <div className="skills-right-item">
            <h4>English {"( american )"}:</h4>
            <p>Fluent</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
