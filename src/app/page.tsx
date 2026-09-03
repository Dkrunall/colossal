import Hero from "@/components/home/Hero";
import ExperienceExtraordinary from "@/components/home/ExperienceExtraordinary";
import BrandsShowcase from "@/components/home/BrandsShowcase";
import InteractiveOutletsMap from "@/components/home/InteractiveOutletsMap";
import FeaturedSpotlight from "@/components/home/FeaturedSpotlight";
import OurStory from "@/components/home/OurStory";
import VisionariesSection from "@/components/home/VisionariesSection";
import AwardsSection from "@/components/home/AwardsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceExtraordinary />
      <BrandsShowcase />
      <InteractiveOutletsMap />
      <FeaturedSpotlight />
      <OurStory />
      <VisionariesSection />
      <AwardsSection />
    </>
  );
}

