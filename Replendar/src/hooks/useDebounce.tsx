import { useState, useEffect } from 'react';

const useDebounce = (val: string, delay: number) => {
  const [debouncedVal, setDebouncedVal] = useState(val);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedVal(val);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [val, delay]);

  return debouncedVal;
};

export default useDebounce;
