import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WindPowerPage() {
  return (
    <main>
      <Header />
      <div className="page-header" style={{ padding: '8rem 0', backgroundImage: 'linear-gradient(to right, rgba(9,16,31,0.9), rgba(9,16,31,0.6)), url(/service-3.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            SERVICES / <span style={{ color: 'white' }}>WIND POWER INSTALLATION</span>
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'white' }}>
            Wind Power<br/>Installation
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', lineHeight: 1.6 }}>
            Professional end-to-end deployment support for wind power infrastructure. From stage base to testing, blade mastering and nacelle rigging.
          </p>
        </div>
      </div>
      
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
             <div>
               <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-dark)' }}>Precision Engineered Executions</h3>
               <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                 Bharti Energy specializes in the complete mechanical and electrical installation of wind turbine generators. Our highly trained teams execute complex tandem lifts and heavy rigging under extreme weather windows.
               </p>
               <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>Tower section stacking and torque verification</div></li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>Nacelle hoisting and precise grid alignment</div></li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>Aerodynamic blade rotor assembly</div></li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>Pre-commissioning and mechanical completion sign-offs</div></li>
               </ul>
             </div>
             <div>
               <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
                 <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to Deploy?</h4>
                 <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginBottom: '1.5rem' }}>Our rapid-response teams are available for your upcoming portfolio projects.</p>
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
