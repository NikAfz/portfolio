import { useState } from "react";

import watchShop from "/projects/watchShop.png";
import ezSearch from "/projects/ezSearch.png";
import cryptopia from "/projects/cryptopia.png";
import ProM from "/projects/ProM.png";
import libmate from "/projects/LibMate.png";

function useProjectData(params) {
  const [data, setData] = useState([
    {
      name: "LibMate",
      img: libmate,
      codeLink: null,
      liveLink: "https://www.libmate.ir/",
    },
    {
      name: "Luxetick",
      img: watchShop,
      codeLink: "https://github.com/NikAfz/watch-shop",
      liveLink: "https://nikafz.github.io/watch-shop/",
    },
    {
      name: "Ez search",
      img: ezSearch,
      codeLink: "https://github.com/NikAfz/EZ-search",
      liveLink: "https://nikafz.github.io/EZ-search/",
    },
    {
      name: "Cryptopia",
      img: cryptopia,
      codeLink: "https://github.com/NikAfz/cryptopia",
      liveLink: "https://nikafz.github.io/cryptopia/",
    },
    {
      name: "ProM",
      img: ProM,
      codeLink: "https://github.com/NikAfz/project-manager",
      liveLink: "https://nikafz.github.io/project-manager/",
    },
  ]);
  return data;
}
export default useProjectData;
