import axios from "axios";
import { useState } from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";
import SendIcon from "@mui/icons-material/Send";
import CircularProgress from "@mui/material/CircularProgress";

function Footer(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [messageStatus, setMessageStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setMessageStatus("loading");

    const serviceId = "service_mw3o23d";
    const templateId = "template_o4wkhph";
    const publicKey = "8Lb5Xtz3XO_Xq6d6o";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "NikAfz",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
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
    <footer id="footer" className="footer--container">
      <form onSubmit={handleSubmit} className="contact--form">
        <div className="contact-title--container">
          <h1 className="contact--title">Contact Me</h1>
        </div>
        <div className="contact--info">
          <input
            className="contact--name"
            type="text"
            name=""
            id=""
            placeholder="Your name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="contact--email"
            type="text"
            name=""
            id=""
            placeholder="Your email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <textarea
          className="contact--textarea"
          name=""
          id=""
          placeholder="Your message *"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button className="contact--button" type="submit">
          {messageStatus === "loading" ? (
            <CircularProgress size={30} color="inherit" />
          ) : (
            <>
              Send
              {messageStatus === "true" ? (
                <DoneAllIcon />
              ) : messageStatus === "false" ? (
                <RemoveDoneIcon />
              ) : (
                <SendIcon />
              )}
            </>
          )}
        </button>
      </form>
    </footer>
  );
}

export default Footer;
