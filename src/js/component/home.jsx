import React from "react";
import { NavBar } from "./navbar";
import { Wrapper } from "./wrapper";
import { Footer } from "./footer";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div>
      <NavBar />
      <Wrapper />
      <Footer />
    </div>
  );
};

export default Home;
