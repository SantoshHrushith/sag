export default function SagaPersonalization() {
  return (
    <div className="bg-white w-[90vw] h-[30vh] justify-center mx-auto mb-10 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
      {/* Left Image Grid */}
      <div className="w-1/3 bg-gray-100">
        <img
          src="https://eubiq.b-cdn.net/saga/wood.png"
          alt="Wooden and marble finishes"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Center Text */}
      <div className="w-1/3 flex-1 flex items-center justify-center bg-green p-6">
        <p className="text-white text-lg font-medium leading-relaxed">
          Saga takes personalization beyond color choices, offering wooden,
          marble, and other premium textured finishes that seamlessly
          complement your interiors.
        </p>
      </div>

      {/* Right Image Grid */}
      <div className="w-1/3 bg-gray-100">
        <img
          src="https://eubiq.b-cdn.net/saga/marble.png"
          alt="Wooden and marble finishes"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
