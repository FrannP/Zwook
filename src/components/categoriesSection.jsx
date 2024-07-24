import React from "react";
import DashboardSectionHeader from "./dashboardSectionHeader";
import CategoryCard from "./categoryCard";
import cardImageOne from "../assets/cardImageOne.svg";
import cardImageTwo from "../assets/cardImageTwo.svg";
import cardImageThree from "../assets/cardImageThree.svg";
import cardImageFour from "../assets/cardImageFour.svg";
import cardImageFive from "../assets/cardImageFive.svg";
import cardImageSix from "../assets/cardImageSix.svg";
import cardImageSeven from "../assets/cardImageSeven.svg";
import cardImageEight from "../assets/cardImageEight.svg";

const CategoriesCardContainer = () => (
  <section className="flex gap-[20px]">
    <CategoryCard name="Kiss Dorka" image={cardImageOne} />
    <CategoryCard name="Luna Nova" image={cardImageTwo} />
    <CategoryCard name="Phantom Echos" image={cardImageThree} />
    <CategoryCard name="Kiss Dorka" image={cardImageFour} />
    <CategoryCard name="Max Sterling" image={cardImageFive} />
    <CategoryCard name="Orion Starlight" image={cardImageSix} />
    <CategoryCard name="Kiss Dorka" image={cardImageSeven} />
    <CategoryCard name="Phantom echoes" image={cardImageEight} />
  </section>
);

export default function PodcastContainer() {
  return (
    <div className="flex flex-col gap-[20px]">
      <DashboardSectionHeader
        title="Categories"
        buttonLabels={["View All"]}
      />
      <CategoriesCardContainer/>
    </div>
  );
}
