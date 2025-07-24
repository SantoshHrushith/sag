"use client";
import {
    FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaTiktok, FaPinterestP,
} from "react-icons/fa6";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function F() {
    const footerRef = useRef(null);
        const imageRef = useRef<HTMLImageElement | null>(null);


    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: footerRef.current,
            start: "top bottom", // Footer's top reaches bottom of viewport
            end: "bottom bottom",
            scrub: true,
            markers: true, // set to true to debug
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
                // markers:true,
            }
        });
    }, []);

    return (
        <footer
            ref={footerRef}
            className="h-[100vh] bg-gray-900 text-white flex items-center justify-center text-3xl"
        >
            <div
                // ref={containerRef}
                className="bg-gradient-to-l from-black via-neutral-900 to-black h-full w-full p-5 mx-auto flex flex-col md:flex-row gap-10 rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
                {/* Image Section with Parallax Effect */}
                <div className="relative w-full md:w-1/3 min-h-[300px] rounded-xl overflow-hidden shadow-2xl">
                    {/* Parallax Image */}
                    <Image
                        ref={imageRef}
                        src="https://eubiq.b-cdn.net/saga/Hero%20shot.png"
                        alt="Saga Hero"
                        className="w-full h-[155%] object-cover z-0"
                    />

                    {/* Overlay Content */}
                    <div className="absolute top-4 left-10 ">
                        <h2 className="text-2xl font-light">Feel Good</h2>
                        <p className="italic text-xl">with SAGA</p>
                    </div>
                    <button className=" absolute bottom-10 left-50 bg-blue-600 hover:bg-blue-700 transition text-white rounded-full px-5 py-2 mt-4 w-max">
                        Shop
                    </button>
                </div>

                {/* Right Content Section */}
                <div className="w-full md:w-2/3 flex flex-col justify-between gap-10">
                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
                        <div>
                            <h4 className="text-gray-400 font-semibold mb-3">Our Company</h4>
                            <ul className="space-y-2">
                                <li>About Us</li>
                                <li>Leadership</li>
                                <li>Medical Advisory Board</li>
                                <li>Careers</li>
                                <li>Newsroom</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-gray-400 font-semibold mb-3">Support</h4>
                            <ul className="space-y-2">
                                <li>Help</li>
                                <li>Sizing</li>
                                <li>Membership</li>
                                <li>My Account</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-gray-400 font-semibold mb-3">Partner With Us</h4>
                            <ul className="space-y-2">
                                <li>For Business</li>
                                <li>Partnerships</li>
                                <li>Developers</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-gray-400 font-semibold mb-3">Blog</h4>
                            <ul className="space-y-2">
                                <li>The Pulse</li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Icons & Newsletter */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                        {/* Social */}
                        <div>
                            <h4 className="text-gray-400 font-semibold mb-2">Social</h4>
                            <div className="flex gap-4 text-xl text-white">
                                <FaFacebookF />
                                <FaInstagram />
                                <FaXTwitter />
                                <FaYoutube />
                                <FaTiktok />
                                <FaPinterestP />
                            </div>
                        </div>

                        {/* Newsletter */}
                        {/* <div className="w-full lg:w-auto flex-1">
                                 <h4 className="text-gray-400 font-semibold mb-2">
                                     Receive articles, tips, and offers from SAGA
                                 </h4>
                                 <form className="flex flex-col sm:flex-row gap-2 w-full">
                                     <input
                                         type="email"
                                         placeholder="Email address"
                                         className="rounded-full px-4 py-2 bg-neutral-100 text-black outline-none w-full sm:w-64"
                                     />
                                     <button className="bg-neutral-800 hover:bg-neutral-700 transition text-white px-5 py-2 rounded-full">
                                         →
                                     </button>
                                 </form>
                                 <p className="text-xs text-gray-400 mt-2">
                                     We care about protecting your data. Read more in our{" "}
                                     <a href="#" className="underline">
                                         Privacy Policy
                                     </a>
                                     .
                                 </p>
                             </div> */}
                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-gray-700 pt-6 text-xs text-gray-500 flex flex-col lg:flex-row justify-between gap-2">
                        <div className="flex flex-wrap gap-4">
                            <span>Terms & Conditions</span>
                            <span>Privacy Policy</span>
                            <span>Accessibility</span>
                            <span>IP Notice</span>
                            <span>Security Center</span>
                        </div>
                        <div>© 2025 SAGA | All Rights Reserved</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
