import React from "react";
import AvaterImg from "../../assets/avater.png";

const Avater = ({ width, src }) => {
  return (
    <div className="avatar">
      <div
        className={`ring-primary ring-offset-base-100 w-${width} rounded-full ring-2 ring-offset-2`}
      >
        <img src={src || AvaterImg} />
      </div>
    </div>
  );
};

export default Avater;
