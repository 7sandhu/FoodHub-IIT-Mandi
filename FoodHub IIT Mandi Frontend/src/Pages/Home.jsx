import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../Redux/Slices/ProductSlice';

function Home() {
  const dispatch = useDispatch();
  const { productsData } = useSelector((state) => state.product);
  const [loading, setLoading] = useState(true);

  async function loadProducts() {
    try {
      setLoading(true);
      const response = await dispatch(getAllProducts());
      if (response?.payload?.data) {
        // Products loaded successfully
      }
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

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
          
          {productsData && productsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData.map((product) => (
                <Link 
                  key={product._id} 
                  to={`/products/${product._id}`}
                  className="card-hover bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    {product.productImage ? (
                      <img 
                        src={product.productImage} 
                        alt={product.productName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="h-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                        <span className="text-gray-500">No Image</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.productName}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-500">₹{product.price}</span>
                      <span className="text-sm text-gray-500">{product.category}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No products available at the moment.</p>
            </div>
          )}
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
                <p className="text-gray-600">Quality service you can trust</p>
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
