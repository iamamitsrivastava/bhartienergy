import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />
      <div className="page-header" style={{ padding: '6rem 0', backgroundColor: 'var(--light-alt-bg)' }}>
        <div className="container">
          <div style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 600, letterSpacing: '1px', marginBottom: '1rem' }}>
            HOME / <span style={{ color: 'var(--text-dark)' }}>PRIVACY POLICY</span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, color: 'var(--dark-bg)' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', maxWidth: '600px' }}>
            Last updated: October 2024. Your privacy and data security are critically important to us at Bharti Energy & Construction.
          </p>
        </div>
      </div>
      
      <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
           
           <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-dark)' }}>1. Information We Collect</h3>
           <p style={{ fontSize: '1rem', color: 'var(--text-gray)', lineHeight: 1.7, marginBottom: '2rem' }}>
             We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use.
           </p>

           <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-dark)' }}>2. How We Use Your Information</h3>
           <p style={{ fontSize: '1rem', color: 'var(--text-gray)', lineHeight: 1.7, marginBottom: '2rem' }}>
             We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We use the information we collect or receive to facilitate account creation, post testimonials, request feedback, and to manage user orders and inquiries.
           </p>

           <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-dark)' }}>3. Will Your Information Be Shared With Anyone?</h3>
           <p style={{ fontSize: '1rem', color: 'var(--text-gray)', lineHeight: 1.7, marginBottom: '2rem' }}>
             We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share your data that we hold based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, and Legal Obligations.
           </p>

           <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-dark)' }}>4. How Long Do We Keep Your Information?</h3>
           <p style={{ fontSize: '1rem', color: 'var(--text-gray)', lineHeight: 1.7, marginBottom: '2rem' }}>
             We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law (such as tax, accounting, or other legal requirements). When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information.
           </p>

           <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-dark)' }}>5. Contact Us</h3>
           <p style={{ fontSize: '1rem', color: 'var(--text-gray)', lineHeight: 1.7, marginBottom: '2rem' }}>
             If you have questions or comments about this notice, you may email us at <strong>beandc@bhartienergy.com</strong> or by post to:<br/><br/>
             <strong>Bharti Energy & Construction Pvt. Ltd.</strong><br/>
             Building No./Flat No.: 374, Androon Indrapuri Colony,<br/>
             Mauja Bakalpur, Mathura - (U.P.) - 281004<br/>
             India
           </p>
           
        </div>
      </section>
      <Footer />
    </main>
  );
}
