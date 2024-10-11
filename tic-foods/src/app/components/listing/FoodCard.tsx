import React from "react";
import { AiFillStar } from "react-icons/ai";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }:any) => {
  const imm ="data:image/jpeg;base64,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"

   return (
      <div
         className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-2xl gap-2 shadow-xl
      ">
         <img
            src={imm}
            alt=""
            className="w-auto h-[130px]  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
         />
         <div className="flex justify-between text-sm">
            <h2>{name}</h2>
            <span className="text-yellow ">$ {price}</span>
         </div>
         <p className="text-sm font-normal">{desc.slice(0, 40)}...</p>
         <div className="flex justify-between ">
            <span className="flex items-center justify-center">
               <AiFillStar className="mr-1 text-yellow" /> {rating}
            </span>
            {/* Add to Cart */}
            <button
               onClick={() => {
                  handleToast(name);
               }}
               className="p-1 text-sm text-white rounded-lg bg-yellow hover:text-black">
               Add to cart
            </button>
         </div>
      </div>
   );
};

export default FoodCard;
