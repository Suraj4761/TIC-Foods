import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Listing = (props:any) => {

    const {menuItems} =props
    
  return (
    <>
      {/* Animated Scroll Listing */}
      <div className="bg-gray-100 py-10">
        <h2 className="text-center text-3xl font-bold mb-6">Our Menu</h2>
        <div className="flex flex-wrap justify-center">
          {menuItems.map((item:any, index:any) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 p-4 animate-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img
                  style={{ height: 200, width: 150 }}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <p className="mt-2 text-lg font-bold">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideIn {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes scroll {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease forwards;
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        .animate-scroll {
          animation: scroll 0.5s ease forwards;
        }
      `}</style>
    </>
  );
};

export default Listing;
