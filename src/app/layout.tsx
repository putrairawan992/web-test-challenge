import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HypeStacks FE Tests',
  description: 'Generated by HypeStacks',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
