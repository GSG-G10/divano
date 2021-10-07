import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import sofa1 from "../assets/sofa1.png";
import sofa2 from "../assets/sofa2.png";
import sofa3 from "../assets/sofa3.png";
import sofa4 from "../assets/sofa4.png";
import "../App.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function DividerStack() {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <div className="border">
          <p className="arrow">&#171;</p>

          <Item >
              <div className="imgproduct">
            <img src={sofa1} alt="sofa" />
            <p >Regis Cascadia Blue Ottoman Nova Twigligth new sofa</p>
            <p >$1199</p>
            </div>
          </Item>
          <Item >
              <div className="imgproduct">
            <img src={sofa2} alt="sofa" style={{paddingBottom:"45px"}}/>
            <p >Regis Cascadia Blue Ottoman Nova Twigligth new sofa</p>
            <p >$1199</p>
            </div>
          </Item>
          <Item >
              <div className="imgproduct">
            <img src={sofa3} alt="sofa" />
            <p >Regis Cascadia Blue Ottoman Nova Twigligth new sofa</p>
            <p >$1199</p>
            </div>
          </Item>
         

          <p className="arrow">&#187;</p>
        </div>
      </Stack>
    </div>
  );
}
