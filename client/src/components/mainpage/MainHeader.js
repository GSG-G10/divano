import "./Style.css";
import { Box } from "@mui/material";
function MainHeader({username, setNavBackground}) {
  // setNavBackground('transparent')
  return (
    <>
      <Box className="banner">
        <Box className='welcome'>
          Furniture that <br /> Everyone <br /> loves
        </Box>
      </Box>
    </>
  );
}

export default MainHeader;
