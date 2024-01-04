import { useState } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import Layout from "./components/layout/Layout";
import { Router } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
