"use client";

import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change or screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
        backgroundColor: isSticky || mobileMenuOpen ? 'rgba(9, 16, 31, 0.95)' : 'transparent',
        backdropFilter: isSticky || mobileMenuOpen ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: isSticky || mobileMenuOpen ? 'blur(10px)' : 'none',
        boxShadow: scrolled || mobileMenuOpen ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: scrolled || mobileMenuOpen ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
      }}
    >
      <div className="container header-inner" style={{ transition: 'padding 0.3s ease', paddingTop: scrolled ? '0.5rem' : '1rem', paddingBottom: scrolled ? '0.5rem' : '1rem' }}>
        <div className="logo">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <img src="/logo.png" alt="Bharti Energy Logo" style={{ height: scrolled ? '60px' : '80px', width: 'auto', transition: 'height 0.3s ease' }} />
          </Link>
        </div>
        
        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>SERVICES</Link>
          <Link href="/projects" onClick={() => setMobileMenuOpen(false)}>PROJECTS</Link>
          <Link href="/why-us" onClick={() => setMobileMenuOpen(false)}>WHY US</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
        </nav>
        
        <div className="header-actions">
          <Link href="/quote" className="btn-primary desktop-only">GET A QUOTE</Link>
          <div className="user-icon desktop-only">
            <User size={20} />
          </div>
          
          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
