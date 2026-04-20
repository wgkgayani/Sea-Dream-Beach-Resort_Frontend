import { Users, Heart, Award, Clock } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Family-Run",
    description: "Personal touch and genuine care from our family to yours",
  },
  {
    icon: Users,
    title: "Warm Hospitality",
    description: "Friendly service that makes you feel at home",
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "Committed to providing the best experience",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always here to help with any request",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">About Sea Dream Beach</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover the story behind your perfect beach getaway
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="/images/hotel-view.jpg"
                alt="Hotel View"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Sea Dream Beach Resort has been a family-run establishment for
                over a decade, welcoming travelers from around the world to
                experience the beauty of Weligama.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our journey began with a simple dream - to create a peaceful
                haven where guests could escape the hustle of daily life and
                reconnect with nature and themselves.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we're proud to offer 7+ beautifully appointed rooms, each
                designed with your comfort in mind. Our 4.5-star guest rating
                reflects our commitment to excellence and genuine hospitality.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
