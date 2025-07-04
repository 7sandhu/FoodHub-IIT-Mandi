import React from 'react';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section bg-gradient-to-br from-orange-50 to-amber-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-text font-bold text-gray-800 mb-6 animate-fade-in-up">
            Welcome to <span className="gradient-text">FoodHub IIT Mandi</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 animate-fade-in-up">
            Delicious food delivered fast to your doorstep
          </p>
          <button className="btn-primary animate-scale-in">
            Order Now
          </button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu-section" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center font-bold text-gray-800 mb-12 animate-fade-in-up">
            Our Menu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card-hover bg-white rounded-lg shadow-md p-6">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Delicious Item {item}</h3>
                <p className="text-gray-600 mb-4">Amazing food description here</p>
                <button className="btn-secondary w-full">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title font-bold text-gray-800 mb-12 animate-fade-in-up">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Fast Delivery', 'Fresh Food', '24/7 Service'].map((service, index) => (
              <div key={index} className="hover-lift p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mx-auto mb-4 animate-float"></div>
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">Service description here</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title font-bold text-gray-800 mb-8 animate-fade-in-up">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up">
            We are passionate about delivering the best food experience to IIT Mandi students and faculty.
            Our mission is to provide fresh, delicious meals with fast and reliable service.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
