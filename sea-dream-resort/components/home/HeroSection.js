"use client";
import Button from "../common/Button";

const HeroSection = () => {
  const scrollToRooms = () => {
    const roomsSection = document.getElementById("rooms");
    roomsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center pt-20"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="text-sm md:text-base text-gold font-semibold mb-4 uppercase tracking-wider">
          Welcome To Paradise
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Sea Dream Beach Resort
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-100">
          Welcome to Sea Dream Beach Resort, a peaceful and friendly beachfront
          hotel located in beautiful Weligama, Sri Lanka. Experience comfort,
          luxury, and world-class hospitality.
        </p>
        <Button
          onClick={scrollToRooms}
          variant="gold"
          className="text-lg px-8 py-3"
        >
          Explore Rooms
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
