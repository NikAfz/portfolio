import { useState } from "react";

import watchShop from "/projects/watchShop.png";
import ezSearch from "/projects/ezSearch.png";
import cryptopia from "/projects/cryptopia.png";
function useProjectData(params) {
  const [data, setData] = useState([
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
      name: "prop",
      img: watchShop,
      codeLink: "google.com",
      liveLink: "google.com",
    },
  ]);
  return data;
}
export default useProjectData;
