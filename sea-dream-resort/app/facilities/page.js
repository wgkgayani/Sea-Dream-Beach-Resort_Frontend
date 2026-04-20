import {
  Waves,
  Wifi,
  Plane,
  Ship,
  Coffee,
  Utensils,
  Car,
  Dumbbell,
  Sparkles,
  Sun,
  Shield,
  Users,
} from "lucide-react";

const facilitiesList = [
  {
    icon: Waves,
    name: "Beachfront Access",
    description:
      "Step directly onto the golden sands of Weligama Beach from our property",
    color: "blue",
  },
  {
    icon: Wifi,
    name: "Free High-Speed Wi-Fi",
    description:
      "Stay connected with complimentary internet throughout the resort",
    color: "indigo",
  },
  {
    icon: Plane,
    name: "Airport Pickup",
    description:
      "Hassle-free transportation from the airport (available on request)",
    color: "purple",
  },
  {
    icon: Ship,
    name: "Surfing & Whale Watching",
    description: "Exciting tours and adventures organized by our expert team",
    color: "teal",
  },
  {
    icon: Coffee,
    name: "Beachfront Restaurant",
    description:
      "Enjoy delicious local and international cuisine with ocean views",
    color: "orange",
  },
  {
    icon: Utensils,
    name: "Room Service",
    description: "Dine in the comfort of your room with our room service",
    color: "red",
  },
  {
    icon: Car,
    name: "Parking",
    description: "Secure parking available for guests",
    color: "gray",
  },
  {
    icon: Dumbbell,
    name: "Yoga Sessions",
    description: "Morning yoga classes on the beach (upon request)",
    color: "green",
  },
];

export default function FacilitiesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Facilities
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Everything you need for a perfect beach getaway
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilitiesList.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16">
        <div className="container-custom">
          <div className="bg-primary text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Something Special?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Let us know your requirements and we'll do our best to accommodate
              your needs
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
