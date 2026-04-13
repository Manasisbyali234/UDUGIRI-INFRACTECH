import React, { useEffect, useRef } from 'react';

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

function About() {
  const overviewRef = useReveal();
  const visionRef   = useReveal();
  const missionRef  = useReveal();
  const valuesRef   = useReveal();
  const approachRef = useReveal();
  const teamRef     = useReveal();

  return (
    <div>
      <div className="page-header about-hero-header">
        <div className="about-header-bg">
          {[...Array(6)].map((_, i) => <span key={i} className={`about-orb about-orb-${i}`} />)}
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="about-eyebrow">Our Story</span>
          <h1>About Udugiri Infratech</h1>
          <p>Pioneering Excellence in Infrastructure &amp; Technology</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">

          {/* ── Company Overview ── */}
          <div className="about-reveal-section" ref={overviewRef}>
            <div className="about-section-badge">Who We Are</div>
            <h2 className="about-section-title">Company Overview</h2>
            <div className="about-split-layout">
              <div className="about-image-col">
                <div className="about-img-frame">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop"
                    alt="Company Overview"
                  />
                  <div className="about-img-badge">
                    <span className="aib-num">2024</span>
                    <span className="aib-label">Founded</span>
                  </div>
                </div>
              </div>
              <div className="about-text-col">
                <p>
                  Udugiri Infratech has established itself as a distinguished organization specializing in
                  comprehensive infrastructure and technology solutions. Founded with a vision to bridge the
                  gap between traditional engineering practices and modern technological advancements, we have
                  grown into a trusted partner for organizations seeking reliable, accurate, and innovative services.
                </p>
                <p>
                  Our journey reflects a steadfast commitment to excellence, driven by a team of dedicated
                  professionals who bring together diverse expertise in surveying, geographic information systems,
                  civil engineering, and software development.
                </p>
                <p>
                  Operating at the intersection of engineering precision and digital innovation, Udugiri Infratech
                  serves government departments, municipal corporations, private developers, and industrial enterprises.
                </p>

              </div>
            </div>
          </div>

          {/* ── Vision ── */}
          <div className="about-reveal-section about-vision-section" ref={visionRef}>
            <div className="about-vision-inner">
              <div className="about-vision-text">
                <div className="about-section-badge light">Looking Ahead</div>
                <h2 className="about-section-title light">Our Vision</h2>
                <p>
                  To emerge as a leading organization in infrastructure and technology services, recognized
                  nationally and internationally for delivering innovative, sustainable, and high-quality
                  solutions that contribute to societal development and economic growth.
                </p>
                <p>
                  We envision a future where our expertise enables seamless integration of traditional
                  engineering excellence with cutting-edge digital technologies, setting new benchmarks in
                  service delivery and client satisfaction.
                </p>
                <div className="vision-pillars">
                  {['National Recognition','Sustainable Solutions','Digital Integration','Client Excellence'].map(p => (
                    <span className="vision-pillar" key={p}>{p}</span>
                  ))}
                </div>
              </div>
              <div className="about-vision-visual">
                <div className="vision-rings">
                  <div className="vr vr1"><span>🌐</span></div>
                  <div className="vr vr2"><span>🏗️</span></div>
                  <div className="vr vr3"><span>💡</span></div>
                  <div className="vr-center"><span>🎯</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Mission ── */}
          <div className="about-reveal-section" ref={missionRef}>
            <div className="about-section-badge">Our Purpose</div>
            <h2 className="about-section-title">Our Mission</h2>
            <div className="about-split-layout reverse">
              <div className="about-image-col">
                <div className="about-img-frame">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop"
                    alt="Our Mission"
                  />
                </div>
              </div>
              <div className="about-text-col">
                <p>
                  Our mission is to provide comprehensive, accurate, and timely infrastructure and technology
                  solutions that empower our clients to make informed decisions and achieve their project
                  objectives efficiently.
                </p>
                <div className="mission-commitments">
                  {[
                    ['🎯','Quality & Precision','Delivering services with uncompromising quality and precision at every stage.'],
                    ['🚀','Technological Innovation','Embracing innovation to continuously enhance our service capabilities.'],
                    ['🤝','Long-term Partnerships','Building trust, transparency, and mutual growth with every client.'],
                    ['🌱','Sustainable Practices','Contributing to sustainable infrastructure development practices.'],
                    ['📚','Continuous Learning','Fostering a culture of professional development and growth.'],
                    ['⚖️','Ethical Business','Maintaining ethical practices and corporate responsibility always.'],
                  ].map(([icon, title, desc]) => (
                    <div className="mission-item" key={title}>
                      <div className="mission-item-icon">{icon}</div>
                      <div>
                        <strong>{title}</strong>
                        <p>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Core Values ── */}
          <div className="about-reveal-section" ref={valuesRef}>
            <div className="about-section-badge">What Drives Us</div>
            <h2 className="about-section-title">Core Values</h2>
            <div className="cards-grid">
              {[
                ['🏛️','Integrity','We conduct our business with honesty, transparency, and ethical practices, building trust through consistent, principled actions.'],
                ['⭐','Excellence','Pursuing the highest standards in everything we do, striving for continuous improvement and exceptional quality.'],
                ['💡','Innovation','Embracing change and technological advancement, we continuously explore new methodologies to deliver superior solutions.'],
                ['🤝','Collaboration','Fostering teamwork and partnership, we believe in collective expertise and open communication to achieve shared goals.'],
                ['✅','Accountability','Taking ownership of our commitments, we ensure reliable delivery and stand behind the quality of our work.'],
                ['🎯','Customer Focus','Placing client needs at the center of our operations, we tailor services to meet specific requirements consistently.'],
              ].map(([icon, title, desc]) => (
                <div className="card" key={title}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{icon}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Approach ── */}
          <div className="about-reveal-section" ref={approachRef}>
            <h2 className="about-section-title">Our Approach</h2>
            <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
              At Udugiri Infratech, we follow a systematic, client-centric approach that ensures successful
              project execution from conception to completion.
            </p>
            <ul>
              {[
                ['Requirement Analysis','Thorough understanding of client needs and project specifications'],
                ['Strategic Planning','Developing comprehensive execution plans with clear milestones'],
                ['Technology Integration','Leveraging appropriate tools and technologies for optimal results'],
                ['Quality Assurance','Implementing rigorous quality control measures at every stage'],
                ['Timely Delivery','Adhering to project timelines while maintaining quality standards'],
                ['Continuous Support','Providing post-delivery assistance and maintenance services'],
              ].map(([k, v]) => (
                <li key={k} style={{ marginBottom: '0.6rem', color: '#4a5568' }}>
                  <strong>{k}:</strong> {v}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Team ── */}
          <div className="about-reveal-section" ref={teamRef}>
            <h2 className="about-section-title">Our Team</h2>
            <div className="about-split-layout reverse">
              <div className="about-image-col">
                <div className="about-img-frame">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop"
                    alt="Our Team"
                  />
                </div>
              </div>
              <div className="about-text-col">
                <p>
                  The strength of Udugiri Infratech lies in our talented team of professionals who bring
                  together diverse skills, extensive experience, and unwavering commitment to excellence.
                  Our workforce includes licensed surveyors, GIS specialists, civil engineers, software
                  developers, and project managers.
                </p>
                <p>
                  We invest significantly in training and development, ensuring our team remains updated
                  with the latest industry trends, technological advancements, and best practices.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;
