function AboutMe(props) {
  return (
    <section className="about--container" id="about">
      <div className="about-text--container">
        <p>
          {/* As a front-end developer, I’m passionate about blending creativity
          with functionality to build responsive, intuitive, and engaging
          websites. Using React.js and JavaScript, I focus on crafting sleek
          landing pages and web applications that are as delightful to use as
          they are to look at. */}
          I’m a frontend developer who loves building fast, clean, and
          user-friendly web experiences. As the co-founder and frontend lead of
          LibMate, an AI-powered book translation platform, I’ve worked hands-on
          with real production environments and modern web tools. I care deeply
          about great design, smooth interactions, and writing code that
          actually feels good to maintain.
          <br />
          <br />
          Take a look at my projects to see how I turn ideas into immersive
          digital experiences. Driven by a love for learning and innovation, I’m
          constantly refining my skills to push my capabilities. Whether you're
          looking to collaborate, or you're simply browsing, I'm excited to
          share my journey with you!
        </p>
      </div>

      <div className="about-info--container">
        <div className="about-info">
          <p className="info--title">Name :</p>
          <p className="info--dis">NikAfz</p>
        </div>
        <div className="about-info">
          <p className="info--title">Education :</p>
          <p className="info--dis">bachelor | Cs</p>
        </div>
        <div className="about-info">
          <p className="info--title">Mail :</p>
          <p className="info--dis">nikafz980@gmail.com</p>
        </div>
        <div className="about-info">
          <p className="info--title">Employment :</p>
          <p className="info--dis">employed {"("}closed{")"}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
