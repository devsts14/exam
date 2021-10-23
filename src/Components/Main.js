import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Main = ({ children }) => {
  return (
    <div className="main">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
