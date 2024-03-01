import { Link } from "react-router-dom";

function TopHeader() {
  return (
    <>
      <div className="px-2 bg-black">
        <div className="flex justify-around bg-black text-white mx-auto w-screen px-6 py-5">
          <div>
            <button>
              <Link to="/">Home</Link>
            </button>
          </div>
          <div>
            <button>
              <Link to="/rooms">Rooms</Link>
            </button>
          </div>
          <div>
            <button>
              <Link to="/">Bookings</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TopHeader;
