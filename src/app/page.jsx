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
      <div>
        {snacks &&
          snacks.map((snack, index) => <SnackCard key={index} snack={snack} />)}
      </div>
    </Suspense>
  );
}

export const Loading = () => <h2>Loading...</h2>;
