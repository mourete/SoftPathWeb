import './globals.css';
import Navbar from './components/Navbar';
import Head from 'next/head';

export const metadata = {
  title: 'Softpath',
  description: 'Reducimos riesgos, construimos confianza',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-100">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
