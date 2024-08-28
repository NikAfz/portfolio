import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function SocialLink(props) {
  return (
    <div className="social-link--container">
      <div className="social-link--icon">
        <a href="mailto:nikafz980@gmail.com">
          <AlternateEmailIcon sx={{ fontSize: 44, color: "black" }} />
        </a>
      </div>
      <div className="social-link--icon">
        <a href="https://github.com/NikAfz" target="_blank">
          <GitHubIcon sx={{ fontSize: 44, color: "black" }} />
        </a>
      </div>
      <div className="social-link--icon">
        <a href="https://www.linkedin.com/in/nik-afz/" target="_blank">
          <LinkedInIcon sx={{ fontSize: 44, color: "black" }} />
        </a>
      </div>

      <div className="social--line"></div>
    </div>
  );
}
export default SocialLink;
