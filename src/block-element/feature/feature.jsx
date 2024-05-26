import React from "react";
import "./feature.scss";

function Feature() {
  return (
    <>
      <section className="feature">
        <div className="container">
          <p className="feature__title title">Featured works</p>
          <div className="feature__work">
            <div className="item-work">
              <a href="#" className="feature__link">
                <img
                  src="./../public/feature/dashboard.svg"
                  alt="dashboard"
                  className="item-img"
                />
              </a>
              <div className="item-text">
                <a href="#" className="item_title title_h2">
                  Designing Dashboards
                </a>
                <div className="date_prog">
                  <p className="year">2020</p>
                  <p className="prog trans">Dashboard</p>
                </div>
                <p className="item_desc desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="item-work">
              <a href="#" className="feature__link">
                <img
                  src="./../public/feature/portraits.svg"
                  alt="portraits"
                  className="item-img"
                />
              </a>
              <div className="item-text">
                <a href="#" className="item_title title_h2">
                  Vibrant Portraits of 2020
                </a>
                <div className="date_prog">
                  <p className="year">2018</p>
                  <p className="prog trans">Illustration</p>
                </div>
                <p className="item_desc desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="item-work">
              <a href="#" className="feature__link">
                <img
                  src="./../public/feature/malayalam.svg"
                  alt="malayalam"
                  className="item-img"
                />
              </a>
              <div className="item-text">
                <a href="#" className="item_title title_h2">
                  36 Days of Malayalam type
                </a>
                <div className="date_prog">
                  <p className="year">2018</p>
                  <p className="prog trans">Typography</p>
                </div>
                <p className="item_desc desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
