import React from 'react';
import { User } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  return (
    <header 
      className="header" 
      style={transparent ? { position: 'absolute', top: 0, left: 0, width: '100%' } : { position: 'relative', backgroundColor: 'var(--dark-nav)', top: 0, left: 0, width: '100%' }}
    >
      <div className="container header-inner">
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt="Bharti Energy Logo" style={{ height: '80px', width: 'auto' }} />
          </Link>
        </div>
        
        <nav className="nav-links">
          <Link href="/about">ABOUT US</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/why-us">WHY US</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
        
        <div className="header-actions">
          <Link href="/quote" className="btn-primary">GET A QUOTE</Link>
          <div className="user-icon">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
