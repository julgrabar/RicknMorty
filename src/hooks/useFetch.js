import { useEffect, useState } from 'react';

export const statusList = {
  IDLE: 'idle',
  LOAD: 'loading',
  ERR: 'error',
};

export const useFetch = callback => {
  const [data, setData] = useState(null);

  const [status, setStatus] = useState(statusList.IDLE);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      setStatus(statusList.LOAD);
      try {
        const result = await callback();
        if (!ignore) {
          setData(result);
        }
      } catch (error) {
        setStatus(statusList.ERR);
        setData([]);
      } finally {
        setStatus(statusList.IDLE);
      }
    };
    fetchData();
    return () => {
      ignore = true;
    };
  }, [callback]);
  return { data, status };
};
