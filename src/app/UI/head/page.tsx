import React from "react";
import { 
  FaCode, 
  FaPalette, 
  FaMobileAlt, 
  FaRocket, 
  FaCube, 
  FaLayerGroup 
} from "react-icons/fa";

const WebDesignServices = () => {
  const services = [
    {
      icon: FaCode,
      title: "Custom Development",
      description: "Pixel-perfect, performant web solutions",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: FaPalette,
      title: "Creative Design",
      description: "Unique, memorable visual experiences",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: FaMobileAlt,
      title: "Responsive Craft",
      description: "Seamless across all devices",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: FaRocket,
      title: "Performance Optimization",
      description: "Lightning-fast, efficient web experiences",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden flex items-center justify-center p-8">
      <div className="max-w-7xl mx-auto">
        {/* Deconstructed Header */}
        <div className="relative mb-20">
          <div className="absolute -top-16 left-0 text-9xl font-bold opacity-10 text-white">
            WEB
          </div>
          <h2 className="text-6xl font-bold relative z-10">
            <span className="block text-gray-300">Crafting</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Digital Experiences
            </span>
          </h2>
        </div>

        {/* Geometric Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className={`
                  relative group overflow-hidden rounded-3xl 
                  transform transition-all duration-300 
                  hover:-translate-y-4 hover:shadow-2xl
                  bg-gradient-to-br ${service.color}
                  p-8 h-[400px] flex flex-col justify-between
                `}
              >
                {/* Floating Icon */}
                <div className="absolute top-6 right-6 text-5xl opacity-20 group-hover:opacity-40 transition-opacity">
                  <IconComponent />
                </div>

                {/* Content */}
                <div>
                  <div className="mb-6 text-4xl opacity-80 group-hover:opacity-100 transition-opacity">
                    <IconComponent />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/70 group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Hover Reveal */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button className="w-full bg-white/10 backdrop-blur-md py-3 rounded-xl text-white hover:bg-white/20 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive CTA */}
        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12">
            <h3 className="text-4xl font-bold mb-6">
              Lets Build Something 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Extraordinary
              </span>
            </h3>
            <button className="
              px-10 py-4 
              bg-gradient-to-r from-blue-500 to-purple-600 
              text-white 
              rounded-full 
              hover:from-blue-600 hover:to-purple-700 
              transition-all
              group
            ">
              Start Your Project
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignServices;