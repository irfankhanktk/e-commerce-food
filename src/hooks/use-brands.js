import {useEffect, useState} from 'react';
import {getBrands} from 'services/api/api-actions';

const useBrands = isTab => {
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBrands();
        console.log('response:::brnads', response?.data);
        setBrands(response?.data || []);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [isTab]);

  return {loading, brands, error};
};

export default useBrands;
