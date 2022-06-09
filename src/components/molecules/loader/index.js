import React from "react";
import { GridLoader } from "react-spinners";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loaderWrapper">
      <GridLoader color="#0b66c2" />
    </div>
  );
};

export default Loader;
