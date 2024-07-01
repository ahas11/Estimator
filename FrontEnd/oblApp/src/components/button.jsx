import React from "react";
//the className is for using a default classname with the classname that i want

const Button = ({ label, type, className, onClick }) => {
  return (
    <button
      type={type || "button"}
      className={`flex items-center justify-center py-2 pc-4 rounded outline-none ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
