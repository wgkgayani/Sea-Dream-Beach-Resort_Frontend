"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Samanthi Ramana",
    image: "/images/guest1.jpg",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "/images/guest2.jpg",
    rating: 5,
    text: "Great value for money. Clean rooms, delicious breakfast, and the surfing lessons were fantastic! Highly recommend this resort.",
  },
  {
    id: 3,
    name: "Emma Williams",
    image: "/images/guest3.jpg",
    rating: 4,
    text: "Peaceful getaway with beautiful ocean views. The family running this place makes you feel at home.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="text-sm text-gold font-semibold uppercase tracking-wider mb-2">
            What Guests Say
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Guest Reviews
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white rounded-lg shadow-xl p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gold">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < testimonial.rating ? 'fill-gold text-gold' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <p className="text-gray-600 text-lg mb-6 italic leading-relaxed">
              "{testimonial.text}"
            </p>
            <h4 className="font-semibold text-primary text-xl">{testimonial.name}</h4>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 bg-white rounded-full p-3 shadow-lg hover:bg-gold hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 bg-white rounded-full p-3 shadow-lg hover:bg-gold hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gold w-8' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
