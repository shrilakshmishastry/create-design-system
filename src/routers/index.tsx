import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

//import theme here
import Home from "../pages/homePage";

const GlobalRoute: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* theme router here  */}
    </Routes>
  );
};

export default GlobalRoute;
