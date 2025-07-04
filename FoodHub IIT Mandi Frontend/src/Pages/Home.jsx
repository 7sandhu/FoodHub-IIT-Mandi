import IconArrowRight from "../Components/Icons/ArrowRight";
import PizzaImage from '../assets/Images/pizza2.png';
import CookingImage from '../assets/Images/cooking1.png';
import IITMandiImage from '../assets/Images/IIT-Mandi-image.jpeg';
import KartavyaImage from '../assets/Images/Kartavya image.jpg';
import IconPatchCheck from "../Components/Icons/IconPatchCheck";
import OrderFood from '../assets/Images/orderFood.png';
import Pickup from '../assets/Images/pickup.png';
import Enjoy from '../assets/Images/enjoy.png';
import Layout from "../Layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProducts } from "../Redux/Slices/ProductSlice";
import { Link } from "react-router-dom";

function Home() {
    const dispatch = useDispatch();
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const { productsData } = useSelector((state) => state.product);

    // IIT Mandi Local Restaurants Data
    const restaurants = [
        {
            id: 1,
            name: "Drongo Canteen",
            type: "Campus Canteen",
            timing: "8:00 AM - 10:00 PM",
            specialties: ["Patiz", "Burger", "Tea", "Coffee", "Fast Food"],
            image: PizzaImage,
            description: "Popular campus canteen known for quick bites and beverages"
        },
        {
            id: 2,
            name: "Monal Canteen",
            type: "Campus Canteen",
            timing: "7:00 AM - 11:00 PM",
            specialties: ["Parantha", "Egg Roll", "Paneer Roll", "Noodles", "Momos", "South Indian"],
            image: PizzaImage,
            description: "Diverse menu with North and South Indian options"
        },
        {
            id: 3,
            name: "Baba Ka Dhaba",
            type: "Local Restaurant",
            timing: "11:00 AM - 10:00 PM",
            specialties: ["Indian Veg Menu", "Chicken Items", "Dal-Rice", "Roti"],
            image: PizzaImage,
            description: "Authentic Indian cuisine with both vegetarian and non-vegetarian options"
        },
        {
            id: 4,
            name: "Himalayan Cafe",
            type: "Local Restaurant",
            timing: "9:00 AM - 9:00 PM",
            specialties: ["Indian Veg Menu", "Mountain Cuisine", "Organic Food"],
            image: PizzaImage,
            description: "Fresh vegetarian meals with a mountain touch"
        },
        {
            id: 5,
            name: "Bake O Mocha",
            type: "Cafe & Bakery",
            timing: "10:00 AM - 11:00 PM",
            specialties: ["Snacks", "Burger", "Beverages", "Pastry", "Sandwich", "Garlic Bread"],
            image: PizzaImage,
            description: "Modern cafe with snacks, beverages and baked goods"
        },
        {
            id: 6,
            name: "Pizza Bite",
            type: "Campus Restaurant",
            timing: "5:00 PM - 11:00 PM",
            specialties: ["Pizza", "Garlic Bread", "Italian Cuisine", "Fast Food"],
            image: PizzaImage,
            description: "Popular pizza joint near campus with fresh Italian-style pizzas"
        },
        {
            id: 7,
            name: "The Daig",
            type: "Campus Canteen",
            timing: "8:00 AM - 10:00 PM",
            specialties: ["Tandoori Roti", "Chaap", "Momos", "Chowmein", "North Indian"],
            image: PizzaImage,
            description: "Authentic North Indian food with tandoor specialties"
        },
        {
            id: 8,
            name: "Griffon Canteen",
            type: "Campus Canteen",
            timing: "7:00 AM - 11:00 PM",
            specialties: ["Samosa", "Patiz", "Chai", "Budget Meals", "Quick Snacks"],
            image: PizzaImage,
            description: "Budget-friendly canteen for students with affordable quick bites"
        },
        {
            id: 9,
            name: "Markandey",
            type: "Campus Restaurant",
            timing: "11:00 AM - 10:00 PM",
            specialties: ["Butter Chicken", "Biryani", "Premium Curries", "Main Course"],
            image: PizzaImage,
            description: "Premium dining with authentic Indian main course dishes"
        },
        {
            id: 10,
            name: "Tragopan Canteen",
            type: "Campus Canteen",
            timing: "8:00 AM - 9:00 PM",
            specialties: ["Jain Food", "Pure Veg", "No Onion/Garlic", "Healthy Options"],
            image: PizzaImage,
            description: "Specialized Jain and pure vegetarian food without onion/garlic"
        },
        {
            id: 11,
            name: "Bulbul Canteen",
            type: "Campus Canteen",
            timing: "7:00 AM - 10:00 PM",
            specialties: ["Paratha", "Rolls", "Dal-Rice", "Indian Breakfast"],
            image: PizzaImage,
            description: "Traditional Indian cuisine with fresh parathas and regional specialties"
        }
    ];

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    // Ensure productsData is an array and handle undefined/null cases
    const products = Array.isArray(productsData) ? productsData : [];

    return (
        <Layout>
        <div>
            {/* Hero section */}
            <section
                id="hero-section"
                className="relative flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 min-h-screen overflow-hidden animate-fade-in-up"
                style={{
                    background: `linear-gradient(135deg,
                        rgba(251, 191, 36, 0.8) 0%,
                        rgba(245, 158, 11, 0.7) 25%,
                        rgba(249, 115, 22, 0.6) 50%,
                        rgba(234, 88, 12, 0.5) 75%,
                        rgba(194, 65, 12, 0.4) 100%),
                        url('${IITMandiImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Background overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>

                {/* Content */}
                <div className="relative z-10 w-4/6 ml-4 text-center md:w-2/6 md:text-left">
                    <div className="glass-effect rounded-xl p-8 shadow-2xl">
                        <h1 className="pb-5 font-bold text-white hero-text text-shadow">
                            FoodHub IIT Mandi
                        </h1>
                        <p className="pb-6 text-white/95 drop-shadow-lg text-lg">
                            Order delicious food from your favorite campus canteens and local restaurants.
                            Fresh, fast delivery right to your hostel or academic block at IIT Mandi.
                        </p>
                        <button
                            onClick={() => {
                                document.getElementById('menu-section')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                            className="btn-primary flex items-center"
                        >
                            Order now
                            <IconArrowRight />
                        </button>
                    </div>
                </div>
            </section>

            {/* Restaurant Selection Section */}
            <section id="menu-section" className="py-12 bg-gradient-to-br from-gray-100 to-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 animate-fade-in-up">
                        <h2 className="section-title font-bold text-gray-900 mb-4">Campus Restaurants & Canteens</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choose from your favorite campus canteens and local restaurants around IIT Mandi
                        </p>
                    </div>

                    {!selectedRestaurant ? (
                        /* Restaurant Grid */
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {restaurants.map((restaurant, index) => (
                                <div key={restaurant.id} className="card-hover bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                                    <img
                                        src={restaurant.image}
                                        alt={restaurant.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                                            <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                                {restaurant.type}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3 flex-grow">{restaurant.description}</p>
                                        <div className="mb-4">
                                            <p className="text-sm text-gray-500 mb-2">
                                                <span className="font-medium">Timing:</span> {restaurant.timing}
                                            </p>
                                            <div className="flex flex-wrap gap-1 mb-4">
                                                {restaurant.specialties.slice(0, 3).map((specialty, index) => (
                                                    <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                                        {specialty}
                                                    </span>
                                                ))}
                                                {restaurant.specialties.length > 3 && (
                                                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                                        +{restaurant.specialties.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelectedRestaurant(restaurant)}
                                            className="btn-secondary w-full mt-auto"
                                        >
                                            View Menu
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* Selected Restaurant Menu */
                        <div className="animate-fade-in-up">
                            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{selectedRestaurant.name}</h3>
                                        <p className="text-gray-600">{selectedRestaurant.description}</p>
                                        <p className="text-sm text-gray-500 mt-1">
                                            <span className="font-medium">Timing:</span> {selectedRestaurant.timing}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedRestaurant(null)}
                                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors duration-300"
                                    >
                                        ← Back to Restaurants
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {selectedRestaurant.specialties.map((specialty, index) => (
                                        <span key={index} className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                                            {specialty}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Menu Items for Selected Restaurant */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.length === 0 ? (
                                    <div className="col-span-full text-center py-8">
                                        <div className="loading-spinner mx-auto mb-4"></div>
                                        <p className="text-gray-500">Loading delicious menu items...</p>
                                    </div>
                                ) : (
                                    products.map((item) => {
                                        if (!item || typeof item !== 'object' || !item._id) {
                                            return null;
                                        }
                                        return (
                                            item.inStock && (
                                                <div className="card-hover bg-white rounded-lg shadow-lg overflow-hidden" key={item._id}>
                                                    <img
                                                        src={item.productImage || '/vite.svg'}
                                                        alt={item.productName || 'Product'}
                                                        className="w-full h-48 object-cover"
                                                    />
                                                    <div className="p-4">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <h4 className="text-lg font-semibold text-gray-900">
                                                                {item.productName || 'Unnamed Product'}
                                                            </h4>
                                                            <span className="text-xl font-bold text-orange-500">
                                                                ₹{item.price || '0'}
                                                            </span>
                                                        </div>
                                                        <p className="text-gray-600 text-sm mb-3">
                                                            {item.description || 'No description'}
                                                        </p>
                                                        <div className="flex gap-2">
                                                            <Link
                                                                to={`/product/${item._id}`}
                                                                className="btn-primary flex-1 text-center"
                                                            >
                                                                View Details
                                                            </Link>
                                                            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors duration-300">
                                                                Quick Add
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )
                                    })
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>


            <section id="services-section" className="lg:pt-[50px] pb-10 lg:pb-20 bg-gradient-to-br from-gray-50 to-orange-50">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px] animate-fade-in-up">
                                <span className="mb-2 block text-lg font-semibold text-primary text-orange-500">
                                    Why Choose FoodHub IIT Mandi
                                </span>
                                <h2 className="section-title mb-3 font-bold text-dark">
                                    Campus Food Delivery Made Easy
                                </h2>
                                <p className="text-base text-body-color text-[#637381]">
                                    Supporting local campus canteens and nearby restaurants with reliable delivery to your hostel or academic block.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
        </Layout>
    );
}

export default Home;
