import React from 'react';
import Header from '@/components/common/header';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.scss';
import { Providers } from '@/app/providers';

export const metadata: Metadata = {
  title: 'Crypto GREEnavi',
  description: 'crypto exchange GREEnavi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header isBig />
        <Providers>{children}</Providers>
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ fontSize: '16px' }}
          theme='dark'
        />
      </body>
    </html>
  );
}
