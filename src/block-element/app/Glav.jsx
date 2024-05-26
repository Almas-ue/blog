import React from "react";
import "./Glav.scss";

function Glav() {
  return (
    <>
      <main className="glav">
        <div className="container">
          <section className="glav-main">
            <div className="glav__top">
              <div className="glav__text">
                <h1 className="glav__title">
                  Hi, I am John, <br />
                  Creative Technologist
                </h1>
                <p className="glav__desc desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="glav__hero_img">
                <img src="./glav/glav_img.svg" alt="glav_img" />
              </div>
            </div>
            <div className="glav__footer">
              <a href="#" className="glav__btn btn" download="App.scss">
                Download Resume
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Glav;
