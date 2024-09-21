'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import snacksAPI from '@/utils/axiosInstance';

const snackContext = createContext();

export const SnackProvider = ({ children }) => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    snacksAPI.get('/snacks').then((response) => {
      console.log(response.data);
      setSnacks(response.data);
    });

    return () => {
      console.log('Cleanup');
    };
  }, []);

  return (
    <snackContext.Provider value={{ snacks }}>{children}</snackContext.Provider>
  );
};

export const useSnacks = () => useContext(snackContext);
