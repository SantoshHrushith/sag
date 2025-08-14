import { FaRegHeart, FaTemperatureHigh } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FaBed } from "react-icons/fa6";

export default function StatsBanner() {
  const stats = [
    {
      value: "99.9%",
      icon: <FaRegHeart className="inline text-green" />, // Heart icon
      title: "Electrical Efficiency",
      description:
        "Tested and validated under consistent load conditions for maximum performance."
    },
    {
      value: "98%",
      icon: <TbActivityHeartbeat className="inline text-green" />, // Activity heartbeat icon
      title: "Installation Precision",
      description:
        "Optimized for flawless setup in both commercial and residential spaces."
    },
    {
      value: "92%",
      icon: <FaTemperatureHigh className="inline text-green" />, // Temperature icon
      title: "Thermal Resistance Accuracy",
      description:
        "Verified through BIS certified laboratory testing for reliable performance."
    },
    {
      value: "79%",
      icon: <FaBed className="inline text-green" />, // Bolt icon
      title: "Surge Protection Efficiency",
      description:
        "Tested for performance against 6kV/3kA impulse surges to ensure reliable protection."
    }
  ];

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center py-20"
      style={{
        backgroundImage: "url('https://eubiq.b-cdn.net/saga/Chemistry%20Lab%201.png')"
      }}
    >
      <div className="absolute inset-0 h-[75%] backdrop-blur-xs pointer-events-n"></div>
      <div className="relative z-10 md:translate-y-15 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-light mb-12">
          <span className="italic">Design</span> is in our{" "}
          <span className="italic font-semibold">DNA</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/50 backdrop-blur-xs p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <div className="text-4xl font-bold text-green mb-1 flex items-center gap-2 justify-between">
                <span>{stat.value}</span> <span className="text-3xl">{stat.icon}</span>
              </div>
              <div className="text-sm font-medium text-gray-800 mb-3">
                {stat.title}
              </div>
              <p className="text-xs text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}