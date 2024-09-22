'use client';
import Image from 'next/image';
import snacksAPI from '@/utils/axiosInstance';
import { useEffect, useState } from 'react';
import SnackCard from '@/components/SnackCard';
import { useSnacks } from '@/contexts/snackContext';
import { Suspense } from 'react';

export default function Home() {
  const { snacks } = useSnacks();
  return (
    <Suspense fallback={Loading}>
      <div>
        {snacks &&
          snacks.map((data, index) => {
            return <SnackCard key={index} snack={data} />;
          })}
      </div>
    </Suspense>
  );
}

export const Loading = () => <h2>Loading... </h2>;
