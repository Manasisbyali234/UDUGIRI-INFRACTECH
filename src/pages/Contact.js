import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    alert('Thank you for contacting us! We will respond to your message shortly.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're Here to Help - Get in Touch Today</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="content-section">
            <h2>Connect With Oneness Infratech</h2>
            <p>
              We value open communication and are committed to providing prompt, helpful responses to all inquiries. 
              Whether you have questions about our services, need technical support, want to discuss a potential 
              project, or simply wish to learn more about Oneness Infratech, our team is ready to assist you.
            </p>
            <p>
              Choose the communication method that works best for you, and we'll ensure your message reaches the 
              right person who can provide the information or assistance you need.
            </p>
          </div>

          <div className="content-section">
            <h2>Contact Information</h2>
            <div className="cards-grid">
              <div className="card">
                <h3>Corporate Office</h3>
                <p><strong>Address:</strong></p>
                <p>Oneness Infratech</p>
                <p>[Street Address]</p>
                <p>[City, State - PIN Code]</p>
                <p>[Country]</p>
              </div>
              <div className="card">
                <h3>Email</h3>
                <p><strong>General Inquiries:</strong></p>
                <p>info@oitech.co.in</p>
                <p><strong>Business Development:</strong></p>
                <p>business@oitech.co.in</p>
                <p><strong>Career Opportunities:</strong></p>
                <p>careers@oitech.co.in</p>
              </div>
              <div className="card">
                <h3>Phone</h3>
                <p><strong>Main Office:</strong></p>
                <p>+91-XXXXXXXXXX</p>
                <p><strong>Alternative:</strong></p>
                <p>+91-XXXXXXXXXX</p>
                <p><strong>Fax:</strong></p>
                <p>+91-XXXXXXXXXX</p>
              </div>
              <div className="card">
                <h3>Business Hours</h3>
                <p><strong>Monday - Friday:</strong></p>
                <p>9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong></p>
                <p>9:00 AM - 1:00 PM</p>
                <p><strong>Sunday:</strong></p>
                <p>Closed</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Department-Specific Contacts</h2>
            
            <h3>Project Inquiries</h3>
            <p>
              For questions about ongoing projects, project status updates, or technical clarifications related to 
              active engagements, please contact your designated project manager or reach out to our project 
              coordination team at projects@oitech.co.in
            </p>

            <h3>Technical Support</h3>
            <p>
              If you require technical assistance with software applications, GIS systems, or other technology 
              solutions provided by us, our technical support team is available at support@oitech.co.in
            </p>

            <h3>Business Partnerships</h3>
            <p>
              Organizations interested in exploring partnership opportunities, collaborations, or vendor relationships 
              can contact our business development team at partnerships@oitech.co.in
            </p>

            <h3>Media and Press</h3>
            <p>
              For media inquiries, press releases, or interview requests, please contact our communications team at 
              media@oitech.co.in
            </p>
          </div>

          <div className="form-container">
            <h2>Send Us a Message</h2>
            <p>Use the form below to send us a direct message. We typically respond within 24-48 hours.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
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
                <label htmlFor="email">Your Email *</label>
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
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please provide details about your inquiry..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>

          <div className="content-section">
            <h2>Visit Our Office</h2>
            <p>
              We welcome clients, partners, and prospective employees to visit our office. To ensure someone is 
              available to meet with you and provide the attention your visit deserves, we recommend scheduling an 
              appointment in advance by calling us or sending an email with your preferred date and time.
            </p>
            <p>
              Our office is equipped with meeting facilities where we can discuss your requirements in detail, 
              demonstrate our capabilities, and provide comprehensive information about our services and solutions.
            </p>
          </div>

          <div className="content-section">
            <h2>Response Time and Communication</h2>
            <p>
              At Oneness Infratech, we prioritize timely communication. Here's what you can expect:
            </p>
            <ul>
              <li><strong>Email Inquiries:</strong> Responses typically within 24-48 business hours</li>
              <li><strong>Phone Calls:</strong> Immediate assistance during business hours; voicemail messages returned within 24 hours</li>
              <li><strong>Contact Form Submissions:</strong> Acknowledgment within 24 hours, detailed response within 48 hours</li>
              <li><strong>Urgent Matters:</strong> For time-sensitive issues, please call directly and mention the urgency</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Social Media</h2>
            <p>
              Stay connected with Oneness Infratech through our social media channels for updates, industry insights, 
              and company news:
            </p>
            <ul>
              <li><strong>LinkedIn:</strong> [Company LinkedIn Profile]</li>
              <li><strong>Facebook:</strong> [Company Facebook Page]</li>
              <li><strong>Twitter:</strong> [Company Twitter Handle]</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Feedback and Suggestions</h2>
            <p>
              We continuously strive to improve our services and client experience. If you have feedback, suggestions, 
              or testimonials about your experience working with Oneness Infratech, we'd love to hear from you. 
              Please send your thoughts to feedback@oitech.co.in
            </p>
          </div>

          <div className="content-section">
            <h2>Privacy and Data Protection</h2>
            <p>
              All information shared through our contact channels is treated with strict confidentiality and used 
              solely for the purpose of responding to your inquiry or request. We do not share personal information 
              with third parties without explicit consent. For more details, please refer to our Privacy Policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
