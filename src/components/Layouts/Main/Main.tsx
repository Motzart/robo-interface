'use client';
import React from 'react';

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="col-span-1 sm:order-1 overflow-scroll">{children}</main>
  );
};

export default Main;
