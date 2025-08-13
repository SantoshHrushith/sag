'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
    FaInstagram, FaXTwitter, FaYoutube, FaLinkedin
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    // const imageRef = useRef<HTMLImageElement | null>(null);
    // const containerRef = useRef<HTMLDivElement | null>(null);


    // useEffect(() => {
    //     const img = imageRef.current;

    //     const container = containerRef.current;
    //     if (!img || !container) return;

    //     gsap.to(img, {
    //         y: -200,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: container,
    //             start: "top bottom",   // starts when footer enters viewport
    //             end: "bottom bottom",     // ends when footer leaves
    //             scrub: true,
    //         }
    //     });
    // }, []);
    const footerRef = useRef(null);
    const imageRef = useRef<HTMLImageElement | null>(null);


    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: footerRef.current,
            start: "top bottom", // Footer's top reaches bottom of viewport
            end: "bottom bottom",
            scrub: true,
        });

        return () => trigger.kill();
    }, []);
    useEffect(() => {
        const img = imageRef.current;

        const container = footerRef.current;

        gsap.to(img, {
            y: -200,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top bottom",   // starts when footer enters viewport
                end: "bottom bottom",     // ends when footer leaves
                scrub: true,
            }
        });
    }, []);

    return (
        <footer className="bg-black text-white px-8 py-8">
            <div className="max-w-[100%] mx-auto flex flex-col md:flex-row items-start md:items-center gap-10">

                {/* Left Image Section */}
                <div className="w-full md:w-[35%] max-w-full h-[250px] md:h-[300px] bg-white rounded-2xl overflow-hidden">
                    <img src="/footer.png" alt="SAGA" className="object-cover" />
                </div>

                {/* Links Section */}

                <div className=" w-full md:w-[60%] bg-[#1c1c1c] rounded-2xl py-5 lg:rounded-[60px]">


                    <div className=" mx-auto my-auto grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-4 w-[90%] h-[90%]">

                        {/* Our Company */}
                        <div>
                            <h3 className="text-green font-semibold mb-3">Our Company</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm hover:text-yellow">About Us</a></li>
                                <li><a href="#" className="text-sm hover:text-yellow">SAGA Brand</a></li>
                                <li><a href="#" className="text-sm hover:text-yellow">Contact Us</a></li>
                                <li><a href="#" className="text-sm hover:text-yellow">Our Team</a></li>
                            </ul>
                            <div>
                                <h3 className="text-green font-semibold mt-5 mb-3">Social</h3>
                                <div className="flex space-x-4 text-xl">
                                    <a href="#" className="hover:text-yellow"><FaInstagram /></a>
                                    <a href="#" className="hover:text-yellow"><FaYoutube /></a>
                                    <a href="#" className="hover:text-yellow"><FaXTwitter /></a>
                                    <a href="#" className="hover:text-yellow"><FaLinkedin /></a>
                                </div>
                            </div>

                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-green font-semibold mb-3">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm hover:text-yellow">SAGA Powertracks</a></li>
                                <li><a href="#" className="text-sm hover:text-yellow">SAGA Adaptors</a></li>
                                <li><a href="#" className="text-sm hover:text-yellow">Why SAGA</a></li>
                                <li><a href="#" className="text-sm hover:text-yellow">How to use</a></li>
                                <li><a href="#" className="text-sm hover:text-yellow">Catalogue</a></li>
                            </ul>
                        </div>

                        {/* Partner With Us */}
                        <div>
                            <h3 className="text-green font-semibold mb-3">Partner With Us</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm hover:text-yellow">Price List</a></li>
                                <li><a href="#" className="text-sm hover:text-yellow">For Business</a></li>
                                <li><a href="#" className="text-sm hover:text-yellow">Partnerships</a></li>
                                <li><a href="#" className="text-sm hover:text-yellow">Developers</a></li>
                            </ul>
                        </div>

                        {/* Blogs & FAQs */}
                        <div>
                            <h3 className="text-green font-semibold mb-3">Blogs</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-sm hover:text-yellow">Power Redefined</a></li>
                            </ul>

                            <h3 className="text-green font-semibold mt-5 mb-3">FAQ’s</h3>
                            <ul>
                                <li><a href="#" className="text-sm hover:text-yellow">FAQ’s</a></li>
                            </ul>
                        </div>
                        {/* <div>
                        <h3 className="text-green font-semibold mt-5 mb-3">Social</h3>
                        <div className="flex space-x-4 text-xl">
                            <a href="#" className="hover:text-yellow"><FaInstagram /></a>
                            <a href="#" className="hover:text-yellow"><FaYoutube /></a>
                            <a href="#" className="hover:text-yellow"><FaXTwitter /></a>
                            <a href="#" className="hover:text-yellow"><FaLinkedin /></a>
                        </div>
                    </div> */}

                    </div>


                </div>


            </div>


            {/* Bottom Line */}
            <div className="border-t border-gray-500 mt-6 pt-4 text-center text-sm text-gray-400">
                © 2025 SAGA a Brand by The Sixty One. | All Rights Reserved
            </div>
        </footer>
    );
}
{/* <div className="relative w-full md:w-1/3 min-h-[100px] rounded-xl overflow-hidden shadow-2xl">
                    <img
                        ref={imageRef}
                        src="https://eubiq.b-cdn.net/saga/Hero%20shot.png"
                        alt="Saga Hero"
                        className="w-full h-[155%] object-cover z-0"
                    />

                    <div className="absolute top-4 left-10 ">
                        <h2 className="text-2xl font-light">Feel Good</h2>
                        <p className="italic text-xl">with SAGA</p>
                    </div>
                </div> */}

