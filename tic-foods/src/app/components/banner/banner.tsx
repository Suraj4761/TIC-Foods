import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "react-bootstrap";

const FullWidthCarousel = (props: any) => {
  const settings = {
    dots: false,
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
      imageUrl: "/Images/foodBackground.jpg",
      title: "Delicious Indian Cuisine",
      description: "Enjoy the best flavors from India!",
    },
    {
      id: 2,
      imageUrl: "/Images/foodbg1.jpg",
      title: "Medium Spicy Indian Delights",
      description: "Taste the spice of life!",
    },
    {
      id: 3,
      imageUrl: "/Images/foobg2.jpg",
      title: "Authentic Indian Flavors",
      description: "A taste of tradition!",
    },
  ];

  return (
    <div className="w-full h-[60vh] relative">
      <Slider {...settings}>
        {ads.map((ad) => (
          <div
            key={ad.id}
            className="relative w-full h-full flex items-center justify-center bg-cover bg-center"
          >
            {/* Background Image */}
            <div
              style={{ backgroundImage: `url(${ad.imageUrl})` }}
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
            ></div>

            {/* Black Transparent Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div> 
            {/* Change opacity value for darker or lighter overlay */}

            <div className="relative z-20 p-5 md:p-10 w-full h-full text-white flex flex-col lg:flex-row items-center justify-between">
              {/* Left Side: Title and Description */}
              <div className="text-center lg:text-left lg:w-1/2 flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-2 font-sans">
                  {ad.title}
                </h1>
                <h3 className="text-lg md:text-xl lg:text-4xl mb-4 font-serif">
                  {ad.description}
                </h3>
                <Button
                  size="lg"
                  // className="mt-5 mb-3 bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-lg transition-all border-0"
                >
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
