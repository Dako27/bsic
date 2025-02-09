// app\layout.tsx

import React from 'react';
import FontSetter from './components/fontSetter';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className='antialiased'>
        <FontSetter>
          {children}
        </FontSetter>
      </body>
    </html>
  );
}
