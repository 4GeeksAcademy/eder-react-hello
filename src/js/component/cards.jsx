import React from "react";
import imgg1 from "../../img/imgg6.jpg";
import imgg2 from "../../img/imgg2.jpg";
import imgg3 from "../../img/imgg3.jpg";
import imgg4 from "../../img/imgg5.jpg";

export const Cards = () => {
  return (
    <div className="container-fluid ">
      <div className="row gy-3 gx-5  justify-content-around py-2">
        <div className="card h-100 col-9 col-sm-7 col-md-4 col-lg-3 col-xl-2 px-0 mx-md-4">
          <img
            src={imgg1}
            className="card-img-top"
            style={{ height: "22em" }}
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card h-100 col-9 col-sm-7 col-md-4 col-lg-3 col-xl-2 px-0">
          <img
            src={imgg2}
            className="card-img-top"
            style={{ height: "22em" }}
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card h-100 col-9 col-sm-7 col-md-4 col-lg-3 col-xl-2 px-0">
          <img
            src={imgg3}
            className="card-img-top"
            style={{ height: "22em" }}
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card h-100 col-9 col-sm-7 col-md-4 col-lg-3 col-xl-2 px-0">
          <img
            src={imgg4}
            className="card-img-top"
            style={{ height: "22em" }}
            alt="..."
          />
          <div className="card-body text-center">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
