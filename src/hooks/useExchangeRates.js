import { useEffect, useState } from 'react';
import axios from 'axios';

const useExchangeRates = (base = 'USD') => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await axios.get(`https://v6.exchangerate-api.com/v6/85e95d37102b59b4ed37925a/latest/${base}`);
        setRates(res.data.conversion_rates);
      } catch (err) {
        console.error("Failed to fetch exchange rates", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [base]);

  return { rates, loading };
};

export default useExchangeRates;
