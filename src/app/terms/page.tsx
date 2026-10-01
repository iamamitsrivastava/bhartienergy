import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main>
      <Header />
      <div className="page-header" style={{ padding: '6rem 0', backgroundColor: 'var(--light-alt-bg)' }}>
        <div className="container">
          <div style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 600, letterSpacing: '1px', marginBottom: '1rem' }}>
            HOME / <span style={{ color: 'var(--text-dark)' }}>TERMS & CONDITIONS</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--dark-bg)' }}>
            Terms & Conditions
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', maxWidth: '600px' }}>
            Last updated: October 2024. Please read these terms and conditions carefully before using our website.
          </p>
        </div>
      </div>
      
      <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
           
           <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-dark)' }}>1. Agreement to Terms</h3>
           <p style={{ fontSize: '1rem', color: 'var(--text-gray)', lineHeight: 1.7, marginBottom: '2rem' }}>
             These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Bharti Energy & Construction ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form related, linked, or otherwise connected thereto.
           </p>

           <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-dark)' }}>2. Intellectual Property Rights</h3>
           <p style={{ fontSize: '1rem', color: 'var(--text-gray)', lineHeight: 1.7, marginBottom: '2rem' }}>
             Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
           </p>

           <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-dark)' }}>3. User Representations</h3>
           <p style={{ fontSize: '1rem', color: 'var(--text-gray)', lineHeight: 1.7, marginBottom: '2rem' }}>
             By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information; (3) you have the legal capacity and you agree to comply with these Terms and Conditions.
           </p>

           <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-dark)' }}>4. Modifications and Interruptions</h3>
           <p style={{ fontSize: '1rem', color: 'var(--text-gray)', lineHeight: 1.7, marginBottom: '2rem' }}>
             We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
           </p>
           
        </div>
      </section>
      <Footer />
    </main>
  );
}
