import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CivilConstructionPage() {
  return (
    <main>
      <Header />
      <div className="page-header" style={{ padding: '8rem 0', backgroundImage: 'linear-gradient(to right, rgba(9,16,31,0.9), rgba(9,16,31,0.6)), url(/service-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            SERVICES / <span style={{ color: 'white' }}>CIVIL CONSTRUCTION WORKS</span>
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'white' }}>
            Civil Construction<br/>Works
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', lineHeight: 1.6 }}>
            Robust site development services and specialized foundations for heavy industrial energy projects, ensuring life-long structural integrity.
          </p>
        </div>
      </div>
      
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
             <div>
               <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-dark)' }}>Unshakeable Foundations</h3>
               <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                 The foundation of any renewable energy project is its civil infrastructure. From deep piling and raft foundations for heavy turbines to large-scale array ramming for solar parks, our civil works division ensures that environmental compliance and geometric precision meet.
               </p>
               <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>Massive concrete batching and curing protocols</div></li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>Soil testing, excavation, and structural backfilling</div></li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>Substation pad foundations and trenching</div></li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>Internal access road construction for heavy transports</div></li>
               </ul>
             </div>
             <div>
               <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
                 <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>Need Civil Expertise?</h4>
                 <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginBottom: '1.5rem' }}>Our engineering teams are ready to evaluate your site terrain and constraints.</p>
                 <a href="/contact" className="btn-primary" style={{ width: '100%', textAlign: 'center', color: 'white', display: 'block' }}>CONTACT US TODAY</a>
               </div>
             </div>
           </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
