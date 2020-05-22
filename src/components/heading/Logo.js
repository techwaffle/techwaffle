import React from "react";

const Logo = ({ size, className }) => (
  <img className={`h-${size} ${className}`} src="/waffle.svg"></img>
);

export default Logo;
