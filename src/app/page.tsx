'use client';
import { MainTabs } from '@/components/MainTabs/MainTabs';

export default function Home() {
  return (
    <>
      <h1 className="flex justify-center py-5 text-blue font-bold">
        Explore AI Characters
      </h1>
      <MainTabs />
    </>
  );
}
