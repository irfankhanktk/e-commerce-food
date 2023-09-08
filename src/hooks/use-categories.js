import {useEffect, useState} from 'react';
import {
  getAllCategories,
  getAllFeaturedCategories,
} from 'services/api/auth-api-actions';

const useCategories = isTab => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = isTab
          ? await getAllCategories()
          : await getAllFeaturedCategories();
        setCategories(response?.data || []);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [isTab]);

  return {loading, categories, error};
};

export default useCategories;
