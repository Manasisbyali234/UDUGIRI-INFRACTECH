import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <section className="hero" style={{ backgroundImage: 'url(/istockphoto-1333158315-612x612.jpg)' }}>
        <div className="container">
          <h1>Udugiri Infratech</h1>
          <h1>Building Tomorrow's Infrastructure Today</h1>
          <p>Your Trusted Partner in Surveying, GIS, Engineering & Technology Solutions</p>
          <Link to="/enquiry">
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="content-section">
            <h2>Welcome to Udugiri Infratech</h2>
            <p>
              Udugiri Infratech stands as a premier provider of comprehensive infrastructure and technology solutions, 
              delivering exceptional services across surveying, geographic information systems, civil engineering, and 
              software development. With a commitment to precision and innovation, we transform complex challenges into 
              streamlined solutions that drive progress and efficiency.
            </p>
            <p>
              Our multidisciplinary approach combines technical expertise with cutting-edge technology to serve clients 
              across diverse sectors including government agencies, private enterprises, and infrastructure development 
              organizations. We pride ourselves on delivering projects that exceed expectations while maintaining the 
              highest standards of quality and professionalism.
            </p>
          </div>

          <div className="content-section">
            <h2>Our Core Strengths</h2>
            <div className="cards-grid">
              <div className="card">
                <h3>Technical Excellence</h3>
                <p>
                  Leveraging advanced methodologies and state-of-the-art equipment, our team delivers accurate, 
                  reliable results that form the foundation for successful project execution.
                </p>
              </div>
              <div className="card">
                <h3>Experienced Professionals</h3>
                <p>
                  Our workforce comprises highly qualified engineers, surveyors, GIS specialists, and software 
                  developers with extensive industry experience and domain expertise.
                </p>
              </div>
              <div className="card">
                <h3>Innovative Solutions</h3>
                <p>
                  We continuously adopt emerging technologies and best practices to provide forward-thinking 
                  solutions that address evolving industry requirements.
                </p>
              </div>
              <div className="card">
                <h3>Client-Centric Approach</h3>
                <p>
                  Understanding unique client needs drives our service delivery, ensuring customized solutions 
                  that align with specific project objectives and timelines.
                </p>
              </div>
            </div>
          </div>

          <div className="content-section highlighted-section">
            <h2 className="section-title-center">Services Offered</h2>
            <div className="services-highlight-grid">
              <Link to="/enquiry" className="service-tag">Building Designs</Link>
              <Link to="/enquiry" className="service-tag">GPS / Total Station Survey</Link>
              <Link to="/enquiry" className="service-tag">Software Development</Link>
              <Link to="/enquiry" className="service-tag">GIS Based Ward Delimitation</Link>
              <Link to="/enquiry" className="service-tag">Construction</Link>
              <Link to="/enquiry" className="service-tag">DPR for Water Supply</Link>
              <Link to="/enquiry" className="service-tag">Layout Designs</Link>
              <Link to="/enquiry" className="service-tag">Roads & Drains</Link>
              <Link to="/enquiry" className="service-tag">DGPS Survey</Link>
              <Link to="/enquiry" className="service-tag">GIS Based Master Plan</Link>
              <Link to="/enquiry" className="service-tag">Bridges / Culverts</Link>
              <Link to="/enquiry" className="service-tag">Layout Development</Link>
              <Link to="/enquiry" className="service-tag">UGD / Storm Water Drains</Link>
              <Link to="/enquiry" className="service-tag">GIS Projects</Link>
            </div>
          </div>

          <div className="content-section">
            <h2>Why Choose Udugiri Infratech</h2>
            <ul>
              <li>Comprehensive end-to-end project management and execution capabilities</li>
              <li>Proven track record of successful project delivery across multiple domains</li>
              <li>Advanced technology integration for enhanced accuracy and efficiency</li>
              <li>Dedicated quality assurance processes ensuring superior outcomes</li>
              <li>Competitive pricing without compromising on quality standards</li>
              <li>Timely project completion with transparent communication throughout</li>
              <li>Post-project support and maintenance services</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Our Value Proposition</h2>
            <p>
              At Udugiri Infratech, we understand that infrastructure development and technological advancement 
              require partners who can deliver precision, reliability, and innovation. Our integrated service 
              portfolio enables clients to access multiple specialized services under one roof, streamlining 
              project coordination and ensuring consistency across all deliverables.
            </p>
            <p>
              Whether you require detailed topographic surveys, sophisticated GIS mapping solutions, comprehensive 
              infrastructure engineering services, or custom software development, our team brings together the 
              expertise, technology, and dedication needed to transform your vision into reality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
