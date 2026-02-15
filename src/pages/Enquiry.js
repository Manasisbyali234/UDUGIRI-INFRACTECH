import React, { useState } from 'react';

function Enquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      service: '',
      message: ''
    });
  };

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Make an Enquiry</h1>
          <p>Let's Discuss Your Project Requirements</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="content-section">
            <h2>Connect With Us</h2>
            <p>
              At Oneness Infratech, we believe every successful project begins with clear communication and 
              understanding. Whether you're planning a large-scale infrastructure initiative, need specialized 
              surveying services, require GIS solutions, or seek custom software development, our team is ready 
              to assist you.
            </p>
            <p>
              We invite you to share your project requirements, challenges, or questions with us. Our experienced 
              professionals will review your enquiry and provide tailored recommendations that align with your 
              objectives, timeline, and budget considerations.
            </p>
          </div>

          <div className="content-section">
            <h2>Why Reach Out to Us?</h2>
            <div className="cards-grid">
              <div className="card">
                <h3>Expert Consultation</h3>
                <p>
                  Receive professional guidance from experienced specialists who understand the technical and 
                  practical aspects of infrastructure and technology projects.
                </p>
              </div>
              <div className="card">
                <h3>Customized Solutions</h3>
                <p>
                  We don't believe in one-size-fits-all approaches. Every enquiry receives personalized attention 
                  and solutions designed specifically for your unique requirements.
                </p>
              </div>
              <div className="card">
                <h3>Transparent Communication</h3>
                <p>
                  Clear, honest discussions about project scope, timelines, costs, and deliverables ensure you 
                  have complete clarity before making decisions.
                </p>
              </div>
              <div className="card">
                <h3>Quick Response</h3>
                <p>
                  We value your time. Our team commits to responding to enquiries promptly, typically within 
                  24-48 hours with initial feedback and next steps.
                </p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>What Happens Next?</h2>
            <ul>
              <li><strong>Enquiry Review:</strong> Our team carefully reviews your submission to understand your requirements</li>
              <li><strong>Initial Response:</strong> You'll receive an acknowledgment and preliminary feedback within 24-48 hours</li>
              <li><strong>Detailed Discussion:</strong> We schedule a call or meeting to discuss your project in detail</li>
              <li><strong>Proposal Development:</strong> Based on our discussion, we prepare a comprehensive proposal outlining our approach, timeline, and costs</li>
              <li><strong>Clarifications:</strong> We address any questions or concerns you may have about our proposal</li>
              <li><strong>Project Initiation:</strong> Upon agreement, we begin project execution with clear milestones and deliverables</li>
            </ul>
          </div>

          <div className="form-container">
            <h2>Submit Your Enquiry</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="organization">Organization Name</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service of Interest *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="surveying">Surveying Services</option>
                  <option value="gis">GIS Solutions</option>
                  <option value="engineering">Infrastructure Engineering</option>
                  <option value="software">Software Development</option>
                  <option value="multiple">Multiple Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details / Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide details about your project requirements, timeline, and any specific questions you have..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Submit Enquiry
              </button>
            </form>
          </div>

          <div className="content-section">
            <h2>Alternative Contact Methods</h2>
            <p>
              Prefer to reach us directly? You can also contact us through the following channels:
            </p>
            <ul>
              <li><strong>Email:</strong> info@oitech.co.in</li>
              <li><strong>Phone:</strong> +91-XXXXXXXXXX</li>
              <li><strong>Office Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM</li>
            </ul>
            <p>
              For urgent matters or immediate assistance, please call us directly during business hours. Our team 
              is always ready to help you with your infrastructure and technology needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Enquiry;
