import { Link } from "react-router-dom";
import Footer from "../Components/FooterProps";
import TopHeader from "../Components/TopHeader";
import LivingRoom from "../assets/Images/livingRoom.jpg";
import Outside from "../assets/Images/outside.jpg";
import Parking from "../assets/Images/parking.jpg";

function HomePage() {
  return (
    <>
      <TopHeader />
      <h1 className="text-3xl font-bold mb-4 text-center">
        Welcome to Our HomeStay
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-16">
        <img
          src={LivingRoom}
          alt="Living room image"
          className="rounded-lg shadow-md h-full object-cover"
        />
        <div className="flex flex-col justify-center bg-gray-100 p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Living Room</h1>
          <p className="text-gray-700 leading-loose">
            Step into a haven of relaxation and connection. Our thoughtfully
            designed living room welcomes you with warmth and style. Here, you
            can unwind after a long day, gather with loved ones, or simply enjoy
            a quiet moment of reflection.
          </p>
          <Link className="py-2 px-4" to="/rooms">
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-16">
        <img
          src={Outside}
          alt="Living room image"
          className="rounded-lg shadow-md h-full object-cover"
        />
        <div className="flex flex-col justify-center bg-gray-100 p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">HomeStay</h1>
          <p className="text-gray-700 leading-loose">
            As you approach, you'll be captivated by the timeless beauty of the
            exterior. The sprawling grounds surrounding the house are adorned
            with colorful gardens, blue sky, and meandering pathways, inviting
            you to explore and unwind. Step inside, and you'll be greeted by a
            warm and inviting atmosphere, where modern comforts seamlessly blend
            with traditional charm. The spacious living areas feature exposed
            wooden beams, stone accents, and large windows that flood the rooms
            with natural light, creating a serene ambiance. The heart of the
            home is the gourmet kitchen, where culinary delights come to life
            amidst granite countertops, stainless steel appliances, and custom
            cabinetry. Whether you're hosting a dinner party or enjoying a quiet
            meal with loved ones, this kitchen is sure to inspire your inner
            chef.
          </p>
          <Link to="/rooms">
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </Link>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-16">
        <img
          src={Parking}
          alt="Living room image"
          className="rounded-lg shadow-md h-full object-cover"
        />
        <div className="flex flex-col justify-center bg-gray-100 p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Parking</h1>
          <p className="text-gray-700 leading-loose">
            Welcome to our exclusive in-house parking facility designed to cater
            to all your vehicle storage needs. This spacious and secure parking
            area is conveniently located within our premises, offering easy
            access and peace of mind for your valuable automobiles.
            Accommodating up to six four-wheelers and four two-wheelers, our
            parking space is thoughtfully designed to optimize efficiency
            without compromising on safety or comfort. As you enter, you'll
            appreciate the well-lit and impeccably maintained environment,
            ensuring a pleasant parking experience every time. Each designated
            parking spot is generously sized to comfortably accommodate a
            variety of vehicles, from compact cars to SUVs, with ample room for
            maneuverability. Our dedicated parking attendants are always on hand
            to assist you in finding the perfect spot and ensuring that your
            vehicle is safely parked. For added convenience, our parking
            facility is equipped with state-of-the-art security features,
            including 24/7 surveillance cameras and secure access control,
            providing you with the peace of mind that your vehicles are
            protected at all times. Whether you're a resident or a visitor, our
            in-house parking facility offers the perfect solution for your
            parking needs. Experience hassle-free parking with us and enjoy the
            convenience of having your vehicles securely stored within our
            premises. Welcome to worry-free parking at its finest.
          </p>
          <Link to="/rooms">
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
