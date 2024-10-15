import headerImg from "../assets/bathroom.jpg";

function Home() {
  return (
    <div>
      <header className="roboto-font text-white w-full lg:max-h-[450px] xl:max-h-[600px] overflow-hidden grid grid-cols-2 grid-rows-6 lg:grid-rows-2 lg:grid lg:grid-cols-5">
        <div className="roboto-font bg-red-800 py-16 px-12 md:px-20 w-full order-2 lg:order-1 col-span-2 row-span-3 lg:col-start-1 lg:col-end-4 flex flex-col lg:py-6 ">
          <h2 className="text-2xl py-4 ">Why Replace? When You Can Restore.</h2>
          <p className="text-base py-3">
            At Scratch and Dent Repairs, we provide professional surface
            restoration services, delivering high-quality repairs that restore
            surfaces to their original condition. Our expertise helps you avoid
            the expense of replacement while ensuring excellent results.
          </p>
          <ul className="pt-2 pl-4 space-y-1 grid grid-cols-2 font-bold">
            <li>Woods</li>
            <li>Laminates</li>
            <li>Baths, Sinks & Showers</li>
            <li>Brick & Stone</li>
            <li>Glass Polishing</li>
            <li>Wall & Floor tiles</li>
            <li>uPVC</li>
            <li>Kitchen Surfaces</li>
          </ul>
        </div>

        <div className="relative order-1 sm:h-[450px] lg:order-2 h-auto lg:max-h-[450px] w-full col-span-2 row-span-3 lg:row-span-4 lg:col-start-4 lg:col-end-6">
          {/* Image itself */}
          <img
            className="w-full h-full inset-0 object-cover"
            src={headerImg}
            alt="header image of a bathroom"
          />
          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.95)]"></div>
        </div>
      </header>
    </div>
  );
}

export default Home;
