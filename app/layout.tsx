import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Advocacia Pupulim | Escritório de Advocacia',
  description: 'Advocacia Pupulim - Escritório de advocacia especializado em direito civil, empresarial e trabalhista.',
  keywords: ['advocacia', 'direito', 'advogado', 'jurídico', 'consultoria legal'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}