export default function StatsSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-100">
            {/* Tagline */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl text-black font-[300] text-blue mb-2 tracking-tight">
                    <span className="font-[600] italic">90% Less</span>{" "}
                    <span className="italic">Cable Clutter</span>
                </h2>
                <p className="text-4xl text-blue md:text-5xl font-[300] text-ceneter">
                    That’s the Power of <br />Saga.
                </p>
            </div>

            {/* Stats Box */}
            <div className="relative mx-auto w-[95%] h-full md:h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                {/* Blurred background image */}
                <img src="/6.png" alt="Saga Stats Background" className="absolute inset-0 w-full h-full object-cover blur-sm" style={{ zIndex: 1 }} />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" style={{ zIndex: 2 }} />

                {/* Content */}
                <div className="relative z-20 px-6 md:px-16 py-16 md:py-20 text-white text-center">
                    <h3 className="text-3xl md:text-5xl font-[500] mb-8">
                        <span className="text-yellow">15+</span> years of{" "}<br />
                        <span className="font-[500] text-3xl">experience</span>{" "}
                        <span className="text-gray-400 font-[500] text-3xl">and</span>{" "}<span className="font-[500] text-3xl">research</span>
                    </h3>

                    <div className="mx-auto mt-20 flex flex-col md:flex-row justify-around gap-8">
                        {/* Card 1 */}
                        <div className="bg-white/40 rounded-[2rem] py-4 px-6 flex flex-col items-center shadow-xl backdrop-blur-xs box-border 
                                        w-[280px] h-[200px]">
                            <p className="text-xl font-[500] mb-2 text-left ">
                                <span className="text-yellow">20+</span> Engineers & Designers
                            </p>
                            <p className="text-base text-gray-200 text-left">
                                Collaborating in house to perfect safety, scalability,
                                and sleek functionality.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white/40 rounded-[2rem] py-4 px-6 flex flex-col items-center shadow-xl backdrop-blur-xs box-border 
                                        w-[280px] h-[200px]">
                            <p className="text-xl font-[500] mb-2 text-left ">
                                <span className="text-yellow">4</span> Generations of innovation,
                            </p>
                            <p className="text-base text-gray-200 text-left">
                                making Powertracks smarter, safer, and more adaptable than ever.
                            </p>
                        </div>

                        {/* Card 3 */}
                       <div className="bg-white/40 rounded-[2rem] py-4 px-6 flex flex-col items-center shadow-xl backdrop-blur-xs box-border 
                                        w-[280px] h-[200px]">                           
                            <p className="text-xl font-[500] mb-2 text-left w-[100%]">
                                <span className="text-yellow">10K+</span> Units
                                <span className="block">Installed</span>
                            </p>
                            <p className="text-base text-gray-200 text-left">
                                Delivering seamless power solutions for homes, offices,
                                and commercial spaces worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
