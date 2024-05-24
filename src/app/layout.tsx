import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crux Labs',
  description: 'Crux Labs, A complete IT solution for you'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0F172A]`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
