import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio";
import Page404 from "./pages/404page";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Landing />} />
        <Route path="/portfolio/more" element={<Portfolio />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
