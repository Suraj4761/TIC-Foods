import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

const Listing = (props: any) => {
  const { menuItems } = props;

  return (
    <>
      {/* Animated Scroll Listing */}
      <div className="bg-white bg-opacity-50 py-10">
        <h2 className="text-center text-3xl font-bold mb-6">Our Menu</h2>

        <div className="flex flex-wrap justify-center">
          {menuItems.map((item: any, index: any) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 animate-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card
                className="ms-4 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 relative group"
                // Fixed height for all cards
              >
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="mt-3 w-full h-50 object-cover"
                />

                <Card.Body className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
                  <div>
                    <Card.Title className="text-green-600 font-sans text-xl font-sans">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="text-gray-700 mt-2 line-clamp-3 font-sans">
                      {item.description}
                    </Card.Text>
                  </div>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="flex justify-between items-center">
                    <span className="text-lg font-bold">$ {item.price}</span>
                    {/* Button initially hidden, shown on hover */}
                    <Button className="mb-1 bg-purple-600 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-lg transition-all opacity-100 duration-0">
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
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
