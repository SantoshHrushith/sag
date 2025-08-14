import Image from "next/image";

export default function PowerOfSaga() {
    return (
        <section className="w-full flex items-center justify-center py-12">
            <div className="relative w-full max-w-5xl min-h-[340px] flex items-center rounded-3xl shadow-xl overflow-hidden" style={{ backgroundColor: '#e5e7eb' }}>
                {/* Gradient overlay */}
                <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: 'linear-gradient(155deg, rgba(0, 0, 0, 0.88) 0%,rgba(0, 0, 0, 0.88) 37%, rgba(229,231,235,0) 100%)' }} />
                <div className="relative  flex-1 text-left pl-15 z-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Inside the Power of Saga</h2>
                    <p className="text-white text-base md:text-lg font-light">
                        Discover the advanced engineering of R Series, from its robust outer shell to premium copper conductors and high tensile support rails built to ensure uninterrupted, high performance energy flow.
                    </p>
                </div>
                <div className="relative flex-1 flex items-center justify-center z-10">
                    <Image
                        src="/explo.png"
                        alt="Saga Exploded View"
                        width={420}
                        height={180}
                        className="rounded-xl object-contain drop-shadow-lg"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}