import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ElectricalInstallationPage() {
  return (
    <main>
      <Header />
      <div className="page-header" style={{ padding: '8rem 0', backgroundImage: 'linear-gradient(to right, rgba(9,16,31,0.9), rgba(9,16,31,0.6)), url(/service-2.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="container">
          <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            SERVICES / <span style={{ color: 'white' }}>ELECTRICAL & INSTALLATION WORKS</span>
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'white' }}>
            Electrical &<br/>Installation Works
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', lineHeight: 1.6 }}>
            Comprehensive high and medium voltage electrical integrations to bring your generated power efficiently to the grid.
          </p>
        </div>
      </div>
      
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
             <div>
               <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-dark)' }}>Energizing Infrastructure</h3>
               <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                 From turbine converter connections to massive solar farm string collections, our electrical division ensures seamless power routing. We execute complex cabling, switchgear installation, and control panel integrations with a strict focus on voltage safety and loss minimization.
               </p>
               <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>MV & HV Cable Laying and Termination</div></li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>Control Panel & SCADA System Integrations</div></li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>Inverter Station Deployment for Solar PV</div></li>
                 <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}><div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</div> <div style={{ color: 'var(--text-gray)', fontSize: '1.05rem' }}>Internal WTG electrical networking and loop checks</div></li>
               </ul>
             </div>
             <div>
               <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
                 <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>Connect with Us</h4>
                 <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginBottom: '1.5rem' }}>Require certified electrical execution for your next utility project?</p>
                 <a href="/contact" className="btn-primary" style={{ width: '100%', textAlign: 'center', color: 'white', display: 'block' }}>GET IN TOUCH</a>
               </div>
             </div>
           </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
