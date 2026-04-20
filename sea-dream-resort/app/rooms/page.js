import RoomCards from "@/components/home/RoomCards";

export default function RoomsPage() {
  return (
    <div className="pt-16">
      <div className="bg-primary text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold mb-4">Our Rooms</h1>
          <p className="text-lg">Choose the perfect room for your stay</p>
        </div>
      </div>
      <RoomCards />
    </div>
  );
}
