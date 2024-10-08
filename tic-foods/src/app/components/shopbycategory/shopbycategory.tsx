import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link'; // Import Next.js Link for internal routing
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ShopByCategory = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display 4 sections
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Below this width
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Below this width
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const categories = [
    {
      id: 1,
      imageUrl: 'https://5.imimg.com/data5/ANDROID/Default/2023/12/365067276/VY/MR/WL/87740306/product-jpeg-500x500.jpg',
      title: 'Rice Base Product',
      link: '/category/rice-products', // Add a route to the specific category
    },
    {
      id: 2,
      imageUrl: 'https://www.kitchensanctuary.com/wp-content/uploads/2021/07/Curry-Base-Gravy-square-FS-43.jpg',
      title: 'Curry Base Product',
      link: '/category/curry-products', // Add link to specific category
    },
    {
      id: 3,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fomiIL4J5n15SWmPaq240ZLnKF6blEN6lg&s',
      title: 'Curry Mix',
      link: '/category/curry-mix',
    },
    {
      id: 4,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqUsz76CoDozZZ7TTgqNeWcuR1Wxkjo3IAMw&s',
      title: 'Indian Bread',
      link: '/category/indian-bread',
    },
  ];

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-6">Shop by Category</h2>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="p-4">
            <Link href={category.link} passHref> {/* Use Link directly */}
              <div className="relative h-60 bg-cover bg-center rounded-lg shadow-md cursor-pointer" style={{ backgroundImage: `url(${category.imageUrl})` }}>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg">
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShopByCategory;
