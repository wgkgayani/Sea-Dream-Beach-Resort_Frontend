import { Waves, Wifi, Plane, Ship } from "lucide-react";

const facilities = [
  {
    icon: Waves,
    name: "Beachfront Access",
    description: "Direct access to beautiful Weligama Beach",
  },
  {
    icon: Wifi,
    name: "Free Wi-Fi",
    description: "High-speed internet throughout the property",
  },
  {
    icon: Plane,
    name: "Airport Pickup",
    description: "Available on request (50% Deposit)",
  },
  {
    icon: Ship,
    name: "Surfing & Whale Watching Tours",
    description: "Exciting water sports available",
  },
];

const Facilities = () => {
  return (
    <section className="py-20 bg-brown-500">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Enjoy Complete Rest
          </h2>
          <p className="text-xl text-brown-100">Quality Facilities</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div 
                key={index} 
                className="text-center group border-2 border-gold/30 p-8 rounded-lg hover:border-gold transition-colors"
              >
                <div className="bg-white/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:text-brown-500 transition-all duration-300">
                  <Icon className="w-12 h-12 text-gold group-hover:text-brown-500 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{facility.name}</h3>
                <p className="text-brown-100">{facility.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
