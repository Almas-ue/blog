import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./block-element/header/header.jsx";
import Glav from "./block-element/app/Glav.jsx";
import Posts from "./block-element/posts/Posts.jsx";
import Feature from "./block-element/feature/feature.jsx";
import Footer from "./block-element/footer/footer.jsx";
import "normalize.css";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Glav />
    <Posts />
    <Feature />
    <Footer />
  </React.StrictMode>
);
