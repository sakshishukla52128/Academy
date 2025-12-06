import React, { useState, useEffect } from 'react';
import './Aboutus.css';
import { FaCheck, FaCertificate, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const coachesData = [
  {
    name: 'Simran Shukla',
    role: 'Head Coach',
    experience: '15+ Years',
    specialization: 'Singles & Doubles',
    imgSrc: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop',
    certifications: ['NIS Certified', 'Level 1 Coaching Certification'],
    specializations: ['Technical Skills', 'Tactical Awareness', 'Physical Conditioning'],
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    name: 'Aman Gupta',
    role: 'Senior Coach',
    experience: '10+ Years',
    specialization: 'Doubles',
    imgSrc: 'https://images.unsplash.com/photo-1584515938490-4b8f3f3f3f3f?w=400&h=400&fit=crop',
    certifications: ['BWF Level 1 Coach', 'CPR and First Aid Certified'],
    specializations: ['Doubles Strategy', 'Net Play', 'Fitness Training'],
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    name: 'Neha Patel',
    role: 'Assistant Coach',
    experience: '5+ Years',
    specialization: 'Mixed Doubles',
    imgSrc: 'https://images.unsplash.com/photo-1584515938490-4b8f3f3f3f3f?w=400&h=400&fit=crop',
    certifications: ['BWF Level 1 Coach'],
    specializations: ['Mixed Doubles Tactics', 'Speed and Agility', 'Endurance Training'],
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  }
];

function Aboutus() {
  const [isVisible, setIsVisible] = useState({});
  const [countUp, setCountUp] = useState({ students: 0, years: 0, trophies: 0, coaches: 0 });
  const [activeCard, setActiveCard] = useState(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    const targets = { students: 500, years: 15, trophies: 150, coaches: 12 };
    const duration = 2000;
    
    if (isVisible.stats) {
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setCountUp({
          students: Math.floor(targets.students * progress),
          years: Math.floor(targets.years * progress),
          trophies: Math.floor(targets.trophies * progress),
          coaches: Math.floor(targets.coaches * progress),
        });
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      animate();
    }
  }, [isVisible.stats]);

  return (
    <div className="aboutus-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              About <span className="highlight">SSBA Academy</span>
            </h1>
            <p className="hero-description">
              Where Champions Are Made - Transforming passion into excellence since 2009
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">150+</span>
                <span className="stat-label">Trophies</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card card-1">🏸</div>
            <div className="floating-card card-2">🏆</div>
            <div className="floating-card card-3">⭐</div>
            <img src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&h=600&fit=crop" alt="Badminton Academy" />
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="animate-on-scroll mission-section">
        <div className="container">
          <h2 className={`section-title ${isVisible.mission ? 'fade-in' : ''}`}>
            Our Mission & Vision
          </h2>
          
          <div className="mission-grid">
            <div className={`mission-card ${isVisible.mission ? 'slide-in-left' : ''}`}>
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide world-class badminton training that develops not just athletic skills, 
                but also character, discipline, and sportsmanship in every student.
              </p>
              <ul className="mission-list">
                <li>✓ Personalized training programs</li>
                <li>✓ Professional coaching techniques</li>
                <li>✓ Character development focus</li>
                <li>✓ Competitive excellence</li>
              </ul>
            </div>

            <div className={`mission-card ${isVisible.mission ? 'slide-in-right' : ''}`}>
              <div className="card-icon">🚀</div>
              <h3>Our Vision</h3>
              <p>
                To become India's premier badminton academy, producing national and international 
                champions while making the sport accessible to everyone.
              </p>
              <ul className="mission-list">
                <li>✓ National level players</li>
                <li>✓ International recognition</li>
                <li>✓ Community development</li>
                <li>✓ Sports accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="animate-on-scroll stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">{countUp.students}+</div>
              <div className="stat-text">Active Students</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-number">{countUp.years}+</div>
              <div className="stat-text">Years of Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">{countUp.trophies}+</div>
              <div className="stat-text">Trophies Won</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎓</div>
              <div className="stat-number">{countUp.coaches}+</div>
              <div className="stat-text">Expert Coaches</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Why Choose <span className="highlight">SSBA Academy?</span>
            </h2>
            <p className="section-subtitle">
              Discover what makes us the premier choice for badminton excellence
            </p>
          </div>
          <div className="features-content">
            <div className="features-list">
              <div className="feature-item">
                <FaCheck className="check-icon" />
                <span>Professional Coaching Staff</span>
              </div>
              <div className="feature-item">
                <FaCheck className="check-icon" />
                <span>World-Class Facilities</span>
              </div>
              <div className="feature-item">
                <FaCheck className="check-icon" />
                <span>Personalized Training Programs</span>
              </div>
              <div className="feature-item">
                <FaCheck className="check-icon" />
                <span>Regular Tournaments & Competitions</span>
              </div>
              <div className="feature-item">
                <FaCheck className="check-icon" />
                <span>Fitness & Conditioning Programs</span>
              </div>
              <div className="feature-item">
                <FaCheck className="check-icon" />
                <span>Mental Training & Sports Psychology</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="animate-on-scroll coach-section">
        <div className="container">
          <h2 className={`section-title ${isVisible.coaches ? 'fade-in' : ''}`}>
            Meet Our Expert Coaches
          </h2>
          <div className="coaches-grid">
            {coachesData.map((coach, index) => (
              <div
                key={index}
                className={`coach-card ${isVisible.coaches ? 'scroll-animate' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="coach-card-inner">
                  <div className="coach-card-front">
                    <div className="coach-image-container">
                      <img src={coach.imgSrc} alt={coach.name} />
                    </div>
                    <div className="coach-info-section">
                      <h3 className="coach-name">{coach.name}</h3>
                      <p className="coach-role">{coach.role}</p>
                      <p className="coach-experience">{coach.experience} Experience</p>
                      <p className="coach-speciality">Speciality: {coach.specialization}</p>
                    </div>
                  </div>
                  <div className="coach-card-back">
                    <div className="coach-details">
                      <h3>{coach.name}</h3>
                      <div className="certifications">
                        <h4>Certifications</h4>
                        {coach.certifications.map((cert, i) => (
                          <div key={i} className="cert-item">
                            <FaCertificate className="cert-icon" />
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                      <div className="specializations">
                        <h4>Specializations</h4>
                        <div className="spec-tags">
                          {coach.specializations.map((spec, i) => (
                            <span key={i} className="spec-tag">{spec}</span>
                          ))}
                        </div>
                      </div>
                      <div className="social-links">
                        <a href={coach.social.linkedin} className="social-link"><FaLinkedin /></a>
                        <a href={coach.social.twitter} className="social-link"><FaTwitter /></a>
                        <a href={coach.social.instagram} className="social-link"><FaInstagram /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">
            What Our Students Say
          </h2>
          <div className="testimonials-content">
            <div className="testimonial-item">
              <p className="testimonial-text">
                "SSBA Academy transformed my game. The coaching staff is incredibly knowledgeable and supportive."
              </p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1612833921947-6b2f3f3f3f3f?w=100&h=100&fit=crop" alt="Student" />
                <div className="author-info">
                  <strong>Aditi Mehta</strong>
                  <span>State Level Player</span>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <p className="testimonial-text">
                "The facilities and training programs at SSBA are top-notch. I've improved so much since I joined."
              </p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1612833921947-6b2f3f3f3f3f?w=100&h=100&fit=crop" alt="Student" />
                <div className="author-info">
                  <strong>Rohit Sharma</strong>
                  <span>National Level Player</span>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <p className="testimonial-text">
                "I love the community at SSBA. Everyone is so passionate about badminton, and the coaches are amazing."
              </p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1612833921947-6b2f3f3f3f3f?w=100&h=100&fit=crop" alt="Student" />
                <div className="author-info">
                  <strong>Priya Singh</strong>
                  <span>Beginner Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">
            Academy Gallery
          </h2>
          <div className="gallery-grid">
            {[
              'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=400&h=300&fit=crop',
            ].map((src, index) => (
              <div key={index} className="gallery-item">
                <img src={src} alt={`Gallery Image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Badminton Journey?</h2>
            <p>Join SSBA Academy today and become part of our champion family!</p>
            <div className="cta-buttons">
              <button className="btn-primary">Book Free Trial</button>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