// <footer ref={footerRef}className="bg-black text-white lg:h-[50vh] w-full shadow-2xl p-5">
//     <div

//         className="bg-gradient-to-l from-black via-neutral-900 to-black h-full w-full p-5 mx-auto flex flex-col md:flex-row gap-10 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)]"
//     >
//         {/* Image Section with Parallax Effect */}
//         <div className="relative w-full md:w-1/3 min-h-[100px] rounded-xl overflow-hidden shadow-2xl">
//             {/* Parallax Image */}
//             <img
//                 ref={imageRef}
//                 src="https://eubiq.b-cdn.net/saga/Hero%20shot.png"
//                 alt="Saga Hero"
//                 className="w-full h-[155%] object-cover z-0"
//             />

//             {/* Overlay Content */}
//             <div className="absolute top-4 left-10 ">
//                 <h2 className="text-2xl font-light">Feel Good</h2>
//                 <p className="italic text-xl">with SAGA</p>
//             </div>
//             <button className=" absolute bottom-10 left-50 bg-blue-600 hover:bg-blue-700 transition text-white rounded-full px-5 py-2 mt-4 w-max">
//                 Shop
//             </button>
//         </div>

//         {/* Right Content Section */}
//         <div className="w-full bg-white md:w-2/3 flex flex-col justify-between gap-10">

//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
//                 <div>
//                     <h4 className="text-gray-400 font-semibold mb-3">Our Company</h4>
//                     <ul className="space-y-2">
//                         <li>About Us</li>
//                         <li>Leadership</li>
//                         <li>Medical Advisory Board</li>
//                         <li>Careers</li>
//                         <li>Newsroom</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h4 className="text-gray-400 font-semibold mb-3">Support</h4>
//                     <ul className="space-y-2">
//                         <li>Help</li>
//                         <li>Sizing</li>
//                         <li>Membership</li>
//                         <li>My Account</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h4 className="text-gray-400 font-semibold mb-3">Partner With Us</h4>
//                     <ul className="space-y-2">
//                         <li>For Business</li>
//                         <li>Partnerships</li>
//                         <li>Developers</li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h4 className="text-gray-400 font-semibold mb-3">Blog</h4>
//                     <ul className="space-y-2">
//                         <li>The Pulse</li>
//                     </ul>
//                 </div>
//             </div>

//             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
//                 <div>
//                     <h4 className="text-gray-400 font-semibold mb-2">Social</h4>
//                     <div className="flex gap-4 text-xl text-white">
//                         <FaFacebookF />
//                         <FaInstagram />
//                         <FaXTwitter />
//                         <FaYoutube />
//                         <FaTiktok />
//                         <FaPinterestP />
//                     </div>
//                 </div>


//             </div>

//             <div className="border-t border-gray-700 pt-6 text-xs text-gray-500 flex flex-col lg:flex-row justify-between gap-2">
//                 <div className="flex flex-wrap gap-4">
//                     <span>Terms & Conditions</span>
//                     <span>Privacy Policy</span>
//                     <span>Accessibility</span>
//                     <span>IP Notice</span>
//                     <span>Security Center</span>
//                 </div>
//                 <div>© 2025 SAGA | All Rights Reserved</div>
//             </div>
//         </div>
//     </div>
// </footer>
