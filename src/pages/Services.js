import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedCard from '../components/AnimatedCard';
import ScrollSection from '../components/ScrollSection';
import { heroStagger, heroItem, staggerContainer, staggerItem, fadeUp, viewportOptions } from '../hooks/useScrollAnimation';

const consultancyCards = [
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    alt: 'CAD GIS mapping', title: 'CAD / GIS',
    list: ['Application Development', 'Consulting', 'Data Development and Management'],
    icon: '🗺️',
  },
  {
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    alt: 'Master Planning', title: 'Master Planning',
    list: ['Overall concept', 'Physical feasibility and congruity', 'Carrying capacity of the site', 'Official constraints'],
    icon: '🏙️',
  },
  {
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    alt: 'Infrastructure Engineering', title: 'Infrastructure',
    list: ['Infrastructure Engineering & Design', 'Architecture & Landscape Design', 'Civil & Structural Engineering Design'],
    icon: '🏗️',
  },
  {
    img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80',
    alt: 'Cadastral Mapping', title: 'Cadastral and Parcel Mapping',
    text: 'Precise cadastral surveys and parcel mapping services for land records, property boundaries, and legal documentation with GIS integration.',
    icon: '📐',
  },
];

const expertiseCards = [
  { title: 'Engineering & Consulting', text: 'Provides integrated engineering and consulting services for transportation, energy, water, and urban infrastructure projects.' },
  { title: 'Transportation Infrastructure', text: 'Specializes in road and highway engineering, traffic management, and infrastructure operations.' },
  { title: 'Urban Mobility', text: 'Supports railway and metro system planning, design, and engineering for urban mobility solutions.' },
  { title: 'Sustainable Solutions', text: 'Develops water supply, wastewater treatment, and environmental engineering solutions for sustainable infrastructure.' },
  { title: 'Smart City & Urban Planning', text: 'Delivers airport, port, and smart city planning along with building and urban development engineering services.' },
];

const detailedCards = [
  { title: 'Urban Planning & GIS-Based Master Planning', text: 'Comprehensive urban planning solutions integrating GIS technology for master plan development, zoning analysis, and sustainable urban growth strategies.' },
  { title: 'Drone Survey, DGPS & Total Station Survey', text: 'Advanced surveying services using drone technology, Differential GPS, and Total Station equipment for precise land measurements and topographic mapping.' },
  { title: 'Liaison Services', text: 'Professional assistance for building plan approvals, layout approvals, and regulatory compliance with municipal and government authorities.' },
  { title: 'Change of Land Use (CLU) & RERA Assistance', text: 'Expert guidance for land use conversion, obtaining conversion orders, and RERA registration support for real estate projects.' },
  { title: 'Architecture & Interior Design', text: 'Complete architectural design and interior solutions including Vastu-compliant planning for residential, commercial, and institutional projects.' },
  { title: 'Construction, PMC & Project Execution', text: 'End-to-end construction services, project management consultancy, and turnkey project execution with quality assurance and timely delivery.' },
  { title: 'Real Estate & Investment Advisory', text: 'Professional real estate consulting and investment advisory services including dedicated NRI desk for overseas investors and property buyers.' },
  { title: 'Training & Capacity Building Workshops', text: 'Specialized training programs and workshops on surveying, GIS, urban planning, and infrastructure development for professionals and organizations.' },
];

const serviceTags = [
  'Building Designs', 'GPS / Total Station Survey', 'Software Development',
  'GIS Based Ward Delimitation', 'Construction', 'DPR for Water Supply',
  'Layout Designs', 'Roads & Drains', 'DGPS Survey',
  'GIS Based Master Plan', 'Bridges / Culverts', 'Layout Development',
  'UGD / Storm Water Drains', 'GIS Projects',
];

