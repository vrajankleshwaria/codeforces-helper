import React from "react";
import NavBar from "../components/navbar/NavBar";

const AppSkeleton = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};

export default AppSkeleton;
