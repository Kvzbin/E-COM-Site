import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert("Thank you for contacting us!");
  };

  return (
    <div className="bg-white text-gray-800 py-10 px-6 sm:px-10 md:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          We’d love to hear from you! Fill out the form below and we’ll get in touch with you shortly.
        </p>
      </div>

      {/* Responsive Form & Illustration */}
      <div className="max-w-6xl mx-auto bg-orange-50 p-6 sm:p-10 rounded-xl shadow-lg flex flex-col lg:flex-row items-center gap-10">
        {/* ✅ Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4206/4206277.png"
            alt="Contact illustration"
            className="w-full max-w-sm mx-auto animate-pulse duration-600"
          />
        </div>

        {/* ✅ Form Section */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-orange-700 mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-orange-700 mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-orange-700 mb-1" htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-orange-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
