import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronRight,
  Dumbbell,
  Video,
  Wifi,
  Wind,
  Shield,
  Coffee,
  Trophy,
  Users,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Check,
  Star,
  Zap,
  Award,
  Activity,
  HeartPulse,
  Sparkles,
  Play,
  TrendingUp,
  Target
} from 'lucide-react';

function Facilities() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePricing, setActivePricing] = useState('monthly');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

// REPLACE mainFacilities with this:
const mainFacilities = [
  {
    icon: <Trophy className="w-12 h-12" />,
    title: '8 Professional Courts',
    description: 'International-standard synthetic courts with non-slip surface and LED match lighting.',
    features: ['Olympic-grade flooring', 'LED match lighting', 'Court dividers', 'Shock-absorbing surface'],
    image: '🏸',
    color: 'from-lime-500 to-green-600',
    category: 'courts'
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: 'Indoor Multi-Court Arena',
    description: 'Spacious indoor hall with retractable seating and PA system for tournaments.',
    features: ['Retractable spectator seating', 'Electronic scoreboard', 'Warm-up courts', 'PA system'],
    image: '🏟️',
    color: 'from-yellow-500 to-orange-500',
    category: 'courts'
  },
  {
    icon: <Dumbbell className="w-12 h-12" />,
    title: 'Fitness & Strength Center',
    description: 'Purpose-built gym for players: cardio, strength, mobility and plyometrics.',
    features: ['Cardio machines', 'Free weights & racks', 'Plyometric zone', 'Functional trainers'],
    image: '💪',
    color: 'from-orange-500 to-red-600',
    category: 'training'
  },
  {
    icon: <Video className="w-12 h-12" />,
    title: 'Video Analysis Lab',
    description: 'High-speed cameras and coach workstation for technique & match analysis.',
    features: ['Multi-angle HD cameras', 'Slow-motion replay', 'Coach-player review station', 'Session recording'],
    image: '🎥',
    color: 'from-purple-500 to-purple-700',
    category: 'training'
  },
  {
    icon: <HeartPulse className="w-12 h-12" />,
    title: 'Physio & Recovery Suite',
    description: 'On-site physiotherapy, rehab equipment and recovery tools for fast turnaround.',
    features: ['Physio consultations', 'Massage tables', 'Ice/heat therapy', 'Rehab equipment'],
    image: '🩺',
    color: 'from-blue-500 to-teal-600',
    category: 'amenities'
  },
  {
    icon: <Coffee className="w-12 h-12" />,
    title: 'Refreshment Lounge & Pro Shop',
    description: 'Healthy café plus a pro shop for rackets, shoes and stringing services.',
    features: ['Protein shakes & snacks', 'Pro shop & demo rackets', 'Stringing service', 'Seating & WiFi'],
    image: '☕',
    color: 'from-teal-500 to-cyan-600',
    category: 'amenities'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Locker Rooms & Security',
    description: 'Clean locker rooms with showers plus secure storage and CCTV coverage.',
    features: ['Secure lockers', 'Hot showers', 'Vanity area', '24/7 CCTV & security'],
    image: '🔒',
    color: 'from-pink-500 to-rose-600',
    category: 'amenities'
  }
];

  // REPLACE additionalAmenities with this:
