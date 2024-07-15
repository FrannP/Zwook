import React from "react";

export default function CategoryCard({ image, name }) {
  return (
    <div
      className={`bg-secondaryBackground_Dark w-[174px] h-[198px] rounded-[4px] p-[12px]`}
    >
      <div className="flex flex-col gap-[8px]">
        <img className="w-[150px] h-[150px]" src={image} alt="" />
        <p className="text-primaryText_Dark font-medium text-md">{name}</p>
      </div>
    </div>
  );
}
