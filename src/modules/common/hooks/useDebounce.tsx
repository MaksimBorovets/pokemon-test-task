import { useState, useEffect } from 'react';

import { IUseDebounceProps } from './types';

export const useDebounce = ({ value, delay }: IUseDebounceProps) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debouncedValue;
};
