import { useState } from 'react';
import profileImg from '../assets/profile.jpeg';
import cv from '../assets/Ajith_Resume.pdf';
import './Hero.css';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="hero" className="hero-section">
      {/* Background animation elements */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Ajith R</span>
          </h1>
          <h2 className="hero-role">React Native Developer</h2>
          <p className="hero-subtitle">
            Specializing in building and maintaining production-ready mobile applications. 
            Experienced in crafting intuitive UIs and robust backend integrations for HRMS platforms.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">Here Is My Resume : </a>
            <button type="button" onClick={() => setShowModal(true)} className="btn premium-btn contact-btn">
              Download CV
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img 
            src={profileImg} 
            alt="Ajith R" 
            className="hero-image" 
          />
        </div>
      </div>

      {showModal && (
        <div className="resume-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="resume-modal glass" onClick={e => e.stopPropagation()}>
            <h3 style={{color: '#f8fafc', marginBottom: '1rem', fontSize: '1.5rem'}}>View or Download CV</h3>
            <p style={{color: '#cbd5e1', marginBottom: '2rem'}}>Are you sure you want to download or view my CV?</p>
            <div className="modal-actions" style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href={cv} download="Ajith_CV.pdf" className="btn btn-primary" onClick={() => setShowModal(false)}>Download</a>
              <a href={cv} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ border: '1px solid var(--color-primary)', background: 'transparent', color: 'var(--color-primary)' }} onClick={() => setShowModal(false)}>View CV</a>
              <button type="button" className="btn" onClick={() => setShowModal(false)} style={{ background: 'transparent', color: '#94a3b8', border: 'none', cursor: 'pointer' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
