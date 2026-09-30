import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone, AlertTriangle, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <main>
      <Header />
      
      <div style={{ padding: '4rem 0', backgroundColor: 'var(--light-alt-bg)' }}>
        <div className="container">
          <div style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 600, letterSpacing: '1px', marginBottom: '2rem' }}>
            HOME / <span style={{ color: 'var(--text-dark)' }}>CONTACT</span>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              <div style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}>
                DIRECT INQUIRY & OPERATIONS HEADQUARTERS
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-1px' }}>
                Contact Bharti Energy & Construction
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', lineHeight: 1.6, marginBottom: '3rem' }}>
                Connect with our project engineering and site mobilization teams for wind power installation, solar civil works, and utility infrastructure inquiries.
              </p>
              
              <div style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Send Us a Message</h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                  Submit your project layout, civil specifications, or crane mobilization request for review by our engineering estimation desk.
                </p>
                
                <form>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-dark)' }}>FULL NAME *</label>
                      <input type="text" placeholder="Rajesh Sharma" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--light-alt-bg)' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-dark)' }}>ORGANIZATION / DEVELOPER *</label>
                      <input type="text" placeholder="CleanGrid Power Ltd" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--light-alt-bg)' }} />
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-dark)' }}>CORPORATE EMAIL *</label>
                      <input type="email" placeholder="rajesh@cleangrid.com" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--light-alt-bg)' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-dark)' }}>PHONE NUMBER *</label>
                      <input type="tel" placeholder="+91 98765 43210" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--light-alt-bg)' }} />
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-dark)' }}>NATURE OF INQUIRY *</label>
                      <select style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--light-alt-bg)' }}>
                        <option>Select Scope of Work</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-dark)' }}>PROJECT LOCATION / STATE *</label>
                      <select style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--light-alt-bg)' }}>
                        <option>Select Deployment State</option>
                      </select>
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-dark)' }}>PROJECT SPECIFICATIONS / MESSAGE *</label>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-gray)' }}>Turbine class, MW capacity, terrain...</span>
                    </div>
                    <textarea rows={4} placeholder="Specify target wind turbine rating (e.g. 3.3MW Envision / 2.7MW GE), total project capacity, expected ground-breaking month, and access road conditions..." style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--border-color)', borderRadius: '4px', backgroundColor: 'var(--light-alt-bg)' }}></textarea>
                  </div>
                  
                  <button type="button" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '1rem 2rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    SEND INQUIRY <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
            
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Operational Hubs</h3>
                <span style={{ backgroundColor: 'rgba(0, 181, 91, 0.1)', color: 'var(--primary)', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700 }}>LIVE SITE DESK</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <MapPin style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-gray)', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.25rem' }}>SITE & CORPORATE OFFICE</div>
                    <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Building No./Flat No.: 374, Androon Indrapuri Colony</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>Mauja Bakalpur, Mathura - (U.P.) - 281004</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <Mail style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-gray)', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.25rem' }}>OFFICIAL EMAIL</div>
                    <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>bhartienergy92@gmail.com</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>Tenders, RFQs & Subcontracting</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <Phone style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-gray)', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.25rem' }}>OPERATIONS PHONE SUPPORT</div>
                    <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>+91 8445543430</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-gray)' }}>MON - SAT, 9:00 AM - 6:00 PM IST</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', backgroundColor: 'black', color: 'white', borderRadius: '8px' }}>
                  <AlertTriangle style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '1px', marginBottom: '0.25rem' }}>EMERGENCY MOBILIZATION DESK</div>
                    <div style={{ fontWeight: 700, marginBottom: '0.25rem', color: 'var(--primary)' }}>24/7 Field Erection & Crane Incident Support</div>
                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>Priority dispatch line for active wind farm EPC sites and crane recovery crews.</div>
                  </div>
                </div>
              </div>
              
              <div style={{ position: 'relative', height: '200px', borderRadius: '8px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Site Operation" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: 'white' }}>
                  <span style={{ backgroundColor: 'var(--primary)', padding: '0.2rem 0.5rem', borderRadius: '2px', fontSize: '0.6rem', fontWeight: 700 }}>FLEET OPERATIONS</span>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', marginTop: '0.5rem' }}>Rapid site deployment and logistics coordination across major renewable corridors.</div>
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
