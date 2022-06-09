import React from "react";
import NavBar from "../navbar";

const AppSkeleton = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};

export default AppSkeleton;
