import myMainPic from "/me2.jpg";
import arrowPic from "/arrow.png";
function Hero(props) {
  return (
    <div className="hero--container" id="hero">
      <div className="hero-img--container">
        <img className=" hero--img" src={myMainPic} alt="my picture" />
      </div>
      <h1 className="hero--name">
        {"<"}Nik <div className="name--space"></div> Afz{"/>"}
      </h1>
      <div className="hero--styling-1">
        <svg
          width="150"
          height="102"
          viewBox="0 0 150 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1C3 4 5 17 23.5 17C42 17 41.5 2 57.5 2C73.5 2 71 17 90.5 17C110 17 112.5 0.999964 125.5 1C138.5 1.00004 148 17 148 17"
            stroke="#3A1772"
            strokeMiterlimit="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 85C4 88 6 101 24.5 101C43 101 42.5 86 58.5 86C74.5 86 72 101 91.5 101C111 101 113.5 85 126.5 85C139.5 85 149 101 149 101"
            stroke="#3A1772"
            strokeMiterlimit="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 64C3 67 5 80 23.5 80C42 80 41.5 65 57.5 65C73.5 65 71 80 90.5 80C110 80 112.5 64 125.5 64C138.5 64 148 80 148 80"
            stroke="#3A1772"
            strokeMiterlimit="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 43C3 46 5 59 23.5 59C42 59 41.5 44 57.5 44C73.5 44 71 59 90.5 59C110 59 112.5 43 125.5 43C138.5 43 148 59 148 59"
            stroke="#3A1772"
            strokeMiterlimit="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 22C3 25 5 38 23.5 38C42 38 41.5 23 57.5 23C73.5 23 71 38 90.5 38C110 38 112.5 22 125.5 22C138.5 22 148 38 148 38"
            stroke="#3A1772"
            strokeMiterlimit="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="hero--styling-2">
        <svg
          width="150"
          height="102"
          viewBox="0 0 150 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1C3 4 5 17 23.5 17C42 17 41.5 2 57.5 2C73.5 2 71 17 90.5 17C110 17 112.5 0.999964 125.5 1C138.5 1.00004 148 17 148 17"
            stroke="#3A1772"
            strokeMiterlimit="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 85C4 88 6 101 24.5 101C43 101 42.5 86 58.5 86C74.5 86 72 101 91.5 101C111 101 113.5 85 126.5 85C139.5 85 149 101 149 101"
            stroke="#3A1772"
            strokeMiterlimit="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 64C3 67 5 80 23.5 80C42 80 41.5 65 57.5 65C73.5 65 71 80 90.5 80C110 80 112.5 64 125.5 64C138.5 64 148 80 148 80"
            stroke="#3A1772"
            strokeMiterlimit="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 43C3 46 5 59 23.5 59C42 59 41.5 44 57.5 44C73.5 44 71 59 90.5 59C110 59 112.5 43 125.5 43C138.5 43 148 59 148 59"
            stroke="#3A1772"
            strokeMiterlimit="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 22C3 25 5 38 23.5 38C42 38 41.5 23 57.5 23C73.5 23 71 38 90.5 38C110 38 112.5 22 125.5 22C138.5 22 148 38 148 38"
            stroke="#3A1772"
            strokeMiterlimit="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <img className="hero--styling-arrow" src={arrowPic} alt="" />
    </div>
  );
}

export default Hero;
