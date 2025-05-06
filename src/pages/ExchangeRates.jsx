import useExchangeRates from '../hooks/useExchangeRates';
import {
  Typography, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper, CircularProgress
} from '@mui/material';

const ExchangeRates = () => {
  const { rates, loading } = useExchangeRates('USD');

  return (
    <div style={{ padding: '1rem' }}>
      <Typography variant="h4" gutterBottom>
        Live Exchange Rates
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Currency Rate (1 USD = ?)
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                <TableCell><strong>Currency</strong></TableCell>
                <TableCell align="right"><strong>Rate</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(rates).map(([currency, rate]) => (
                <TableRow key={currency}>
                  <TableCell>{currency}</TableCell>
                  <TableCell align="right">{rate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default ExchangeRates;
