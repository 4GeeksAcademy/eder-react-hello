import React from "react";

export const Jumbotron = () => {
  return (
    <div className="px-2 py-3 px-sm-2 px-md-3 px-lg-4">
      <div className="p5 mb-4 bg-light rounded-3">
        <div className="container-fluid  py-4 py-md-4 py-lg-5">
          <h1 className="display-5 fw-semibold">A Warm Welcome!</h1>
          <p className="col-md-8 fs-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus, veniam repellendus autem quae eos nesciunt ipsum quo
            in illum sequi labore maxime ad praesentium nemo cupiditate ducimus
            debitis vitae eaque.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Call to action!
          </button>
        </div>
      </div>
    </div>
  );
};