const textSections = [
  {
    title: 'Surveying Services',
    intro: 'Our surveying division provides precise measurement and mapping services essential for infrastructure development, land management, and construction projects. Utilizing advanced equipment and proven methodologies, we deliver accurate data that forms the foundation for informed decision-making.',
    items: [
      { h: 'Topographic Surveys', p: 'Comprehensive terrain mapping capturing natural and man-made features, elevation data, and contour information. Our topographic surveys provide detailed representations of land surfaces essential for engineering design, planning, and development activities.' },
      { h: 'Land Surveys and Boundary Demarcation', p: 'Precise determination of property boundaries, land parcels, and legal descriptions. We conduct thorough investigations including title research, field measurements, and documentation to establish clear, legally defensible boundary definitions.' },
      { h: 'Construction Surveys', p: 'Site layout, alignment verification, and as-built documentation services supporting construction activities. Our team ensures accurate positioning of structures, utilities, and infrastructure components according to design specifications.' },
      { h: 'Hydrographic Surveys', p: 'Underwater terrain mapping and bathymetric data collection for water bodies, reservoirs, and coastal areas. Essential for navigation, dredging operations, and water resource management projects.' },
      { h: 'Geodetic Control Surveys', p: 'Establishment of precise reference networks and control points using GPS/GNSS technology. These surveys provide the fundamental framework for large-scale mapping and engineering projects.' },
    ],
  },
  {
    title: 'Geographic Information Systems (GIS)',
    intro: 'Our GIS services transform spatial data into actionable intelligence, enabling organizations to visualize, analyze, and interpret geographic information for strategic planning and operational efficiency.',
    items: [
      { h: 'GIS Mapping and Database Development', p: 'Creation of comprehensive digital maps and spatial databases integrating multiple data layers. We develop customized GIS solutions that organize, manage, and present geographic information effectively.' },
      { h: 'Spatial Analysis and Modeling', p: 'Advanced analytical services including site suitability analysis, network analysis, terrain modeling, and predictive modeling. Our expertise helps clients understand spatial relationships and patterns for better decision-making.' },
      { h: 'Remote Sensing and Image Processing', p: 'Satellite imagery interpretation, aerial photograph analysis, and digital image processing for land use classification, change detection, and resource monitoring applications.' },
      { h: 'Web GIS and Mobile GIS Solutions', p: 'Development of web-based and mobile GIS applications enabling real-time data access, field data collection, and collaborative mapping capabilities across organizations.' },
      { h: 'GIS Consulting and Training', p: 'Expert guidance on GIS implementation strategies, system architecture, and workflow optimization. We also provide comprehensive training programs to build in-house GIS capabilities.' },
    ],
  },
  {
    title: 'Infrastructure Engineering',
    intro: 'Our engineering services encompass planning, design, and project management for diverse infrastructure projects. We combine technical expertise with practical experience to deliver solutions that meet functional requirements while optimizing costs and timelines.',
    items: [
      { h: 'Civil Engineering Design', p: 'Comprehensive design services for roads, highways, bridges, drainage systems, and other civil infrastructure. Our designs incorporate safety, sustainability, and constructability considerations.' },
      { h: 'Urban Planning and Development', p: 'Master planning, zoning studies, and development layouts for residential, commercial, and industrial projects. We create sustainable urban designs that balance growth with livability.' },
      { h: 'Water Resources Engineering', p: 'Design and planning for water supply systems, irrigation networks, drainage infrastructure, and flood management projects. Our solutions address water conservation and efficient distribution.' },
      { h: 'Transportation Engineering', p: 'Traffic studies, road network planning, intersection design, and transportation system optimization. We develop solutions that improve mobility and reduce congestion.' },
      { h: 'Project Management and Supervision', p: 'End-to-end project management services including planning, scheduling, quality control, and site supervision. We ensure projects are executed according to specifications, budgets, and timelines.' },
    ],
  },
  {
    title: 'Software Development',
    intro: 'Our software development team creates custom applications and digital solutions that address specific business requirements. We leverage modern technologies and agile methodologies to deliver robust, scalable software products.',
    items: [
      { h: 'Custom Application Development', p: 'Tailored software solutions designed to meet unique organizational needs. From enterprise applications to specialized tools, we develop software that enhances operational efficiency and productivity.' },
      { h: 'Web Application Development', p: 'Responsive, user-friendly web applications built using modern frameworks and technologies. Our web solutions provide seamless experiences across devices and platforms.' },
      { h: 'Mobile Application Development', p: 'Native and cross-platform mobile applications for iOS and Android. We create intuitive mobile solutions that extend business capabilities to smartphones and tablets.' },
      { h: 'Database Design and Management', p: 'Efficient database architecture, implementation, and optimization services. We ensure data integrity, security, and performance for mission-critical applications.' },
      { h: 'System Integration', p: 'Seamless integration of disparate systems and applications, enabling data flow and process automation across organizational boundaries.' },
      { h: 'Software Maintenance and Support', p: 'Ongoing maintenance, updates, and technical support ensuring software systems remain functional, secure, and aligned with evolving requirements.' },
    ],
  },
];

