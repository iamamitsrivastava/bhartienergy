"use client";

import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 800);
  };

  return (
    <footer id="contact" className="footer-wrap">
      <div className="footer-top">
        <div className="footer-form-section">
          <span className="section-label">PROJECT INQUIRY</span>
          <h3>Let's Talk About Your Project</h3>
          <p>For service inquiries or project estimation requests, please submit your details below to connect with the Bharti Energy & Construction team.</p>
          
          {formStatus === 'success' ? (
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '8px', textAlign: 'center', marginTop: '2rem' }}>
              <CheckCircle2 size={48} color="var(--primary)" style={{ margin: '0 auto 1rem auto' }} />
              <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Message Sent Successfully</h4>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Our team will review your inquiry and get back to you shortly.</p>
              <button onClick={() => setFormStatus('idle')} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>SEND ANOTHER</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>FIRST NAME *</label>
                <input type="text" className="form-control" placeholder="e.g. Rajesh Sharma" />
              </div>
              <div className="form-group">
                <label>LAST NAME *</label>
                <input type="text" className="form-control" placeholder="e.g. Operations Manager" />
              </div>
              <div className="form-group">
                <label>EMAIL ADDRESS *</label>
                <input type="email" className="form-control" placeholder="example@company.com" />
              </div>
              <div className="form-group">
                <label>PHONE NUMBER *</label>
                <input type="tel" className="form-control" placeholder="+91 xxxxx xxxxx" />
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label>PROJECT TYPE / CATEGORY *</label>
              <select className="form-control">
                <option>Select a Service Interest...</option>
                <option>Wind Power Installation</option>
                <option>Civil Construction</option>
                <option>Substation Development</option>
              </select>
            </div>
            <div className="form-group">
              <label>PROJECT DETAILS / MESSAGE</label>
              <textarea className="form-control" placeholder="Discuss project timeline, estimated location, turbine specifications, or tender specifications..."></textarea>
            </div>
            <button disabled={formStatus === 'submitting'} type="submit" className="btn-submit" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', opacity: formStatus === 'submitting' ? 0.7 : 1 }}>
              {formStatus === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'} <ArrowRight size={16} />
            </button>
          </form>
          )}
        </div>
        
        <div className="footer-info-card">
          <h4>HEADQUARTERS & CONTACTS</h4>
          <h3>Bharti Energy & Construction Pvt. Ltd.</h3>
          <div className="info-list">
            <div className="info-item">
              <MapPin className="info-icon" size={24} />
              <div className="info-content">
                <h5>Site & Corporate Office</h5>
                <p>Building No./Flat No.: 374, Androon Indrapuri Colony, <br />Mauja Bakalpur, Mathura - (U.P.) - 281004</p>
              </div>
            </div>
            <div className="info-item">
              <Mail className="info-icon" size={24} />
              <div className="info-content">
                <h5>Official Email</h5>
                <p>beandc@bhartienergy.com</p>
              </div>
            </div>
            <div className="info-item">
              <Phone className="info-icon" size={24} />
              <div className="info-content">
                <h5>Phone Support</h5>
                <p>+91 8445543430</p>
              </div>
            </div>
            <div className="info-item">
              <Clock className="info-icon" size={24} />
              <div className="info-content">
                <h5>GSTIN</h5>
                <p>09HTJPB1104D1Z8</p>
              </div>
            </div>
          </div>
          
          <div className="safety-badge">
            <ShieldCheck className="icon" size={32} />
            <div>
              <h5>Note: We prioritize Safety Standard</h5>
              <p>Zero harm methodology and protocol driven practices are deployed at every operating site.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-grid">
            <div>
              <div className="footer-logo">
                <img src="/logo.png" alt="Bharti Energy Logo" style={{ height: '120px', width: 'auto', marginBottom: '0.5rem' }} />
              </div>
              <p className="footer-desc">
                Empowering global transitions to clean and green energy sources with turnkey project expertise, structural integrity, and sustainable infrastructure developments for heavy duty industrial sectors.
              </p>
              <button className="btn-primary" style={{marginTop: '1.5rem', background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)'}}>A BBB RATED BUSINESS</button>
            </div>
            
            <div className="footer-links">
              <h5>QUICK LINKS</h5>
              <ul>
                <li><a href="/#home">Home</a></li>
                <li><a href="/#about">About Us</a></li>
                <li><a href="/projects">Our Projects</a></li>
                <li><a href="/#quality">Safety & Compliance</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h5>SERVICES</h5>
              <ul>
                <li><a href="/services/wind-power">Wind Power Installation</a></li>
                <li><a href="/services/civil-construction">Civil Construction Works</a></li>
                <li><a href="/services/electrical-installation">Electrical & Installation Works</a></li>
                <li><a href="/services/grid-substation">Grid & Substation Works</a></li>
                <li><a href="/services/site-development">Site Development & Engineering</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h5>CONNECT</h5>
              <ul>
                <li style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}><Phone size={16} color="var(--primary)"/> <a href="tel:+918445543430">+91 8445543430</a></li>
                <li style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}><Mail size={16} color="var(--primary)"/> <a href="mailto:beandc@bhartienergy.com">beandc@bhartienergy.com</a></li>
                <li style={{display: 'flex', gap: '0.5rem', alignItems: 'flex-start', marginTop: '0.5rem'}}><MapPin size={16} color="var(--primary)" style={{marginTop: '4px', flexShrink: 0}}/> <a href="#">Mathura, U.P., India - 281004</a></li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            <p>&copy; 2024 Bharti Energy & Construction. All rights reserved. Built with precision and strict standards.</p>
            <div className="copyright-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms & Conditions</a>
              <a href="/sitemap">Sitemap Overview</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
