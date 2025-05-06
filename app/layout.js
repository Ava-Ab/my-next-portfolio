// app/layout.js

import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Ava Abadian Portfolio',
  description: 'My Next.js portfolio site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link href="/about" style={{ marginRight: '1rem' }}>About</Link>
          <Link href="/projects">Projects</Link>
        </nav>
        <main style={{ padding: '1rem' }}>{children}</main>
      </body>
    </html>
  );
}
