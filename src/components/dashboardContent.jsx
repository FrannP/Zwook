import FeaturedContainer from "./featuredContainer";
import PodcastContainer from "./podcastsContainer";

export default function DashboardContent() {
  return (
    <div className="absolute top-[92px] left-[332px] right-[36px] flex flex-col gap-[40px]">
      <FeaturedContainer />
      <section className="flex flex-col gap-[36px]">
        <PodcastContainer />
      </section>
    </div>
  );
}