const additionalAmenities = [
  { icon: <Wifi className="w-6 h-6" />, text: 'High-Speed WiFi', color: 'lime' },
  { icon: <MapPin className="w-6 h-6" />, text: 'Prime Central Location', color: 'blue' },
  { icon: <Calendar className="w-6 h-6" />, text: 'Online Booking & App', color: 'purple' },
  { icon: <Phone className="w-6 h-6" />, text: 'On-call Nutritionist', color: 'green' },
  { icon: <Activity className="w-6 h-6" />, text: 'Performance Tracking', color: 'teal' },
  { icon: <Users className="w-6 h-6" />, text: 'Pro Shop & Stringing', color: 'orange' },
  { icon: <Clock className="w-6 h-6" />, text: 'Flexible Timings (6am - 10pm)', color: 'gray' },
  { icon: <Sparkles className="w-6 h-6" />, text: 'Spectator Seating', color: 'indigo' }
];


  const pricingPlans = {
    monthly: [
      {
        name: 'Basic',
        price: '₹5,000',
        period: '/month',
        description: 'Perfect for beginners',
        features: [
          '12 sessions per month',
          'Access to 2 courts',
          'Basic equipment',
          'Group training',
          'Morning/Evening slots',
          'Locker facility'
        ],
        color: 'from-lime-500 to-green-600',
        popular: false
      },
      {
        name: 'Pro',
        price: '₹8,000',
        period: '/month',
        description: 'Most popular choice',
        features: [
          '20 sessions per month',
          'Access to all courts',
          'Premium equipment',
          'Semi-private training',
          'Flexible timing',
          'Gym access',
          'Video analysis',
          'Nutrition guidance'
        ],
        color: 'from-orange-500 to-red-600',
        popular: true
      },
      {
        name: 'Elite',
        price: '₹12,000',
        period: '/month',
        description: 'For serious players',
        features: [
          'Unlimited sessions',
          'Priority court booking',
          'Professional equipment',
          'One-on-one coaching',
          'Anytime access',
          'Full gym access',
          'Advanced video analysis',
          'Personal trainer',
          'Tournament preparation',
          'Diet planning'
        ],
        color: 'from-purple-500 to-purple-700',
        popular: false
      }
    ],
    quarterly: [
      {
        name: 'Basic',
        price: '₹13,500',
        period: '/3 months',
        description: 'Save ₹1,500',
        features: [
          '36 sessions (3 months)',
          'Access to 2 courts',
          'Basic equipment',
          'Group training',
          'Morning/Evening slots',
          'Locker facility'
        ],
        color: 'from-lime-500 to-green-600',
        popular: false
      },
      {
        name: 'Pro',
        price: '₹21,600',
        period: '/3 months',
        description: 'Save ₹2,400',
        features: [
          '60 sessions (3 months)',
          'Access to all courts',
          'Premium equipment',
          'Semi-private training',
          'Flexible timing',
          'Gym access',
          'Video analysis',
          'Nutrition guidance'
        ],
        color: 'from-orange-500 to-red-600',
        popular: true
      },
      {
        name: 'Elite',
        price: '₹32,400',
        period: '/3 months',
        description: 'Save ₹3,600',
        features: [
          'Unlimited sessions',
          'Priority court booking',
          'Professional equipment',
          'One-on-one coaching',
          'Anytime access',
          'Full gym access',
          'Advanced video analysis',
          'Personal trainer',
          'Tournament preparation',
          'Diet planning'
        ],
        color: 'from-purple-500 to-purple-700',
        popular: false
      }
    ],
    yearly: [
      {
        name: 'Basic',
        price: '₹48,000',
        period: '/year',
        description: 'Save ₹12,000',
        features: [
          '144 sessions (12 months)',
          'Access to 2 courts',
          'Basic equipment',
          'Group training',
          'Morning/Evening slots',
          'Locker facility',
          '2 free guest passes'
        ],
        color: 'from-lime-500 to-green-600',
        popular: false
      },
      {
        name: 'Pro',
        price: '₹76,800',
        period: '/year',
        description: 'Save ₹19,200',
        features: [
          '240 sessions (12 months)',
          'Access to all courts',
          'Premium equipment',
          'Semi-private training',
          'Flexible timing',
          'Gym access',
          'Video analysis',
          'Nutrition guidance',
          '4 free guest passes'
        ],
        color: 'from-orange-500 to-red-600',
        popular: true
      },
      {
        name: 'Elite',
        price: '₹1,20,000',
        period: '/year',
        description: 'Save ₹24,000',
        features: [
          'Unlimited sessions',
          'Priority court booking',
          'Professional equipment',
          'One-on-one coaching',
          'Anytime access',
          'Full gym access',
          'Advanced video analysis',
          'Personal trainer',
          'Tournament preparation',
          'Diet planning',
          '8 free guest passes',
          'Free merchandise'
        ],
        color: 'from-purple-500 to-purple-700',
        popular: false
      }
    ]
  };

  // REPLACE upcomingEvents with this:
const upcomingEvents = [
  {
    title: 'Summer Camp 2025',
    date: 'June 1–15, 2025',
    description: 'Intensive 2-week camp for 8–16 yrs with daily sessions and matches.',
    price: '₹8,000',
    features: ['Daily 2-3 hour sessions', 'Video analysis', 'Fitness classes', 'End-camp mini-tournament'],
    icon: <Trophy className="w-8 h-8" />,
    color: 'from-yellow-500 to-orange-600'
  },
  {
    title: 'Inter-Academy Open',
    date: 'July 20–22, 2025',
    description: 'Open tournament across age categories. Live scoreboard & streaming.',
    price: 'Free for members / ₹200 for guests',
    features: ['All age groups', 'Prize money & trophies', 'Live streaming', 'Professional referees'],
    icon: <Award className="w-8 h-8" />,
    color: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Coach Masterclass',
    date: 'August 10, 2025',
    description: 'One-day masterclass with a former national coach.',
    price: '₹3,500',
    features: ['Skill clinics', 'Match tactics', 'Q&A', 'Certificate'],
    icon: <Video className="w-8 h-8" />,
    color: 'from-green-500 to-teal-600'
  }
];


 // REPLACE programs with this:
