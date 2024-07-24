import React from "react";

export default function CategoryCard({ image, name }) {
  return (
    <div
      className={` bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark w-[174px] h-[198px] rounded-[4px] px-[12px] pb-[8px] pt-[12px]`}
    >
      <div className="flex flex-col gap-[8px]">
        <img className="w-[150px] h-[150px]" src={image} alt="" />
        <p className="leading-mdText text-primaryText_Light dark:text-primaryText_Dark font-medium text-md">
          {name}
        </p>
      </div>
    </div>
  );
}
