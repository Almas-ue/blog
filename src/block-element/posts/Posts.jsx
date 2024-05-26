import React from "react";
import "./Posts.scss";

function Posts() {
  return (
    <>
      <section className="post">
        <div className="container">
          <div className="post__header">
            <p className="post__title title">Recent post</p>
            <a href="#" className="post_all_btn">
              View all
            </a>
          </div>
          <div className="item_posts">
            <div className="post__card">
              <div className="post__inner-card">
                <h3 className="card_title title_h3">
                  Making a design system from scratch
                </h3>
                <div className="date_prog">
                  <p className="date">12 Feb 2020</p>
                  <p className="line">|</p>
                  <p className="prog">Design, Pattern</p>
                </div>
                <p className="card_desc desc">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="post__card">
              <div className="post__inner-card">
                <h3 className="card_title title_h3">
                  Creating pixel perfect icons in Figma
                </h3>
                <div className="date_prog">
                  <p className="date">12 Feb 2020</p>
                  <p className="line">|</p>
                  <p className="prog">Design, Pattern</p>
                </div>
                <p className="card_desc desc">
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

export default Posts;
