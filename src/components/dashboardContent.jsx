import FeaturedCard from "./featuredCard";
import PodcastSection from "./podcastsSection";
import FeaturedSection from "./featuredSection";
import CategoriesSection from "./categoriesSection";

export default function DashboardContent() {
  return (
    <div className="flex flex-col gap-[40px]">
      <FeaturedCard />
      <section className="flex flex-col gap-[36px]">
        <PodcastSection />
        <FeaturedSection />
        <CategoriesSection />
      </section>
    </div>
  );
}
