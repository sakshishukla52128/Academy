import React, { useState, useRef, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isVisible, setIsVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionRef = useRef(null);

  // Contact information
  const contactInfo = [
    {
      id: 1,
      icon: '📍',
      title: 'Our Location',
      details: [
        'Shuttle Smash Badminton Academy',
        '123 Sports Complex, Badminton Lane',
        'City Center, Mumbai - 400001',
        'Near Metro Station, Gate No. 3'
      ],
      color: 'blue'
    },
    {
      id: 2,
      icon: '📞',
      title: 'Call Us',
      details: [
        '+91 98765 43210 (Main)',
        '+91 87654 32109 (Admission)',
        '+91 76543 21098 (Emergency)',
        'Available 6:00 AM - 10:00 PM'
      ],
      color: 'green'
    },
    {
      id: 3,
      icon: '✉️',
      title: 'Email Us',
      details: [
        'info@shuttlesmash.com',
        'admission@shuttlesmash.com',
        'coach@shuttlesmash.com',
        'support@shuttlesmash.com'
      ],
      color: 'orange'
    },
    {
      id: 4,
      icon: '🕐',
      title: 'Academy Hours',
      details: [
        'Monday - Friday: 6:00 AM - 10:00 PM',
        'Saturday: 6:00 AM - 8:00 PM',
        'Sunday: 7:00 AM - 6:00 PM',
        'Public Holidays: 8:00 AM - 4:00 PM'
      ],
      color: 'purple'
    }
  ];

  // Social media links
  const socialLinks = [
    { id: 1, platform: 'Facebook', icon: '📘', url: '#', color: '#1877F2' },
    { id: 2, platform: 'Instagram', icon: '📷', url: '#', color: '#E4405F' },
    { id: 3, platform: 'YouTube', icon: '📺', url: '#', color: '#FF0000' },
    { id: 4, platform: 'WhatsApp', icon: '💬', url: '#', color: '#25D366' },
    { id: 5, platform: 'Twitter', icon: '🐦', url: '#', color: '#1DA1F2' },
    { id: 6, platform: 'LinkedIn', icon: '💼', url: '#', color: '#0A66C2' }
  ];

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: 'What are the admission requirements?',
      answer: 'We welcome players of all skill levels, from beginners to advanced. Age group starts from 6 years old.'
    },
    {
      id: 2,
      question: 'Do you provide equipment?',
      answer: 'Yes, we provide rackets and shuttlecocks during training. We also have a pro shop for purchasing equipment.'
    },
    {
      id: 3,
      question: 'What are the fees?',
      answer: 'Our fees vary by program. Basic training starts from ₹2000/month. Contact us for detailed fee structure.'
    },
    {
      id: 4,
      question: 'Do you offer trial sessions?',
      answer: 'Yes! We offer a free trial session for new students. Book your trial through our contact form.'
    }
  ];

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 3000);
  };

  // Open WhatsApp
  const openWhatsApp = () => {
    const phone = "+919876543210";
    const message = "Hello, I'm interested in Shuttle Smash Badminton Academy!";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section ref={sectionRef} className="contact-section">
      <div className="container">
        {/* Header */}
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <div className="contact-icon">📞</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your badminton journey? We're here to help you every step of the way!
          </p>
          <div className="title-underline"></div>
        </div>

        {/* Contact Info Grid */}
        <div className={`contact-info-grid ${isVisible ? 'animate' : ''}`}>
          {contactInfo.map((info, index) => (
            <div 
              key={info.id} 
              className={`contact-info-card ${info.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="info-icon">{info.icon}</div>
              <h3 className="info-title">{info.title}</h3>
              <div className="info-details">
                {info.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className={`main-content-grid ${isVisible ? 'animate' : ''}`}>
          {/* Contact Form */}
          <div className="contact-form-container">
            <h3 className="form-title">Send Us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="inquiryType">Inquiry Type</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="admission">Admission</option>
                    <option value="coaching">Coaching Programs</option>
                    <option value="tournament">Tournament Training</option>
                    <option value="corporate">Corporate Training</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief subject of your message"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell us how we can help you achieve your badminton goals..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={formSubmitted}>
                {formSubmitted ? (
                  <span>✅ Message Sent!</span>
                ) : (
                  <span>Send Message 📤</span>
                )}
                <div className="btn-glow"></div>
              </button>
            </form>
          </div>

          {/* Quick Contact & FAQs */}
          <div className="sidebar">
            {/* Quick Contact */}
            <div className="quick-contact">
              <h4>Quick Contact</h4>
              <div className="quick-actions">
                <button className="quick-btn call-btn" onClick={() => window.open('tel:+919876543210')}>
                  📞 Call Now
                </button>
                <button className="quick-btn whatsapp-btn" onClick={openWhatsApp}>
                  💬 WhatsApp
                </button>
                <button className="quick-btn email-btn" onClick={() => window.open('mailto:info@shuttlesmash.com')}>
                  ✉️ Email
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="social-media">
              <h4>Follow Us</h4>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a 
                    key={social.id} 
                    href={social.url} 
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="faq-section">
              <h4>Frequently Asked Questions</h4>
              {faqs.map((faq) => (
                <details key={faq.id} className="faq-item">
                  <summary className="faq-question">{faq.question}</summary>
                  <p className="faq-answer">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        {/* Map & Location */}
        <div className={`map-section ${isVisible ? 'animate' : ''}`}>
          <h3 className="map-title">Find Us Here</h3>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <h4>Interactive Map Coming Soon</h4>
              <p>123 Sports Complex, Badminton Lane<br />City Center, Mumbai - 400001</p>
              <button className="directions-btn">
                📍 Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className={`emergency-contact ${isVisible ? 'animate' : ''}`}>
          <div className="emergency-content">
            <div className="emergency-icon">🚨</div>
            <div className="emergency-text">
              <h4>Emergency Contact</h4>
              <p>For urgent matters during training hours</p>
            </div>
            <a href="tel:+917654321098" className="emergency-btn">
              📞 +91 76543 21098
            </a>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="bg-decorations">
        <div className="decoration phone-decoration">📞</div>
        <div className="decoration email-decoration">✉️</div>
        <div className="decoration location-decoration">📍</div>
        <div className="decoration shuttlecock-decoration">🏸</div>
      </div>
    </section>
  );
};

export default Contact;
