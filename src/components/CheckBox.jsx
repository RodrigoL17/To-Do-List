import React from "react";

const CheckBox = ({ setChecked }) => {
  const handleCheck = (event) => {
    event.target.checked ? setChecked("checked") : setChecked("");
  };

  return <input type="checkbox" className="checkbox" onClick={handleCheck} />;
};

export default CheckBox;
