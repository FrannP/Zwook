import React from "react";
import { Link } from "react-router-dom";
import abstractImageOne from "../assets/dashboardImages/abstract-image-1.svg";
import abstractImageTwo from "../assets/dashboardImages/abstract-image-2.svg";

const FeaturedCard = ({ link, title, text, img }) => (
  <Link
    to={link}
    className="relative w-full h-[300px] rounded-[8px] overflow-hidden"
  >
    <img
      className="object-cover w-full h-full rounded-[8px]"
      src={img}
      alt=""
    />
    <div className="absolute bottom-0 left-0 right-0 p-[20px] ">
      <div className="flex items-center justify-between">
        <img src="src\assets\icons\featuredContainer\arrowIcon.svg" alt="" />
      </div>
      <div className="mt-4">
        <h1 className="font-medium text-mdDisplay truncate">{title}</h1>
        <p className="font-semiBold text-mdText truncate">{text}</p>
      </div>
    </div>
  </Link>
);

export default function FeaturedContainer() {
  return (
    <section className="flex gap-[24px] h-[300px] justify-between">
      <FeaturedCard
        link="/dashboard"
        title="Midnight Melodies"
        text="New release “Impressions” coming June,16"
        img={abstractImageOne}
      />
      <FeaturedCard
        link="/dashboard"
        title="Virgos"
        text="New release “Impressions” coming July,29"
        img={abstractImageTwo}
      />
    </section>
  );
}
