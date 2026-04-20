"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../common/Button";

const SearchBar = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!checkIn || !checkOut) {
      setError("Please select both check-in and check-out dates");
      return;
    }
    if (checkOut <= checkIn) {
      setError("Check-out date must be after check-in date");
      return;
    }
    setError("");
    console.log("Searching:", { checkIn, checkOut, guests });
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-5xl mx-auto -mt-24 relative z-20 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">
            Check In
          </label>
          <DatePicker
            selected={checkIn}
            onChange={setCheckIn}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            placeholderText="May 15, 2025"
            minDate={new Date()}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">
            Check Out
          </label>
          <DatePicker
            selected={checkOut}
            onChange={setCheckOut}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            placeholderText="May 19, 2025"
            minDate={checkIn || new Date()}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} Guest{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <Button 
            onClick={handleSearch} 
            variant="gold"
            className="w-full justify-center"
          >
            Check Rates
          </Button>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
    </div>
  );
};

export default SearchBar;
