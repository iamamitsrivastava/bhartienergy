import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GridSubstationPage() {
  return (
    <main>
      <Header />
      <div className="page-header" style={{ padding: '8rem 0', backgroundImage: 'linear-gradient(to right, rgba(9,16,31,0.9), rgba(9,16,31,0.6)), url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            SERVICES / <span style={{ color: 'white' }}>GRID & SUBSTATION WORKS</span>
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'white' }}>
            Grid & Substation<br/>Works
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', lineHeight: 1.6 }}>
            End-to-end EPC services for high-voltage substations, ensuring your renewable assets are reliably synchronized with the national grid.
          </p>
        </div>
      </div>
      
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
             <div>
               <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-dark)' }}>High-Voltage Reliability</h3>
               <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                 Integrating utility-scale power requires robust substation infrastructure. We provide complete structural erection, heavy transformer lifting, and stringing works for 33kV, 132kV, 220kV, and 400kV substation projects.
               </p>
               <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>Switchyard civil works, fencing, and earth mat laying</div></li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>Transformer logistics, erection, and oil filtration</div></li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>Isolator, breaker, and CT/PT installations</div></li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>Control room building and relay panel wiring</div></li>
               </ul>
             </div>
             <div>
               <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
                 <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>Substation Planning?</h4>
                 <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginBottom: '1.5rem' }}>Discuss your grid synchronization and substation requirements with our experts.</p>
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
