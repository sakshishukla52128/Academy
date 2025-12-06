import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import { FaCheck, FaCertificate, FaLinkedin, FaTwitter, FaInstagram, FaTrophy, FaUsers, FaMedal, FaChalkboardTeacher, FaHeart, FaStar, FaQuoteLeft } from 'react-icons/fa';
import Gallery2 from '../assets/Gallery2.png';
import seconedcoach from '../assets/secondcoach.png';
import priya1 from '../assets/priya1.png';
import Gallery  from '../assets/Gallery4.png';
import Gallery1  from '../assets/groupphoto.png';
import Gallery6  from '../assets/allmembers.png';
const coachesData = [
  {
    name: 'Simran Shukla',
    role: 'Head Coach & Founder',
    experience: '5+ Years',
    specialization: 'Singles & Doubles Strategy',
    imgSrc: Gallery2,
    certifications: ['NIS Certified Coach', 'National Level Player', 'BWF Level 2 Coach'],
    specializations: ['Advanced Techniques', 'Match Strategy', 'Mental Conditioning', 'Youth Development'],
    achievements: ['50+ Tournament Wins', 'State Champion 2018', 'Trained 500+ Students'],
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: 'https://www.instagram.com/ssba_academy_/'
    }
  },
  {
    name: 'Priya Ramakrishna',
    role: 'Senior Coach',
    experience: '5+ Years',
    specialization: 'Doubles & Physical Training',
    imgSrc: priya1,
    certifications: ['BWF Level 1 Coach', 'Fitness Trainer', 'CPR Certified'],
    specializations: ['Doubles Strategy', 'Strength Training', 'Agility Development', 'Net Play'],
    achievements: ['District Champion', '100+ Students Trained', 'Fitness Expert'],
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    name: 'Juhi Agrawal',
    role: 'Assistant Coach',
    experience: '3+ Years',
    specialization: 'Kids & Beginners Training',
    imgSrc: seconedcoach,
    certifications: ['BWF Level 1 Coach', 'Child Development Specialist'],
    specializations: ['Kids Coaching', 'Beginner Training', 'Fundamentals', 'Technique Building'],
    achievements: ['Youth Coach of the Year', '200+ Kids Trained', 'Tournament Organizer'],
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  }
];

const testimonialsData = [
  {
    name: 'Rahul Sharma',
    role: 'State Level Player',
    text: 'SSBA Academy transformed my game completely! The personalized coaching and professional environment helped me achieve my state-level dreams. Coach Simran\'s strategic insights are invaluable.',
    rating: 5
  },
  {
    name: 'Priya Mehta',
    role: 'Parent of Student',
    text: 'My daughter has been training here for 2 years. The improvement in her skills, discipline, and confidence is remarkable. Best decision we made for her sports development!',
    rating: 5
  },
  {
    name: 'Arjun Singh',
    role: 'Advanced Player',
    text: 'Top-notch facilities, expert coaching, and a supportive community. The training methodology is systematic and results-oriented. Highly recommend for serious players!',
    rating: 5
  },
  {
    name: 'Sneha Patel',
    role: 'Beginner Student',
    text: 'Started as a complete beginner and now I play competitively! The coaches are patient, encouraging, and make learning fun. Great atmosphere for all skill levels.',
    rating: 5
  }
];

