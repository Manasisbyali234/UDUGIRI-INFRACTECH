import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedCard from '../components/AnimatedCard';
import ScrollSection from '../components/ScrollSection';
import { heroStagger, heroItem, staggerContainer, staggerItem, fadeUp, viewportOptions } from '../hooks/useScrollAnimation';

const typewriterWords = ['Surveying', 'GIS Mapping', 'Civil Engineering', 'Smart Software'];

const services = [
  'Building Designs', 'GPS / Total Station Survey', 'Software Development',
  'GIS Based Ward Delimitation', 'Construction', 'DPR for Water Supply',
  'Layout Designs', 'Roads & Drains', 'DGPS Survey',
  'GIS Based Master Plan', 'Bridges / Culverts', 'Layout Development',
  'UGD / Storm Water Drains', 'GIS Projects',
];

const strengths = [
  {
    icon: '⚙️', title: 'Technical Excellence',
    text: 'Advanced methodologies and state-of-the-art equipment delivering accurate, reliable results for successful project execution.',
    tag: 'ISO Certified Process', color: '#1a56db',
  },
  {
    icon: '👷', title: 'Experienced Professionals',
    text: 'Highly qualified engineers, surveyors, GIS specialists, and software developers with extensive industry expertise.',
    tag: 'Multi-Domain Expertise', color: '#0891b2',
  },
  {
    icon: '💡', title: 'Innovative Solutions',
    text: 'Continuously adopting emerging technologies and best practices to provide forward-thinking solutions.',
    tag: 'Future-Ready Technology', color: '#7c3aed',
  },
  {
    icon: '🤝', title: 'Client-Centric Approach',
    text: 'Understanding unique client needs to deliver customized solutions aligned with specific project objectives.',
    tag: 'Dedicated Support', color: '#059669',
  },
];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = typewriterWords[index];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % typewriterWords.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="typewriter-word">
      {displayed}<span className="typewriter-cursor">|</span>
    </span>
  );
}

