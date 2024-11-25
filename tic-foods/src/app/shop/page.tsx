"use client";
import React, { useState } from "react";
import { Row, Col, Button, Card, ListGroup, Carousel } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Menu } from "../helpers/dummy";
import Filter from "../components/Filter/filter";
import { useRouter } from "next/navigation";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Select, { StylesConfig } from "react-select";

const Shopping = (props: any) => {
  const router: any = useRouter();

  const products: any = Menu;
  console.log("products", products);

  const sortOptions: any = [
    { label: "Best Selling", value: "Best Selling" },
    { label: "Alphabetically A-Z", value: "Alphabetically A-Z" },
    { label: "Alphabeticaly Z-A", value: "Alphabeticaly Z-A" },
    { label: "Price,Low to High", value: "Price,Low to High" },
    { label: "Price,High to Low", value: "Price,High to Low" },
  ];

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
      <Header />
      <div className="mt-5 d-flex justify-content-end me-5 align-items-center">
        <label className="me-3 font-bold text-2xl">Sort by</label>
        <div className="custom-select-container">
          <Select
            defaultValue="Newest"
            options={sortOptions}
            className="custom-select"
            classNamePrefix="custom-select"
          />
        </div>
      </div>

      <Row className="mt-3">
        {/* Flexbox parent Row to ensure equal heights */}
        <Col
          className="ms-4 me-1"
          sm={12}
          md={3}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {/* Filter component will grow with flex */}
          <Filter />
        </Col>

        <Col
          sm={12}
          md={8}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {/* Content inside this column will fill the remaining space */}
          <div className="bg-white bg-opacity-50 py-10 flex-grow-1">
            <div className="card-container flex flex-wrap justify-between">
              {products?.map((item: any, index: number) => (
                <div
                  key={index}
                  className="card-item w-full sm:w-1/2 md:w-1/3 p-4 animate-scroll"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Card className="ms-4 me-2 shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 relative group hover:shadow-2xl">
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        zIndex: "1",
                      }}
                      className="mb-5"
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

                    {/* Carousel for multiple images */}
                    <Carousel className="w-full h-50">
                      {item.images?.map((image: any, idx: any) => (
                        <Carousel.Item key={idx}>
                          <img
                            className="d-block w-100 h-50 object-cover"
                            src={image}
                            alt={`Image ${idx + 1}`}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>

                    <Card.Body className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
                      <div>
                        <Card.Title className="text-green-600 font-sans text-2xl font-semibold">
                          {item.title}
                        </Card.Title>
                        <Card.Text className="text-gray-700 mt-2 line-clamp-3 font-sans text-sm">
                          {item.description}
                        </Card.Text>
                      </div>
                    </Card.Body>

                    <ListGroup className="list-group-flush">
                      <ListGroup.Item className="flex justify-between items-center">
                        <span className="text-xl font-bold text-green-600">
                          $ {item.price}
                        </span>
                        <Button
                          style={{
                            backgroundColor: "orange",
                            border: "0",
                            padding: "10px",
                            width: "150px",
                          }}
                          className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-600"
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

      <Footer />
    </div>
  );
};

export default Shopping;
