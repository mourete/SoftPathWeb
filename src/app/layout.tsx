import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'SoftPath',
  description: 'Reducimos riesgos, construimos confianza',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
