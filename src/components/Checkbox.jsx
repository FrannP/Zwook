import React from 'react';
import checkIcon from "../assets/icons/newAlbum/check.svg";

export default function Checkbox({ label, checked, onChange, name }) {
  const handleCheckboxChange = () => {
    onChange(name, !checked);
  };

  return (
    <label className="flex items-center gap-[8px] cursor-pointer">
      <div className="relative flex">
        <input
          type="checkbox"
          className={`appearance-none w-[16px] h-[16px] border-[1px] rounded-[4px] transition duration-500 ease-in-out ${
            checked
              ? "bg-primarySurface_Light  dark:bg-primarySurface_Dark border-primaryBorder_Light dark:border-primaryBorder_Dark"
              : "bg-primarySurface_Light dark:bg-primarySurface_Dark border-primaryBorder_Light dark:border-primaryBorder_Dark"
          }`}
          checked={checked}
          onChange={handleCheckboxChange}
          name={name}
        />
        {checked && (
          <img
            src={checkIcon}
            alt="Checked"
            className="absolute left-[50%] -ml-[4px] -mt-[4px] top-[50%] w-[8px] h-[8px] filter invert"
          />
        )}
      </div>
      <span className="font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark">
        {label}
      </span>
    </label>
  );
}
