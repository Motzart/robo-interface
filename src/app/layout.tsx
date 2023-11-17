'use client';
import React from 'react';
import { Inter } from 'next/font/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Header from '@/components/Layouts/Header';
import Nav from '@/components/Layouts/Nav';

import config from '@/config';
import '@/assets/css/globals.css';
import Main from '@/components/Layouts/Main';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { GOOGLE_CLIENT_ID } = config;

  return (
    <html lang="en">
      <body
        className={`${inter.className} grid grid-cols-[100px_1fr] grid-rows-[max-content_1fr] w-screen h-screen`}
      >
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <Header />
          <Nav />
          <Main>{children}</Main>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