function CountUp({ end, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(end);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero hero-pro">
        <div className="hero-grid-bg" />
        <div className="hero-particles">
          {[...Array(18)].map((_, i) => <span key={i} className={`particle p${i % 6}`} />)}
        </div>
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="container">
          <motion.div variants={heroStagger} initial="hidden" animate="visible" className="hero-inner hero-split">

            {/* LEFT */}
            <div className="hero-left">
              <motion.span variants={heroItem} className="hero-eyebrow">
                <span className="eyebrow-dot" />Trusted Infrastructure Partner
              </motion.span>
              <motion.h1 variants={heroItem}>
                Precision in<br />
                <Typewriter />
                <br />
                <span className="hero-gradient-text">Across India</span>
              </motion.h1>
              <motion.p variants={heroItem}>
                End-to-end solutions in Surveying, GIS, Civil Engineering &amp; Software — delivered with accuracy, speed, and integrity.
              </motion.p>
              <motion.div variants={heroItem} className="hero-actions">
                <Link to="/enquiry"><button className="cta-button cta-pulse">Get a Free Quote</button></Link>
                <Link to="/services"><button className="cta-button-outline">Explore Services ↗</button></Link>
              </motion.div>
              <motion.div variants={heroItem} className="hero-trust-badges">
                {['🏛️ Govt. Projects', '📍 Pan India', '✅ ISO Process', '🔒 Trusted Since 2024'].map(b => (
                  <span key={b} className="trust-badge">{b}</span>
                ))}
              </motion.div>
            </div>

            {/* RIGHT */}
            <motion.div variants={heroItem} className="hero-right">
              <div className="hero-visual-card">
                <div className="hero-visual-header">
                  <span className="hv-dot red" /><span className="hv-dot yellow" /><span className="hv-dot green" />
                  <span className="hv-title">Live Project Dashboard</span>
                </div>
                <div className="hero-visual-body">
                  {[
                    { icon: '🗺️', label: 'GIS Mapping', val: '98%', color: '#60a5fa' },
                    { icon: '📐', label: 'Survey Accuracy', val: '99.7%', color: '#34d399' },
                    { icon: '🏗️', label: 'Projects On-Time', val: '95%', color: '#a78bfa' },
                    { icon: '💻', label: 'Software Delivery', val: '100%', color: '#fb923c' },
                  ].map(({ icon, label, val, color }) => (
                    <div className="hv-metric" key={label}>
                      <span className="hv-icon">{icon}</span>
                      <div className="hv-metric-info">
                        <span className="hv-metric-label">{label}</span>
                        <div className="hv-bar-wrap">
                          <div className="hv-bar" style={{ '--w': val, '--c': color }} />
                        </div>
                      </div>
                      <span className="hv-val" style={{ color }}>{val}</span>
                    </div>
                  ))}
                </div>
                <div className="hero-visual-footer">
                  <div className="hv-stat"><span>500+</span><small>Projects</small></div>
                  <div className="hv-divider" />
                  <div className="hv-stat"><span>15+</span><small>Years Exp.</small></div>
                  <div className="hv-divider" />
                  <div className="hv-stat"><span>200+</span><small>Clients</small></div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
        <motion.div variants={heroItem} initial="hidden" animate="visible" className="hero-scroll-hint">
          <span>Scroll to explore</span>
          <div className="scroll-line" />
        </motion.div>
      </section>

      <section className="page-section">
        <div className="container">

          {/* Welcome */}
          <ScrollSection className="content-section">
            <span className="section-label">Who We Are</span>
            <h2>Welcome to Udugiri Infratech</h2>
            <p>
              Udugiri Infratech is a premier provider of comprehensive infrastructure and technology solutions,
              delivering exceptional services across surveying, GIS, civil engineering, and software development.
              Our multidisciplinary approach combines technical expertise with cutting-edge technology to serve
              government agencies, private enterprises, and infrastructure development organizations.
            </p>
          </ScrollSection>

          {/* Core Strengths */}
          <motion.div className="strengths-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            <div className="strengths-header">
              <span className="section-label">Why Choose Us</span>
              <h2 className="strengths-title">Our Core Strengths</h2>
              <p className="strengths-subtitle">Built on expertise, driven by innovation, committed to excellence</p>
            </div>
            <motion.div className="strengths-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
              {strengths.map((s) => (
                <motion.div
                  key={s.title}
                  className="strength-card"
                  style={{ '--accent': s.color }}
                  variants={staggerItem}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="strength-card-top">
                    <div className="strength-icon-wrap">
                      <span className="strength-icon">{s.icon}</span>
                    </div>
                    <span className="strength-tag">{s.tag}</span>
                  </div>
                  <h3 className="strength-card-title">{s.title}</h3>
                  <p className="strength-card-text">{s.text}</p>
                  <div className="strength-card-bar" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div className="content-section highlighted-section" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>What We Do</span>
            <h2 className="section-title-center">Services Offered</h2>
            <motion.div className="services-highlight-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}>
              {services.map((svc) => (
                <motion.div key={svc} variants={staggerItem}>
                  <Link to="/enquiry" style={{ textDecoration: 'none' }}>
                    <motion.span
                      className="service-tag"
                      whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.97 }}
                    >{svc}</motion.span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Value Proposition */}
          <ScrollSection className="content-section" delay={0.1}>
            <span className="section-label">Our Promise</span>
            <h2>Our Value Proposition</h2>
            <p>
              At Udugiri Infratech, our integrated service portfolio enables clients to access multiple specialized
              services under one roof — streamlining project coordination and ensuring consistency across all
              deliverables. Whether you need topographic surveys, GIS mapping, infrastructure engineering, or
              custom software, our team brings the expertise and dedication to transform your vision into reality.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link to="/enquiry"><button className="cta-button">Start Your Project →</button></Link>
            </div>
          </ScrollSection>

        </div>
      </section>
    </div>
  );
}

export default Home;
