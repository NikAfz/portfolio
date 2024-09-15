function AboutMe(props) {
  return (
    <div className="about--container" id="about">
      <div className="about--img">image</div>

      <div className="about-text--container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
          impedit? Provident excepturi quis ipsum adipisci earum modi unde sit
          debitis itaque dolorum, quaerat temporibus placeat hic expedita,
          officiis consectetur, error est aliquam perferendis eaque natus quod
          velit corrupti. Ex at obcaecati ut accusantium! Nisi ullam mollitia
          natus vitae, officiis, aliquam odit architecto tempora veritatis porro
          expedita facilis perferendis corporis eaque. Commodi ex autem sequi
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          obcaecati blanditiis dolor rem corrupti voluptate nisi asperiores,
          placeat quia repellendus.
        </p>
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
      </div>
    </div>
  );
}

export default AboutMe;
