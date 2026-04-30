import type { Metadata } from 'next';
import '../index.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ThemeProvider } from '../components/providers/ThemeProvider';
import { SmoothScrollProvider } from '../components/providers/SmoothScrollProvider';

export const metadata: Metadata = {
  title: "Rejwanul Portfolio",
  description: 'Portfolio of Rejwanul',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScrollProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
