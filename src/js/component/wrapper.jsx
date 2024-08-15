import React from "react";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";

export const Wrapper = () => {
  return (
    <div className="container-fluid px-2 px-sm-2 px-md-3 px-lg-4 px-xl-5">
      <Jumbotron />
      <Cards />
    </div>
  );
};
