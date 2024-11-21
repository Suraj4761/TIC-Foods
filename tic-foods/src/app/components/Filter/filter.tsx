import React from "react";
import Select, { StylesConfig } from "react-select";
import Slider from "@mui/material/Slider";

const Filter = () => {
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
      };

  const colourOptions: any = [
    { label: "Breakfast", value: "Breakfast" },
    { label: "Curry/Dal", value: "Curry/Dal" },
    { label: "Rice", value: "Rice" },
    { label: "Sweet/Dessert", value: "Sweet/Dessert" },
    { label: "QB Bundle", value: "QB Bundle" },
  ];

  const Availability: any = [
    { label: "In Stock", value: "In Stock" },
    { label: "Out Of Stock", value: "Out Of Stock" },
  ];
  console.log("🚀 ~ Filter ~ colourOptions:", colourOptions);
  return (
    <>
    <div className="ms-3"> 

      <h1>Categories</h1>
      <Select
        // defaultValue={colourOptions[2]}
        options={colourOptions}
        // styles={colourStyles}
        />
      &nbsp;
      <h1>Availability</h1>
      <Select
        // defaultValue={colourOptions[2]}
        options={Availability}
        // styles={colourStyles}
        />
        </div>
      <div className="mt-3 ms-3">
        <h1>Price</h1>
        <Slider
        sx={{ width: 400, color: 'success.main' }}
          defaultValue={500}
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
        //   getAriaValueText={valuetext}
        />
      </div>
    </>
  );
};

export default Filter;
