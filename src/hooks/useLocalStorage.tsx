import { useState, useCallback } from 'react';

const useLocalStorage = <T,>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn('Failed to access localStorage:', error);
      window.alert('Failed to access localStorage')
      return initialValue; // Fallback to initial value if localStorage is not accessible
    }
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      // Determine whether value is a function and provide the current storedValue as an argument if so
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch ( error) {
        window.alert('Failed to save to localStorage')
      console.warn('Failed to save to localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
};

export default useLocalStorage;
