import React, { useState } from "react";
import Select from "react-select";
import Slider from "@mui/material/Slider";
import { Button, Card, Row, Col } from "react-bootstrap";
import Checkbox from '@mui/material/Checkbox'


const CustomMenu = (props: any) => {
  const { options, selectOption, getValue } = props;
  const selectedValues = getValue();

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      {options.map((option: any) => (
        <div key={option.value} className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={selectedValues.some(
              (val: any) => val.value === option.value
            )}
            onChange={() => selectOption(option)}
            className="mr-2"
          />
          <label>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

const Filter = (props:any) => {
  const [value, setValue] = React.useState<number[]>([100, 317]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { data, innerRef, innerProps, isSelected } = props;


  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const colourOptions = [
    { label: "Breakfast", value: "Breakfast" },
    { label: "Curry/Dal", value: "Curry/Dal" },
    { label: "Rice", value: "Rice" },
    { label: "Sweet/Dessert", value: "Sweet/Dessert" },
    { label: "QB Bundle", value: "QB Bundle" },
  ];

  const handle = (selected: any) => {
    setSelectedOptions(selected || []);
  };

  const Availability: any = [
    { value: "full-time", label: "Full-Time" },
    { value: "part-time", label: "Part-Time" },
    { value: "freelance", label: "Freelance" },
  ];

  return (
<Card className="filter-card p-5 mt-6 rounded-lg shadow-lg bg-gradient-to-r from-white via-gray-100 to-white">
  <div className="mb-6">
    <h1 className="text-2xl font-bold mb-4 text-gray-800">Categories</h1>
    <Select
      options={colourOptions}
      styles={{
        control: (base, state) => ({
          ...base,
          backgroundColor: "transparent", // Make the control background transparent
          border: "none",
          borderBottom: "2px solid #4CAF50", // Add bottom border
          borderRadius: "0",
          boxShadow: state.isFocused
            ? "0 2px 4px rgba(76, 175, 80, 0.5)"
            : "none",
          "&:hover": {
            borderBottom: "2px solid #45A049",
          },
        }),
        menu: (base) => ({
          ...base,
          position: "relative", // Make menu part of the document flow
          marginTop: "8px",
          backgroundColor: "transparent", // Transparent background for the dropdown
          borderRadius: "8px",
          boxShadow: "none", // Remove box shadow
        }),
        option: (base, state) => ({
          ...base,
          backgroundColor: "transparent", // Keep options background transparent
          color: state.isFocused ? "#256D1B" : "#000", // Default color, green on hover
          padding: "10px 15px",
          "&:hover": {
            backgroundColor: "#E9F7FF", // Light green background on hover
            color: "#4CAF50", // Change text color on hover to match border
          },
        }),
      }}
      placeholder="Select Category"
    />
  </div>

  <div className="mb-6">
  <h1 className="text-2xl font-bold mb-4 text-gray-800">Availability</h1>
  <Select
    options={Availability}
    value={selectedOptions}
    onChange={handle}
    isMulti
    components={{
      Option: (props:any) => {
        const { data, innerRef, innerProps, isSelected } = props;
        return (
          <div
            ref={innerRef}
            {...innerProps}
            className={`option ${isSelected ? 'selected' : ''}`}
            style={{
              backgroundColor: isSelected ? "#E0F4FF" : "transparent",
              color: isSelected ? "#007BFF" : "#000",
              padding: "10px 15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox
              checked={isSelected}
              style={{ marginRight: 10 }} // Space between checkbox and text
            />
            <span style={{ flex: 1 }}>{data.label}</span> {/* Ensure label is displayed */}
          </div>
        );
      },
    }}
    styles={{
      control: (base, state) => ({
        ...base,
        backgroundColor: "transparent", // Transparent background for control
        border: "none",
        borderBottom: "2px solid #007BFF", // Add bottom border
        borderRadius: "0",
        boxShadow: state.isFocused
          ? "0 2px 4px rgba(0, 123, 255, 0.5)"
          : "none",
        "&:hover": {
          borderBottom: "2px solid #0056b3",
        },
      }),
      menu: (base) => ({
        ...base,
        position: "relative", // Keep menu in the flow
        marginTop: "8px",
        backgroundColor: "transparent", // Transparent background for dropdown
        borderRadius: "8px",
        boxShadow: "none", // Remove box shadow
      }),
      option: (base, state) => ({
        ...base,
        backgroundColor: "transparent", // Transparent option background
        color: state.isFocused ? "#0056b3" : "#000", // Default color, blue on hover
        padding: "10px 15px",
        "&:hover": {
          backgroundColor: "#E0F4FF", // Light blue background on hover
          color: "#007BFF", // Change text color on hover to match border
        },
      }),
    }}
    placeholder="Select Availability"
  />
</div>

  <div className="mb-6">
    <h1 className="text-2xl font-bold mb-4 text-gray-800">Price</h1>
    <Slider
      sx={{
        width: "100%",
        color: "primary.main",
        "& .MuiSlider-thumb": {
          backgroundColor: "#007BFF",
          border: "3px solid #fff",
        },
        "& .MuiSlider-rail": {
          backgroundColor: "#e0e0e0",
        },
        "& .MuiSlider-track": {
          backgroundColor: "#007BFF",
        },
      }}
      defaultValue={500}
      getAriaLabel={() => "Price range"}
      value={value}
      min={110}
      max={500}
      onChange={handleChange}
      valueLabelDisplay="auto"
    />
  </div>

  <Row className="justify-content-between">
    <Col xs={6} className="pe-2">
      <Button className="w-100 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-2 px-4 rounded">
        Apply
      </Button>
    </Col>
    <Col xs={6} className="ps-2">
      <Button
        variant="secondary"
        className="w-100 bg-gray-500 text-white font-bold py-2 px-4 rounded"
      >
        Cancel
      </Button>
    </Col>
  </Row>
</Card>

  );
};

export default Filter;
