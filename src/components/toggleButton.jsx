import React from 'react';

export default function ToggleButton() {
  return (

<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="relative w-[36px] h-[20px] border-solid  border-[red] bg-primaryActiveSurface_Light peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#2970FF33] dark:peer-focus:ring-[#2970FF33] rounded-full peer dark:bg-primaryActiveSurface_dark peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-neutralSurface_Light after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-neutralSurface_Light after:border-primaryBorder_Light after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all dark:border-primaryBorder_Dark peer-checked:bg-brandSurface_Light"></div>
</label>


  );
}
