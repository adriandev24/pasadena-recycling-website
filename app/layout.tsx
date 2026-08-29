import type { Metadata } from 'next';
import { Archivo, Archivo_Black } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
});

const archivoBlack = Archivo_Black({
  variable: '--font-archivo-black',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pasadenarecycling.com'),
  title: 'Pasadena Recycling | Pasadena, Texas',
  description:
    'A family-owned recycling business serving Pasadena, Texas since 2010.',
  openGraph: {
    title: 'Pasadena Recycling',
    description: 'Metal recycling, handled with respect.',
    images: [{ url: '/og.png', width: 1731, height: 909 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pasadena Recycling',
    description: 'Metal recycling, handled with respect.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${archivoBlack.variable}`}>
        {children}
      </body>
    </html>
  );
}
