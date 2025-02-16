import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mohammed El Idrissi | Développeur Full Stack JavaScript',
  description: 'Développeur Full Stack spécialisé en JavaScript, TypeScript, React.js, Next.js, Node.js et MongoDB. Découvrez mes projets et mon expertise en développement web.',
  keywords: 'Développeur Full Stack, JavaScript, TypeScript, React.js, Next.js, Node.js, MongoDB, Développement Web, Portfolio',
  authors:[{ name: "Mohammed El Idrissi", url: "https://sites.google.com/view/mohammed-el-idrissi-cv" }] ,
  metadataBase: new URL('https://www.code-x-dev.com'), 
  openGraph: {
    title: 'Mohammed El Idrissi | Développeur Full Stack JavaScript',
    description: 'Développeur Full Stack JavaScript, expert en React.js, Next.js et Node.js. Découvrez mon portfolio et mes projets.',
    url: 'https://www.code-x-dev.com/', 
    siteName: 'Portfolio Mohammed El Idrissi',
    images: [
      {
        url: 'https://www.code-x-dev.com/images/logo.png', 
        width: 1200,
        height: 630,
        alt: 'Portfolio de Mohammed El Idrissi',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammed El Idrissi | Développeur Full Stack',
    description: 'Développeur Full Stack JavaScript, expert en React.js, Next.js et Node.js. Découvrez mon portfolio et mes projets.',
    images: ['https://www.code-x-dev.com/images/logo.png'],
  },
  robots: {
    index: true, 
    follow: true, 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
