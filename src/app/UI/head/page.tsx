import React from "react";
import { 
  FaCode, 
  FaPalette, 
  FaMobileAlt, 
  FaRocket, 
  FaCube, 
  FaLayerGroup 
} from "react-icons/fa";

const Head = () => {
  const services = [
 
    {
      icon: FaPalette,
      title: "Creative Design",
      description: "Make landing page with AI look amazing with designs people won’t forget.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: FaCode,
      title: "SEO",
      description: "Build your site to be fast, sharp, and ready to rank on Google.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: FaMobileAlt,
      title: "Responsive Craft",
      description: "Your site will look great and work perfectly on every screen.",
      color: "from-green-400 to-teal-500",
    },
    {
      icon: FaRocket,
      title: "Performance Optimization",
      description: "Make your site super fast and smooth to use.",
      color: "from-orange-500 to-red-600",
    },
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
  <span className="block text-gray-400">Shaping the Future</span>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
    With AI Creations
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
            <a href="/login">
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
