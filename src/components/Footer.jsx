import axios from "axios";
import { useState } from "react";

function Footer(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

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
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div id="footer" className="footer--container">
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
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="contact--email"
            type="text"
            name=""
            id=""
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          className="contact--textarea"
          name=""
          id=""
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="contact--button" type="submit">
          Send !
        </button>
      </form>
    </div>
  );
}

export default Footer;
