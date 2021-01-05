import React from "react";

const Button = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="transition-shadow duration-300 rounded-md w-min border-2 border-gray-800 flex group items-center p-2 thumbnail-shadow bg-white dark:bg-gray-800 dark:border-yellow-50"
    >
      {children}
    </a>
  );
};

export default Button;
