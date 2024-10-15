import headerImg from "../assets/bathroom.jpg";

function Home() {
  return (
    <div>
      <header className="relative w-full max-h-80 lg:max-h-[450px] xl:max-h-[600px] overflow-hidden lg:grid lg:grid-cols-5">
        {/* Image itself */}
        <img
          className="w-full h-full object-cover columns-1 col-start-4 col-end-6"
          src={headerImg}
          alt="header image of a bathroom"
        />
        {/* Image overlay */}
        <div className="w-full inset-0 absolute bg-gradient-to-t from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.95)] z-10"></div>
        <div className="text-white absolute top-0 z-20 py-7 px-10 sm:px-24 lg:px-40 lg:py-24 roboto-font space-y-1 lg:space-y-3 col-start-1 col-end-4 lg:bg-black lg:w-full lg:h-full">
          <h1 className="text-red-800 text-2xl py-5 lg:text-4xl lg:py-8">
            Scratch and Dent Repair Ltd
          </h1>
          <p className="lg:text-xl">Chipped tiles?</p>
          <p className="lg:text-xl">Scratched countertops?</p>
          <p className="lg:text-xl">We restore damaged surfaces to their original beauty.</p>
        </div>
      </header>
    </div>
  );
}

export default Home;
