import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive Solutions for Infrastructure and Technology Needs</p>
        </div>
      </div>

      <section className="page-section">
        <div className="container">
          <div className="content-section">
            <h2>Professional Consultancy</h2>
            <div className="cards-grid">
              <div className="card">
                <img src="/cad-gis.svg" alt="CAD GIS" className="service-image" />
                <h3>CAD / GIS</h3>
                <ul>
                  <li>Application Development</li>
                  <li>Consulting</li>
                  <li>Data Development and Management</li>
                </ul>
              </div>
              <div className="card">
                <img src="/master-planning.svg" alt="Master Planning" className="service-image" />
                <h3>Master Planning</h3>
                <ul>
                  <li>Overall concept</li>
                  <li>Physical feasibility and congruity</li>
                  <li>Carrying capacity of the site</li>
                  <li>Official constraints</li>
                </ul>
              </div>
              <div className="card">
                <img src="/infrastructure.svg" alt="Infrastructure" className="service-image" />
                <h3>Infrastructure</h3>
                <ul>
                  <li>Infrastructure Engineering & Design</li>
                  <li>Architecture & Landscape Design</li>
                  <li>Civil & Structural Engineering Design</li>
                </ul>
              </div>
              <div className="card">
                <img src="/cadastral-mapping.svg" alt="Cadastral Mapping" className="service-image" />
                <h3>Cadastral and Parcel Mapping</h3>
                <p>
                  Precise cadastral surveys and parcel mapping services for land records, property boundaries, 
                  and legal documentation with GIS integration.
                </p>
              </div>
            </div>
          </div>

          <div className="content-section highlighted-section">
            <h2 className="section-title-center">Technical Expertise & Integrated Services</h2>
            <div className="cards-grid">
              <div className="card">
                <h3>Engineering & Consulting</h3>
                <p>Provides integrated engineering and consulting services for transportation, energy, water, and urban infrastructure projects.</p>
              </div>
              <div className="card">
                <h3>Transportation Infrastructure</h3>
                <p>Specializes in road and highway engineering, traffic management, and infrastructure operations.</p>
              </div>
              <div className="card">
                <h3>Urban Mobility</h3>
                <p>Supports railway and metro system planning, design, and engineering for urban mobility solutions.</p>
              </div>
              <div className="card">
                <h3>Sustainable Solutions</h3>
                <p>Develops water supply, wastewater treatment, and environmental engineering solutions for sustainable infrastructure.</p>
              </div>
              <div className="card">
                <h3>Smart City & Urban Planning</h3>
                <p>Delivers airport, port, and smart city planning along with building and urban development engineering services.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Surveying Services</h2>
            <p>
              Our surveying division provides precise measurement and mapping services essential for infrastructure 
              development, land management, and construction projects. Utilizing advanced equipment and proven 
              methodologies, we deliver accurate data that forms the foundation for informed decision-making.
            </p>
            
            <h3>Topographic Surveys</h3>
            <p>
              Comprehensive terrain mapping capturing natural and man-made features, elevation data, and contour 
              information. Our topographic surveys provide detailed representations of land surfaces essential for 
              engineering design, planning, and development activities.
            </p>

            <h3>Land Surveys and Boundary Demarcation</h3>
            <p>
              Precise determination of property boundaries, land parcels, and legal descriptions. We conduct thorough 
              investigations including title research, field measurements, and documentation to establish clear, 
              legally defensible boundary definitions.
            </p>

            <h3>Construction Surveys</h3>
            <p>
              Site layout, alignment verification, and as-built documentation services supporting construction 
              activities. Our team ensures accurate positioning of structures, utilities, and infrastructure 
              components according to design specifications.
            </p>

            <h3>Hydrographic Surveys</h3>
            <p>
              Underwater terrain mapping and bathymetric data collection for water bodies, reservoirs, and coastal 
              areas. Essential for navigation, dredging operations, and water resource management projects.
            </p>

            <h3>Geodetic Control Surveys</h3>
            <p>
              Establishment of precise reference networks and control points using GPS/GNSS technology. These surveys 
              provide the fundamental framework for large-scale mapping and engineering projects.
            </p>
          </div>

          <div className="content-section">
            <h2>Geographic Information Systems (GIS)</h2>
            <p>
              Our GIS services transform spatial data into actionable intelligence, enabling organizations to 
              visualize, analyze, and interpret geographic information for strategic planning and operational 
              efficiency.
            </p>

            <h3>GIS Mapping and Database Development</h3>
            <p>
              Creation of comprehensive digital maps and spatial databases integrating multiple data layers. We 
              develop customized GIS solutions that organize, manage, and present geographic information effectively.
            </p>

            <h3>Spatial Analysis and Modeling</h3>
            <p>
              Advanced analytical services including site suitability analysis, network analysis, terrain modeling, 
              and predictive modeling. Our expertise helps clients understand spatial relationships and patterns for 
              better decision-making.
            </p>

            <h3>Remote Sensing and Image Processing</h3>
            <p>
              Satellite imagery interpretation, aerial photograph analysis, and digital image processing for land use 
              classification, change detection, and resource monitoring applications.
            </p>

            <h3>Web GIS and Mobile GIS Solutions</h3>
            <p>
              Development of web-based and mobile GIS applications enabling real-time data access, field data 
              collection, and collaborative mapping capabilities across organizations.
            </p>

            <h3>GIS Consulting and Training</h3>
            <p>
              Expert guidance on GIS implementation strategies, system architecture, and workflow optimization. We 
              also provide comprehensive training programs to build in-house GIS capabilities.
            </p>
          </div>

          <div className="content-section">
            <h2>Infrastructure Engineering</h2>
            <p>
              Our engineering services encompass planning, design, and project management for diverse infrastructure 
              projects. We combine technical expertise with practical experience to deliver solutions that meet 
              functional requirements while optimizing costs and timelines.
            </p>

            <h3>Civil Engineering Design</h3>
            <p>
              Comprehensive design services for roads, highways, bridges, drainage systems, and other civil 
              infrastructure. Our designs incorporate safety, sustainability, and constructability considerations.
            </p>

            <h3>Urban Planning and Development</h3>
            <p>
              Master planning, zoning studies, and development layouts for residential, commercial, and industrial 
              projects. We create sustainable urban designs that balance growth with livability.
            </p>

            <h3>Water Resources Engineering</h3>
            <p>
              Design and planning for water supply systems, irrigation networks, drainage infrastructure, and flood 
              management projects. Our solutions address water conservation and efficient distribution.
            </p>

            <h3>Transportation Engineering</h3>
            <p>
              Traffic studies, road network planning, intersection design, and transportation system optimization. 
              We develop solutions that improve mobility and reduce congestion.
            </p>

            <h3>Project Management and Supervision</h3>
            <p>
              End-to-end project management services including planning, scheduling, quality control, and site 
              supervision. We ensure projects are executed according to specifications, budgets, and timelines.
            </p>
          </div>

          <div className="content-section">
            <h2>Software Development</h2>
            <p>
              Our software development team creates custom applications and digital solutions that address specific 
              business requirements. We leverage modern technologies and agile methodologies to deliver robust, 
              scalable software products.
            </p>

            <h3>Custom Application Development</h3>
            <p>
              Tailored software solutions designed to meet unique organizational needs. From enterprise applications 
              to specialized tools, we develop software that enhances operational efficiency and productivity.
            </p>

            <h3>Web Application Development</h3>
            <p>
              Responsive, user-friendly web applications built using modern frameworks and technologies. Our web 
              solutions provide seamless experiences across devices and platforms.
            </p>

            <h3>Mobile Application Development</h3>
            <p>
              Native and cross-platform mobile applications for iOS and Android. We create intuitive mobile solutions 
              that extend business capabilities to smartphones and tablets.
            </p>

            <h3>Database Design and Management</h3>
            <p>
              Efficient database architecture, implementation, and optimization services. We ensure data integrity, 
              security, and performance for mission-critical applications.
            </p>

            <h3>System Integration</h3>
            <p>
              Seamless integration of disparate systems and applications, enabling data flow and process automation 
              across organizational boundaries.
            </p>

            <h3>Software Maintenance and Support</h3>
            <p>
              Ongoing maintenance, updates, and technical support ensuring software systems remain functional, 
              secure, and aligned with evolving requirements.
            </p>
          </div>

          <div className="content-section highlighted-section">
            <h2 className="section-title-center">Core Service Offerings</h2>
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
            <h2>Detailed Service Categories</h2>
            <div className="cards-grid">
              <div className="card">
                <h3>Urban Planning & GIS-Based Master Planning</h3>
                <p>
                  Comprehensive urban planning solutions integrating GIS technology for master plan development, 
                  zoning analysis, and sustainable urban growth strategies.
                </p>
              </div>
              <div className="card">
                <h3>Drone Survey, DGPS & Total Station Survey</h3>
                <p>
                  Advanced surveying services using drone technology, Differential GPS, and Total Station equipment 
                  for precise land measurements and topographic mapping.
                </p>
              </div>
              <div className="card">
                <h3>Liaison Services</h3>
                <p>
                  Professional assistance for building plan approvals, layout approvals, and regulatory compliance 
                  with municipal and government authorities.
                </p>
              </div>
              <div className="card">
                <h3>Change of Land Use (CLU) & RERA Assistance</h3>
                <p>
                  Expert guidance for land use conversion, obtaining conversion orders, and RERA registration 
                  support for real estate projects.
                </p>
              </div>
              <div className="card">
                <h3>Architecture & Interior Design</h3>
                <p>
                  Complete architectural design and interior solutions including Vastu-compliant planning for 
                  residential, commercial, and institutional projects.
                </p>
              </div>
              <div className="card">
                <h3>Construction, PMC & Project Execution</h3>
                <p>
                  End-to-end construction services, project management consultancy, and turnkey project execution 
                  with quality assurance and timely delivery.
                </p>
              </div>
              <div className="card">
                <h3>Real Estate & Investment Advisory</h3>
                <p>
                  Professional real estate consulting and investment advisory services including dedicated NRI desk 
                  for overseas investors and property buyers.
                </p>
              </div>
              <div className="card">
                <h3>Training & Capacity Building Workshops</h3>
                <p>
                  Specialized training programs and workshops on surveying, GIS, urban planning, and infrastructure 
                  development for professionals and organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
