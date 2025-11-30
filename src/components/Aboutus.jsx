import React, { useState, useEffect } from 'react';
import { Target, Users, Award, Trophy, MapPin, Clock, Star, Heart, Zap, TrendingUp, Shield, Dumbbell, Video, Coffee, ChevronRight, Check, Play } from 'lucide-react';

function Aboutus() {
  const [activeCoach, setActiveCoach] = useState(null);
  const [activeTab, setActiveTab] = useState('mission');
  const [scrollY, setScrollY] = useState(0);
  const [countUp, setCountUp] = useState({ students: 0, years: 0, championships: 0, coaches: 0 });

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counter animation
  useEffect(() => {
    const targets = { students: 500, years: 15, championships: 100, coaches: 20 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCountUp({
        students: Math.floor((targets.students / steps) * step),
        years: Math.floor((targets.years / steps) * step),
        championships: Math.floor((targets.championships / steps) * step),
        coaches: Math.floor((targets.coaches / steps) * step),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: countUp.students + "+", label: "Active Students", color: "from-blue-500 to-cyan-500" },
    { icon: <Award className="w-8 h-8" />, value: countUp.years + "+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
    { icon: <Trophy className="w-8 h-8" />, value: countUp.championships + "+", label: "Championships Won", color: "from-orange-500 to-red-500" },
    { icon: <Star className="w-8 h-8" />, value: countUp.coaches + "+", label: "Professional Coaches", color: "from-green-500 to-emerald-500" }
  ];

  const coaches = [
    {
      name: "Rajesh Kumar",
      role: "Head Coach",
      experience: "15 years",
      specialty: "Advanced Singles & Doubles",
      achievements: "National Champion 2015, 2017",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop"
    },
    {
      name: "Priya Sharma",
      role: "Junior Coach",
      experience: "8 years",
      specialty: "Youth Development",
      achievements: "State Level Coach Award 2020",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      name: "Amit Patel",
      role: "Fitness Trainer",
      experience: "10 years",
      specialty: "Sports Conditioning",
      achievements: "Certified Sports Nutritionist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Sneha Reddy",
      role: "Senior Coach",
      experience: "12 years",
      specialty: "Women's Training Program",
      achievements: "BWF Certified Level 2 Coach",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
    }
  ];

  const facilities = [
    { icon: <Zap />, title: "Professional Courts", desc: "8 international standard courts with premium wooden flooring and perfect lighting" },
    { icon: <Dumbbell />, title: "Fitness Center", desc: "State-of-the-art gym with cardio and strength training equipment" },
    { icon: <Video />, title: "Video Analysis", desc: "Advanced motion capture technology for technique improvement" },
    { icon: <Shield />, title: "Safety First", desc: "First-aid trained staff and comprehensive insurance coverage" },
    { icon: <Trophy />, title: "Pro Shop", desc: "Authentic equipment from top brands - Yonex, Li-Ning, Victor" },
    { icon: <Coffee />, title: "Nutrition Bar", desc: "Healthy snacks, protein shakes, and energy drinks for athletes" }
  ];

  const programs = [
    { name: "Beginner Program", age: "5-10 years", duration: "3 months", features: ["Basic techniques", "Footwork training", "Fun games"] },
    { name: "Intermediate Program", age: "11-16 years", duration: "6 months", features: ["Match strategies", "Advanced shots", "Tournament prep"] },
    { name: "Advanced Program", age: "17+ years", duration: "Ongoing", features: ["Professional training", "Mental coaching", "Career guidance"] },
    { name: "Adults Program", age: "All ages", duration: "Flexible", features: ["Fitness focus", "Stress relief", "Social play"] }
  ];

  const testimonials = [
    { name: "Arjun Mehta", role: "State Champion", text: "This academy transformed my game completely. The coaches are world-class!", rating: 5 },
    { name: "Ananya Singh", role: "Parent", text: "My daughter loves coming here. Great environment and fantastic coaches!", rating: 5 },
    { name: "Vikram Rao", role: "Professional Player", text: "Best training facility in the city. Highly recommend for serious players.", rating: 5 }
  ];

  const achievements = [
    "🏆 50+ National Level Players Trained",
    "🥇 State Champions for 5 Consecutive Years",
    "🎓 BWF Certified Training Center",
    "⭐ 4.9/5 Rating on Google Reviews",
    "🌟 Official Partner of BAI",
    "💪 100% Tournament Preparation Success Rate"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 overflow-hidden">
      {/* Animated Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-sm mb-8 animate-bounce">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">🏸 India's Premier Badminton Training Academy</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 drop-shadow-2xl">
              Where Champions<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400">Are Made</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Transform your passion into excellence with expert coaching, world-class facilities, and a winning mindset
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Our Story
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Book Free Trial Class
              </button>
            </div>

            <div className="flex justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-300" />
                <span>No Hidden Charges</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-300" />
                <span>Flexible Timings</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-300" />
                <span>Expert Coaches</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-12 fill-slate-50">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Animated Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl shadow-2xl p-8 text-center transform hover:scale-110 transition-all duration-500 hover:rotate-2 cursor-pointer group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 text-white shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-gray-800 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {stat.value}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex border-b">
            {['mission', 'vision', 'values'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-6 px-8 font-bold text-lg transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="p-12">
            {activeTab === 'mission' && (
              <div className="flex items-start gap-8">
                <Target className="w-16 h-16 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    To create world-class badminton players by providing exceptional training, modern facilities, and a nurturing environment that develops not just athletic skills, but also discipline, confidence, and sportsmanship.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'vision' && (
              <div className="flex items-start gap-8">
                <TrendingUp className="w-16 h-16 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    To be recognized as India's leading badminton academy, producing national and international champions while making the sport accessible to everyone who dreams of excellence.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'values' && (
              <div className="flex items-start gap-8">
                <Heart className="w-16 h-16 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Values</h3>
                  <ul className="space-y-3 text-xl text-gray-600">
                    <li className="flex items-center gap-3"><Check className="w-6 h-6 text-green-500" /> Excellence in every serve</li>
                    <li className="flex items-center gap-3"><Check className="w-6 h-6 text-green-500" /> Integrity on and off the court</li>
                    <li className="flex items-center gap-3"><Check className="w-6 h-6 text-green-500" /> Passion for the game</li>
                    <li className="flex items-center gap-3"><Check className="w-6 h-6 text-green-500" /> Respect for all players</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Our Story with Timeline */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">Our Journey</h2>
            <p className="text-xl text-blue-100">From humble beginnings to champions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-l-4 border-yellow-400 hover:bg-white/20 transition-all">
                <div className="text-yellow-300 font-bold mb-2">2009 - The Beginning</div>
                <p className="text-white">Started with just 2 courts and a dream to build champions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-l-4 border-green-400 hover:bg-white/20 transition-all">
                <div className="text-green-300 font-bold mb-2">2015 - Major Milestone</div>
                <p className="text-white">Expanded to 8 courts and won our first state championship</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-l-4 border-pink-400 hover:bg-white/20 transition-all">
                <div className="text-pink-300 font-bold mb-2">2020 - Recognition</div>
                <p className="text-white">Became BWF certified training center with 500+ students</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-l-4 border-orange-400 hover:bg-white/20 transition-all">
                <div className="text-orange-300 font-bold mb-2">2024 - Excellence</div>
                <p className="text-white">100+ tournaments won, 20+ national players trained</p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&h=600&fit=crop" 
                alt="Academy"
                className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl">
                15+ Years of Excellence
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* World-Class Facilities */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">World-Class Facilities</h2>
          <p className="text-xl text-gray-600">Everything you need to become a champion</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-blue-500 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 text-white shadow-lg">
                {facility.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{facility.title}</h3>
              <p className="text-gray-600 leading-relaxed">{facility.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Training Programs */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">Training Programs</h2>
            <p className="text-xl text-gray-600">Choose the perfect program for your skill level</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {programs.map((program, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-blue-500"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                <div className="text-blue-600 font-semibold mb-1">{program.age}</div>
                <div className="text-gray-500 text-sm mb-4">{program.duration}</div>
                <ul className="space-y-2">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet Our Coaches */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">Meet Our Expert Coaches</h2>
          <p className="text-xl text-gray-600">Learn from certified professionals who care about your success</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {coaches.map((coach, idx) => (
            <div 
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
              onClick={() => setActiveCoach(activeCoach === idx ? null : idx)}
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{coach.name}</h3>
                  <p className="text-blue-300 font-semibold">{coach.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold">{coach.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Award className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">{coach.specialty}</span>
                </div>
                
                {activeCoach === idx && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
                    <div className="flex items-start gap-2">
                      <Trophy className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{coach.achievements}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Banner */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-white">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all">
                <span className="text-2xl">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600">Real stories from real champions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
              <div>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-blue-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-2xl text-blue-100 mb-10">Join hundreds of students who have transformed their game</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 shadow-2xl flex items-center justify-center gap-3">
              Book Free Trial Class
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="bg-transparent border-3 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
              Call: +91 98765 43210
            </button>
          </div>

          <div className="mt-12 flex justify-center gap-12 text-white">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Mumbai, Maharashtra</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6" />
              <span className="text-lg">6 AM - 10 PM Daily</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-6">
            <a href="#" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Programs</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Coaches</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Gallery</a>
          </div>
          <p className="text-gray-400">© 2024 SS Badminton Academy. All rights reserved. | Building Champions Since 2009</p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
