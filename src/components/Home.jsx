// components/Home.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Home.css';

// Import your images correctly - using exact filenames from your assets folder
import coach from '../assets/coach.png';
import groupphoto from '../assets/groupphoto.png';
import maincoach from '../assets/maincoach.png';
import maincoachprize from '../assets/maincoachprize.png';

// Gallery images
const galleryImages = [
  { id: 1, src: coach, alt: "Professional Coaching" },
  { id: 2, src: groupphoto, alt: "Group Training" },
  { id: 3, src: maincoach, alt: "Expert Guidance" },
  { id: 4, src: maincoachprize, alt: "Achievements" }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  const slides = [
    {
      id: 1,
      type: 'image',
      title: 'Shuttle Smash Badminton Academy',
      punchline: 'Elevate Your Game',
      description: 'Professional coaching from experienced players to take your skills to championship level',
      ctaText: 'Book Free Trial',
      image: coach,
      overlay: 'coaching'
    },
    {
      id: 2,
      type: 'image',
      title: 'Shuttle Smash Badminton Academy',
      punchline: 'Smash Your Limits',
      description: 'Watch our players in action during intense match simulations and training sessions',
      ctaText: 'View Programs',
      image: groupphoto,
      overlay: 'action'
    },
    {
      id: 3,
      type: 'image',
      title: 'Shuttle Smash Badminton Academy',
      punchline: 'Train Like a Champion',
      description: 'Join our champion players and learn from the best in state-of-the-art facilities',
      ctaText: 'Meet Our Coaches',
      image: maincoach,
      overlay: 'champions'
    },
    {
      id: 4,
      type: 'image',
      title: 'Shuttle Smash Badminton Academy',
      punchline: 'Proven Success Stories',
      description: 'Our students consistently win tournaments and achieve their badminton dreams',
      ctaText: 'Meet With our Main Coach',
      image: maincoachprize,
      overlay: 'success'
    }
  ];

  // Stats data for animated counters
  const statsData = React.useMemo(() => [
    { number: 500, suffix: '+', label: 'Trained Players' },
    { number: 50, suffix: '+', label: 'Tournament Wins' },
    { number: 10, suffix: '+', label: 'Professional Coaches' },
    { number: 5, suffix: '+', label: 'Training Centers' }
  ], []);

  // Coach information
  const mainCoach = {
    name: "Rajesh Kumar",
    experience: "15+ Years",
    certification: "BWF Certified Coach",
    achievements: [
      "National Level Player 2005-2010",
      "State Champion 3 Years Consecutive",
      "Trained 50+ Tournament Winners"
    ],
    message: "My mission is to bring out the champion in every student. With proper guidance and dedicated practice, anyone can excel in badminton.",
    image: maincoach
  };

  // Academy timings
  const academyTimings = [
    { day: "Monday - Friday", time: "6:00 AM - 10:00 PM" },
    { day: "Saturday", time: "6:00 AM - 8:00 PM" },
    { day: "Sunday", time: "7:00 AM - 6:00 PM" }
  ];

  // Fix: useCallback to memoize the function
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Animated counters
  const [counters, setCounters] = useState(statsData.map(() => 0));

  // Animate counters function - MOVED BEFORE useEffect
  const animateCounters = useCallback(() => {
    statsData.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const stepValue = stat.number / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.min(
            Math.floor(stepValue * currentStep),
            stat.number
          );
          return newCounters;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    });
  }, [statsData]);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            
            // Trigger stats animation
            if (entry.target.id === 'stats-section' && !animatedStats) {
              setAnimatedStats(true);
              animateCounters();
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [animateCounters, animatedStats]);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // WhatsApp function
  const openWhatsApp = () => {
    const phone = "+919876543210";
    const message = "Hello, I'm interested in Shuttle Smash Badminton Academy. Can I get more information?";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Form submission
  const handleTrialSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your interest! We will contact you soon.');
  };

  // Set ref for sections
  const setSectionRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="home-container">
      {/* Hero Slider Section */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''} ${slide.overlay}`}
          >
            {/* Parallax Background */}
            <div className="slide-background parallax">
              <div 
                className="background-image"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="image-overlay"></div>
              </div>
            </div>

            {/* Slide Content */}
            <div className="slide-content">
              <div className="content-wrapper">
                {/* Logo */}
                <div className="logo">
                  <div className="logo-icon">
                    <div className="shuttle"></div>
                    <div className="smash-effect"></div>
                  </div>
                  <span className="logo-text">Shuttle Smash</span>
                </div>

                {/* Text Content */}
                <div className="text-content">
                  <h1 className="academy-title">{slide.title}</h1>
                  <h2 className="punchline">{slide.punchline}</h2>
                  <p className="description">{slide.description}</p>
                  
                  <div className="cta-buttons">
                    <button 
                      className="cta-primary"
                      onClick={() => scrollToSection('trial-form')}
                    >
                      {slide.ctaText}
                    </button>
                    <button 
                      className="cta-secondary"
                      onClick={() => scrollToSection('about-coach')}
                    >
                      Learn More
                    </button>
                  </div>

                  {/* Feature Highlights */}
                  <div className="feature-highlights">
                    {slide.overlay === 'coaching' && (
                      <div className="features">
                        <span className="feature-tag">Expert Coaches</span>
                        <span className="feature-tag">Personal Training</span>
                        <span className="feature-tag">Skill Development</span>
                      </div>
                    )}
                    {slide.overlay === 'action' && (
                      <div className="features">
                        <span className="feature-tag">Live Matches</span>
                        <span className="feature-tag">Intensive Drills</span>
                        <span className="feature-tag">Performance Analysis</span>
                      </div>
                    )}
                    {slide.overlay === 'champions' && (
                      <div className="features">
                        <span className="feature-tag">Tournament Players</span>
                        <span className="feature-tag">Pro Techniques</span>
                        <span className="feature-tag">Elite Training</span>
                      </div>
                    )}
                    {slide.overlay === 'success' && (
                      <div className="features">
                        <span className="feature-tag">Trophy Winners</span>
                        <span className="feature-tag">Success Stories</span>
                        <span className="feature-tag">Proven Results</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="stats">
                  <div className="stat-item">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Trained Players</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">50+</div>
                    <div className="stat-label">Tournament Wins</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">10+</div>
                    <div className="stat-label">Professional Coaches</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="quick-info">
              {slide.overlay === 'coaching' && (
                <div className="info-card">
                  <div className="info-icon">👨‍🏫</div>
                  <div className="info-text">
                    <strong>Expert Coaching</strong>
                    <span>Learn from certified professionals</span>
                  </div>
                </div>
              )}
              {slide.overlay === 'action' && (
                <div className="info-card">
                  <div className="info-icon">⚡</div>
                  <div className="info-text">
                    <strong>Live Action</strong>
                    <span>Real match simulations</span>
                  </div>
                </div>
              )}
              {slide.overlay === 'champions' && (
                <div className="info-card">
                  <div className="info-icon">🏆</div>
                  <div className="info-text">
                    <strong>Champion Training</strong>
                    <span>Learn from tournament winners</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Navigation Controls */}
        <button className="slider-nav prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="slider-nav next" onClick={nextSlide}>
          ›
        </button>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Scroll Down Indicator */}
        <div 
          className="scroll-indicator"
          onClick={() => scrollToSection('stats-section')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              scrollToSection('stats-section');
            }
          }}
        >
          <div className="scroll-arrow"></div>
          <span>Explore More</span>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section 
        id="stats-section" 
        ref={setSectionRef('stats-section')}
        className={`stats-section ${isVisible['stats-section'] ? 'visible' : ''}`}
      >
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number animated">
                  {animatedStats ? counters[index] : 0}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Coach Section */}
      <section 
        id="about-coach" 
        ref={setSectionRef('about-coach')}
        className={`coach-section ${isVisible['about-coach'] ? 'visible' : ''}`}
      >
        <div className="container">
          <h2 className="section-title">Meet Our Head Coach</h2>
          <div className="coach-profile">
            <div className="coach-image">
              <img src={mainCoach.image} alt={mainCoach.name} />
              <div className="coach-badge">
                <span className="experience-badge">{mainCoach.experience} Experience</span>
              </div>
            </div>
            <div className="coach-details">
              <h3>{mainCoach.name}</h3>
              <p className="coach-certification">{mainCoach.certification}</p>
              
              <div className="coach-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {mainCoach.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="coach-message">
                <p>"{mainCoach.message}"</p>
              </div>
              
              <button 
                className="cta-primary"
                onClick={() => scrollToSection('trial-form')}
              >
                Train With Coach
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        id="gallery" 
        ref={setSectionRef('gallery')}
        className={`gallery-section ${isVisible['gallery'] ? 'visible' : ''}`}
      >
        <div className="container">
          <h2 className="section-title">Training Gallery</h2>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <img src={image.src} alt={image.alt} />
                <div className="gallery-overlay">
                  <span>{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="view-more-btn">View Full Gallery</button>
        </div>
      </section>

      {/* Academy Timings & Address */}
      <section 
        id="academy-info" 
        ref={setSectionRef('academy-info')}
        className={`info-section ${isVisible['academy-info'] ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="info-grid">
            <div className="timings-card">
              <h3>🏸 Academy Timings</h3>
              <div className="timings-list">
                {academyTimings.map((timing, index) => (
                  <div key={index} className="timing-item">
                    <span className="day">{timing.day}</span>
                    <span className="time">{timing.time}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="address-card">
              <h3>📍 Our Location</h3>
              <div className="address-details">
                <p><strong>Shuttle Smash Badminton Academy</strong></p>
                <p>123 Sports Complex, Badminton Lane</p>
                <p>City Center, Mumbai - 400001</p>
                <p>📞 +91 98765 43210</p>
                <p>📧 info@shuttlesmash.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Form Section */}
      <section 
        id="trial-form" 
        ref={setSectionRef('trial-form')}
        className={`form-section ${isVisible['trial-form'] ? 'visible' : ''}`}
      >
        <div className="container">
          <h2 className="section-title">Book Your Free Trial Session</h2>
          <form className="trial-form" onSubmit={handleTrialSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" min="5" max="60" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="level">Playing Level</label>
                <select id="level" name="level" required>
                  <option value="">Select Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
            
            <button type="submit" className="cta-primary submit-btn">
              Book Free Trial
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <span className="logo-text">Shuttle Smash</span>
              </div>
              <p>Elevating badminton skills through professional coaching and state-of-the-art facilities.</p>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <button 
                    type="button"
                    className="footer-link"
                    onClick={() => scrollToSection('about-coach')}
                  >
                    Our Coach
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    className="footer-link"
                    onClick={() => scrollToSection('gallery')}
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    className="footer-link"
                    onClick={() => scrollToSection('academy-info')}
                  >
                    Timings
                  </button>
                </li>
                <li>
                  <button 
                    type="button"
                    className="footer-link"
                    onClick={() => scrollToSection('trial-form')}
                  >
                    Free Trial
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <p>📞 +91 98765 43210</p>
              <p>📧 info@shuttlesmash.com</p>
              <p>📍 Mumbai, India</p>
            </div>
            
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <button 
                  type="button" 
                  className="social-btn"
                  onClick={() => window.open('https://facebook.com', '_blank')}
                >
                  Facebook
                </button>
                <button 
                  type="button" 
                  className="social-btn"
                  onClick={() => window.open('https://instagram.com', '_blank')}
                >
                  Instagram
                </button>
                <button 
                  type="button" 
                  className="social-btn"
                  onClick={() => window.open('https://youtube.com', '_blank')}
                >
                  YouTube
                </button>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 Shuttle Smash Badminton Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div 
        className="whatsapp-float" 
        onClick={openWhatsApp}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openWhatsApp();
          }
        }}
      >
        <div className="whatsapp-icon">
          <span>💬</span>
        </div>
        <div className="whatsapp-tooltip">Chat with us!</div>
      </div>
    </div>
  );
};

export default Home;