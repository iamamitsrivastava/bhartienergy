"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const allProjects = [
  {
    id: 1,
    category: "WIND POWER INSTALLATION",
    status: "COMMISSIONED",
    statusColor: "var(--primary)",
    siteId: "GJ-WIND-04",
    capacity: "250 MW FACILITY",
    title: "Utility-Scale Wind Park Deployment",
    description: "Turnkey erection of 120+ meter turbine towers, precision rotor assembly, multi-stage nacelle hoisting, and pad construction under high wind velocity constraints.",
    tags: ["HUB HEIGHT / RATING: 140m / 4.2MW Envision", "Zero-Harm HSE", "Precision Torque Calibrated"],
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80"
  },
  {
    id: 2,
    category: "SOLAR & HYBRID INFRASTRUCTURE",
    status: "OPERATIONAL",
    statusColor: "#00a8ff",
    siteId: "RJ-HYB-01",
    capacity: "600 MW HYBRID",
    title: "Utility-Scale Photovoltaic & Hybrid Solar Facility",
    description: "Tracker foundation ramming and piling, central inverter station deployment, balance-of-plant civil development, and automated MV string collection works.",
    tags: ["CAPACITY / TECHNOLOGY: Bifacial Single-Axis Trackers", "Grid-Tie Synchronization"],
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80"
  },
  {
    id: 3,
    category: "SUBSTATION & GRID TIE-IN",
    status: "ACTIVE",
    statusColor: "#f59e0b",
    siteId: "MH-GRID-09",
    capacity: "400 KV SUBSTATION",
    title: "High-Voltage Grid Interconnection",
    description: "Complete substation engineering and civil works. Installation of massive transformers, switchgears, and control rooms for reliable grid integration.",
    tags: ["VOLTAGE: 400/220 KV", "SCADA Integrated"],
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
  }
];

const filters = [
  "ALL PROJECTS",
  "WIND POWER INSTALLATION",
  "SOLAR & HYBRID INFRASTRUCTURE",
  "HEAVY CIVIL & FOUNDATIONS",
  "SUBSTATION & GRID TIE-IN"
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("ALL PROJECTS");

  const filteredProjects = activeFilter === "ALL PROJECTS" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  return (
    <main>
      <Header />
      
      <div className="page-header" style={{ padding: '4rem 0', backgroundColor: 'var(--light-alt-bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-gray)', fontWeight: 600, letterSpacing: '1px' }}>
              HOME / <span style={{ color: 'var(--text-dark)' }}>PROJECTS</span>
            </div>
            <div style={{ backgroundColor: 'rgba(0, 181, 91, 0.1)', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>
              <span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: 'var(--primary)', borderRadius: '50%', marginRight: '8px' }}></span>
              PORTFOLIO REGISTRY • 1.8GW+ COMMISSIONED
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ maxWidth: '600px' }}>
              <div style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}>
                COMMISSIONED & ACTIVE DEPLOYMENTS
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-1px' }}>
                Our Infrastructure Projects
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', lineHeight: 1.6 }}>
                Delivering utility-scale wind power installation, solar-wind hybrid infrastructure, and specialized civil engineering works across India.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem', backgroundColor: 'var(--light-bg)', padding: '1.5rem 2.5rem', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-gray)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>CUMULATIVE POWER</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-dark)', lineHeight: 1 }}>1.84 <span style={{ color: 'var(--primary)', fontSize: '1rem' }}>GW</span></div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-gray)', marginTop: '0.5rem' }}>Grid Interconnected</div>
              </div>
              <div style={{ width: '1px', backgroundColor: 'var(--border-color)' }}></div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-gray)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>HSE TRACK RECORD</div>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-dark)', lineHeight: 1 }}>0.00</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, marginTop: '0.5rem' }}>Lost Time Incident</div>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', overflowX: 'auto', paddingBottom: '1rem' }}>
            {filters.map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{ 
                  backgroundColor: activeFilter === filter ? 'var(--dark-bg)' : 'white', 
                  color: activeFilter === filter ? 'white' : 'var(--text-gray)', 
                  padding: '0.75rem 1.5rem', 
                  borderRadius: '4px', 
                  fontSize: '0.8rem', 
                  fontWeight: 600, 
                  whiteSpace: 'nowrap', 
                  border: activeFilter === filter ? '1px solid var(--dark-bg)' : '1px solid var(--border-color)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div style={{ padding: '5rem 0', backgroundColor: 'var(--light-bg)', minHeight: '600px' }}>
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-gray)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>More projects coming soon</h3>
              <p>We are constantly updating our portfolio with new deployments.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
              {filteredProjects.map(project => (
                <div key={project.id} style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease', cursor: 'pointer' }} className="project-card">
                  <div style={{ position: 'relative', height: '250px' }}>
                    <img src={project.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={project.title} />
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
                      <span style={{ backgroundColor: 'white', color: 'var(--text-dark)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>{project.category}</span>
                    </div>
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                       <span style={{ backgroundColor: project.statusColor, color: 'white', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>{project.status}</span>
                    </div>
                  </div>
                  <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-gray)', fontWeight: 600, marginBottom: '1rem' }}>
                      <span>SITE ID: {project.siteId}</span>
                      <span style={{ color: 'var(--text-dark)' }}>{project.capacity}</span>
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.3 }}>{project.title}</h3>
                    <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>
                      {project.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.tags.map(tag => (
                        <span key={tag} style={{ backgroundColor: 'var(--light-alt-bg)', padding: '0.5rem 1rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-gray)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
