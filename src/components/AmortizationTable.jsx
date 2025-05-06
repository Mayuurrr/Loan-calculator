import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
    Paper, Typography
  } from '@mui/material';
  
  const AmortizationTable = ({ data, currency }) => {
    if (!data.length) return null;
  
    return (
      <TableContainer component={Paper} sx={{ mt: 4, maxHeight: 500 }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          Amortization Schedule ({currency})
        </Typography>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell><strong>Month</strong></TableCell>
              <TableCell align="right"><strong>Principal</strong></TableCell>
              <TableCell align="right"><strong>Interest</strong></TableCell>
              <TableCell align="right"><strong>Remaining Balance</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(({ month, principal, interest, balance }) => (
              <TableRow key={month}>
                <TableCell>{month}</TableCell>
                <TableCell align="right">{principal} {currency}</TableCell>
                <TableCell align="right">{interest} {currency}</TableCell>
                <TableCell align="right">{balance} {currency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default AmortizationTable;
  