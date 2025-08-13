export default function TechnologyQuote() {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background collage */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
        <img src="/1.png" alt="" className="w-full h-full object-cover" />
        <img src="/2.png" alt="" className="w-full h-full object-cover" />
        <img src="/3.png" alt="" className="w-full h-full object-cover" />
        <img src="/4.png" alt="" className="w-full h-full object-cover" />
        <img src="/5.png" alt="" className="w-full h-full object-cover" />
        <img src="/6.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Foreground text box */}
      <div className="relative flex items-center justify-center h-full">
        <div className="bg-white/90 rounded-4xl shadow-lg p-8 w-[80%] md:max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-normal">
            <span className="font-[600]">Great</span> <span className="text-blue font-[600]">Technology</span> is{" "}
            <span className="text-green font-[600]">Invisible.</span>
          </h2>
          <p className=" text-2xl md:text-3xl mt-1">
            it <span className="italic font-[500]">Integrates</span>, it{" "}
            <span className="italic font-[500]">Protects</span>, it{" "}
            <span className="italic font-[500]">Inspires</span>.
          </p>

          <p className="text-xl md:text-2xl text-gray-700 mt-4">
            My drive is to bridge inspiration and <br/>utility for a safer, smarter
            world.
          </p>

          <p className="mt-4 font-semibold">
            Saurabh Saggar, <span className="font-normal">CEO</span>
          </p>
        </div>
      </div>
    </div>
  );
}
