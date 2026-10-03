import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bharti Energy & Construction",
  description: "Sustainable energy solutions, wind and solar infrastructure.",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Toggle this to false to unlock the site once charges are paid
  const SHOW_LOCK_SCREEN = true;

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>
        {SHOW_LOCK_SCREEN ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: '#f9f9f9',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            color: '#333'
          }}>
            <h1 style={{ fontSize: '8rem', margin: '0', fontWeight: 'bold' }}>404</h1>
            <h2 style={{ fontSize: '1.5rem', margin: '10px 0', color: '#666' }}>Oops, This Page Not Found!</h2>
            <p style={{ fontSize: '1.2rem', color: '#aaa', margin: '5px 0' }}>The link might be corrupted.</p>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>or the page may have been removed</p>
            <p style={{ fontSize: '1rem', color: '#d93025', fontWeight: 'bold', marginBottom: '30px', maxWidth: '400px' }}>Notice: The service will be restored once the remaining balance has been paid.</p>
            <button 
              style={{
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                letterSpacing: '1px'
              }}>
              GO BACK HOME
            </button>
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
