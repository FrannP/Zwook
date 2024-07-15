import FeaturedContainer from "./featuredContainer";
import PodcastSection from "./podcastsSection";
import FeaturedSection from "./featuredSection";
import CategoriesSection from "./categoriesSection";

export default function DashboardContent() {
  return (
    <div className="absolute top-[92px] left-[332px] right-[36px] flex flex-col gap-[40px]">
      <FeaturedContainer />
      <section className="flex flex-col gap-[36px]">
        <PodcastSection />
        <FeaturedSection />
        <CategoriesSection />
      </section>

    </div>
  );
}