function Aboutus() {
  const [isVisible, setIsVisible] = useState({});

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
              Where Champions Are Made - Transforming passion into excellence since 2020
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">60+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Trophies</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card card-1">🏸</div>
            <div className="floating-card card-2">🏆</div>
            <div className="floating-card card-3">⭐</div>
            <img src={Gallery} alt="Badminton Academy" />
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Our Story Section - NEW */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <div className="story-timeline">
                <div className="timeline-item">
                  <div className="timeline-year">2020</div>
                  <div className="timeline-content">
                    <h3>The Beginning</h3>
                    <p>Founded by Simran Shukla with a vision to create champions and make badminton accessible to all.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2022</div>
                  <div className="timeline-content">
                    <h3>Expansion</h3>
                    <p>Expanded to multiple training centers with state-of-the-art facilities and professional coaching staff.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-content">
                    <h3>Recognition</h3>
                    <p>Awarded "Best Badminton Academy" with 60+ trained students and 50+ tournament victories.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2025</div>
                  <div className="timeline-content">
                    <h3>Excellence Continues</h3>
                    <p>Leading academy with state-level players and a reputation for developing future champions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img src={Gallery1} alt="Our Journey" />
              <img src={Gallery6} alt="" />
              <div className="story-badge">
                <FaTrophy className="badge-icon" />
                <span>5 Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section - REDESIGNED */}
      <section className="mission-vision-section">
        <div className="container">
          <h2 className="section-title">Our Mission & Vision</h2>
          <div className="mission-vision-grid">
            <div className="mv-card mission-card">
              <div className="mv-icon-wrapper">
                <div className="mv-icon">🎯</div>
              </div>
              <h3>Our Mission</h3>
              <p className="mv-description">
                To provide world-class badminton training that develops athletic excellence, 
                character, discipline, and sportsmanship in every student.
              </p>
              <div className="mv-features">
                <div className="mv-feature">
                  <FaCheck className="check-icon" />
                  <span>Personalized Training Programs</span>
                </div>
                <div className="mv-feature">
                  <FaCheck className="check-icon" />
                  <span>Professional Coaching Techniques</span>
                </div>
                <div className="mv-feature">
                  <FaCheck className="check-icon" />
                  <span>Character Development Focus</span>
                </div>
                <div className="mv-feature">
                  <FaCheck className="check-icon" />
                  <span>Competitive Excellence</span>
                </div>
              </div>
            </div>

            <div className="mv-card vision-card">
              <div className="mv-icon-wrapper">
                <div className="mv-icon">🚀</div>
              </div>
              <h3>Our Vision</h3>
              <p className="mv-description">
                To become India's premier badminton academy, producing national and international 
                champions while making the sport accessible to everyone.
              </p>
              <div className="mv-features">
                <div className="mv-feature">
                  <FaCheck className="check-icon" />
                  <span>National Level Players</span>
                </div>
                <div className="mv-feature">
                  <FaCheck className="check-icon" />
                  <span>International Recognition</span>
                </div>
                <div className="mv-feature">
                  <FaCheck className="check-icon" />
                  <span>Community Development</span>
                </div>
                <div className="mv-feature">
                  <FaCheck className="check-icon" />
                  <span>Sports Accessibility</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - REDESIGNED */}
      <section className="stats-showcase-section">
        <div className="container">
          <h2 className="section-title">Our Achievements in Numbers</h2>
          <div className="stats-showcase-grid">
            <div className="stat-showcase-card">
              <div className="stat-icon-circle">
                <FaUsers className="stat-icon" />
              </div>
              <div className="stat-number">60+</div>
              <div className="stat-label">Trained Students</div>
              <p className="stat-description">Students trained to excellence</p>
            </div>
            <div className="stat-showcase-card">
              <div className="stat-icon-circle">
                <FaTrophy className="stat-icon" />
              </div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Tournament Wins</div>
              <p className="stat-description">Victories across all levels</p>
            </div>
            <div className="stat-showcase-card">
              <div className="stat-icon-circle">
                <FaChalkboardTeacher className="stat-icon" />
              </div>
              <div className="stat-number">5+</div>
              <div className="stat-label">Expert Coaches</div>
              <p className="stat-description">Professional coaching staff</p>
            </div>
            <div className="stat-showcase-card">
              <div className="stat-icon-circle">
                <FaMedal className="stat-icon" />
              </div>
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
              <p className="stat-description">Of badminton excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - NEW */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💪</div>
              <h3>Excellence</h3>
              <p>We strive for the highest standards in coaching, facilities, and student development.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>We maintain honesty, transparency, and ethical practices in all our interactions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Passion</h3>
              <p>We are driven by genuine love for badminton and commitment to student success.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Innovation</h3>
              <p>We continuously evolve our training methods and embrace new techniques.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Discipline</h3>
              <p>We instill focus, dedication, and systematic training in every student.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏆</div>
              <h3>Growth</h3>
              <p>We foster continuous improvement and celebrate every milestone achieved.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section - COMPLETELY REDESIGNED */}
      <section className="coaches-showcase-section">
        <div className="container">
          <h2 className="section-title">Meet Our Expert Coaches</h2>
          <p className="section-subtitle">Learn from certified professionals with proven track records</p>
          <div className="coaches-showcase-grid">
            {coachesData.map((coach, index) => (
              <div key={index} className="coach-showcase-card">
                <div className="coach-image-wrapper">
                  <img src={coach.imgSrc} alt={coach.name} />
                  <div className="coach-overlay">
                    <div className="social-links-overlay">
                      <a href={coach.social.linkedin} className="social-link" aria-label="LinkedIn">
                        <FaLinkedin />
                      </a>
                      <a href={coach.social.twitter} className="social-link" aria-label="Twitter">
                        <FaTwitter />
                      </a>
                      <a href={coach.social.instagram} className="social-link" aria-label="Instagram">
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="coach-info-wrapper">
                  <h3 className="coach-name">{coach.name}</h3>
                  <p className="coach-role">{coach.role}</p>
                  <div className="coach-exp-badge">
                    <FaMedal className="badge-icon" />
                    <span>{coach.experience}</span>
                  </div>
                  <p className="coach-specialization">{coach.specialization}</p>
                  
                  <div className="coach-certifications">
                    <h4>Certifications</h4>
                    {coach.certifications.map((cert, i) => (
                      <div key={i} className="cert-badge">
                        <FaCertificate className="cert-badge-icon" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>

                  <div className="coach-specializations">
                    <h4>Expertise</h4>
                    <div className="spec-tags">
                      {coach.specializations.map((spec, i) => (
                        <span key={i} className="spec-tag">{spec}</span>
                      ))}
                    </div>
                  </div>

                  <div className="coach-achievements">
                    <h4>Achievements</h4>
                    <ul className="achievement-list">
                      {coach.achievements.map((achievement, i) => (
                        <li key={i}>
                          <FaStar className="star-icon" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - REDESIGNED */}
      <section className="testimonials-showcase-section">
        <div className="container">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">Real experiences from our badminton family</p>
          <div className="testimonials-showcase-grid">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="testimonial-showcase-card">
                <FaQuoteLeft className="quote-icon" />
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-details">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - REDESIGNED */}
      <section className="gallery-showcase-section">
        <div className="container">
       
          <p className="section-subtitle">A glimpse into our training sessions and achievements</p>
          <div className="gallery-showcase-grid">
            {/*
              { src: 'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=600&h=400&fit=crop', title: 'Professional Training' },
              { src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop', title: 'Group Sessions' },
              { src: 'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=600&h=400&fit=crop', title: 'Tournament Success' },
              { src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop', title: 'Kids Training' },
              { src: 'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=600&h=400&fit=crop', title: 'Award Ceremonies' },
              { src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop', title: 'State-of-Art Facilities' }
            */}
            {/*
              { src: 'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=600&h=400&fit=crop', title: 'Professional Training' },
              { src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop', title: 'Group Sessions' },
              { src: 'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=600&h=400&fit=crop', title: 'Tournament Success' },
              { src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop', title: 'Kids Training' },
              { src: 'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=600&h=400&fit=crop', title: 'Award Ceremonies' },
              { src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop', title: 'State-of-Art Facilities' }
            */}
            {/*
              { src: 'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=600&h=400&fit=crop', title: 'Professional Training' },
              { src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop', title: 'Group Sessions' },
              { src: 'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=600&h=400&fit=crop', title: 'Tournament Success' },
              { src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop', title: 'Kids Training' },
              { src: 'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=600&h=400&fit=crop', title: 'Award Ceremonies' },
              { src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop', title: 'State-of-Art Facilities' }
            */}
            {/*
              { src: 'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=600&h=400&fit=crop', title: 'Professional Training' },
              { src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop', title: 'Group Sessions' },
              { src: 'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=600&h=400&fit=crop', title: 'Tournament Success' },
              { src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop', title: 'Kids Training' },
              { src: 'https://images.unsplash.com/photo-1517841905240-8b11c6b57b4d?w=600&h=400&fit=crop', title: 'Award Ceremonies' },
              { src: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=400&fit=crop', title: 'State-of-Art Facilities' }
            */}
          </div>
        </div>
      </section>

      {/* CTA Section - REDESIGNED */}
      <section className="cta-showcase-section">
        <div className="container">
          <div className="cta-showcase-content">
            <FaHeart className="cta-heart-icon" />
            <h2>Ready to Start Your Badminton Journey?</h2>
            <p>Join SSBA Academy today and become part of our champion family!</p>
            <div className="cta-stats-mini">
              <div className="cta-stat">
                <strong>500+</strong>
                <span>Students</span>
              </div>
              <div className="cta-stat">
                <strong>150+</strong>
                <span>Trophies</span>
              </div>
              <div className="cta-stat">
                <strong>15+</strong>
                <span>Years</span>
              </div>
            </div>
            <div className="cta-buttons">
              <button className="btn-primary">
                <span>Book Free Trial</span>
                <span className="btn-arrow">→</span>
              </button>
              <button className="btn-secondary">
                <span>Contact Us</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;
