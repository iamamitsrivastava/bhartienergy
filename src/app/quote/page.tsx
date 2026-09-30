import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function QuotePage() {
  return (
    <main>
      <Header />
      
      <div style={{ padding: '4rem 0', backgroundColor: 'var(--light-alt-bg)' }}>
        <div className="container">
          <div style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 600, letterSpacing: '1px', marginBottom: '2rem' }}>
            HOME / <span style={{ color: 'var(--text-dark)' }}>GET A QUOTE</span>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
            <div>
              <div style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}>
                B2B PROJECT SCOPING & COST ESTIMATION
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-1px' }}>
                Request a Project Proposal & Quote
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', lineHeight: 1.6, marginBottom: '3rem' }}>
                Submit your technical specifications for wind power installation, solar-wind civil works, or balance of plant services to receive a structured feasibility and execution quote.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ flex: 1, backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--primary)', borderBottom: '4px solid var(--primary)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>PHASE 01</div>
                  <div style={{ fontWeight: 600 }}>Scope & Technology</div>
                </div>
                <div style={{ flex: 1, backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', opacity: 0.7 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-gray)', marginBottom: '0.5rem' }}>PHASE 02</div>
                  <div style={{ fontWeight: 600 }}>Volume & Geography</div>
                </div>
                <div style={{ flex: 1, backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)', opacity: 0.7 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-gray)', marginBottom: '0.5rem' }}>PHASE 03</div>
                  <div style={{ fontWeight: 600 }}>Tender Package & Corporate</div>
                </div>
              </div>
              
              <div style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>STEP 1 OF 3</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Project Scope & Energy Type</h3>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-gray)' }}>MULTI-SELECT ELIGIBLE</span>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ border: '2px solid var(--primary)', padding: '1.5rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--primary)' }}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Wind Turbine Erection & Heavy Rigging</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>Hub-height tandem lifts up to 140m, nacelle installation, and blade assembly logistics.</p>
                  </div>
                  
                  <div style={{ border: '1px solid var(--border-color)', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Solar Photovoltaic Civil & Foundation</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>Array table ramming, tracker foundation civil works, and central inverter pad casting.</p>
                  </div>
                  
                  <div style={{ border: '1px solid var(--border-color)', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Hybrid Wind-Solar Infrastructure</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>Co-located generation civil yards, shared collector internal corridors, and synchronized cabling.</p>
                  </div>
                  
                  <div style={{ border: '1px solid var(--border-color)', padding: '1.5rem', borderRadius: '8px' }}>
                    <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>High-Load Foundation & Pad Casting</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>Gravity base designs, anchor cage setting, monolithic mass pours, and geotechnical anchoring.</p>
                  </div>
                </div>
                
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="button" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '1rem 2rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    CONTINUE TO PHASE 02 <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ flex: 1, backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-dark)' }}>1.8 GW+</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-gray)' }}>COMMISSIONED CAPACITY</div>
                </div>
                <div style={{ flex: 1, backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>0%</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-gray)' }}>DEMURRAGE INCIDENT RATE</div>
                </div>
              </div>
              
              <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 color="var(--primary)" size={20} /> Why Quote with Bharti Energy
                </h4>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--primary)', marginTop: '2px' }}>✓</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)', margin: 0 }}><strong style={{ color: 'var(--text-dark)' }}>Zero Hidden Demurrage:</strong> Transparent, itemized crane standing charges, transport escort planning, and weather standby contingency tables.</p>
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--primary)', marginTop: '2px' }}>✓</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)', margin: 0 }}><strong style={{ color: 'var(--text-dark)' }}>Geotechnical Alignment:</strong> In-house civil teams reconcile bearing capacity with anchor cage pre-stress dynamics before mobilization.</p>
                  </li>
                  <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--primary)', marginTop: '2px' }}>✓</div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-gray)', margin: 0 }}><strong style={{ color: 'var(--text-dark)' }}>Pan-India Mobilization:</strong> Established logistics nodes across Gujarat, Rajasthan, Tamil Nadu, Karnataka, and Maharashtra.</p>
                  </li>
                </ul>
              </div>
              
              <div style={{ position: 'relative', height: '200px', borderRadius: '8px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1548613052-1ee7e28b8dc9?q=80&w=2070&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Tier-1 Erection Capacity" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: 'white' }}>
                  <span style={{ backgroundColor: 'var(--primary)', padding: '0.2rem 0.5rem', borderRadius: '2px', fontSize: '0.6rem', fontWeight: 700 }}>RIGGING POLICY</span>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginTop: '0.5rem' }}>Tier-1 Erection Capacity</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.25rem' }}>Heavy crawler lifts up to 160m hub heights with zero blade damage history.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
