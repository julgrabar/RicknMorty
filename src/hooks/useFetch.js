import { useEffect, useState } from 'react';

export const useFetch = callback => {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      setIsLoading(true);
      setErrorMessage(null);
      try {
        const result = await callback();
        if (!ignore) {
          setData(result);
        }
      } catch (error) {
        setErrorMessage(
          error.response?.data?.error || 'Something went wrong..'
        );
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      ignore = true;
    };
  }, [callback]);
  return { data, isLoading, errorMessage };
};
