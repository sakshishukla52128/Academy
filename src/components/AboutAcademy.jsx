// components/AboutUs.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './AboutUs.css';

// Import GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import images
import coachImage from '../assets/coach.png';
import maincoach from '../assets/maincoach.png';
import groupphoto from '../assets/groupphoto.png';


// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AboutAcademy = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const timelineRef = useRef(null);
  const coachesRef = useRef(null);
  const featuresRef = useRef(null);

  // Stats data
  const [stats, setStats] = useState({
    trained: 0,
    wins: 0,
    coaches: 0,
    centers: 0
  });

  // Coaches data
  const coaches = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Head Coach",
      experience: "15+ Years",
      specialization: "Advanced Techniques & Strategy",
      achievements: [
        "National Level Player 2005-2010",
        "State Champion 3 Years Consecutive",
        "BWF Certified Coach",
        "Trained 50+ Tournament Winners"
      ],
      image: maincoach,
      message: "My mission is to bring out the champion in every student through disciplined training and personalized guidance."
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Assistant Coach",
      experience: "8+ Years",
      specialization: "Youth Development & Footwork",
      achievements: [
        "State Level Champion",
        "Sports Science Graduate",
        "Specialized in Junior Coaching",
        "Youth Tournament Organizer"
      ],
      image: coachImage,
      message: "I believe in making badminton fun while building strong fundamentals in young players."
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Fitness Trainer",
      experience: "10+ Years",
      specialization: "Strength & Conditioning",
      achievements: [
        "Certified Fitness Trainer",
        "Sports Injury Prevention",
        "Performance Enhancement",
        "Nutrition Guidance"
      ],
      image: groupphoto,
      message: "Physical fitness is the foundation of any sport. I focus on building athletes, not just players."
    }
  ];

  // Timeline data
  const timelineData = [
    {
      year: "2010",
      title: "Foundation",
      description: "Shuttle Smash Badminton Academy was founded with a vision to provide professional training to aspiring players with just 2 courts and 1 coach."
    },
    {
      year: "2014",
      title: "First Champions",
      description: "Our students won their first district-level tournament, marking the beginning of our success journey and establishing our training methodology."
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Opened three new training centers with international-standard courts and advanced equipment to accommodate growing demand."
    },
    {
      year: "2022",
      title: "National Recognition",
      description: "Our players started competing at national level championships, bringing home multiple medals and gaining national recognition."
    },
    {
      year: "2024",
      title: "Excellence Continues",
      description: "500+ players trained, 50+ tournament wins, and counting our success stories while maintaining our commitment to quality coaching."
    }
  ];

  // Features data
  const features = [
    {
      icon: "👨‍🏫",
      title: "Professional Certified Coaches",
      description: "BWF certified coaches with national and international playing experience"
    },
    {
      icon: "🔬",
      title: "Scientific Training Method",
      description: "Evidence-based training programs using latest sports science research"
    },
    {
      icon: "💪",
      title: "Strength & Agility Programs",
      description: "Customized fitness routines specifically designed for badminton requirements"
    },
    {
      icon: "🏆",
      title: "Tournament Guidance",
      description: "Complete support system for competition preparation and participation"
    },
    {
      icon: "📱",
      title: "Digital Court Booking",
      description: "Easy online court booking system for convenient practice sessions"
    },
    {
      icon: "📊",
      title: "Performance Assessment",
      description: "Regular evaluation with video analysis and personalized feedback"
    },
    {
      icon: "🏢",
      title: "Modern Infrastructure",
      description: "International standard courts with premium safety measures"
    },
    {
      icon: "❤️",
      title: "Individual Attention",
      description: "Small batch sizes ensuring personalized coaching for every student"
    }
  ];

  // Smash effect function
  const triggerSmashEffect = useCallback(() => {
    const tl = gsap.timeline();
    tl.to('.smash-text', {
      scale: 1.2,
      duration: 0.1,
      ease: 'power2.out'
    })
    .to('.smash-text', {
      scale: 1,
      duration: 0.3,
      ease: 'elastic.out(1, 0.5)'
    });
  }, []);

  // Animate counters
  const animateCounters = useCallback(() => {
    const targetStats = {
      trained: 500,
      wins: 50,
      coaches: 10,
      centers: 5
    };

    Object.keys(targetStats).forEach(stat => {
      gsap.to({}, {
        duration: 2,
        onUpdate: function() {
          setStats(prev => ({
            ...prev,
            [stat]: Math.floor(this.progress() * targetStats[stat])
          }));
        },
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);

  // GSAP Animations
  useEffect(() => {
    // Hero animations
    gsap.fromTo('.hero-title span', 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      }
    );

    // Stats animation
    gsap.fromTo('.stat-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Timeline animation
    gsap.fromTo('.timeline-item',
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Coaches animation
    gsap.fromTo('.coach-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: coachesRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Features animation
    gsap.fromTo('.feature-card',
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Initialize counters
    animateCounters();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animateCounters]);

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section ref={heroRef} className="about-hero">
        <div className="hero-background">
          <div className="floating-shuttles">
            <div className="shuttle shuttle-1">🏸</div>
            <div className="shuttle shuttle-2">🏸</div>
            <div className="shuttle shuttle-3">🏸</div>
          </div>
          <div className="gradient-overlay"></div>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            <span>Shuttle</span>
            <span 
              className="smash-text"
              onClick={triggerSmashEffect}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  triggerSmashEffect();
                }
              }}
            >
              Smash
            </span>
            <span>Academy</span>
          </h1>
          <p className="hero-tagline">
            Building Champions. One Smash at a Time.
          </p>
          <div className="hero-description">
            <p>Professional badminton training academy nurturing champions since 2010 through scientific coaching methods and personalized training programs.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">{stats.trained}+</div>
              <div className="stat-label">Players Trained</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">{stats.wins}+</div>
              <div className="stat-label">Tournament Wins</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👨‍🏫</div>
              <div className="stat-number">{stats.coaches}+</div>
              <div className="stat-label">Expert Coaches</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏢</div>
              <div className="stat-number">{stats.centers}+</div>
              <div className="stat-label">Training Centers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Mission & Vision</h2>
            <p>Driven by passion, guided by excellence</p>
          </div>

          <div className="mv-grid">
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p className="mission-text">
                "To provide world-class badminton training and develop players with 
                discipline, dedication and sportsmanship."
              </p>
              <div className="mission-features">
                <span className="feature-tag">Discipline</span>
                <span className="feature-tag">Dedication</span>
                <span className="feature-tag">Sportsmanship</span>
              </div>
            </div>

            <div className="vision-card">
              <div className="card-icon">⭐</div>
              <h3>Our Vision</h3>
              <p className="vision-text">
                "To become the most trusted badminton academy creating 
                future national and international players."
              </p>
              <div className="vision-features">
                <span className="feature-tag">Trust</span>
                <span className="feature-tag">Excellence</span>
                <span className="feature-tag">Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section ref={timelineRef} className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>From humble beginnings to creating champions</p>
          </div>

          <div className="timeline">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="timeline-marker"></div>
              </div>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section ref={coachesRef} className="coaches-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Expert Coaches</h2>
            <p>Learn from the best in the business</p>
          </div>

          <div className="coaches-grid">
            {coaches.map((coach) => (
              <div key={coach.id} className="coach-card">
                <div className="coach-image-container">
                  <img src={coach.image} alt={coach.name} className="coach-image" />
                  <div className="experience-badge">{coach.experience}</div>
                </div>
                <div className="coach-info">
                  <h3>{coach.name}</h3>
                  <p className="coach-role">{coach.role}</p>
                  <p className="coach-specialization">{coach.specialization}</p>
                  
                  <div className="coach-achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {coach.achievements.map((achievement, idx) => (
                        <li key={idx}>🏆 {achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="coach-message">
                    <p>"{coach.message}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section ref={featuresRef} className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>What Makes Us Different?</h2>
            <p>Experience the Shuttle Smash advantage</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="methodology-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Training Methodology</h2>
            <p>Scientific approach to player development</p>
          </div>

          <div className="methodology-steps">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Assessment</h3>
              <p>Comprehensive skill evaluation and fitness assessment</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>Planning</h3>
              <p>Customized training plan based on individual goals</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Execution</h3>
              <p>Professional coaching with modern techniques</p>
            </div>
            <div className="step">
              <div className="step-number">04</div>
              <h3>Tracking</h3>
              <p>Regular progress monitoring and feedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Badminton Journey?</h2>
            <p>Join 500+ players who have transformed their game with us</p>
            <div className="cta-buttons">
              <button className="cta-primary">Book Free Trial</button>
              <button className="cta-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAcademy;