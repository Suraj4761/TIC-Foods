import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link'; // Import Next.js Link for internal routing
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ShopByCategory = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Display 4 sections
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
      link: '/category/rice-products',
    },
    {
      id: 2,
      imageUrl: 'https://www.kitchensanctuary.com/wp-content/uploads/2021/07/Curry-Base-Gravy-square-FS-43.jpg',
      title: 'Curry Base Product',
      link: '/category/curry-products',
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
    {
      id: 1,
      imageUrl: 'https://5.imimg.com/data5/ANDROID/Default/2023/12/365067276/VY/MR/WL/87740306/product-jpeg-500x500.jpg',
      title: 'Rice Base Product',
      link: '/category/rice-products',
    },
    {
      id: 2,
      imageUrl: 'https://www.kitchensanctuary.com/wp-content/uploads/2021/07/Curry-Base-Gravy-square-FS-43.jpg',
      title: 'Curry Base Product',
      link: '/category/curry-products',
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
    {
      id: 1,
      imageUrl: 'https://5.imimg.com/data5/ANDROID/Default/2023/12/365067276/VY/MR/WL/87740306/product-jpeg-500x500.jpg',
      title: 'Rice Base Product',
      link: '/category/rice-products',
    },
    {
      id: 2,
      imageUrl: 'https://www.kitchensanctuary.com/wp-content/uploads/2021/07/Curry-Base-Gravy-square-FS-43.jpg',
      title: 'Curry Base Product',
      link: '/category/curry-products',
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
    {
      id: 1,
      imageUrl: 'https://5.imimg.com/data5/ANDROID/Default/2023/12/365067276/VY/MR/WL/87740306/product-jpeg-500x500.jpg',
      title: 'Rice Base Product',
      link: '/category/rice-products',
    },
    {
      id: 2,
      imageUrl: 'https://www.kitchensanctuary.com/wp-content/uploads/2021/07/Curry-Base-Gravy-square-FS-43.jpg',
      title: 'Curry Base Product',
      link: '/category/curry-products',
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
    <div className="py-10 bg-gray-200">
      <h2 className="text-center text-3xl font-bold font-serif mb-10 text-orange-500">Shop by Categories</h2>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="flex justify-center p-2">
            <Link href={""} passHref>
              <div className="flex flex-col items-center cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out">
                <div
                  className="bg-cover bg-center rounded-full"
                  style={{
                    backgroundImage: `url(${category.imageUrl})`,
                    width: '6rem',  // Set width to 6rem for smaller size
                    height: '6rem',  // Set height to 6rem for smaller size
                  }}>
                </div>
                <h1 className="text-lg font-sans text-center py-2 transition-colors duration-300 hover:text-orange-500 hover:underline">
                  {category.title}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShopByCategory;
