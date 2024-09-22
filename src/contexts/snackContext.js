'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import snacksAPI from '@/utils/axiosInstance';

const snackContext = createContext();

export const SnackProvider = ({ children }) => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        const response = await snacksAPI.get('/snacks');
        console.log(response.data);
        setSnacks(response.data);
      } catch (error) {
        console.error('Error fetching snacks:', error);
      }
    };

    fetchSnacks();

    return () => {
      console.log('Cleanup');
    };
  }, []);

  return (
    <snackContext.Provider value={{ snacks }}>{children}</snackContext.Provider>
  );
};

export const useSnacks = () => useContext(snackContext);
