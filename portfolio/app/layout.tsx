import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Andy Faneva Hasintsoa',
  description: 'Portfolio minimaliste et technique',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-blue-950">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
