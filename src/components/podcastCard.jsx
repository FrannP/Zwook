import React from "react";
import { Link } from "react-router-dom";

export default function PodcastCard({ title, category, status, img, link }) {
  const statusColorClass =
    status === "online" ? "bg-successSurface_Dark" : "bg-errorSurface_Dark";
  const statusTextClass =
    status === "online" ? "text-successSurface_Dark" : "text-errorSurface_Dark";

  return (
    <Link
      to={link}
      className="relative w-[308px] h-[180px] rounded-[8px] overflow-hidden flex-shrink-0"
    >
      <img
        className="object-cover w-full h-full rounded-[8px]"
        src={img}
        alt=""
      />

      <div className="absolute top-[12px] right-[12px] flex items-center gap-[8px] rounded-full bg-[#413F3A] bg-opacity-80 px-[8px] py-[4px]">
        <div
          className={`h-[12px] w-[12px] rounded-full ${statusColorClass}`}
        ></div>
        <div className={`font-medium text-smText ${statusTextClass}`}>
          {status === "online" ? "Online" : "Offline"}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-[12px] flex justify-between items-center bg-darkText_Dark bg-opacity-60">
        <h3 className="font-medium text-mdText truncate text-neutralText_Light">
          {title}
        </h3>
        <div className="flex items-center rounded-full bg-brandSurface_Dark py-[4px] px-[8px]">
          <h2 className="text-xsText font-medium">{category}</h2>
        </div>
      </div>
    </Link>
  );
}
