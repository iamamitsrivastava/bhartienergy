import React from 'react';
import { 
  Wind, ArrowRight, CheckCircle2, 
  Zap, Building2, Cable, MapPin, Wrench,
  PenTool, HardHat, Settings, ClipboardCheck
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProcessSteps from '@/components/ProcessSteps';

export default function Home() {
  return (
    <main>
      <Header transparent={true} />

      {/* Hero Section */}
      <section id="home" className="hero">
        <iframe 
          src="https://www.youtube.com/embed/b7_ix42ghCQ?autoplay=1&mute=1&controls=0&start=10&loop=1&playlist=b7_ix42ghCQ&disablekb=1&modestbranding=1&playsinline=1&vq=hd1080" 
          title="Wind Energy Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="hero-video"
        ></iframe>
        <div className="hero-overlay"></div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-badges">
              <span className="hero-badge">
                <span className="badge-pulse" style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', boxShadow: '0 0 0 0 rgba(0, 168, 255, 0.7)', animation: 'pulseGlow 2s infinite', marginRight: '6px' }}></span>
                LEADING RENEWABLE PARTNER
              </span>
              <span className="hero-badge" style={{ background: 'rgba(0, 168, 255, 0.2)', borderColor: 'var(--primary)', color: 'white' }}>BHARTI ENERGY</span>
            </div>
            
            <h1 className="hero-title">
              Powering India's Future with <br />
              <span className="highlight">Wind Energy</span>
            </h1>
            
            <p className="hero-desc">
              Reliable wind power installations and infrastructure solutions built for a cleaner, stronger, and more sustainable future across demanding terrains and stringent environments.
            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary">OUR EXPERTISE <ArrowRight size={16} /></button>
              <button className="btn-outline">LATEST DEVELOPMENTS</button>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <h4>5000+ MW</h4>
                <p>Built to Scale</p>
              </div>
              <div className="stat-item">
                <h4>10+ GW</h4>
                <p>Turnkey EPC</p>
              </div>
              <div className="stat-item">
                <h4>5+ Million</h4>
                <p>Zero Harm HRS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container about-inner">
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop" alt="Wind Turbines" />
            <div className="about-badge">
              <div className="icon-box">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h5>Certified Engineering Rigid</h5>
                <p>Ensuring structural compliance</p>
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <span className="section-label">ABOUT BHARTI ENERGY & CONSTRUCTION</span>
            <h2 className="section-title">Building the Infrastructure Behind Clean Energy</h2>
            <p className="about-desc">
              Bharti Energy and Construction operates at the forefront of renewable energy project execution. We specialize in comprehensive wind turbine installation, high-load structures, substation networks, and balance of plant coordination.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon"><Zap size={20} /></div>
                <div className="feature-content">
                  <h4>Towering Installation Support</h4>
                  <p>Complete execution of mechanical, electrical, and structural systems.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon"><Zap size={20} /></div>
                <div className="feature-content">
                  <h4>Heavy Rigging & Erection</h4>
                  <p>Expert handling of heavy crane operations and complex lifting solutions.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon"><Zap size={20} /></div>
                <div className="feature-content">
                  <h4>Grid & Substation Development</h4>
                  <p>Delivering reliable interconnection setups and power transmission solutions.</p>
                </div>
              </div>
            </div>
            
            <button className="btn-primary" style={{ background: 'var(--dark-bg)', color: 'white' }}>EXPLORE OUR SERVICES <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="services-header">
            <span className="section-label">OUR SERVICES</span>
            <h2 className="section-title">Comprehensive Wind & Industrial Solutions</h2>
            <p>End-to-end solutions for wind energy and infrastructure development engineered for durability, precision, and performance.</p>
          </div>
          
          <div className="services-grid">
            {/* Card 1 */}
            <div className="flip-card-container">
              <div className="service-card-inner">
                <div className="service-card-front" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.3), rgba(9,16,31,0.85)), url(https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop)', backgroundSize: 'cover' }}>
                  <div className="service-icon"><Wind size={32} /></div>
                  <h4>Wind Power Installation</h4>
                  <p>Installation and deployment support for wind power infrastructure. From stage base to testing, blade mastering and nacelle rigging.</p>
                </div>
                <div className="service-card-back">
                  <Wind size={48} style={{ marginBottom: '1rem' }} />
                  <h4>Wind Power Installation</h4>
                  <p>Executed by veteran field teams.</p>
                  <a href="#" className="service-link">KNOW MORE <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="flip-card-container">
              <div className="service-card-inner">
                <div className="service-card-front" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.3), rgba(9,16,31,0.85)), url(https://images.unsplash.com/photo-1509391366360-128c0dbb74b8?q=80&w=2070&auto=format&fit=crop)', backgroundSize: 'cover' }}>
                  <div className="service-icon"><Zap size={32} /></div>
                  <h4>Solar & Wind Infrastructure</h4>
                  <p>Civil and structural solutions supporting hybrid renewable energy projects including foundation works, array table ramming, and access site preparations.</p>
                </div>
                <div className="service-card-back">
                  <Zap size={48} style={{ marginBottom: '1rem' }} />
                  <h4>Solar & Wind Infrastructure</h4>
                  <p>Building the foundation for sustainable power.</p>
                  <a href="#" className="service-link">KNOW MORE <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="flip-card-container">
              <div className="service-card-inner">
                <div className="service-card-front" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.3), rgba(9,16,31,0.85)), url(https://images.unsplash.com/photo-1548613052-1ee7e28b8dc9?q=80&w=2070&auto=format&fit=crop)', backgroundSize: 'cover' }}>
                  <div className="service-icon"><Building2 size={32} /></div>
                  <h4>Heavy Civil Construction</h4>
                  <p>Construction and site development services for energy and industrial projects. From sub-station pad foundations to structural testing.</p>
                </div>
                <div className="service-card-back">
                  <Building2 size={48} style={{ marginBottom: '1rem' }} />
                  <h4>Heavy Civil Construction</h4>
                  <p>Robust infrastructure for heavy energy sectors.</p>
                  <a href="#" className="service-link">KNOW MORE <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="flip-card-container">
              <div className="service-card-inner">
                <div className="service-card-front" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.3), rgba(9,16,31,0.85)), url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop)', backgroundSize: 'cover' }}>
                  <div className="service-icon"><Cable size={32} /></div>
                  <h4>Electrical & Substation</h4>
                  <p>Professional electrical and installation related works to support WTG operations. Switchgear housing, converter commissioning and integrations.</p>
                </div>
                <div className="service-card-back">
                  <Cable size={48} style={{ marginBottom: '1rem' }} />
                  <h4>Electrical & Substation</h4>
                  <p>Ensuring grid tie-ins and steady power transmission.</p>
                  <a href="#" className="service-link">KNOW MORE <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>
            
            {/* Card 5 */}
            <div className="flip-card-container">
              <div className="service-card-inner">
                <div className="service-card-front" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.3), rgba(9,16,31,0.85)), url(https://images.unsplash.com/photo-1565017042858-a5f11812a149?q=80&w=2070&auto=format&fit=crop)', backgroundSize: 'cover' }}>
                  <div className="service-icon"><MapPin size={32} /></div>
                  <h4>Project Site Development</h4>
                  <p>Site preparation and infrastructure development for project execution. Grading, laydown storage yards, and security perimeters.</p>
                </div>
                <div className="service-card-back">
                  <MapPin size={48} style={{ marginBottom: '1rem' }} />
                  <h4>Project Site Development</h4>
                  <p>Comprehensive layout and micro-siting.</p>
                  <a href="#" className="service-link">KNOW MORE <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>
            
            {/* Card 6 */}
            <div className="flip-card-container">
              <div className="service-card-inner">
                <div className="service-card-front" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(9,16,31,0.3), rgba(9,16,31,0.85)), url(https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2070&auto=format&fit=crop)', backgroundSize: 'cover' }}>
                  <div className="service-icon"><Wrench size={32} /></div>
                  <h4>Maintenance & Support</h4>
                  <p>Ongoing maintenance and support services for industrial assets. Inspections, blade health surveys, and structural certification.</p>
                </div>
                <div className="service-card-back">
                  <Wrench size={48} style={{ marginBottom: '1rem' }} />
                  <h4>Maintenance & Support</h4>
                  <p>Long term reliability and operational efficiency.</p>
                  <a href="#" className="service-link">KNOW MORE <ArrowRight size={14} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="quality">
        <div className="container">
          <div className="quality-header">
            <div>
              <span className="section-label">COMMITMENT TO QUALITY</span>
              <h2 className="section-title">Built Around Safety, Quality, Reliability.</h2>
            </div>
            <p>Precision engineering, safety foundations and site operations, ensuring safe foundations and reliable infrastructures over the years.</p>
          </div>
          
          <div className="quality-grid">
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
              <p>End-to-end logistics and project control ensuring on-schedule supply timelines and minimal schedule impact of deliveries.</p>
            </div>
            <div className="quality-card">
              <div className="quality-number">04</div>
              <h4>Sustainable Energy Focus</h4>
              <p>Facilitating India's clean energy transition alongside environmental compliance and waste reduction at all project locations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process">
        <div className="container">
          <span className="section-label">OUR PROCESS</span>
          <h2 className="section-title">Execution Process</h2>
          <p>A systematic engineering and execution flow to build robust wind energy infrastructure.</p>
          
          <ProcessSteps />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <span className="hero-badge" style={{marginBottom: '1.5rem', display: 'inline-block'}}>READY FOR YOUR NEXT PROJECT?</span>
          <h2>Let's Build a Cleaner Energy Future Together</h2>
          <p>Discuss your utility-scale power installation, foundation civil works, or infrastructure requirements directly with our technical operations team.</p>
          <button className="btn-primary">GET IN TOUCH WITH US <ArrowRight size={16} /></button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
