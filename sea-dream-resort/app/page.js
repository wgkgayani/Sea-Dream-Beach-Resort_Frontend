import HeroSection from "@/components/home/HeroSection";
import SearchBar from "@/components/home/SearchBar";
import AboutPreview from "@/components/home/AboutPreview";
import RoomCards from "@/components/home/RoomCards";
import Facilities from "@/components/home/Facilities";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SearchBar />
      <AboutPreview />
      <RoomCards />
      <Facilities />
      <Testimonials />
    </>
  );
}
