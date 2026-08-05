import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import BrandsShowcase from "@/components/home/BrandsShowcase";
import Experiences from "@/components/home/Experiences";
import Snapshot from "@/components/home/Snapshot";
import PressStrip from "@/components/home/PressStrip";
import ReservationsCTA from "@/components/home/ReservationsCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <BrandsShowcase />
      <Experiences />
      <Snapshot />
      <PressStrip />
      <ReservationsCTA />
    </>
  );
}
