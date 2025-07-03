import React from "react";

function About() {

  return (
    <div className="bg-white text-gray-800 py-10 px-6 sm:px-10 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h1>
        <p className="text-md text-gray-600 max-w-2xl mx-auto">
          Our commitment goes beyond fabric and threads — we’re dedicated to
          delivering confidence, consistency, and customer-first service in
          every stitch.
        </p>
      </div>

      {/* Image + Text Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <img
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWJvdXR8ZW58MHx8MHx8fDA%3D"
          alt="Team"
          className="w-full md:w-1/2 h-[300px] object-cover rounded-xl shadow-md"
        />
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-3">
            Founded in 2023, we specialize in creating stunning websites and
            apps tailored to your needs. From frontend magic to backend logic,
            we deliver full-stack solutions with love.
          </p>
          <p className="text-gray-600">
            Our mission is simple: build better products, help brands grow, and
            innovate for tomorrow.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Innovation",
            desc: "We don't follow trends — we create them.",
          },
          {
            title: "Quality",
            desc: "Experiences you can trust and rely on — every single time.",
          },
          {
            title: "Commitment",
            desc: "From materials to service, quality is our promise. ",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold mb-3">Want to work with us?</h2>
        <p className="text-gray-600 mb-5">
          Let’s build something amazing together!
        </p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default About;
