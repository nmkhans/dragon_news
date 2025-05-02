import React from "react";

const Spinner = (props) => {
  return (
    <div {...props}>
      <span className="loading loading-dots loading-xl"></span>
    </div>
  );
};

export default Spinner;
