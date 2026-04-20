"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@/components/common/Button";

export default function BookingPageContent() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("room");

  const [bookingData, setBookingData] = useState({
    checkIn: null,
    checkOut: null,
    guests: 2,
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!bookingData.checkIn) newErrors.checkIn = "Check-in date is required";
    if (!bookingData.checkOut)
      newErrors.checkOut = "Check-out date is required";
    if (bookingData.checkOut <= bookingData.checkIn) {
      newErrors.checkOut = "Check-out must be after check-in";
    }
    if (!bookingData.name) newErrors.name = "Name is required";
    if (!bookingData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(bookingData.email))
      newErrors.email = "Email is invalid";
    if (!bookingData.phone) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const calculateTotal = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const nights = Math.ceil(
        (bookingData.checkOut - bookingData.checkIn) / (1000 * 60 * 60 * 24),
      );
      return nights * 34;
    }
    return 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log("Booking submitted:", bookingData);
      alert("Booking request sent! We will contact you shortly to confirm.");
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <div className="pt-16">
      <div className="bg-primary text-white py-12">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Book Your Stay
          </h1>
          <p className="text-lg">Reserve your dream beach getaway</p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">
                Booking Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2">Check In *</label>
                  <DatePicker
                    selected={bookingData.checkIn}
                    onChange={(date) =>
                      setBookingData({ ...bookingData, checkIn: date })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholderText="Select date"
                    minDate={new Date()}
                  />
                  {errors.checkIn && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.checkIn}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Check Out *
                  </label>
                  <DatePicker
                    selected={bookingData.checkOut}
                    onChange={(date) =>
                      setBookingData({ ...bookingData, checkOut: date })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholderText="Select date"
                    minDate={bookingData.checkIn || new Date()}
                  />
                  {errors.checkOut && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.checkOut}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Number of Guests *
                </label>
                <select
                  name="guests"
                  value={bookingData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} Guest{num > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  name="specialRequests"
                  rows="3"
                  value={bookingData.specialRequests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Any special requests or requirements?"
                ></textarea>
              </div>

              <Button type="submit" variant="gold" className="w-full">
                Confirm Booking
              </Button>
            </form>
          </div>

          {/* Booking Summary */}
          <div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-primary mb-4">
                Booking Summary
              </h3>
              <div className="space-y-3 mb-4 pb-4 border-b">
                <div className="flex justify-between">
                  <span>Room Rate</span>
                  <span>S$34 / night</span>
                </div>
                {bookingData.checkIn && bookingData.checkOut && (
                  <div className="flex justify-between">
                    <span>Number of Nights</span>
                    <span>
                      {Math.ceil(
                        (bookingData.checkOut - bookingData.checkIn) /
                          (1000 * 60 * 60 * 24),
                      )}{" "}
                      nights
                    </span>
                  </div>
                )}
              </div>
              <div className="flex justify-between font-bold text-lg mb-4">
                <span>Total</span>
                <span className="text-gold">S${calculateTotal()}</span>
              </div>
              <p className="text-sm text-gray-500">
                * No prepayment required. Pay at the property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
