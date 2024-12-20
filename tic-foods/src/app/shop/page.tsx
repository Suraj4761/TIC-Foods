"use client";
import React, { useState } from "react";
import { Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Menu } from "../helpers/dummy";
import Filter from "../components/Filter/filter";
import { useRouter } from "next/navigation";

const Shopping = (props: any) => {
  const router: any = useRouter();

  const products: any = Menu;
  console.log("products", products);

  const [toggleStates, setToggleStates] = useState<boolean[]>(
    Array(products?.length).fill(false) // Initialize all to false
  );
  const handleToggle = (index: number) => {
    // Create a new array with updated toggle value at the specific index
    const newToggleStates = [...toggleStates];
    newToggleStates[index] = !newToggleStates[index]; // Toggle the value at the given index
    setToggleStates(newToggleStates); // Update state
  };
  return (
    <div>
      <Row>
        <Col sm={3}>
          <Filter />
        </Col>
        <Col sm={9}>
          <div className="bg-white bg-opacity-50 py-10">
            <h2 className="text-center text-3xl font-bold font-serif mb-10 mt-10 text-orange-500">
              Our Products
            </h2>

            <div className="flex flex-wrap justify-center">
              {products?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 animate-scroll"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card className="ms-4 me-2 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 relative group">
                    <div
                      style={{ position: "absolute", top: "0", right: "0" }}
                      className="mb-5"
                    >
                      {/* Button with index-based toggle state */}
                      <Button
                        className="border-0"
                        variant="bg-color white"
                        onClick={() => handleToggle(index)} // Handle toggle for the specific index
                      >
                        {/* Use toggle state specific to this index */}
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
                        <span className="text-xl font-bold">
                          $ {item.price}
                        </span>
                        <Button
                          style={{
                            backgroundColor: "orange",
                            border: "0",
                            padding: "10px",
                            width: "150px",
                          }}
                          // className="mb-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg duration-0 border border-0 focus:outline-none focus:ring-0 focus:bg-orange-500 active:bg-orange-500"
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
        </Col>
      </Row>
    </div>
  );
};

export default Shopping;
