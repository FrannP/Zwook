import React, { useState } from "react";

export default function Button({ label }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={handleClick}
      className={`h-[36px] p-[12px] text-center rounded-[8px] border-solid border-[1px] border-primaryBorder_Dark flex justify-center items-center transition duration-500 ease-in-out ${
        isActive ? "bg-invertSurface_dark text-invertText_Dark" : "text-primaryText_Dark"
      }`}
    >
      {label}
    </button>
  );
}
