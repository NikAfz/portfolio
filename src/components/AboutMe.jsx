function AboutMe() {
  return (
    <section className="section about" id="about">
      <div className="section__inner about__grid">
        <div className="about__intro">
          <p className="section__eyebrow">About</p>
          <h2 className="section__title">Code that feels good to use</h2>
          <p className="about__copy">
            I’m a frontend developer who loves building fast, clean, and
            user-friendly web experiences. As the co-founder and frontend lead
            of LibMate, an AI-powered book translation platform, I’ve shipped in
            real production environments with modern web tools.
          </p>
          <p className="about__copy">
            I care about great design, smooth interactions, and writing code
            that’s a pleasure to maintain. Take a look at my projects — whether
            you’re here to collaborate or just browsing, I’m glad you’re here.
          </p>
        </div>

        <dl className="about__meta">
          <div className="about__meta-item">
            <dt>Name</dt>
            <dd>NikAfz</dd>
          </div>
          <div className="about__meta-item">
            <dt>Education</dt>
            <dd>B.S. Computer Science</dd>
          </div>
          <div className="about__meta-item">
            <dt>Email</dt>
            <dd>
              <a href="mailto:nikafz980@gmail.com">nikafz980@gmail.com</a>
            </dd>
          </div>
          <div className="about__meta-item">
            <dt>Status</dt>
            <dd>Employed (@Tadbirkish Vira)</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default AboutMe;
