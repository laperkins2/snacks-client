'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import snacksAPI from '@/utils/axiosInstance';

const snackContext = createContext();

export const SnackProvider = ({ children }) => {
  const [snacks, setSnacks] = useState([]);

  // useEffect(() => {
  //   snacksAPI.get('/snacks').then((response) => {
  //     console.log(response.data);
  //     setSnacks(response.data);
  //   });

  //   return () => {
  //     console.log('Cleanup');
  //   };
  // }, []);
  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        const response = await snacksAPI.get('/snacks');
        setSnacks(response.data);
      } catch (error) {
        console.error('Error fetching snacks:', error);
      }
    };

    fetchSnacks();
  }, []);

  return (
    <snackContext.Provider value={{ snacks }}>{children}</snackContext.Provider>
  );
};

export const useSnacks = () => useContext(snackContext);
