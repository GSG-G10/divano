import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CartCard from '../common/cartCard/cartCard'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/AddRounded';
import RemoveIcon from '@mui/icons-material/RemoveRounded';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 22,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, img, price, category, Qty="1") {
  return { name, img, price, category, Qty };
}

const rows = [

  
];

 function CustomizedTables() {
 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 , maxWidth: 1000 , margin: "auto" , marginTop: "10rem" , marginBottom: "10rem"  }} aria-label="customized table">
        <TableHead>
          <TableRow>
             {/* (Product, price, Qty, Total, Delete)*/}
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="right">price&nbsp;($)</StyledTableCell>
            <StyledTableCell align="right">Qty</StyledTableCell>
            <StyledTableCell align="right">Total&nbsp;($)</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
              <CartCard />
              </StyledTableCell>
              <StyledTableCell align="right">{row.price} $ </StyledTableCell>
              <StyledTableCell align="right"> <AddIcon sx={{fontSize:'medium'}} /*onClick={()=> ()} *//> {row.Qty} <RemoveIcon sx={{fontSize:'medium'}} /*onClick={()=> ()} */ /> </StyledTableCell>
              <StyledTableCell align="right">{row.price} $ </StyledTableCell>
              <StyledTableCell align="right"><DeleteOutlineIcon sx={{ color: "#A80C0C" , fontSize: '30px' }}/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTables;