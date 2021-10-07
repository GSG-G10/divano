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
          <h1 style={{color:"white"}}>WHO WE ARE ?</h1>
          <p>
            Danish multinational conglomerate that designs and sells
            ready-to-assemble furniture, kitchen appliances and home
            accessories, among other useful goods and occasionally home
            servicies. Founded in 2010 by 16-years-old Asmaa Najjar, Divano has
            been the world's largest furniture retailer since 2019.
          </p>
        </div>
        <div className="whoweareimg">
          <img src={Img} alt="img of sofa"  />
        </div>
      </div>
    </Box>
  );
};
export default Whoweare;
