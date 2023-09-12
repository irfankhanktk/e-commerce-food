import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {getVendors} from 'services/api/api-actions';
import {UTILS} from 'utils';

const useVendors = isTab => {
  const [loading, setLoading] = useState(true);
  const [vendors, setVendors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getVendors();
        console.log('response:::useVendors', response?.data);
        setVendors(response?.data || []);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
        Alert.alert('Error', UTILS.returnError(err));
      }
    };

    fetchData();
  }, [isTab]);

  return {loading, vendors, error};
};

export default useVendors;
