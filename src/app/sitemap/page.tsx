import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SitemapPage() {
  return (
    <main>
      <Header />
      <div className="page-header" style={{ padding: '6rem 0', backgroundColor: 'var(--light-alt-bg)' }}>
        <div className="container">
          <div style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 600, letterSpacing: '1px', marginBottom: '1rem' }}>
            HOME / <span style={{ color: 'var(--text-dark)' }}>SITEMAP</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--dark-bg)' }}>
            Sitemap Overview
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', maxWidth: '600px' }}>
            Navigate our complete website structure and find exactly what you're looking for.
          </p>
        </div>
      </div>
      
      <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
           
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
             <div>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--primary)' }}>Main Pages</h3>
               <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                 <li><Link href="/" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Home</Link></li>
                 <li><Link href="/about" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>About Us</Link></li>
                 <li><Link href="/services" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Services Directory</Link></li>
                 <li><Link href="/projects" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Our Projects</Link></li>
                 <li><Link href="/why-us" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Why Us (Safety & Compliance)</Link></li>
                 <li><Link href="/contact" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Contact Us</Link></li>
                 <li><Link href="/quote" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Get A Quote</Link></li>
               </ul>
             </div>

             <div>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--primary)' }}>Our Services</h3>
               <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                 <li><Link href="/services/wind-power" style={{ color: 'var(--text-dark)' }}>Wind Power Installation</Link></li>
                 <li><Link href="/services/civil-construction" style={{ color: 'var(--text-dark)' }}>Civil Construction Works</Link></li>
                 <li><Link href="/services/electrical-installation" style={{ color: 'var(--text-dark)' }}>Electrical & Installation</Link></li>
                 <li><Link href="/services/grid-substation" style={{ color: 'var(--text-dark)' }}>Grid & Substation Works</Link></li>
                 <li><Link href="/services/site-development" style={{ color: 'var(--text-dark)' }}>Site Development & Engineering</Link></li>
               </ul>
             </div>

             <div>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--primary)' }}>Legal</h3>
               <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                 <li><Link href="/privacy-policy" style={{ color: 'var(--text-dark)' }}>Privacy Policy</Link></li>
                 <li><Link href="/terms" style={{ color: 'var(--text-dark)' }}>Terms & Conditions</Link></li>
                 <li><Link href="/sitemap" style={{ color: 'var(--text-dark)' }}>Sitemap</Link></li>
               </ul>
             </div>

             <div>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--primary)' }}>Our Location</h3>
               <div style={{ width: '100%', height: '200px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                 <iframe 
                   width="100%" 
                   height="100%" 
                   frameBorder="0" 
                   scrolling="no" 
                   marginHeight={0} 
                   marginWidth={0} 
                   src="https://maps.google.com/maps?q=Krishna+Nagar+,+Mathura,+U.P.,+India+-+281004&t=&z=13&ie=UTF8&iwloc=&output=embed"
                 ></iframe>
               </div>
               <p style={{ marginTop: '0.8rem', fontSize: '0.9rem', color: 'var(--text-gray)' }}>
                 Krishna Nagar, Mathura, U.P., India - 281004
               </p>
             </div>
           </div>
           
        </div>
      </section>
      <Footer />
    </main>
  );
}
