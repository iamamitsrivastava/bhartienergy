"use client";

import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSticky = scrolled || !transparent;

  return (
    <header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: transparent || scrolled ? 'fixed' : 'relative',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: isSticky ? 'rgba(9, 16, 31, 0.95)' : 'transparent',
        backdropFilter: isSticky ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isSticky ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
      }}
    >
      <div className="container header-inner" style={{ transition: 'padding 0.3s ease', paddingTop: scrolled ? '0.5rem' : '1rem', paddingBottom: scrolled ? '0.5rem' : '1rem' }}>
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt="Bharti Energy Logo" style={{ height: scrolled ? '60px' : '80px', width: 'auto', transition: 'height 0.3s ease' }} />
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
