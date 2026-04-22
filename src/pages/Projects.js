import React, { useEffect, useRef } from 'react';
import CanonicalTag from '../components/CanonicalTag';

const CAPABILITIES = [
  {
    icon: '🏛️',
    title: 'Government Projects',
    text: 'Extensive experience with government departments on infrastructure development, urban planning, and resource management. Our compliance expertise ensures smooth execution across all regulatory frameworks.',
    points: ['Public Works & Municipal', 'Regulatory Compliance', 'Urban Planning Support'],
    color: '#2563eb',
  },
  {
    icon: '🏗️',
    title: 'Private Sector Developments',
    text: 'End-to-end collaboration with private developers and industrial enterprises on residential, commercial, and industrial projects — from initial surveys to final documentation.',
    points: ['Real Estate & Industrial', 'Full-cycle Delivery', 'As-built Documentation'],
    color: '#0891b2',
  },
  {
    icon: '🗺️',
    title: 'Infrastructure Mapping',
    text: 'Large-scale GIS and survey mapping for roads, railways, utilities, and municipal infrastructure — enabling accurate asset documentation and future development planning.',
    points: ['Roads & Railways', 'Utility Networks', 'GIS Asset Management'],
    color: '#059669',
  },
  {
    icon: '💻',
    title: 'Technology Implementation',
    text: 'Custom software and system integration projects that digitize operations, automate workflows, and enhance organizational efficiency with modern technology solutions.',
    points: ['Custom Software', 'Workflow Automation', 'System Integration'],
    color: '#7c3aed',
  },
];