const programs = [
  {
    title: 'Starter Foundations',
    age: '6+ years',
    duration: '4–8 weeks',
    description: 'Learn basics: grip, footwork and rules in a fun environment.',
    features: ['Footwork drills', 'Basic strokes', 'Match introduction', 'Fitness basics'],
    icon: '🏁',
    color: 'lime'
  },
  {
    title: 'Junior Competitive Program',
    age: '10–18 years',
    duration: '6–12 months',
    description: 'Structured path for tournament play and ranking improvements.',
    features: ['Match strategy', 'Tournament practice', 'Physical conditioning', 'Mental skills'],
    icon: '🎯',
    color: 'orange'
  },
  {
    title: 'Elite Performance',
    age: '15+ years',
    duration: '12 months',
    description: 'Individualized training with sport science support and coaches.',
    features: ['One-on-one coaching', 'Advanced analytics', 'Nutrition & recovery', 'Tournament calendar'],
    icon: '🏆',
    color: 'purple'
  },
  {
    title: 'Women-only Batches',
    age: 'All ages',
    duration: 'Ongoing',
    description: 'Safe & focused training led by experienced women coaches.',
    features: ['Women coaches', 'Flexible times', 'Community sessions', 'Fitness focus'],
    icon: '👩‍🏫',
    color: 'pink'
  },
  {
    title: 'Corporate Wellness',
    age: 'Teams',
    duration: 'Custom',
    description: 'Team-building & fitness sessions for companies.',
    features: ['Group sessions', 'Events & tournaments', 'Flexible schedules', 'Corporate pricing'],
    icon: '🏢',
    color: 'teal'
  }
];


  const filteredFacilities = selectedCategory === 'all'
    ? mainFacilities
    : mainFacilities.filter(f => f.category === selectedCategory);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏸</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-lime-400 to-orange-500 bg-clip-text text-transparent">
                  SHUTTLE SMASH
                </h1>
                <p className="text-xs text-gray-400">Badminton Academy</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-lime-400 transition">Home</a>
              <a href="#about" className="hover:text-lime-400 transition">About Us</a>
              <div className="relative group">
                <button className="text-lime-400 font-semibold flex items-center">
                  Facilities <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                </button>
                <div className="absolute hidden group-hover:block bg-gray-800 mt-2 rounded-lg shadow-xl py-2 w-48">
                  <a href="#pricing" className="block px-4 py-2 hover:bg-gray-700">Pricing</a>
                  <a href="#events" className="block px-4 py-2 hover:bg-gray-700">Events & Programs</a>
                </div>
              </div>
              <div className="relative group">
                <button className="hover:text-lime-400 transition flex items-center">
                  Batches <ChevronRight className="w-4 h-4 ml-1 rotate-90" />
                </button>
              </div>
              <a href="#gallery" className="hover:text-lime-400 transition">Gallery</a>
              <a href="#contact" className="hover:text-lime-400 transition">Contact</a>
              <button className="bg-gradient-to-r from-lime-500 to-green-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-lime-500/50 transition">
                Join Now
              </button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block py-2">Home</a>
              <a href="#about" className="block py-2">About Us</a>
              <a href="#pricing" className="block py-2">Pricing</a>
              <a href="#events" className="block py-2">Events</a>
              <a href="#gallery" className="block py-2">Gallery</a>
              <a href="#contact" className="block py-2">Contact</a>
              <button className="w-full bg-gradient-to-r from-lime-500 to-green-600 py-2 rounded-full">Join Now</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-500/20 via-orange-500/20 to-purple-600/20 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-lime-500/10 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-lime-500/20">
              <p className="text-sm font-semibold text-lime-400">🏆 World-Class Infrastructure</p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-lime-400 via-orange-500 to-purple-600 bg-clip-text text-transparent">Facilities</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              State-of-the-art amenities designed for champions
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'courts', 'training', 'amenities'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-lime-500 to-green-600 shadow-lg shadow-lime-500/50'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFacilities.map((facility, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-lime-500 transition-all transform hover:-translate-y-2 group"
              >
                <div className={`h-40 bg-gradient-to-r ${facility.color} flex items-center justify-center text-6xl`}>
                  {facility.image}
                </div>
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${facility.color} rounded-xl flex items-center justify-center mb-4 -mt-16 shadow-xl`}>
                    {facility.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{facility.title}</h3>
                  <p className="text-gray-400 mb-6">{facility.description}</p>
                  <ul className="space-y-3">
                    {facility.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <Check className="w-5 h-5 text-lime-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Amenities */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Additional <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Amenities</span>
            </h2>
            <p className="text-gray-400 text-lg">Everything you need for the perfect training experience</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalAmenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all text-center transform hover:-translate-y-2 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r from-${amenity.color}-500 to-${amenity.color}-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {amenity.icon}
                </div>
                <p className="font-semibold">{amenity.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Membership <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">Choose the perfect plan for your goals</p>

            {/* Pricing Toggle */}
            <div className="inline-flex bg-gray-800 rounded-full p-1 border border-gray-700">
              {['monthly', 'quarterly', 'yearly'].map((period) => (
                <button
                  key={period}
                  onClick={() => setActivePricing(period)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    activePricing === period
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans[activePricing].map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-2xl p-8 border-2 ${plan.popular ? 'border-orange-500 shadow-2xl shadow-orange-500/20 transform scale-105' : 'border-gray-700'} hover:border-purple-500 transition-all relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center mb-2">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2 mb-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <Check className="w-5 h-5 text-lime-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full bg-gradient-to-r ${plan.color} py-3 rounded-full font-semibold hover:shadow-lg transition`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Need a custom plan? Contact us for corporate or group packages</p>
            <button className="bg-gray-800 border-2 border-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition">
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Training <span className="bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent">Programs</span>
            </h2>
            <p className="text-gray-400 text-lg">Specialized programs for every age and skill level</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-lime-500 transition-all transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" /> {program.age}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" /> {program.duration}
                  </span>
                </div>
                <p className="text-gray-400 mb-6">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300 text-sm">
                      <Zap className="w-4 h-4 text-lime-400 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full bg-gradient-to-r from-${program.color}-500 to-${program.color}-600 py-3 rounded-full font-semibold hover:shadow-lg transition`}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Events & <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Programs</span></h2>
            <p className="text-gray-400">Join our camps, tournaments and workshops to level up your game.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className={`rounded-2xl overflow-hidden border border-gray-700 bg-gradient-to-br ${event.color} bg-opacity-10`}>
                <div className="p-6 bg-gray-900/40">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-white/10 to-white/5 flex items-center justify-center">
                      {event.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{event.title}</h3>
                      <p className="text-sm text-gray-300">{event.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-200 mb-4">{event.description}</p>
                  <ul className="text-sm text-gray-200 space-y-2 mb-4">
                    {event.features.map((f, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-4 h-4 text-lime-400 mr-2 mt-1" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{event.price}</span>
                    <div className="space-x-2">
                      <button className="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 text-sm">Details</button>
                      <button className="px-4 py-2 rounded-full bg-gradient-to-r from-lime-500 to-green-600 text-sm">Register</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-400 mb-6">Have questions or want to book a trial? Reach out to our team.</p>

              <div className="space-y-4 text-gray-200">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-lime-400" />
                  <a href="tel:+911234567890" className="hover:text-lime-400">+91 12345 67890</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-lime-400" />
                  <a href="mailto:info@shuttlesmash.com" className="hover:text-lime-400">info@shuttlesmash.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-lime-400" />
                  <span>Prime Sports Complex, City Center</span>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-gray-400 mb-2">Quick Enquiry</p>
                <form className="grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()}>
                  <input className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700" placeholder="Your name" />
                  <input className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700" placeholder="Email" />
                  <textarea className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700" placeholder="Message" rows="4" />
                  <div className="flex items-center gap-3">
                    <button className="bg-gradient-to-r from-lime-500 to-green-600 px-6 py-3 rounded-full font-semibold">Send</button>
                    <button className="bg-gray-800 px-4 py-3 rounded-full border border-gray-700">Call Us</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
              <p className="text-gray-400 mb-6">Open: Mon - Sun · 6:00 AM - 10:00 PM</p>

              <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-gray-500">
                {/* Placeholder for map or gallery */}
                <div className="text-center">
                  <Play className="mx-auto mb-2 w-10 h-10 text-gray-500" />
                  <p>Map / Venue Gallery</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm text-gray-400 mb-2">Follow Us</h4>
                <div className="flex items-center gap-4">
                  <button className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">F</button>
                  <button className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">I</button>
                  <button className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">Y</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="font-bold text-lg">SHUTTLE SMASH</h4>
              <p className="text-gray-400 text-sm">Badminton Academy · World-class facilities</p>
            </div>
            <div className="text-gray-400 text-sm">© {new Date().getFullYear()} Shuttle Smash. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="mailto:info@shuttlesmash.com" className="text-gray-400 hover:text-lime-400"><Mail className="w-5 h-5" /></a>
              <a href="tel:+911234567890" className="text-gray-400 hover:text-lime-400"><Phone className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Facilities;

