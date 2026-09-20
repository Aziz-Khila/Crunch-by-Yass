import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutTeaser from "@/components/AboutTeaser";
import SocialTeaser from "@/components/SocialTeaser";
import CtaBand from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <AboutTeaser />
      <SocialTeaser />
      <CtaBand />
    </>
  );
}