function Services() {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <motion.div variants={heroStagger} initial="hidden" animate="visible">
            <motion.h1 variants={heroItem}>Our Services</motion.h1>
            <motion.p variants={heroItem}>Comprehensive Solutions for Infrastructure and Technology Needs</motion.p>
          </motion.div>
        </div>
      </div>

      <section className="page-section">
        <div className="container">

          {/* Professional Consultancy */}
          <motion.div
            className="content-section"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOptions}
          >
            <h2>Professional Consultancy</h2>
            <motion.div
              className="consultancy-grid"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}
            >
              {consultancyCards.map((c, i) => (
                <motion.div
                  key={c.title}
                  className="consultancy-flip-card"
                  variants={staggerItem}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="flip-inner">
                    {/* Front */}
                    <div className="flip-front">
                      <div className="consultancy-img-wrap">
                        <img src={c.img} alt={c.alt} className="consultancy-img" />
                        <div className="consultancy-img-overlay" />
                        <span className="consultancy-icon">{c.icon}</span>
                      </div>
                      <div className="consultancy-front-body">
                        <h3>{c.title}</h3>
                        <span className="flip-hint">Hover to explore →</span>
                      </div>
                    </div>
                    {/* Back */}
                    <div className="flip-back">
                      <span className="consultancy-icon-back">{c.icon}</span>
                      <h3>{c.title}</h3>
                      {c.list
                        ? <ul>{c.list.map((l) => <li key={l}>{l}</li>)}</ul>
                        : <p>{c.text}</p>
                      }
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Technical Expertise */}
          <motion.div
            className="content-section highlighted-section"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOptions}
          >
            <h2 className="section-title-center">Technical Expertise & Integrated Services</h2>
            <motion.div
              className="cards-grid"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}
            >
              {expertiseCards.map((c) => (
                <AnimatedCard key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </AnimatedCard>
              ))}
            </motion.div>
          </motion.div>

          {/* Text-heavy sections */}
          {textSections.map((sec, i) => (
            <ScrollSection key={sec.title} className="content-section" delay={0}>
              <h2>{sec.title}</h2>
              <p>{sec.intro}</p>
              {sec.items.map((item) => (
                <React.Fragment key={item.h}>
                  <h3>{item.h}</h3>
                  <p>{item.p}</p>
                </React.Fragment>
              ))}
            </ScrollSection>
          ))}

          {/* Core Service Tags */}
          <motion.div
            className="content-section highlighted-section"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOptions}
          >
            <h2 className="section-title-center">Core Service Offerings</h2>
            <motion.div
              className="services-highlight-grid"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}
            >
              {serviceTags.map((tag) => (
                <motion.div key={tag} variants={staggerItem}>
                  <Link to="/enquiry">
                    <motion.span
                      className="service-tag"
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      whileHover={{ scale: 1.06, boxShadow: '0 8px 24px rgba(74,144,226,0.25)', transition: { duration: 0.2 } }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {tag}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Detailed Service Cards */}
          <motion.div
            className="content-section"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOptions}
          >
            <h2>Detailed Service Categories</h2>
            <motion.div
              className="cards-grid"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOptions}
            >
              {detailedCards.map((c) => (
                <AnimatedCard key={c.title}>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </AnimatedCard>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}

export default Services;
