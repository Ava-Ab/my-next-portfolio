import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Ava Abadian Portfolio',
  description: 'Next.js portfolio site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          padding: '1rem',
          borderBottom: '1px solid #ccc',
          backgroundColor: '#f9f9f9'
        }}>
          <Link 
            href="/" 
            style={{ marginRight: '1rem', textDecoration: 'none', color: '#333' }}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            style={{ marginRight: '1rem', textDecoration: 'none', color: '#333' }}
          >
            About
          </Link>
          <Link 
            href="/projects" 
            style={{ textDecoration: 'none', color: '#333' }}
          >
            Projects
          </Link>
        </nav>
        <main style={{ padding: '1rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
