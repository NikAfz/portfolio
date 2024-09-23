function Footer(props) {
  return (
    <div id="footer" className="footer--container">
      <form className="contact--form">
        <h1 className="contact--title">Contact Me</h1>
        <div className="contact--info">
          <input
            className="contact--name"
            type="text"
            name=""
            id=""
            placeholder="Your name"
          />
          <input
            className="contact--email"
            type="text"
            name=""
            id=""
            placeholder="Your email"
          />
        </div>
        <textarea
          className="contact--textarea"
          name=""
          id=""
          placeholder="Your massage"
        ></textarea>
        <button className="contact--button">Send !</button>
      </form>
    </div>
  );
}

export default Footer;
