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
                className="relative flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 min-h-screen overflow-hidden"
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
                    <div className="bg-white/15 backdrop-blur-md rounded-xl p-8 shadow-2xl border border-white/30">
                        <h1 className="pb-5 font-bold text-white text-4xl drop-shadow-2xl">
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
                            className="flex items-center px-8 py-4 text-xl text-white transition duration-300 ease-in-out bg-orange-600/90 rounded-lg hover:bg-orange-700 shadow-2xl hover:shadow-3xl transform hover:scale-105 backdrop-blur-sm border border-orange-400/30"
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
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Restaurants & Canteens</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choose from your favorite campus canteens and local restaurants around IIT Mandi
                        </p>
                    </div>
                    
                    {!selectedRestaurant ? (
                        /* Restaurant Grid */
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {restaurants.map((restaurant) => (
                                <div key={restaurant.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
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
                                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300 mt-auto"
                                        >
                                            View Menu
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* Selected Restaurant Menu */
                        <div>
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
                                        <p className="text-gray-500">Loading delicious menu items...</p>
                                    </div>
                                ) : (
                                    products.map((item) => {
                                        if (!item || typeof item !== 'object' || !item._id) {
                                            return null;
                                        }

                                        return (
                                            item.inStock && (
                                                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" key={item._id}>
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
                                                                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded transition-colors duration-300"
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
                            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                                <span className="mb-2 block text-lg font-semibold text-primary text-orange-500">
                                    Why Choose FoodHub IIT Mandi
                                </span>
                                <h2 className="mb-3 text-3xl font-bold text-dark  sm:text-4xl md:text-[40px] md:leading-[1.2]">
                                    Campus Food Delivery Made Easy
                                </h2>
                                <p className="text-base text-body-color text-[#637381]">
                                    Supporting local campus canteens and nearby restaurants with reliable delivery to your hostel or academic block.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="wow fadeInUp group mb-12 text-center" data-wow-delay=".1s">
                                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary bg-orange-500 mx-auto">
                                    <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-orange-500 bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                                    <img src={CookingImage} alt="cooking" width={37} height={37} />
                                </div>
                                <h4 className="mb-3 text-xl font-bold text-dark">
                                    Campus Delivery
                                </h4>
                                <p className="mb-8 text-body-color text-[#637381] lg:mb-9">
                                    Direct delivery to all hostels and academic blocks across IIT Mandi campus.
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="wow fadeInUp group mb-12 text-center" data-wow-delay=".15s">
                                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary bg-orange-500 mx-auto">
                                    <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-orange-500 bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                                    <img src={CookingImage} alt="cooking" width={37} height={37} />
                                </div>
                                <h4 className="mb-3 text-xl font-bold text-dark">
                                    Local Canteens
                                </h4>
                                <p className="mb-8 text-body-color text-[#637381] lg:mb-9">
                                    Supporting campus canteens and nearby local restaurants with authentic taste.
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="wow fadeInUp group mb-12 text-center" data-wow-delay=".2s">
                                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary bg-orange-500 mx-auto">
                                    <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-orange-500 bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                                    <img src={CookingImage} alt="cooking" width={37} height={37} />
                                </div>
                                <h4 className="mb-3 text-xl font-bold text-dark">
                                    Student Friendly
                                </h4>
                                <p className="mb-8 text-body-color text-[#637381] lg:mb-9">
                                    Affordable pricing and payment options designed for student budgets and convenience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mx-4 mb-12">
                    <div className="max-w-md">
                        <div className="p-2 mb-4">
                            <div className="flex items-center justify-center h-full p-3 text-2xl rounded">
                                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                                <span className="font-bold title-font">Perfect taste</span>
                            </div>
                        </div>
                        <div className="p-2 mb-4">
                            <div className="flex items-center justify-center h-full p-3 text-2xl rounded">
                                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                                <span className="font-bold title-font">Prepared quickly</span>
                            </div>
                        </div>
                        <div className="p-2 mb-4">
                            <div className="flex items-center justify-center h-full p-3 text-2xl rounded">
                                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                                <span className="font-bold title-font">Food hygeine guaranteed</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-5 py-4 mx-auto">
                            <div className="flex justify-center py-4">
                                <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></div>
                            </div>

                            <div className="flex flex-wrap space-y-6 md:space-y-0">
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                        <img src={OrderFood} />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                                            Order Food
                                        </h2>
                                        <p className="text-base leading-relaxed">
                            As easy as 1, 2, 3. Just select your favorite food items and place your order.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                        <img src={Pickup} />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                                            Pickup Food
                                        </h2>
                                        <p className="text-base leading-relaxed">
                                            Pick up your order from the nearest store or get it delivered to your doorstep.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                                        <img src={Enjoy} />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                                            Enjoy Food
                                        </h2>
                                        <p className="text-base leading-relaxed">
                            As soon as you get your order, enjoy the delicious food with your loved ones.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
            </section>

            {/* About Us Section */}
            <section id="about-section" className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">About FoodHub IIT Mandi</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Connecting IIT Mandi students with their favorite campus canteens and local restaurants
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Content */}
                        <div>
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-600 mb-4">
                                    FoodHub was created to solve a real problem faced by students at IIT Mandi. Located in the beautiful 
                                    mountains of Himachal Pradesh, our campus often faced challenges with food delivery services due to 
                                    the remote location and unique infrastructure.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    We bridge the gap between hungry students and delicious food by partnering with campus canteens 
                                    and local restaurants, ensuring reliable delivery to hostels and academic blocks across the campus.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose FoodHub?</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <IconPatchCheck className="text-orange-500 w-5 h-5 mr-3" />
                                        <span className="text-gray-700">Campus-specific delivery locations</span>
                                    </div>
                                    <div className="flex items-center">
                                        <IconPatchCheck className="text-orange-500 w-5 h-5 mr-3" />
                                        <span className="text-gray-700">Supporting local canteens and businesses</span>
                                    </div>
                                    <div className="flex items-center">
                                        <IconPatchCheck className="text-orange-500 w-5 h-5 mr-3" />
                                        <span className="text-gray-700">Student-friendly pricing and payment options</span>
                                    </div>
                                    <div className="flex items-center">
                                        <IconPatchCheck className="text-orange-500 w-5 h-5 mr-3" />
                                        <span className="text-gray-700">Quick delivery to hostels and academic blocks</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Developer Info */}
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8">
                            <div className="text-center">
                                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-orange-200 shadow-lg">
                                    <img 
                                        src={KartavyaImage} 
                                        alt="Kartavya Sandhu" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Kartavya Sandhu</h3>
                                <p className="text-orange-600 font-medium mb-4">Developer & Founder</p>
                                <p className="text-gray-600 mb-4">
                                    B.Tech Student at IIT Mandi, passionate about solving real-world problems through technology.
                                </p>
                                <p className="text-gray-600 mb-6">
                                    "I built FoodHub to address the unique food delivery challenges we face as students in 
                                    the mountains. Every line of code was written with our campus community in mind."
                                </p>
                                
                                <div className="bg-white rounded-lg p-4 mb-4">
                                    <h4 className="font-semibold text-gray-900 mb-2">Tech Stack Used:</h4>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">React.js</span>
                                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Redux</span>
                                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Node.js</span>
                                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Express.js</span>
                                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">MongoDB</span>
                                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Tailwind CSS</span>
                                    </div>
                                </div>
                                
                                <div className="text-sm text-gray-500">
                                    <p className="mb-1">📧 kartavyasandhu1@gmail.com</p>
                                    <p>🏛️ Indian Institute of Technology Mandi</p>
                                </div>
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
