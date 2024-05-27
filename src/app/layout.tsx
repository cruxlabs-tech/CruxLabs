import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AstroGenesis Technology',
  description: 'AstroGenesis Tech, A complete IT solution for you'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-neutral-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
