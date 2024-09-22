'use client';
import Image from 'next/image';
import snacksAPI from '@/utils/axiosInstance';
import { useEffect } from 'react';
import SnackCard from '@/components/SnackCard';
import { useSnacks } from '@/contexts/snackContext';
import { Suspense } from 'react';

export default function Home() {
  const { snacks } = useSnacks();
  return (
    <Suspense fallback={<Loading />}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {snacks && snacks.length > 0 ? (
          snacks.map((snack, index) => <SnackCard key={index} snack={snack} />)
        ) : (
          <h2>No snacks available.</h2>
        )}
      </div>
    </Suspense>
  );
}

export const Loading = () => <h2>Loading...</h2>;
