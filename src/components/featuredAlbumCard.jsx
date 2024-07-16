import React from "react";
import { Link } from "react-router-dom";
import abstractImageOne from "../assets/dashboardImages/abstract-image-1.svg";
import abstractImageTwo from "../assets/dashboardImages/abstract-image-2.svg";

const FeaturedCard = ({ link, title, description, img }) => (
  <Link
    to={link}
    className=" relative w-full h-[300px] rounded-[8px] overflow-hidden"
  >
    <img
      className="object-cover w-full h-full rounded-[8px]"
      src={img}
      alt=""
    />
    <div className="flex absolute bottom-0 left-0 right-0 p-[20px] gap-[24px]">
      <img
        className="w-159 h-150"
        src="src\assets\albumPreviewImages\Image.svg"
        alt=""
      />
      <div className="flex flex-col-reverse ">
        <p className="leading-md font-semiBold text-mdText truncate">{description}</p>
        <h1 className="leading-[94px] font-medium text-xl2Display truncate">
          {title}
        </h1>
        <h4 className="leading-md text-mdText font-semiBold">Playlist</h4>
      </div>
    </div>
  </Link>
);

export default function FeaturedContainerAlbum() {
  return (
    <section className="flex gap-[24px] h-[300px] justify-between">
      <FeaturedCard
        link="/dashboard"
        title="Midnight Melodies"
        description="New release “Impressions” coming June,16"
        img={abstractImageOne}
      />
    </section>
  );
}
