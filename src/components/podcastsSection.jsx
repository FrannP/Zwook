import React from "react";
import DashboardSectionHeader from "./dashboardSectionHeader";
import PodcastCard from "./podcastCard";
import podcastOne from "../assets/dashboardImages/podcastOne.svg";
import podcastTwo from "../assets/dashboardImages/podcastTwo.svg";
import podcastThree from "../assets/dashboardImages/podcastThree.svg";
import podcastFour from "../assets/dashboardImages/podcastFour.svg";
import podcastFive from "../assets/dashboardImages/podcastFive.svg";

const PodcastCardContainer = () => (
  <section className="flex gap-[24px] overflow-x-auto no-scrollbar">
    <PodcastCard
      img={podcastOne}
      title="Mind Matters"
      category="Premium"
      status="online"
    />
    <PodcastCard
      img={podcastTwo}
      title="Tech Talk"
      category="Premium"
      status="offline"
    />
    <PodcastCard
      img={podcastThree}
      title="History Quest"
      category="Premium"
      status="online"
    />
    <PodcastCard
      img={podcastFour}
      title="Mystery Junction"
      category="Premium"
      status="online"
    />
    <PodcastCard
      img={podcastFive}
      title="Creative Minds"
      category="Premium"
      status="offline"
    />
  </section>
);

export default function PodcastContainer() {
  return (
    <div className="flex flex-col gap-[20px]">
      <DashboardSectionHeader title="Podcasts" buttonLabels={["View All"]} />
      <PodcastCardContainer />
    </div>
  );
}
