import {
    Box,
    Button,
    Grid,
    MenuItem,
    Select,
    TextField,
    Typography,
    Paper
  } from '@mui/material';
  import { useState, useContext } from 'react';
  import { CurrencyContext } from '../context/CurrencyContext';
  import AmortizationTable from './AmortizationTable';
  
  const LoanCalculator = () => {
    const [amount, setAmount] = useState(100000);
    const [interest, setInterest] = useState(8.5);
    const [years, setYears] = useState(5);
    const [emi, setEmi] = useState(null);
    const [schedule, setSchedule] = useState([]);
    const { currency, setCurrency } = useContext(CurrencyContext);
  
    const calculateEMI = () => {
      const principal = +amount;
      const rate = +interest / 100 / 12;
      const months = +years * 12;
  
      const emiValue = (principal * rate * Math.pow(1 + rate, months)) /
        (Math.pow(1 + rate, months) - 1);
  
      setEmi(emiValue.toFixed(2));
  
      const amortized = [];
      let balance = principal;
  
      for (let i = 1; i <= months; i++) {
        const interestPayment = balance * rate;
        const principalPayment = emiValue - interestPayment;
        balance -= principalPayment;
  
        amortized.push({
          month: i,
          principal: principalPayment.toFixed(2),
          interest: interestPayment.toFixed(2),
          balance: balance.toFixed(2)
        });
      }
  
      setSchedule(amortized);
    };
  
    const reset = () => {
      setSchedule([]);
      setEmi(null);
    };
  
    return (
      <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Loan Calculator Dashboard
        </Typography>
  
        <Paper sx={{ p: 3, mb: 3 }} elevation={3}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Loan Amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Interest Rate (%)"
                value={interest}
                onChange={e => setInterest(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Term (Years)"
                value={years}
                onChange={e => setYears(e.target.value)}
              />
            </Grid>
          </Grid>
  
          <Button
            variant="contained"
            sx={{ mt: 3, width: '100%' }}
            onClick={calculateEMI}
          >
            CALCULATE
          </Button>
        </Paper>
  
        {emi && (
          <>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Monthly EMI: {currency} {emi}
            </Typography>
  
            <Box sx={{ mb: 3 }}>
              <Typography>Currency</Typography>
              <Select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                sx={{ minWidth: 100 }}
              >
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="INR">INR</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="GBP">GBP</MenuItem>
              </Select>
            </Box>
  
            <Button
              variant="outlined"
              color="secondary"
              sx={{ mb: 2 }}
              onClick={reset}
            >
              RESET TABLE
            </Button>
  
            <AmortizationTable data={schedule} currency={currency} />
          </>
        )}
      </Box>
    );
  };
  
  export default LoanCalculator;
  