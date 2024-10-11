import React from "react";

const Features = () => {
   return (
      <div className="px-4 py-5 mx-auto " style={{ backgroundColor: 'rgba(255, 165, 0, 0.1)' }}>
         <div className="max-w-xl mx-auto text-center">
            <h2 className="mt-6 text-3xl font-bold leading-tight text-orange-500 sm:text-4xl lg:text-5xl font-serif">
               TIC helps you find
               <span className="font-serif text-orange"> Delicious </span>
               Food
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 font-sans">
               Discover, indulge, and elevate your culinary experience with TIC
               . We're not just helping you find delicious food; we're
               making it even better. Join us for a flavorful journey like no
               other.
            </p>
         </div>
         <div className="bg-gray-200 grid grid-cols-1 p-4 mt-12 mb-6 text-center shadow-xl gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 rounded-2xl bg-gray">
         <div>
               <div className="flex items-center justify-center w-45 h-40 mx-auto rounded-full ">
                  <img src="/Images/bowlWater.jpg" alt="Feature 2" className="h-40 w-45 md:rounded" />
               </div>
               <h3 className="mt-8 text-lg font-bold text-black font-serif">
                  Pour contents
               </h3>
               <p className="mt-4 text-md text-gray-600">
                 Pour the contents of a pack into a container
               </p>
            </div>
            <div>
               <div className="flex items-center justify-center w-45 h-40 mx-auto rounded-full ">
                  <img src="/Images/bowlWater.jpg" alt="Feature 1" className="h-40 w-45 md:rounded" />
               </div>
               <h3 className="mt-8 text-lg font-bold text-black font-serif x2x">
                 Boil water
               </h3>
               <p className="mt-4 text-md text-gray-600 te">
                  Add 150-200 ml of boild water into the container
               </p>
            </div>
          
            <div>
               <div className="flex items-center justify-center w-45 h-40 mx-auto rounded-full ">
                  <img src="/Images/readyF.jpg" alt="Feature 3" className="h-40 w-45 md:rounded" />
               </div>
               <h3 className="mt-8 text-lg font-bold text-black font-serif">
                  Stir
               </h3>
               <p className="mt-4 text-md text-gray-600">
                 Stir it few times,and cover it with lid and wait for 5 min
               </p>
            </div>
            <div>
               <div className="flex items-center justify-center w-45 h-40 mx-auto rounded-full ">
                  <img src="/Images/readyF.jpg" alt="Feature 4" className="h-40 w-45 md:rounded" />
               </div>
               <h3 className="mt-8 text-lg font-bold text-black font-serif">
                  Eat
               </h3>
               <p className="mt-4 text-md text-gray-600">
                 Enjoy the meal
               </p>
            </div>
         </div>
      </div>
   );
};

export default Features;
