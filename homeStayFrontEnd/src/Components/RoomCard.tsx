interface Room {
  roomNo: number;
  description: string;
  imagePath: string;
  capacity: number;
  price: number;
  available: boolean;
}
function RoomCard(room: Room) {
  console.log(room);
  room = room.room;
  console.log(room.roomNo);
  return (
    <>
      <div className="max-w-sm max-h-max rounded overflow-hidden shadow-lg">
        <img
          className="rounded-lg w-full object-cover"
          src={`http://localhost:8087/room/getImageByName/${room.roomNo}`}
          alt="Room Image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Room Number: {room.roomNo}
          </div>
          <p className="text-gray-700 text-base">{room.description}</p>
        </div>
        <div className="flex-row justify-center px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {room.capacity} people
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            NRs. {room.price}
          </span>
        </div>
      </div>
    </>
  );
}
export default RoomCard;
