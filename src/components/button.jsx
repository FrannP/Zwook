import React from "react";

export default function Button({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`h-[36px] p-[12px] text-center rounded-[8px] border-solid border-[1px] border-primaryBorder_Dark flex justify-center items-center transition duration-500 ease-in-out ${
        isActive
          ? "bg-invertSurface_Light dark:bg-invertSurface_dark text-invertText_Light dark:text-invertText_Dark"
          : "text-primaryText_Light dark:text-primaryText_Dark"
      }`}
    >
      {label}
    </button>
  );
}
