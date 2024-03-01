import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminPanel from "../Pages/AdminPanel";
import Erke from "../assets/Images/Erke.jpg";

interface Room {
  roomNo: number;
  description: string;
  imagePath: string;
  capacity: number;
  price: number;
  available: boolean;
}

const RoomList: React.FC = () => {
  const [room, setRoomList] = useState<Room[]>([]);
  const [editableRoom, setEditableRoom] = useState<Room | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8087/room/getAll");
        setRoomList(response.data);
      } catch (e: any) {
        toast.error(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <AdminPanel />
      <div className="flex flex-col h-screen w-full">
        <div className="flex justify-center">
          <h2 className="text-2xl font-bold mb-4">Room List</h2>
        </div>
        <table className="w-full mx-auto rounded-lg shadow-md overflow-x-auto">
          <thead className="bg-gray-700 text-white px-4 py-2">
            <tr>
              <th className="text-left">Image</th>
              <th className="text-left">Room Number</th>
              <th className="text-left">Description</th>
              <th className="text-left">Capacity</th>
              <th className="text-left">Price</th>
              <th className="text-left">Available</th>
              <th> Edit </th>
              <th> Delete</th>
            </tr>
          </thead>
          <tbody>
            {room.map((room) => (
              <tr
                key={room.roomNo}
                className="border-b px-4 py-2 hover:bg-gray-200"
              >
                <td className="w-16">
                  <img
                    // src={`../assets/Images/${room.imagePath}`}
                    src={`http://localhost:8087/room/getImageByName/${room.roomNo}`}
                    alt="image"
                    className="rounded-lg w-full h-full object-cover"
                  />
                </td>
                <td className="text-left">{room.roomNo}</td>
                <td className="text-left">{room.description}</td>
                <td className="text-left">{room.capacity}</td>
                <td className="text-left">{room.price}</td>
                <td className="text-left">{room.available ? "Yes" : "No"}</td>
                <td className="text-center">
                  <button className="px-2 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg">
                    Edit
                  </button>
                </td>
                <td className="text-center">
                  <button className="px-2 py-2 bg-red-500 hover:bg-red-700 text-white rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RoomList;
