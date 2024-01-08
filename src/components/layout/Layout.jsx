import React from "react";
import Navbar from "./navbar/Navbar";
import {Outlet} from "react-router-dom"
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div>
      <div style={{height: "20vh"}}>
        <Navbar/>
      </div>
      <div style={{ minHeight: "70vh" }}>
        <Outlet/>
      </div>
      <div style={{ height: "10vh" }}>
        <Footer/>
      </div>
    </div>
  )
};

export default Layout;
