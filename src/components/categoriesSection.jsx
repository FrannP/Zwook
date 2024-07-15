import React from "react";
import DashboardSectionHeader from "./dashboardSectionHeader";
import CategoryCard from "./categoryCard";
import phantomEchoes from "../assets/phantomEchoes.png";

const CategoriesCardContainer = () => (
  <section className="flex gap-[20px]">
    <CategoryCard name="Kiss Dorka" image={phantomEchoes} />
    <CategoryCard name="Luna Nova" image={phantomEchoes} />
    <CategoryCard name="Phantom Echos" image={phantomEchoes} />
    <CategoryCard name="Kiss Dorka" image={phantomEchoes} />
    <CategoryCard name="Max Sterling" image={phantomEchoes} />
    <CategoryCard name="Orion Starlight" image={phantomEchoes} />
    <CategoryCard name="Kiss Dorka" image={phantomEchoes} />
    <CategoryCard name="Phantom echoes" image={phantomEchoes} />
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
