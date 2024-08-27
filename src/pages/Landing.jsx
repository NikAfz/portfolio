import meLookingRight from '/me1.jpg'



function Landing(props) {
    
  return (
    <>
      <div className="landing-text--container">
        
        <p className="landing-text--small">
          Hi my name is
        </p>
        
        <p className="landing-text--big">
          {"<"}NikAfz/{">"}
        </p>
        
        <p className="landing-text--small">I am a </p>

        <p className="landing-text--mid">Front End web developer</p>


        <div className="landing-button--container">
          <button className="landing-button main--button">portfolio</button>
          <a href="NikAfz.pdf">i</a>
          <button className="landing-button secondary--button">résumé</button>
        </div>
      </div>
      <div className='landing--pic'>
        <img src={meLookingRight} alt="my picture" />
      </div>
    </>
  )
}
export default Landing;