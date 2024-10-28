function AboutMe(props) {
  return (
    <section className="about--container" id="about">
      <div className="about-text--container">
        <p>
          As a front-end developer, I’m passionate about blending creativity
          with functionality to build responsive, intuitive, and engaging
          websites. Using React.js and JavaScript, I focus on crafting sleek
          landing pages and web applications that are as delightful to use as
          they are to look at.
          <br />
          <br />
          Take a look at my projects to see how I turn ideas into immersive
          digital experiences. Driven by a love for learning and innovation, I’m
          constantly refining my skills to push my capabilities. Whether you're
          looking to collaborate, or you're simply browsing, I'm excited to
          share my journey in front-end development with you!
        </p>
      </div>

      <div className="about-info--container">
        <div className="about-info">
          <p className="info--title">Name :</p>
          <p className="info--dis">NikAfz</p>
        </div>
        <div className="about-info">
          <p className="info--title">Education :</p>
          <p className="info--dis">diploma</p>
        </div>
        <div className="about-info">
          <p className="info--title">Mail :</p>
          <p className="info--dis">nikafz980@gmail.com</p>
        </div>
        <div className="about-info">
          <p className="info--title">Employment :</p>
          <p className="info--dis">open</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
