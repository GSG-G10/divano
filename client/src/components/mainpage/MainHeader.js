import "./Style.css";
import { Box } from "@mui/material";
import NavBar from './NavBar'
function MainHeader({username}) {
  return (
    <>
      <NavBar username = {username}/>
      <Box className="banner">
        <Box className="welcome">
          Furniture that <br /> Everyone <br /> loves
        </Box>
      </Box>
    </>
  );
}

export default MainHeader;
