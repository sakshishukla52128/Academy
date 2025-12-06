import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, User, Instagram, Facebook, Twitter, Youtube, CheckCircle } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.category && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", category: "", message: "" });
      }, 3000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      detail: "+91 98765 43210",
      subDetail: "Mon-Sat, 6AM - 9PM",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email Address",
      detail: "info@badmintonacademy.com",
      subDetail: "We reply within 24 hours",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "123 Sports Complex, Andheri",
      subDetail: "Mumbai, Maharashtra 400053",
      color: "from-orange-400 to-red-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      detail: "Monday - Saturday",
      subDetail: "6:00 AM - 9:00 PM",
      color: "from-green-400 to-teal-600"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", color: "hover:bg-pink-500", link: "#" },
    { icon: Facebook, name: "Facebook", color: "hover:bg-blue-600", link: "#" },
    { icon: Twitter, name: "Twitter", color: "hover:bg-sky-500", link: "#" },
    { icon: Youtube, name: "YouTube", color: "hover:bg-red-600", link: "#" }
  ];

  const faqs = [
    { q: "Do you offer trial classes?", a: "Yes! We offer a free trial class for all new students." },
    { q: "What equipment do I need?", a: "Just bring sports shoes. We provide rackets for beginners." },
    { q: "Are coaches certified?", a: "All our coaches are nationally certified with 6+ years experience." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-300 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block mb-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold ">
            📞 Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Contact <span className="text-yellow-300">Our Team</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* CONTACT INFO CARDS */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-10 mb-20">
        <div className="grid md:grid-cols-4 gap-6">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-semibold mb-1">{info.detail}</p>
                <p className="text-gray-500 text-sm">{info.subDetail}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* CONTACT FORM */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-3">Send Us a Message</h2>
              <p className="text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border-2 border-green-500 rounded-2xl flex items-center gap-3 animate-bounce">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <p className="text-green-700 font-semibold">Message sent successfully! We'll contact you soon.</p>
              </div>
            )}

            <div className="space-y-6">
              <div className="relative group">
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:outline-none transition duration-300"
                />
              </div>

              <div className="relative group">
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:outline-none transition duration-300"
                />
              </div>

              <div className="relative group">
                <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:outline-none transition duration-300"
                />
              </div>

              <div>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:outline-none transition duration-300 text-gray-700"
                >
                  <option value="">Select Training Category</option>
                  <option value="beginner">Beginner Training</option>
                  <option value="intermediate">Intermediate Training</option>
                  <option value="advanced">Advanced Training</option>
                  <option value="personal">Personal Coaching</option>
                </select>
              </div>

              <div className="relative group">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  rows={5}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-600 focus:outline-none transition duration-300 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* MAP & INFO */}
          <div className="space-y-8">
            {/* MAP */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.082177517909103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1653294509000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              />
            </div>

            {/* SOCIAL MEDIA */}
            <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Follow Us On Social Media</h3>
              <p className="text-purple-100 mb-6">Stay updated with our latest news, events, and training tips!</p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.link}
                      className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110`}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* QUICK FAQs */}
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick FAQs</h3>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-4 py-2 hover:bg-blue-50 transition rounded-r-xl">
                    <h4 className="font-bold text-gray-800 mb-1">{faq.q}</h4>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-4">Visit Our Academy Today!</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Come experience our world-class facilities and meet our expert coaches in person.
            </p>
            <button className="px-10 py-4 bg-white text-orange-600 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-orange-700 transition duration-300 shadow-2xl hover:scale-105 transform">
              Schedule a Visit →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Contact;
