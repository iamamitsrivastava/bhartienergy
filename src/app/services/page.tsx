import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wind, Zap, Building2, Cable, MapPin, Wrench, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <div className="page-header" style={{ padding: '4rem 0', backgroundColor: 'var(--light-alt-bg)' }}>
        <div className="container">
          <div style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 600, letterSpacing: '1px', marginBottom: '1.5rem' }}>
            HOME / <span style={{ color: 'var(--text-dark)' }}>SERVICES</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Comprehensive Wind &<br/>Industrial Solutions
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', maxWidth: '600px', lineHeight: 1.6 }}>
            End-to-end solutions for wind energy and infrastructure development engineered for durability, precision, and performance.
          </p>
        </div>
      </div>
      
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
          <div className="services-grid">
            {/* Card 1 */}
            <div className="flip-card-container">
              <div className="service-card-inner">
                <div className="service-card-front" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.3), rgba(9,16,31,0.85)), url(/service-3.png)', backgroundSize: 'cover' }}>
                  <div className="service-icon"><Wind size={32} /></div>
                  <h4>Wind Power Installation</h4>
                  <p>Installation and deployment support for wind power infrastructure. From stage base to testing, blade mastering and nacelle rigging.</p>
                </div>
                <div className="service-card-back" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.8), rgba(9,16,31,0.95)), url(/service-3.png)', backgroundSize: 'cover' }}>
                  <Wind size={48} style={{ marginBottom: '1rem' }} />
                  <h4>Wind Power Installation</h4>
                  <p>Executed by veteran field teams.</p>
                  <a href="/contact" className="service-link">INQUIRE NOW <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="flip-card-container">
              <div className="service-card-inner">
                <div className="service-card-front" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.3), rgba(9,16,31,0.85)), url(/service-2.png)', backgroundSize: 'cover' }}>
                  <div className="service-icon"><Zap size={32} /></div>
                  <h4>Solar & Wind Infrastructure</h4>
                  <p>Civil and structural solutions supporting hybrid renewable energy projects including foundation works, array table ramming, and access site preparations.</p>
                </div>
                <div className="service-card-back" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.8), rgba(9,16,31,0.95)), url(/service-2.png)', backgroundSize: 'cover' }}>
                  <Zap size={48} style={{ marginBottom: '1rem' }} />
                  <h4>Solar & Wind Infrastructure</h4>
                  <p>Building the foundation for sustainable power.</p>
                  <a href="/contact" className="service-link">INQUIRE NOW <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="flip-card-container">
              <div className="service-card-inner">
                <div className="service-card-front" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.3), rgba(9,16,31,0.85)), url(/service-1.jpg)', backgroundSize: 'cover' }}>
                  <div className="service-icon"><Building2 size={32} /></div>
                  <h4>Heavy Civil Construction</h4>
                  <p>Construction and site development services for energy and industrial projects. From sub-station pad foundations to structural testing.</p>
                </div>
                <div className="service-card-back" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.8), rgba(9,16,31,0.95)), url(/service-1.jpg)', backgroundSize: 'cover' }}>
                  <Building2 size={48} style={{ marginBottom: '1rem' }} />
                  <h4>Heavy Civil Construction</h4>
                  <p>Robust infrastructure for heavy energy sectors.</p>
                  <a href="/contact" className="service-link">INQUIRE NOW <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="flip-card-container">
              <div className="service-card-inner">
                <div className="service-card-front" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.3), rgba(9,16,31,0.85)), url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800)', backgroundSize: 'cover' }}>
                  <div className="service-icon"><Cable size={32} /></div>
                  <h4>Electrical & Substation</h4>
                  <p>Professional electrical and installation related works to support WTG operations. Switchgear housing, converter commissioning and integrations.</p>
                </div>
                <div className="service-card-back" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.8), rgba(9,16,31,0.95)), url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800)', backgroundSize: 'cover' }}>
                  <Cable size={48} style={{ marginBottom: '1rem' }} />
                  <h4>Electrical & Substation</h4>
                  <p>Ensuring grid tie-ins and steady power transmission.</p>
                  <a href="/contact" className="service-link">INQUIRE NOW <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>
            
            {/* Card 5 */}
            <div className="flip-card-container">
              <div className="service-card-inner">
                <div className="service-card-front" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.3), rgba(9,16,31,0.85)), url(https://images.unsplash.com/photo-1541888087532-6bb08d13264c?q=80&w=800)', backgroundSize: 'cover' }}>
                  <div className="service-icon"><MapPin size={32} /></div>
                  <h4>Project Site Development</h4>
                  <p>Site preparation and infrastructure development for project execution. Grading, laydown storage yards, and security perimeters.</p>
                </div>
                <div className="service-card-back" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.8), rgba(9,16,31,0.95)), url(https://images.unsplash.com/photo-1541888087532-6bb08d13264c?q=80&w=800)', backgroundSize: 'cover' }}>
                  <MapPin size={48} style={{ marginBottom: '1rem' }} />
                  <h4>Project Site Development</h4>
                  <p>Comprehensive layout and micro-siting.</p>
                  <a href="/contact" className="service-link">INQUIRE NOW <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>
            
            {/* Card 6 */}
            <div className="flip-card-container">
              <div className="service-card-inner">
                <div className="service-card-front" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.3), rgba(9,16,31,0.85)), url(https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800)', backgroundSize: 'cover' }}>
                  <div className="service-icon"><Wrench size={32} /></div>
                  <h4>Maintenance & Support</h4>
                  <p>Ongoing maintenance and support services for industrial assets. Inspections, blade health surveys, and structural certification.</p>
                </div>
                <div className="service-card-back" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.8), rgba(9,16,31,0.95)), url(https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800)', backgroundSize: 'cover' }}>
                  <Wrench size={48} style={{ marginBottom: '1rem' }} />
                  <h4>Maintenance & Support</h4>
                  <p>Long term reliability and operational efficiency.</p>
                  <a href="/contact" className="service-link">INQUIRE NOW <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
