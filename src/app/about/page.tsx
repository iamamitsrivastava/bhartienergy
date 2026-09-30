import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="page-header" style={{ padding: '4rem 0', backgroundColor: 'var(--light-alt-bg)' }}>
        <div className="container">
          <div style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 600, letterSpacing: '1px', marginBottom: '1.5rem' }}>
            HOME / <span style={{ color: 'var(--text-dark)' }}>ABOUT US</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Building the Infrastructure<br/>Behind Clean Energy
          </h1>
        </div>
      </div>
      
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--light-bg)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
              Pioneers in Renewable Energy Infrastructure
            </h2>
            <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Bharti Energy and Construction operates at the forefront of renewable energy project execution. We specialize in comprehensive wind turbine installation, high-load structures, substation networks, and balance of plant coordination.
            </p>
            <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Our veteran field teams execute complex rigging and erection under stringent conditions, ensuring that India's renewable future is built on an unshakeable foundation of precision and safety.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CheckCircle2 color="var(--primary)" /> <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>1.8GW+ Successfully Commissioned</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CheckCircle2 color="var(--primary)" /> <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Zero-Harm Safety Protocols</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <CheckCircle2 color="var(--primary)" /> <span style={{ fontWeight: 600, color: 'var(--text-dark)' }}>Veteran Field Execution Teams</span>
              </div>
            </div>
            
            <a href="/services" className="btn-primary" style={{ display: 'inline-flex', color: 'white' }}>EXPLORE OUR EXPERTISE <ArrowRight size={16}/></a>
          </div>
          
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop" alt="Wind Turbines at Sunset" />
            <div className="about-badge">
              <div className="icon-box" style={{ background: 'var(--light-alt-bg)', padding: '1rem', borderRadius: '50%' }}>
                <CheckCircle2 color="var(--primary)" size={24} />
              </div>
              <div>
                <h5 style={{ fontWeight: 800, margin: 0 }}>Certified Engineering Rigid</h5>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-gray)' }}>Ensuring structural compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
