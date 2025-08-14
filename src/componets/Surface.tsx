import Image from "next/image";

export default function Surface() {
    return (
        <section className="w-full min-h-[150vh] relative flex items-center justify-center">
            {/* Background image */}
            <Image
                src="https://eubiq.b-cdn.net/saga/SAGA_FullProductShot2.png"
                alt="Surface Power Track"
                fill
                className="object-cover z-0"
                priority
            />
            {/* Overlayed content */}
            <div className="absolute top-30 left-30 text-left">
                <h2 className="text-5xl font-[300] text-white mb-4">
                    <span className="font-[600]">Surface</span> Power Track
                </h2>
                <p className="text-white text-lg mb-8">
                    The <span className="font-semibold">S Series</span> comes with an exclusive motion <br />activated LED strip, lighting up your space on cue, <br />no more searching for switches.
                </p>
            </div>


            <div className="absolute bottom-10 left-10 flex flex-col items-center justify-center z-10 px-4">
                <div className="w-full p-10">

                    <h3 className="text-4xl font-bold text-white mb-4">Technical Specifications:</h3>
                    <div className="overflow-x-auto  p-3 border-white border border-2 rounded-lg shadow">
                        <table className="min-w-[400px] text-center w-full text-white rounded-2xl ">
                            <thead>
                                <tr className=" border-b-2 border-white">
                                    <th className="py-2 px-3 font-semibold">Product</th>
                                    <th className="py-2 px-3 font-semibold">Length</th>
                                    <th className="py-2 px-3 font-semibold">Adapter Capacity</th>
                                    <th className="py-2 px-3 font-semibold">Rated Voltage</th>
                                    <th className="py-2 px-3 font-semibold">Rated Current</th>
                                    <th className="py-2 px-3 font-semibold">Max Power Output</th>
                                    <th className="py-2 px-3 font-semibold">Weight (approx)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b-2 border-white">
                                    <td className="py-2 px-3">S 500</td>
                                    <td className="py-2 px-3">500mm</td>
                                    <td className="py-2 px-3">Up to 5 adapters</td>
                                    <td className="py-2 px-3">250 V AC</td>
                                    <td className="py-2 px-3">32 A</td>
                                    <td className="py-2 px-3">4000 W</td>
                                    <td className="py-2 px-3">1.2 kg</td>
                                </tr>
                                <tr className="border-b-2 border-white ">
                                    <td className="py-2 px-3">S 1000</td>
                                    <td className="py-2 px-3">1000mm</td>
                                    <td className="py-2 px-3">Up to 10 adapters</td>
                                    <td className="py-2 px-3">250 V AC</td>
                                    <td className="py-2 px-3">32 A</td>
                                    <td className="py-2 px-3">6400 W</td>
                                    <td className="py-2 px-3">2.0 kg</td>
                                </tr>
                                <tr className="">
                                    <td className="py-2 px-3">S 1500</td>
                                    <td className="py-2 px-3">1500mm</td>
                                    <td className="py-2 px-3">Up to 15 adapters</td>
                                    <td className="py-2 px-3">250 V AC</td>
                                    <td className="py-2 px-3">32 A</td>
                                    <td className="py-2 px-3">8000 W</td>
                                    <td className="py-2 px-3">2.8 kg</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <p className="text-white text-lg mt-10">
                        All power tracks share the same precision engineered core, <br />with variations only in length and capacity.
                    </p>
                </div>
            </div>
        </section>
    );
}