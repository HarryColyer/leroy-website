import headerImg from "../assets/bathroom.jpg";

function Home() {
  return (
    <div>
      <header className="roboto-font text-white w-full lg:max-h-[450px] xl:max-h-[600px] overflow-hidden grid grid-cols-2 grid-rows-6 lg:grid-rows-2 lg:grid lg:grid-cols-5">
        <div className="roboto-font bg-red-800 py-5 lg:bg-black w-full order-2 lg:order-1 col-span-2 row-span-3 lg:col-start-1 lg:col-end-4 flex flex-col lg:py-6 px-12">
          <h2 className="text-3xl " >Why Replace When You Can Restore?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus sit soluta consequatur odit impedit sed aliquam
            perferendis earum perspiciatis officiis, enim laboriosam accusantium
            adipisci quidem minima reiciendis nisi. Corrupti, iure?
          </p>
          <ul>
            <li>Wood & laminates</li>
            <li>Baths, sinks & showers</li>
            <li>Brick & stone</li>
            <li>Glass polishing</li>
            <li>Wall & floor tiles</li>
            <li>uPVC & aluminum</li>
            <li>Kitchen surfaces</li>
          </ul>
        </div>

        <div className="relative order-1 lg:order-2 h-auto sm:h-[350px] lg:max-h-[450px] w-full col-span-2 row-span-3 lg:row-span-4 lg:col-start-4 lg:col-end-6">
          {/* Image itself */}
          <img
            className="w-full h-full object-cover"
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
