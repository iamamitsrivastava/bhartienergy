import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WhyUsPage() {
  return (
    <main>
      <Header />
      <div className="page-header" style={{ padding: '4rem 0', backgroundColor: 'var(--light-alt-bg)' }}>
        <div className="container">
          <div style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 600, letterSpacing: '1px', marginBottom: '1.5rem' }}>
            HOME / <span style={{ color: 'var(--text-dark)' }}>WHY US</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Built Around Safety,<br/>Quality, Reliability.
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', maxWidth: '600px', lineHeight: 1.6 }}>
            Precision engineering, safety foundations and site operations, ensuring safe foundations and reliable infrastructures over the years.
          </p>
        </div>
      </div>
      
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
          <div className="quality-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            <div className="quality-card">
              <div className="quality-number">01</div>
              <h4>Safety First</h4>
              <p>Comprehensive HSE protocols, zero-harm goals, continuous safety audits, tool-box talks and strictly regulated site standards.</p>
            </div>
            
            <div className="quality-card">
              <div className="quality-number">02</div>
              <h4>Quality Execution</h4>
              <p>Dedicated QA/QC engineering on concrete work and welding. Strict inspections and code compliance at every phase.</p>
            </div>
            
            <div className="quality-card">
              <div className="quality-number">03</div>
              <h4>Reliable Project Delivery</h4>
              <p>End-to-end logistics and project control ensuring on-schedule supply timelines and minimal schedule impact.</p>
            </div>
            
            <div className="quality-card">
              <div className="quality-number">04</div>
              <h4>Sustainable Focus</h4>
              <p>Facilitating India's clean energy transition alongside environmental compliance and waste reduction at all project locations.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ position: 'relative', padding: '6rem 0', backgroundImage: 'linear-gradient(to right, rgba(9,16,31,0.9), rgba(9,16,31,0.8)), url(https://images.unsplash.com/photo-1548613052-1ee7e28b8dc9?q=80&w=2070)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <div className="container" style={{ textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Ready to partner with industry leaders?</h2>
          <a href="/contact" className="btn-primary" style={{ color: 'white' }}>CONNECT WITH OUR EXPERTS</a>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
