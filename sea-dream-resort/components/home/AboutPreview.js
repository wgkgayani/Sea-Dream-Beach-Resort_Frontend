import Link from "next/link";
import Button from "../common/Button";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/about.png"
              alt="Sea Dream Beach Resort"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="text-sm text-gold font-semibold uppercase tracking-wider mb-2">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sea Dream Beach Guest House
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Sea Dream Beach Resort is a family-run beach hotel offering
              comfortable accommodation in a calm and relaxing environment. We
              welcome guests from all around the world and provide clean rooms,
              friendly service, and easy access to Weligama Beach and nearby
              attractions.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-4xl font-bold text-gold">7+</div>
                <div className="text-gray-600 font-medium">Rooms</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gold">4.5</div>
                <div className="text-gray-600 font-medium">Guest Rating</div>
              </div>
            </div>

            <Link href="/about">
              <Button variant="gold">More About</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
