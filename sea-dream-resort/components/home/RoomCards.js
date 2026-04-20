"use client";
import Link from "next/link";
import Button from "../common/Button";

const rooms = [
  {
    id: 1,
    name: "Deluxe Double Room",
    price: 34,
    image: "/images/hero-bg.jpg",
    description: "Spacious room with ocean view, comfortable beds, and private balcony",
  },
  {
    id: 2,
    name: "Deluxe Beachly Room",
    price: 134,
    image: "/images/about.png",
    description: "Premium room with direct beach access and stunning ocean views",
  },
  {
    id: 3,
    name: "Budget Double Room",
    price: 34,
    image: "/images/hero-bg.jpg",
    description: "Comfortable budget-friendly option with quality amenities",
  },
  {
    id: 4,
    name: "Double Room With Private Bathroom",
    price: 134,
    image: "/images/about.png",
    description: "Luxurious room featuring en-suite bathroom and premium fixtures",
  },
  {
    id: 5,
    name: "Large Single Room",
    price: 134,
    image: "/images/hero-bg.jpg",
    description: "Spacious single accommodation with modern design and comfort",
  },
];

const RoomCards = () => {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="text-sm text-gold font-semibold uppercase tracking-wider mb-2">
            Our Accommodations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Sea Dream Rooms
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience comfort and luxury in our beautifully designed rooms with stunning views
          </p>
        </div>
        
        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {rooms.slice(0, 3).map((room) => (
            <div
              key={room.id}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
              
              {/* Content Overlay - Bottom Left */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">
                  {room.name}
                </h3>
                <div className="flex justify-between items-end">
                  <span className="text-sm font-semibold">
                    ${room.price} / Night
                  </span>
                  <Link href={`/booking?room=${room.id}`}>
                    <Button variant="gold" className="text-xs py-1 px-3">
                      Booking Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      

        {/* Bottom 2 Cards - Larger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:max-w-5xl lg:mx-auto">
          {rooms.slice(3, 5).map((room) => (
            <div
              key={room.id}
              className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
              
              {/* Content Overlay - Bottom Left */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {room.name}
                </h3>
                <div className="flex justify-between items-end">
                  <span className="text-lg font-semibold">
                    ${room.price} / Night
                  </span>
                  <Link href={`/booking?room=${room.id}`}>
                    <Button variant="gold" className="text-sm py-2 px-4">
                      Booking Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomCards;