function ExecutionCapabilities() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.exec-item');
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('exec-item--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="exec-list" ref={sectionRef}>
      {CAPABILITIES.map((cap, i) => (
        <div
          className="exec-item"
          key={cap.title}
          style={{ '--delay': `${i * 0.13}s`, '--accent': cap.color }}
        >
          <div className="exec-item-left">
            <div className="exec-num">0{i + 1}</div>
            <div className="exec-connector" />
          </div>
          <div className="exec-item-body">
            <div className="exec-item-header">
              <span className="exec-item-icon">{cap.icon}</span>
              <h3>{cap.title}</h3>
            </div>
            <p>{cap.text}</p>
            <ul className="exec-points">
              {cap.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

function Projects() {
  return (
    <div>
      <CanonicalTag />
      <div className="page-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Delivering excellence across diverse infrastructure initiatives</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="content-section">
            <span className="section-label">Our Work</span>
            <h2>Project Portfolio Overview</h2>
            <p>
              Udugiri Infratech has successfully executed numerous projects across various sectors, demonstrating 
              our versatility, technical competence, and commitment to quality. Our project portfolio spans 
              government infrastructure initiatives, private development projects, industrial facilities, and 
              technology implementations, each reflecting our ability to deliver results that meet or exceed 
              client expectations.
            </p>
            <p>
              Through systematic planning, efficient resource management, and rigorous quality control, we have 
              established a track record of timely project completion while maintaining the highest standards of 
              accuracy and professionalism. Our experience encompasses projects of varying scales and complexities, 
              from localized surveys to large-scale infrastructure mapping and engineering assignments.
            </p>
          </div>

          <div className="content-section">
            <span className="section-label">Capabilities</span>
            <h2>Project Execution Capabilities</h2>
            <ExecutionCapabilities />
          </div>

          <div className="content-section">
            <h2>Key Project Areas</h2>
            
            <h3>Transportation Infrastructure</h3>
            <p>
              Surveying and engineering services for highway projects, road networks, bridges, and transportation 
              corridors. Our work includes topographic surveys, alignment design, cross-section preparation, and 
              construction supervision for various transportation infrastructure initiatives.
            </p>

            <h3>Urban Development</h3>
            <p>
              Comprehensive services for urban planning projects including master plan preparation, layout surveys, 
              infrastructure design, and GIS-based urban information systems. We support municipalities and 
              development authorities in creating sustainable, well-planned urban environments.
            </p>

            <h3>Water Resources</h3>
            <p>
              Survey and engineering support for irrigation projects, water supply schemes, drainage systems, and 
              watershed management initiatives. Our services include hydrographic surveys, canal alignment, and 
              hydraulic structure design.
            </p>

            <h3>Industrial Facilities</h3>
            <p>
              Site surveys, layout planning, and engineering design for industrial plants, manufacturing facilities, 
              and commercial complexes. We provide accurate as-built documentation and facility management solutions.
            </p>

            <h3>Land Management</h3>
            <p>
              Cadastral surveys, land records digitization, and GIS-based land information systems for revenue 
              departments and land management agencies. Our solutions improve land administration efficiency and 
              transparency.
            </p>

            <h3>Utility Mapping</h3>
            <p>
              Documentation and mapping of underground and overhead utilities including water supply networks, 
              sewerage systems, electrical distribution, and telecommunications infrastructure. We create 
              comprehensive utility databases for asset management.
            </p>
          </div>

          <div className="content-section">
            <h2>Our Project Approach</h2>
            <p>
              Every project undertaken by Udugiri Infratech follows a structured methodology designed to ensure 
              successful outcomes:
            </p>
            <ul>
              <li><strong>Initial Consultation:</strong> Understanding project requirements, objectives, and constraints through detailed discussions with stakeholders</li>
              <li><strong>Scope Definition:</strong> Clearly defining deliverables, timelines, and quality parameters in alignment with client expectations</li>
              <li><strong>Resource Planning:</strong> Allocating appropriate personnel, equipment, and technology resources for optimal project execution</li>
              <li><strong>Field Operations:</strong> Conducting surveys, data collection, and field investigations with precision and efficiency</li>
              <li><strong>Data Processing:</strong> Applying rigorous quality control measures during data processing, analysis, and documentation</li>
              <li><strong>Deliverable Preparation:</strong> Creating comprehensive reports, drawings, and digital outputs in specified formats</li>
              <li><strong>Quality Review:</strong> Internal verification and validation ensuring accuracy and completeness before delivery</li>
              <li><strong>Client Presentation:</strong> Presenting findings and deliverables with clear explanations and technical support</li>
              <li><strong>Post-Project Support:</strong> Providing clarifications, revisions, and additional assistance as needed</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Quality Assurance</h2>
            <p>
              Quality is paramount in all our project activities. We implement comprehensive quality management 
              systems that include:
            </p>
            <ul>
              <li>Calibrated equipment and standardized measurement procedures</li>
              <li>Multi-level checking and verification protocols</li>
              <li>Adherence to national and international standards</li>
              <li>Documentation of quality control measures and audit trails</li>
              <li>Continuous monitoring and corrective action mechanisms</li>
              <li>Client feedback integration for continuous improvement</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Technology and Innovation</h2>
            <p>
              Our project execution leverages advanced technologies including:
            </p>
            <ul>
              <li>Total Station and GPS/GNSS equipment for precise measurements</li>
              <li>Drone technology for aerial surveys and photogrammetry</li>
              <li>LiDAR systems for high-density terrain mapping</li>
              <li>GIS software platforms for spatial data management and analysis</li>
              <li>CAD and BIM tools for engineering design and visualization</li>
              <li>Custom software applications for specialized requirements</li>
            </ul>
          </div>

          <div className="content-section">
            <h2>Client Sectors</h2>
            <p>
              We serve diverse client segments across multiple industries:
            </p>
            <div className="cards-grid">
              <div className="card">
                <h3>Government Agencies</h3>
                <p>Public Works Departments, Municipal Corporations, Revenue Departments, Urban Development Authorities</p>
              </div>
              <div className="card">
                <h3>Infrastructure Developers</h3>
                <p>Highway Authorities, Railway Organizations, Port and Airport Authorities, Power Utilities</p>
              </div>
              <div className="card">
                <h3>Private Enterprises</h3>
                <p>Real Estate Developers, Construction Companies, Industrial Corporations, Consulting Firms</p>
              </div>
              <div className="card">
                <h3>Research Institutions</h3>
                <p>Academic Organizations, Research Centers, Environmental Agencies, Planning Institutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
