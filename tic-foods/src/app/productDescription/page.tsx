"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Menu } from "../helpers/dummy";
import Link from "next/link";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FoodDescription = ({
  searchParams,
}: {
  searchParams: { id: string };
}) => {
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [activeTab, setActiveTab] = useState("description"); // State for tabs
  const Products: any = Menu;
  const productId = searchParams.id;
  const food = Products.find(
    (item: any) => item.id === parseInt(productId as string)
  );

  // State for selected image
  const [selectedImage, setSelectedImage] = useState(food.image);

  // Refs for auto-scrolling
  const descriptionRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "description" && descriptionRef.current) {
      descriptionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (tab === "reviews" && reviewsRef.current) {
      reviewsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle increment
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle decrement
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Handlers for buttons
  const handleAddToCart = () => {
    alert("Item added to cart!");
    // Add your cart logic here
  };

  const handleBuyNow = () => {
    alert("Redirecting to payment...");
    // Add your payment logic here
  };

  // State for current thumbnail index
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === food.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [food.images.length]);

  // Update selected image when currentImage changes
  useEffect(() => {
    setSelectedImage(food.images[currentImage]);
  }, [currentImage]);

  return (
    <div>
      <Header />
      <div>
        <div className="container mx-auto px-4 py-10">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 max-w-sm mx-auto">
              {/* Main Image */}
              <div className="mb-4">
                <Image
                  src={selectedImage}
                  alt={food.name}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                  layout="intrinsic"
                  objectFit="cover"
                />
              </div>
              {/* Scrollable Thumbnails */}
              <div className="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                {food.images.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImage(img);
                      setCurrentImage(index);
                    }}
                    className={`border-2 rounded-lg transition-all ${
                      selectedImage === img
                        ? "border-blue-500"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  </button>
                ))}
              </div>
              ;
            </div>

            {/* Description Section */}
            <div className="w-full lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
              <h1 className="text-4xl font-bold text-orange-600 mb-4">
                {food.title}
              </h1>
              <p className="text-gray-700 text-lg leading-7 mb-6">
                {food.description}
              </p>

              {/* Quantity Selector */}
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-black-700 mb-2">
                  Quantity:
                </h2>
                <div className="flex items-center">
                  <button
                    onClick={handleDecrement}
                    className="px-3 py-2 bg-gray-300 text-gray-700 rounded-l-lg focus:outline-none hover:bg-gray-400"
                  >
                    -
                  </button>
                  <div className="px-4 py-2 bg-white text-gray-800 border">
                    {quantity}
                  </div>
                  <button
                    onClick={handleIncrement}
                    className="px-3 py-2 bg-gray-300 text-gray-700 rounded-r-lg focus:outline-none hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>

              <p className="text-2xl font-bold text-gray-800 mb-4">
                Subtotal:{" "}
                <span className="text-orange-500">
                  {`$${(food.price * quantity).toFixed(2)}`}
                </span>
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="px-4 py-2 bg-blue-500 text-white text-md rounded-lg shadow-xl hover:bg-black hover:text-white hover:shadow-lg transition-all"
                >
                  Add to Cart
                </button>

                <button
                  onClick={handleBuyNow}
                  className="px-4 py-2 bg-green-500 text-white text-md rounded-lg shadow-xl hover:bg-green-600 hover:shadow-lg transition-all"
                >
                  Buy it Now
                </button>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-10">
            <div className="flex justify-center border-b">
              <button
                className={`px-4 py-2 text-lg font-semibold ${
                  activeTab === "description"
                    ? "border-b-2 border-orange-500 text-orange-500"
                    : "text-gray-600"
                }`}
                onClick={() => handleTabChange("description")}
              >
                Description
              </button>
              <button
                className={`px-4 py-2 text-lg font-semibold ${
                  activeTab === "reviews"
                    ? "border-b-2 border-orange-500 text-orange-500"
                    : "text-gray-600"
                }`}
                onClick={() => handleTabChange("reviews")}
              >
                Reviews
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4 text-center text-bold">
              <div
                ref={descriptionRef}
                className={`${
                  activeTab === "description" ? "block" : "hidden"
                }`}
              >
                <h2 className="text-2xl font-semibold mb-2">Product Details</h2>
                <p className="text-gray-700 text-left">
                  {food.history || "No additional details available."}
                </p>

                {/* Packet Information */}

                <div className="text-left">
                  <h3 className="text-lg font-bold mb-2">Packet Info:</h3>
                  {Menu?.[0]?.packetInfo ? (
                    <>
                      {Menu[0].packetInfo.map((info, index) => (
                        <div key={index} className="flex items-center mb-2">
                          {/* Green Dot */}
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {/* Text */}
                          <p className="text-gray-800">{info}</p>
                        </div>
                      ))}
                    </>
                  ) : (
                    <p>No packet information available.</p>
                  )}
                </div>

                {/* Ingredients Section */}
                <div className="text-left mt-4">
                  <h3 className="text-lg font-bold mb-2">Ingredients:</h3>
                  {food.ingrediants ? (
                    <p className="text-gray-800">{food.ingrediants}</p>
                  ) : (
                    <p className="text-gray-700">
                      No ingredients listed for this product.
                    </p>
                  )}
                </div>
              </div>

              <div
                ref={reviewsRef}
                className={`${activeTab === "reviews" ? "block" : "hidden"}`}
              >
                <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
                {food.reviews?.length ? (
                  food.reviews.map((review: any, index: number) => (
                    <div key={index} className="mb-2">
                      <p className="font-bold">{review.user}</p>
                      <p>{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <div className="customer-reviews bg-gray-50 py-6 px-4 lg:px-12 rounded-md shadow-sm">
                    {/* Header Section */}
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-semibold text-gray-800">
                        Customer Reviews
                      </h2>
                      <p className="text-gray-600 text-sm mt-1">
                        See what our customers are saying.
                      </p>
                    </div>

                    {/* Average Rating and Stars */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-500 text-3xl">★★★★☆</span>
                        <p className="text-gray-700 text-md font-medium">
                          4.5/5
                        </p>
                      </div>
                      <p className="text-gray-500 text-xs mt-3 md:mt-0">
                        Based on 120+ reviews
                      </p>
                    </div>

                    {/* Review Cards */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {/* Individual Review */}
                      {[
                        {
                          user: "Jane Doe",
                          rating: 5,
                          comment: "Excellent product and service!",
                        },
                        {
                          user: "John Smith",
                          rating: 4,
                          comment: "Very satisfied with my purchase.",
                        },
                        {
                          user: "Emily Clark",
                          rating: 5,
                          comment: "Amazing quality and quick delivery!",
                        },
                      ].map((review, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-md p-3 shadow hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold">
                              {review.user[0]}
                            </div>
                            <div className="ml-2">
                              <p className="font-semibold text-gray-800 text-sm">
                                {review.user}
                              </p>
                              <div className="text-yellow-500 text-xs">
                                {"★".repeat(review.rating)}{" "}
                                {"☆".repeat(5 - review.rating)}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {review.comment}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Call-to-Action */}
                    <div className="text-center mt-6">
                      <Link href="/write-review" passHref>
                        <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md font-medium shadow hover:bg-blue-600 transition-all">
                          Write a Review
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Banner Section */}
        <div className="mt-0">
          <img
            src="/images/banner.jpeg" // Replace with your banner image URL
            alt="Banner"
            className="w-screen h-auto object-cover m-1 rounded-lg shadow"
          />
        </div>

        {/* Related Images Section */}

        <div className="relative w-full mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Related Products
          </h2>
          <div className="slider-container">
            <Slider {...settings}>
              {Products.map((product: any, index: number) => (
                <div
                  key={product.id || index}
                  className="flex-shrink-0 flex flex-col justify-center p-4"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-lg mb-2 shadow"
                  />
                  <h3 className="text-lg font-semibold text-center text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-orange-500 text-lg text-center font-bold">
                    ${product.price}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FoodDescription;
