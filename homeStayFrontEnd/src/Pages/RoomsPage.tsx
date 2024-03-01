import { useEffect, useState } from "react";
import RoomCard from "../Components/RoomCard";
import TopHeader from "../Components/TopHeader";
import axios from "axios";
import { toast } from "react-toastify";

function RoomsPage() {
  interface Room {
    roomNo: number;
    description: string;
    imagePath: string;
    capacity: number;
    price: number;
    available: boolean;
  }
  const [rooms, setRoomsList] = useState<Room[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8087/room/getAll");
        setRoomsList(response.data);
      } catch (e: any) {
        toast.error(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <TopHeader />
      <div className="flex-wrap h-screen w-screen">
        <div className="flex content-between w-screen">
          {rooms.map((room: Room) => (
            <RoomCard key={room.roomNo} room={room} />
          ))}
        </div>
      </div>
    </>
  );
}
export default RoomsPage;
