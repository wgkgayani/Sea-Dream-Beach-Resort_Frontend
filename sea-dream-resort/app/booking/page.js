"use client";
import { Suspense } from "react";
import BookingPageContent from "@/components/booking/BookingPageContent";

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="pt-16 container-custom py-12">Loading...</div>}>
      <BookingPageContent />
    </Suspense>
  );
}
