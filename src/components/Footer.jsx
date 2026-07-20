import axios from "axios";
import { useState } from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";

function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setMessageStatus("loading");

    const data = {
      service_id: "service_mw3o23d",
      template_id: "template_o4wkhph",
      user_id: "8Lb5Xtz3XO_Xq6d6o",
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "NikAfz",
        message: message,
      },
    };

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      setName("");
      setEmail("");
      setMessage("");
      setMessageStatus("true");
    } catch (error) {
      console.error(error);
      setMessageStatus("false");
    }
  }

  return (
    <footer id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__intro">
          <p className="section__eyebrow section__eyebrow--on-dark">Contact</p>
          <h2 className="contact__title">Let’s talk</h2>
          <p className="contact__lede">
            Have a project, question, or just want to say hi? Drop a message —
            I’ll get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__row">
            <label className="contact__field">
              <span className="contact__label">Name</span>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
            </label>
            <label className="contact__field">
              <span className="contact__label">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </label>
          </div>
          <label className="contact__field">
            <span className="contact__label">Message</span>
            <textarea
              placeholder="What’s on your mind?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
            />
          </label>
          <button className="btn btn--primary contact__submit" type="submit">
            {messageStatus === "loading" ? (
              <CircularProgress size={22} color="inherit" />
            ) : (
              <>
                Send message
                {messageStatus === "true" ? (
                  <DoneAllIcon fontSize="small" />
                ) : messageStatus === "false" ? (
                  <RemoveDoneIcon fontSize="small" />
                ) : (
                  <SendIcon fontSize="small" />
                )}
              </>
            )}
          </button>
          {messageStatus === "true" && (
            <p className="contact__status contact__status--ok">
              Message sent — thanks!
            </p>
          )}
          {messageStatus === "false" && (
            <p className="contact__status contact__status--err">
              Something went wrong. Try again or email me directly.
            </p>
          )}
        </form>
      </div>
      <p className="contact__credit">© {new Date().getFullYear()} NikAfz</p>
    </footer>
  );
}

export default Footer;
