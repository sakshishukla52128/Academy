import React, { useState, useEffect } from 'react';
import './Batches.css';

const Batches = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setAnimateCards(true);
    console.log('Batches component mounted'); // Debug log
  }, []);

  const batchData = [
    {
      id: 1,
      name: "Beginner Champions",
      category: "Foundation Level",
      ageGroup: "6-12 years",
      timing: "4:00 PM - 5:00 PM",
      days: "Monday to Friday",
      level: "Beginner",
      maxStudents: 15,
      currentStudents: 12,
      eligibility: "6+ years, No prior experience needed",
      requirements: ["Comfortable sports wear", "Non-marking shoes", "Water bottle"],
      trainingIncludes: [
        "Basic grip techniques",
        "Footwork fundamentals", 
        "Simple serves",
        "Hand-eye coordination",
        "Basic shuttlecock control",
        "Fun games & activities"
      ],
      coach: {
        name: "Coach Priya Sharma",
        experience: "8+ years",
        specialization: "Junior Development & Basic Techniques",
        image: "/coaches/priya.jpg"
      },
      color: "beginner",
      features: ["Small batch size", "Individual attention", "Progress tracking", "Parent updates"],
      batchPhoto: "/batches/beginner-batch.jpg",
      popular: false
    },
    {
      id: 2,
      name: "Intermediate Warriors",
      category: "Skill Development",
      ageGroup: "10-16 years",
      timing: "5:00 PM - 6:30 PM",
      days: "Monday to Saturday",
      level: "Intermediate",
      maxStudents: 18,
      currentStudents: 15,
      eligibility: "Basic grip knowledge required, 6 months experience",
      requirements: ["Own racket preferred", "Academy uniform", "Non-marking shoes", "Sweat towel"],
      trainingIncludes: [
        "Rally training & consistency",
        "Smash technique development",
        "Net play mastery",
        "Advanced footwork patterns",
        "Multi-shuttle drills",
        "Basic strategy understanding"
      ],
      coach: {
        name: "Coach Vikram Singh",
        experience: "12+ years",
        specialization: "Technique Refinement & Rally Training",
        image: "/coaches/vikram.jpg"
      },
      color: "intermediate",
      features: ["Match practice", "Video analysis", "Fitness training", "Tournament preparation"],
      batchPhoto: "/batches/intermediate-batch.jpg",
      popular: true
    },
    {
      id: 3,
      name: "Advanced Professionals",
      category: "Competitive Level",
      ageGroup: "14-25 years",
      timing: "6:30 PM - 8:30 PM",
      days: "Monday to Saturday",
      level: "Advanced",
      maxStudents: 12,
      currentStudents: 10,
      eligibility: "Tournament experience required, Intermediate level completed",
      requirements: ["Professional racket", "Academy kit", "Grip powder", "Energy drinks"],
      trainingIncludes: [
        "Tournament-level training",
        "Advanced shot techniques",
        "Strength & conditioning",
        "Match strategy & tactics",
        "Mental training",
        "Competition simulation"
      ],
      coach: {
        name: "Coach Rajesh Kumar",
        experience: "15+ years",
        specialization: "Competition Training & Advanced Techniques",
        image: "/coaches/rajesh.jpg"
      },
      color: "advanced",
      features: ["Personal coaching", "Tournament entry", "Ranking improvement", "Scholarship opportunities"],
      batchPhoto: "/batches/advanced-batch.jpg",
      popular: false
    },
    {
      id: 4,
      name: "Weekend Enthusiasts",
      category: "Flexible Training",
      ageGroup: "All Ages (16+)",
      timing: "8:00 AM - 10:00 AM",
      days: "Saturday & Sunday",
      level: "Mixed Levels",
      maxStudents: 20,
      currentStudents: 16,
      eligibility: "Working professionals, Students, Casual players",
      requirements: ["Comfortable attire", "Own racket", "Water bottle", "Positive attitude"],
      trainingIncludes: [
        "Fitness-focused training",
        "Stress-relief activities",
        "Social badminton games",
        "Technique improvement",
        "Recreational tournaments",
        "Health & wellness tips"
      ],
      coach: {
        name: "Coach Anita Desai",
        experience: "10+ years",
        specialization: "Fitness Training & Recreational Play",
        image: "/coaches/anita.jpg"
      },
      color: "weekend",
      features: ["Flexible schedule", "Family-friendly", "Health focus", "Social networking"],
      batchPhoto: "/batches/weekend-batch.jpg",
      popular: false
    },
    {
      id: 5,
      name: "Elite Performance",
      category: "Professional Training",
      ageGroup: "16+ years",
      timing: "6:00 AM - 8:00 AM",
      days: "Monday to Saturday",
      level: "Professional",
      maxStudents: 8,
      currentStudents: 6,
      eligibility: "State/National level players only",
      requirements: ["Professional equipment", "Medical certificate", "Nutrition plan", "Dedication"],
      trainingIncludes: [
        "Individual coaching sessions",
        "Performance analysis",
        "Mental conditioning",
        "Injury prevention",
        "International techniques",
        "Career guidance"
      ],
      coach: {
        name: "Head Coach Arun Jaitley",
        experience: "20+ years (Ex-National Player)",
        specialization: "Professional Development & International Standards",
        image: "/coaches/arun.jpg"
      },
      color: "elite",
      features: ["1:1 coaching", "International exposure", "Sponsorship guidance", "Career planning"],
      batchPhoto: "/batches/elite-batch.jpg",
      popular: false
    }
  ];

  const academyRules = [
    "Bring your own racket (rentals available for beginners)",
    "Non-marking shoes are mandatory",
    "Academy uniform required for intermediate+ batches", 
    "Water bottle compulsory for all sessions",
    "Mobile phones not allowed during training",
    "Respect coaches and fellow students",
    "Punctuality is highly valued",
    "Medical certificate required for elite batches"
  ];

  const handleRegistration = (batch) => {
    setSelectedBatch(batch);
    setShowRegistrationModal(true);
  };

  const handleTrialBooking = (batchName) => {
    alert(`Free trial booked for ${batchName}! Our team will contact you within 24 hours for fee details and scheduling.`);
  };

  console.log('Batches component rendering with', batchData.length, 'batches'); // Debug log

  return (
    <div className="batches-container" style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '100px 20px 20px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header Section */}
        <div className="batches-header" style={{ textAlign: 'center', padding: '60px 0 40px 0', color: 'white' }}>
          <div className="header-content">
            <span className="subtitle" style={{ 
              background: 'rgba(255,255,255,0.25)', 
              padding: '12px 30px', 
              borderRadius: '30px',
              display: 'inline-block',
              marginBottom: '30px',
              fontSize: '1rem',
              fontWeight: '500',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)'
            }}>
              Professional Training Programs
            </span>
            <h1 className="section-title" style={{ 
              fontSize: '3.5rem', 
              fontWeight: 'bold', 
              marginBottom: '25px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.1'
            }}>
              Choose Your Perfect <span style={{ color: '#ffd700' }}>Batch</span>
            </h1>
            <p className="section-description" style={{ 
              fontSize: '1.3rem', 
              maxWidth: '900px', 
              margin: '0 auto',
              lineHeight: '1.7',
              opacity: '0.9'
            }}>
              From beginners to professionals, we offer comprehensive training programs 
              designed to elevate your badminton skills with expert coaching and modern facilities.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="academy-stats" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '25px',
          marginBottom: '50px',
          padding: '0 10px'
        }}>
          {[
            { icon: '👥', number: '200+', label: 'Active Students' },
            { icon: '🏆', number: '5', label: 'Professional Batches' },
            { icon: '⭐', number: '10', label: 'Expert Coaches' },
            { icon: '🎯', number: '95%', label: 'Success Rate' }
          ].map((stat, index) => (
            <div key={index} className="stat-card" style={{
              background: 'rgba(255,255,255,0.15)',
              borderRadius: '15px',
              padding: '30px 20px',
              textAlign: 'center',
              color: 'white',
              transition: 'transform 0.3s ease'
            }}>
              <div className="stat-icon" style={{ fontSize: '2.5rem', marginBottom: '10px' }}>
                {stat.icon}
              </div>
              <h3 style={{ fontSize: '2.5rem', color: '#ffd700', margin: '10px 0', fontWeight: 'bold' }}>
                {stat.number}
              </h3>
              <p style={{ margin: '0', fontSize: '1rem' }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Batches Grid */}
        <div className="batches-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {batchData.map((batch, index) => (
            <div 
              key={batch.id} 
              className={`batch-card ${batch.color} ${batch.popular ? 'popular' : ''}`}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                border: batch.popular ? '3px solid #ffd700' : 'none',
                position: 'relative'
              }}
            >
              {batch.popular && (
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#ffd700',
                  color: '#333',
                  padding: '5px 12px',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  zIndex: 5
                }}>
                  Most Popular
                </div>
              )}
              
              <div className="batch-image" style={{
                height: '150px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {batch.category}
              </div>

              <div className="batch-content" style={{ padding: '25px' }}>
                <div className="batch-header" style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: 'bold', 
                    color: '#2c3e50', 
                    margin: '0' 
                  }}>
                    {batch.name}
                  </h3>
                  <span style={{
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: 'white',
                    background: batch.color === 'beginner' ? '#28a745' :
                               batch.color === 'intermediate' ? '#17a2b8' :
                               batch.color === 'advanced' ? '#ffc107' :
                               batch.color === 'weekend' ? '#6f42c1' : '#dc3545'
                  }}>
                    {batch.level}
                  </span>
                </div>

                <div className="batch-info" style={{ marginBottom: '20px', fontSize: '0.9rem', color: '#666' }}>
                  <div style={{ marginBottom: '8px' }}>
                    <strong>Age:</strong> {batch.ageGroup}
                  </div>
                  <div style={{ marginBottom: '8px' }}>
                    <strong>Timing:</strong> {batch.timing}
                  </div>
                  <div style={{ marginBottom: '8px' }}>
                    <strong>Days:</strong> {batch.days}
                  </div>
                  <div>
                    <strong>Coach:</strong> {batch.coach.name}
                  </div>
                </div>

                <div style={{ 
                  background: '#f8f9fa', 
                  borderRadius: '10px', 
                  padding: '15px', 
                  marginBottom: '20px' 
                }}>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '8px', fontWeight: '600' }}>
                    Who Can Join?
                  </h4>
                  <p style={{ margin: '0', fontSize: '0.85rem', color: '#666' }}>
                    {batch.eligibility}
                  </p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '12px', fontWeight: '600' }}>
                    Training Includes:
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {batch.trainingIncludes.slice(0, 4).map((item, idx) => (
                      <div key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        fontSize: '0.8rem', 
                        color: '#666' 
                      }}>
                        <span style={{ color: '#28a745', marginRight: '6px' }}>✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  {batch.trainingIncludes.length > 4 && (
                    <p style={{ 
                      marginTop: '8px', 
                      fontSize: '0.75rem', 
                      color: '#667eea', 
                      textAlign: 'center' 
                    }}>
                      +{batch.trainingIncludes.length - 4} more skills
                    </p>
                  )}
                </div>

                <div style={{ 
                  background: '#f8f9fa', 
                  borderRadius: '10px', 
                  padding: '15px', 
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    marginRight: '12px'
                  }}>
                    👨‍🏫
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', margin: '0 0 4px 0', fontWeight: '600' }}>
                      {batch.coach.name}
                    </h4>
                    <p style={{ fontSize: '0.75rem', color: '#667eea', margin: '0 0 2px 0' }}>
                      {batch.coach.experience}
                    </p>
                    <span style={{ fontSize: '0.7rem', color: '#666' }}>
                      {batch.coach.specialization}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button 
                    onClick={() => handleRegistration(batch)}
                    style={{
                      flex: '1',
                      padding: '12px',
                      border: 'none',
                      borderRadius: '10px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      background: batch.color === 'beginner' ? '#28a745' :
                                batch.color === 'intermediate' ? '#17a2b8' :
                                batch.color === 'advanced' ? '#ffc107' :
                                batch.color === 'weekend' ? '#6f42c1' : '#dc3545',
                      color: batch.color === 'advanced' ? '#333' : 'white'
                    }}
                  >
                    ➕ Join Batch
                  </button>
                  <button 
                    onClick={() => handleTrialBooking(batch.name)}
                    style={{
                      flex: '1',
                      padding: '12px',
                      border: '2px solid #667eea',
                      borderRadius: '10px',
                      background: 'transparent',
                      color: '#667eea',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.85rem'
                    }}
                  >
                    ▶️ Book Free Trial
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple text content to ensure something shows */}
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', 
          borderRadius: '20px', 
          padding: '40px', 
          textAlign: 'center',
          color: 'white',
          marginBottom: '40px'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
            Ready to Start Your Badminton Journey?
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: '0.9' }}>
            Join hundreds of students who have transformed their game with our professional training programs
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '15px 25px',
              borderRadius: '25px',
              border: 'none',
              background: '#ffd700',
              color: '#333',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              📞 Call for Details: +91 98765 43210
            </button>
            <button style={{
              padding: '15px 25px',
              borderRadius: '25px',
              border: '2px solid #ffd700',
              background: 'transparent',
              color: '#ffd700',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              📅 Schedule Visit
            </button>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      {showRegistrationModal && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '1000'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '30px',
            maxWidth: '400px',
            width: '90%',
            position: 'relative'
          }}>
            <button 
              onClick={() => setShowRegistrationModal(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
            <h3>Register for {selectedBatch?.name}</h3>
            <p>Registration form would be implemented here</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Batches;
