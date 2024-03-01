import axios, { AxiosError } from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import AdminPanel from "../Pages/AdminPanel";
import { getAuthToken } from "../assets/token";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./FooterProps";
import EditRoom from "./EditRoom";

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
  const navigate = useNavigate();

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

  const handleDeleteRoom = async (room: Room) => {
    console.log("Room to be deleted: " + room);
    const config = {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    };
    try {
      const response = await axios.delete(
        `http://localhost:8087/room/deleteById/${room.roomNo}`,
        config
      );

      if (response.status === 200) {
        toast.success("Room Deleted");
      } else {
        toast.error("An error occurred while deleting room");
      }
    } catch (error: any) {
      console.error(error);
      toast.error("An error occurred while deleting room");
    }
  };

  const handleAvailableRoom = async (room: Room) => {
    console.log("Room to be updated: " + room);
    const config = {
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    };
    try {
      const response = await axios.post(
        `http://localhost:8087/room/changeAvailable/${room.roomNo}`,
        config
      );

      if (response.status === 200) {
        toast.success("Room availability changed");
      } else {
        toast.error("An error occurred.");
      }
    } catch (error: any) {
      console.error(error);
      toast.error("An error occurred.");
    }
  };

  return (
    <>
      <AdminPanel />
      <div className="flex flex-col h-screen w-full">
        <div className="flex justify-center">
          <h2 className="text-2xl font-bold mb-4">Room List</h2>
        </div>
        <div className="flex justify-end">
          <button className="px-5 mb-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg">
            <Link to="/admin/addroom">Add Rooms</Link>
          </button>
        </div>
        <table className="w-full mx-auto rounded-lg shadow-md overflow-x-auto">
          <thead className="bg-gray-700 text-white px-4 py-2">
            <tr>
              <th className="text-left">Image</th>
              <th className="text-center">Room Number</th>
              <th className="text-left">Description</th>
              <th className="text-left">Capacity</th>
              <th className="text-left">Price</th>
              <th className="text-left">Available</th>
              <th>Edit</th>
              <th>Delete</th>
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
                    src={`http://localhost:8087/room/getImageByName/${room.roomNo}`}
                    alt="image"
                    className="rounded-lg w-full h-full object-cover"
                  />
                </td>
                <td className="text-center">{room.roomNo}</td>
                <td className="text-left">{room.description}</td>
                <td className="text-left">{room.capacity}</td>
                <td className="text-left">{room.price}</td>
                <td className="text-left">
                  {/* Conditional rendering based on availability */}
                  {room.available ? (
                    <button
                      onClick={() => handleAvailableRoom(room)}
                      className="px-2 py-2 bg-green-500 hover:bg-green-700 text-white rounded-lg"
                    >
                      Yes
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAvailableRoom(room)}
                      className="px-2 py-2 bg-red-500 hover:bg-red-700 text-white rounded-lg"
                    >
                      No
                    </button>
                  )}
                </td>
                <td className="text-center">
                  <button className="px-2 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg">
                    <Link to="/admin/addroom">Edit</Link>
                  </button>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleDeleteRoom(room)}
                    className="px-2 py-2 bg-red-500 hover:bg-red-700 text-white rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default RoomList;
