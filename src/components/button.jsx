import React from 'react';

export default function Button({label}) {
  return (
    <button className="h-[36px] p-[12px] text-center rounded-[8px] border-solid border-[1px] border-primaryBorder_Dark text-primaryText_Dark flex justify-center items-center">
      {label}
    </button>
  );
}
