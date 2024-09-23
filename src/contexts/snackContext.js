'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import snacksAPI from '@/utils/axiosInstance';

const SnackContext = createContext();

export const SnackProvider = ({ children }) => {
  const [snacks, setSnacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        const response = await snacksAPI.get('/snacks');

        setSnacks(response.data);
      } catch (error) {
        console.error('Error fetching snacks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSnacks();
  }, []);

  return (
    <SnackContext.Provider value={{ snacks, loading }}>
      {children}
    </SnackContext.Provider>
  );
};

export const useSnacks = () => useContext(SnackContext);
