import React, { useState } from "react";
import Button from "./button";

export default function DashboardContentHeader({ title, buttonLabels }) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index === activeButtonIndex ? null : index);
  };

  return (
    <div className="flex justify-between items-center py-[6px] px-[4px]">
      <h2 className="text-primaryText_Light dark:text-primaryText_Dark text-xlText font-semiBold">
        {title}
      </h2>
      <div className="flex gap-[12px]">
        {buttonLabels.map((label, index) => (
          <Button
            key={index}
            label={label}
            isActive={index === activeButtonIndex}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
