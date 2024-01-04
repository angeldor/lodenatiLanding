import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { menuRoutes } from "./menuRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Routes routes={menuRoutes} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
