import headerImg from "../assets/bathroom.jpg";

function Home() {
  return (
    <div>
      <header className="relative w-full max-h-80 overflow-hidden">
        {/* Image itself */}
        <img
          className="w-full h-full object-cover"
          src={headerImg}
          alt="header image of a bathroom"
        />
        {/* Image overlay */}
        <div className="w-full inset-0 absolute bg-gradient-to-t from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.95)] z-10"></div>
        <div className="text-white absolute top-0 z-20 py-7 px-10 sm:px-24 roboto-font space-y-1">
          <h1 className="text-red-800 text-2xl py-5">
            Scratch and Dent Repair Ltd
          </h1>
          <p>Chipped tiles?</p>
          <p>Scratched countertops?</p>
          <p>We restore damaged surfaces to their original beauty.</p>
        </div>
      </header>
    </div>
  );
}

export default Home;
