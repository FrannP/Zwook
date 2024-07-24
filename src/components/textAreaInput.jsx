import React from "react";

export default function textAreaInput({
  label,
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <label className="flex flex-col gap-[8px]">
      <span className="font-regular text-mdText text-primaryText_Light dark:text-primaryText_Dark">
        {label}
      </span>
      <textarea
        placeholder={placeholder}
        className="text-mdText font-regular border-[1px] p-[8px] rounded-[4px] h-[151px] placeholder:text-primaryPlaceholderText_Light dark:placeholder:text-primaryPlaceholderText_Dark text-primaryText_Light dark:text-primaryText_Dark bg-secondaryBackground_Light dark:bg-secondaryBackground_Dark border-primaryBorder_Light dark:border-primaryBorder_Dark resize-none focus:outline-none"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        name={name}
      />
    </label>
  );
}
