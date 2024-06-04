import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string) => {
  const getValue = () => {
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(storage) : null;
  };
  const [state, setState] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};
