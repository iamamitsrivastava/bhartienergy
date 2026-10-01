"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Send, CheckCircle2 } from 'lucide-react';

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <main>
      <Header />
      <div className="page-header" style={{ padding: '8rem 0', backgroundColor: 'var(--light-alt-bg)' }}>
        <div className="container">
          <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, letterSpacing: '1px', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            PROJECT INQUIRY / <span style={{ color: 'var(--text-dark)' }}>GET A QUOTE</span>
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--dark-bg)' }}>
            Request an Estimate
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-gray)', maxWidth: '600px', lineHeight: 1.6 }}>
            Tell us about your upcoming utility-scale wind power installation, civil engineering, or grid integration project.
          </p>
        </div>
      </div>
      
      <section style={{ padding: '5rem 0', backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', maxWidth: '800px', margin: '0 auto' }}>
             
             {submitted ? (
               <div style={{ backgroundColor: 'rgba(0, 181, 91, 0.1)', border: '1px solid rgba(0, 181, 91, 0.3)', padding: '4rem', borderRadius: '8px', textAlign: 'center' }}>
                 <CheckCircle2 size={64} color="var(--primary)" style={{ margin: '0 auto 1.5rem auto' }} />
                 <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--dark-bg)', marginBottom: '1rem' }}>Request Received!</h3>
                 <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', marginBottom: '2rem' }}>
                   Thank you for reaching out. Our engineering and estimation team is reviewing your project details and will be in touch within 24-48 business hours.
                 </p>
                 <button onClick={() => setSubmitted(false)} className="btn-outline">SUBMIT ANOTHER REQUEST</button>
               </div>
             ) : (
               <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '12px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
                 <form onSubmit={handleSubmit}>
                   <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                     <div className="form-group">
                       <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-gray)' }}>FIRST NAME *</label>
                       <input required type="text" style={{ width: '100%', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem' }} placeholder="e.g. Amit" />
                     </div>
                     <div className="form-group">
                       <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-gray)' }}>LAST NAME *</label>
                       <input required type="text" style={{ width: '100%', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem' }} placeholder="e.g. Sharma" />
                     </div>
                   </div>
                   
                   <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                     <div className="form-group">
                       <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-gray)' }}>BUSINESS EMAIL *</label>
                       <input required type="email" style={{ width: '100%', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem' }} placeholder="amit@company.com" />
                     </div>
                     <div className="form-group">
                       <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-gray)' }}>PHONE NUMBER</label>
                       <input type="tel" style={{ width: '100%', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem' }} placeholder="+91 99999 99999" />
                     </div>
                   </div>

                   <div className="form-group" style={{ marginBottom: '2rem' }}>
                     <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-gray)' }}>SERVICE TYPE *</label>
                     <select required style={{ width: '100%', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem', backgroundColor: 'white' }}>
                       <option value="">Select a service category...</option>
                       <option value="wind">Wind Power Installation</option>
                       <option value="civil">Civil Construction & Foundations</option>
                       <option value="electrical">Electrical & Substation</option>
                       <option value="site">Site Development & Logistics</option>
                       <option value="other">Other Inquiry</option>
                     </select>
                   </div>
                   
                   <div className="form-group" style={{ marginBottom: '3rem' }}>
                     <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-gray)' }}>PROJECT DETAILS *</label>
                     <textarea required rows={5} style={{ width: '100%', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem', resize: 'vertical' }} placeholder="Please describe your project capacity, location, timeline, and any specific engineering requirements..."></textarea>
                   </div>
                   
                   <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
                     SUBMIT QUOTE REQUEST <Send size={18} />
                   </button>
                 </form>
               </div>
             )}
             
           </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
