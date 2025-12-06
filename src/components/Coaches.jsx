import { Clock, Medal, Users, Zap, Star, Award, Trophy, Target, Calendar, Phone, Mail, MapPin } from "lucide-react";

function Coaches() {
  const batchTimings = [
    { title: "Morning Batch", time: "6:00 AM – 8:00 AM", level: "Beginner", icon: Clock, color: "from-amber-400 to-orange-500" },
    { title: "Afternoon Batch", time: "2:00 PM – 4:00 PM", level: "Intermediate", icon: Zap, color: "from-blue-400 to-indigo-500" },
    { title: "Evening Batch", time: "6:00 PM – 8:00 PM", level: "Advanced", icon: Medal, color: "from-purple-400 to-pink-500" },
  ];

  const categories = [
    { name: "Beginner", desc: "Perfect for new learners", icon: Users, students: "50+", duration: "3 Months" },
    { name: "Intermediate", desc: "Improve techniques & speed", icon: Zap, students: "35+", duration: "4 Months" },
    { name: "Advanced", desc: "Tournament level professional training", icon: Medal, students: "20+", duration: "6 Months" },
  ];

  const coaches = [
    {
      name: "Coach Rohan Sharma",
      exp: "8+ Years Experience",
      spec: "Footwork + Smash Power",
      img: "https://i.ibb.co/r0yG4Rh/coach1.jpg",
      rating: 4.9,
      students: 150,
      achievements: "National Champion 2019"
    },
    {
      name: "Coach Priya Mehta",
      exp: "6+ Years Experience",
      spec: "Grip + Stroke Perfection",
      img: "https://i.ibb.co/BCmC78Z/coach2.jpg",
      rating: 4.8,
      students: 120,
      achievements: "State Level Coach"
    },
    {
      name: "Coach Arjun Verma",
      exp: "10+ Years Experience",
      spec: "Advance Strategy + Defence",
      img: "https://i.ibb.co/g9zhYc8/coach3.jpg",
      rating: 5.0,
      students: 200,
      achievements: "International Certified"
    },
  ];

  const facilities = [
    { icon: Trophy, title: "Professional Courts", desc: "International standard badminton courts" },
    { icon: Target, title: "Personalized Training", desc: "Individual attention & customized plans" },
    { icon: Award, title: "Certified Coaches", desc: "Experienced & nationally recognized" },
    { icon: Calendar, title: "Flexible Timings", desc: "Multiple batches to fit your schedule" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-orange-50">
      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
            🏸 Premium Badminton Training Academy
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Train With The <span className="text-yellow-300">Best Coaches</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Professional badminton training programs designed for all skill levels. From beginners to champions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-bold hover:bg-yellow-300 hover:text-blue-700 transition duration-300 shadow-xl">
              Book a Free Trial
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-blue-600 transition duration-300">
              View Schedule
            </button>
          </div>
        </div>
      </div>

      {/* BATCH TIMINGS - ENHANCED */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-10 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {batchTimings.map((batch, i) => {
            const Icon = batch.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${batch.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{batch.title}</h3>
                <p className="text-lg text-gray-600 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  {batch.time}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-bold">
                    {batch.level}
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition">
                    Enroll →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CATEGORIES - REDESIGNED */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Training <span className="text-orange-600">Categories</span>
          </h2>
          <p className="text-gray-600 text-lg">Choose the perfect program based on your skill level</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="relative group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{cat.name}</h3>
                  <p className="text-gray-600 mb-6">{cat.desc}</p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4 text-orange-500" />
                      <span>{cat.students} Students</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span>{cat.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FACILITIES */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-extrabold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {facilities.map((facility, i) => {
              const Icon = facility.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{facility.title}</h3>
                  <p className="text-blue-100 text-sm">{facility.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COACHES - PREMIUM DESIGN */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Meet Our <span className="text-blue-600">Expert Coaches</span>
          </h2>
          <p className="text-gray-600 text-lg">Learn from nationally certified and experienced professionals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {coaches.map((coach, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={coach.img}
                  alt={coach.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1 shadow-lg">
                  <Star className="w-4 h-4 fill-current" />
                  {coach.rating}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center gap-3 text-white text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {coach.students}+ Students
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-2xl text-gray-800 mb-2">{coach.name}</h3>
                <p className="text-orange-600 font-semibold mb-2">{coach.exp}</p>
                <p className="text-gray-600 mb-4">🎯 {coach.spec}</p>
                
                <div className="bg-blue-50 rounded-xl p-3 mb-4">
                  <p className="text-sm text-blue-700 font-medium flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    {coach.achievements}
                  </p>
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-lg">
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of students who are improving their badminton skills every day!
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">info@academy.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Mumbai, India</span>
              </div>
            </div>
            
            <button className="px-10 py-4 bg-white text-orange-600 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-orange-700 transition duration-300 shadow-2xl">
              Contact Us Today →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Coaches;