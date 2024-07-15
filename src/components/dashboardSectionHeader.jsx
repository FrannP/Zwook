import React from "react";
import Button from "./button";

export default function DashboardContentHeader({ title, buttonLabels }) {
  return (
    <div className="flex justify-between items-center py-[6px] px-[4px]">
      <h2 className="text-xlText font-semiBold">{title}</h2>
      <div className="flex gap-[12px]">
        {buttonLabels.map((label, index) => (
          <Button key={index} label={label} />
        ))}
      </div>
    </div>
  );
}
