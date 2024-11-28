import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

const Listing = (props: any) => {
  const { menuItems } = props;
  const router = useRouter();
  const handleCardClick = (food: any) => {
    router.push(`/productDescription?id=${food.id}`);
  };

  const [toggleStates, setToggleStates] = useState<boolean[]>(
    Array(menuItems.length).fill(false)
  );

  const handleToggle = (index: number) => {
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = !newToggleStates[index];
    setToggleStates(newToggleStates);
  };

  return (
    <>
      {/* Animated Scroll Listing */}
      <div className="bg-white bg-opacity-50 py-10">
        <h2 className="text-center text-3xl font-bold font-serif mb-10 mt-10 text-orange-500">
          Our Products
        </h2>

        <div className="flex flex-wrap justify-center">
          {menuItems.map((item: any, index: number) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 animate-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card
                onClick={() => handleCardClick(item)}
                className="ms-4 me-2 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 relative group cursor-pointer"
              >
                <div
                  style={{ position: "absolute", top: "0", right: "0" }}
                  className="mb-5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    className="border-0"
                    variant="bg-color white"
                    onClick={() => handleToggle(index)}
                  >
                    {toggleStates[index] ? (
                      <img src="/Images/red-30.png" alt="red icon" />
                    ) : (
                      <img
                        src="/Images/icons8-favorite-30.png"
                        alt="favorite icon"
                      />
                    )}
                  </Button>
                </div>
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="mt-3 w-full h-50 object-cover"
                />

                <Card.Body className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
                  <div>
                    <Card.Title className="text-green-600 font-sans text-2xl">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-gray-700 mt-2 line-clamp-3 font-sans">
                      {item.description}
                    </Card.Text>
                  </div>
                </Card.Body>

                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="flex justify-between items-center">
                    <span className="text-xl font-bold">$ {item.price}</span>
                    <Button
                      style={{
                        backgroundColor: "orange",
                        border: "0",
                        padding: "10px",
                        width: "150px",
                      }}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations and Responsive Styles */}
      <style jsx>{`
        /* CSS Animations */
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
