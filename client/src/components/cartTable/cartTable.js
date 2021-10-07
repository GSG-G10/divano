import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CartCard from '../common/cartCard/cartCard';
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

function CustomizedTables({ cartProducts = [], deleteProduct, updateProduct }) {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 400,
          maxWidth: 1000,
          margin: 'auto',
          marginTop: '10rem',
          marginBottom: '10rem',
        }}
        aria-label="customized table"
      >
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
          {cartProducts.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                <CartCard name={row.name} img={row.image} />
              </StyledTableCell>
              <StyledTableCell align="right">{row.price} $ </StyledTableCell>
              <StyledTableCell align="right">
                <AddIcon
                  sx={{
                    fontSize: 'medium',
                    cursor: 'pointer',
                    marginRight: '5px',
                  }}
                  onClick={() => updateProduct(row.id, row.quentity + 1)}
                />
                {row.quentity}
                <RemoveIcon
                  sx={{
                    fontSize: 'medium',
                    cursor: 'pointer',
                    marginLeft: '5px',
                  }}
                  onClick={() => updateProduct(row.id, row.quentity - 1)}
                />{' '}
              </StyledTableCell>
              <StyledTableCell align="right">{row.price} $ </StyledTableCell>
              <StyledTableCell align="right">
                <DeleteOutlineIcon
                  sx={{ color: '#A80C0C', fontSize: '30px', cursor: 'pointer' }}
                  onClick={() => deleteProduct(row.id)}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomizedTables;
