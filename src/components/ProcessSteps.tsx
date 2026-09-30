"use client";

import React, { useState, useEffect } from 'react';
import { MapPin, PenTool, HardHat, Settings, ClipboardCheck } from 'lucide-react';

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="process-steps">
      <div className="process-line"></div>
      
      <div className="process-step">
        <div className={`step-icon ${activeStep === 0 ? 'active' : ''}`}><MapPin size={24} /></div>
        <h4 style={{ color: activeStep === 0 ? 'var(--primary)' : 'var(--text-dark)', transition: 'color 0.3s ease' }}>01. Site Assessment</h4>
        <p>Topographic surveys, access route feasibility, geotechnical & soil bearing checks and micro-siting confirmation.</p>
      </div>
      
      <div className="process-step">
        <div className={`step-icon ${activeStep === 1 ? 'active' : ''}`}><PenTool size={24} /></div>
        <h4 style={{ color: activeStep === 1 ? 'var(--primary)' : 'var(--text-dark)', transition: 'color 0.3s ease' }}>02. Planning & Engineering</h4>
        <p>In-house modeling, crane selection, transportation logistics layout and foundation civil design validation.</p>
      </div>
      
      <div className="process-step">
        <div className={`step-icon ${activeStep === 2 ? 'active' : ''}`}><HardHat size={24} /></div>
        <h4 style={{ color: activeStep === 2 ? 'var(--primary)' : 'var(--text-dark)', transition: 'color 0.3s ease' }}>03. Site Preparation</h4>
        <p>Access road grading, crane pad construction, laydown yard clearing and concrete batch plant setting.</p>
      </div>
      
      <div className="process-step">
        <div className={`step-icon ${activeStep === 3 ? 'active' : ''}`}><Settings size={24} /></div>
        <h4 style={{ color: activeStep === 3 ? 'var(--primary)' : 'var(--text-dark)', transition: 'color 0.3s ease' }}>04. Installation & Erection</h4>
        <p>Tower section stacking, nacelle positioning, blade rotor assembly & electrical panel connections.</p>
      </div>
      
      <div className="process-step">
        <div className={`step-icon ${activeStep === 4 ? 'active' : ''}`}><ClipboardCheck size={24} /></div>
        <h4 style={{ color: activeStep === 4 ? 'var(--primary)' : 'var(--text-dark)', transition: 'color 0.3s ease' }}>05. Inspection & Handover</h4>
        <p>Test check-runs, pre-testing and commissioning tests, final quality auditing and operational handover.</p>
      </div>
    </div>
  );
}
