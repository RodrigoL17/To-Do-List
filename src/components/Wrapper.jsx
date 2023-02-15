import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <h1>To-Do</h1>
      {children}
    </div>
  );
};

export default Wrapper;
