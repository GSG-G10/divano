import * as React from "react";
import Box from "@mui/material/Box";
import Img from "../assets/img.png";
import "../App.css";

const Whoweare = () => {
  return (

    <Box
    
      sx={{
        width: "100%",
        height: "100%",
        bgcolor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <div className="whoweare">
        <div className="whowearep">
          <h1 style={{ color: "white" }}>WHO WE ARE ?</h1>
          <p>
            Divano is an e-commerce React website with rest API and fake data
            stored in a relational SQL database that presents furniture products
            and allows users to add products to their cart, delete cart items,
            and control quantity.
          </p>
        </div>
        <div className="whoweareimg">
          <img src={Img} alt="img of sofa" />
        </div>
      </div>
    </Box>
  );
};
export default Whoweare;
