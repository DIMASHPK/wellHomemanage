import { useEffect, useRef } from 'react';

export const usePrevious = <T extends unknown>(value: T): T => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  return ref.current as T;
};
