import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "react-bootstrap";

const FullWidthCarousel = (props:any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const ads = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1517511620798-4a03d189f2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE2fHxpbnNpZGV8ZW58MHx8fHwxNjcwMzQyMTEx&ixlib=rb-4.0.3&q=80&w=1920",
      title: "Delicious Indian Cuisine",
      description: "Enjoy the best flavors from India!",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1567518038075-d64f13e6e4c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDMyfHxpbnNpZGV8ZW58MHx8fHwxNjcwMzQyMTEx&ixlib=rb-4.0.3&q=80&w=1920",
      title: "Spicy Indian Delights",
      description: "Taste the spice of life!",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1587656458652-c0c2b482fa7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE3fHxpbnNpZGV8ZW58MHx8fHwxNjcwMzQyMTEx&ixlib=rb-4.0.3&q=80&w=1920",
      title: "Authentic Indian Flavors",
      description: "A taste of tradition!",
    },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {ads.map((ad) => (
          <div
            key={ad.id}
            className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${ad.imageUrl})` }}
          >
            <div className="p-5 md:p-10 w-full h-full text-white flex flex-col lg:flex-row items-center justify-between bg-black bg-opacity-50">
              {/* Left Side: Title and Description */}
              <div className="text-center lg:text-left lg:w-1/2 flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-2">
                  {ad.title}
                </h1>
                <h3 className="text-lg md:text-xl lg:text-4xl mb-4">
                  {ad.description}
                </h3>
                <Button className="mt-5 bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-lg transition-all">
                  Learn More
                </Button>
              </div>

              {/* Right Side: Image */}
              <div className="flex justify-end lg:w-1/2">
                <img
                  src="/Images/5_3d7b73eb-a51c-4c68-a6a5-4aaefd40ade4_1066x.png"
                  className="h-[30vh] w-auto lg:h-[50vh] object-contain rounded-md"
                  alt="Product Image"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FullWidthCarousel;