import React from "react";
import Meta from "../meta";
import Nav from "../nav";
import Container from "./Container";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Meta title={title} description={description}></Meta>
      <div className="transition-colors duration-500 min-w-full font-quicksand text-xl flex flex-col items-center text-gray-800">
        <Nav />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default Layout;
