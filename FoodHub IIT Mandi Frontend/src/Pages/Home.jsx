import IconArrowRight from "../Components/Icons/ArrowRight";

import PizzaImage from '../assets/Images/pizza2.png';
import CookingImage from '../assets/Images/cooking1.png';
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
        }
    ];

    useEffect(() => {
        dispatch(getAllProducts()).catch(error => {
            console.error("Error dispatching getAllProducts:", error);
        });
    }, [dispatch]);

    // Ensure productsData is an array and handle undefined/null cases
    const products = Array.isArray(productsData) ? productsData : [];

    return (
        <Layout>
        <div>
            {/* Hero section */}
            <section
                id="hero-section"
                className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300"
            >
                <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
                    <div className="flex justify-center text-4xl md:justify-normal">
                        <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
                            FoodHub IIT Mandi {' '}
                        </h1>
                        <h1>
                            🏔️
                        </h1>
                    </div>

                    <p className="pb-4 text-[#6B7280]">
                        Order delicious food from your favorite campus canteens and local restaurants. 
                        Fresh, fast delivery right to your hostel or academic block at IIT Mandi.
                    </p>

                    <button 
                        onClick={() => {
                            document.getElementById('menu-section')?.scrollIntoView({ 
                                behavior: 'smooth' 
                            });
                        }}
                        className="flex items-center px-4 py-2 text-xl text-white transition duration-300 ease-in-out bg-orange-500 rounded-md hover:bg-orange-600"
                    >
                        Order now
                        <IconArrowRight />
                    </button>

                </div>

                <div>
                    <img
                        src={PizzaImage}
                        alt="food image"
                        width={550}
                        height={550}
                    />
                </div>

            </section>

            {/* Restaurant Selection Section - NOW FIRST */}
            <section id="menu-section" className="py-12 bg-gray-50">
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
                                <div key={restaurant.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <img 
                                        src={restaurant.image}
                                        alt={restaurant.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                                            <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                                {restaurant.type}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-3">{restaurant.description}</p>
                                        <div className="mb-3">
                                            <p className="text-sm text-gray-500 mb-1">
                                                <span className="font-medium">Timing:</span> {restaurant.timing}
                                            </p>
                                            <div className="flex flex-wrap gap-1">
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
                                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
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
                                        <p className="text-gray-500">Menu items will be loaded here...</p>
                                        <p className="text-sm text-gray-400 mt-2">
                                            (This will be connected to your backend products filtered by restaurant)
                                        </p>
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

            <section id="services-section" className="lg:pt-[50px] pb-10 lg:pb-20 bg-white">
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
                            <div className="wow fadeInUp group mb-12" data-wow-delay=".1s">
                                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary bg-orange-500">
                                    <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-orange-500 bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                                    <img src={CookingImage} alt="cooking" width={37} height={37} />
                                </div>
                                <h4 className="mb-3 text-xl font-bold text-dark ">
                                    Campus Delivery
                                </h4>
                                <p className="mb-8 text-body-color text-[#637381] lg:mb-9">
                                    Direct delivery to all hostels and academic blocks across IIT Mandi campus.
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
                                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary bg-orange-500">
                                    <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-orange-500 bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                                    <img src={CookingImage} alt="cooking" width={37} height={37} />
                                </div>
                                <h4 className="mb-3 text-xl font-bold text-dark ">
                                    Local Canteens
                                </h4>
                                <p className="mb-8 text-body-color text-[#637381] lg:mb-9">
                                    Supporting campus canteens and nearby local restaurants with authentic taste.
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="wow fadeInUp group mb-12" data-wow-delay=".2s">
                                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary bg-orange-500">
                                    <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-orange-500 bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                                    <img src={CookingImage} alt="cooking" width={37} height={37} />
                                </div>
                                <h4 className="mb-3 text-xl font-bold text-dark ">
                                    Student Friendly
                                </h4>
                                <p className="mb-8 text-body-color text-[#637381] lg:mb-9">
                                    Affordable pricing and payment options designed for student budgets and convenience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap mx-4">
                    <div className="w-full">
                        <div className="w-full p-1">
                            <div className="flex items-center h-full p-2 text-2xl rounded">
                                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                                <span className="font-bold title-font">Perfect taste</span>
                            </div>
                        </div>
                        <div className="w-full p-1">
                            <div className="flex items-center h-full p-2 text-2xl rounded">
                                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                                <span className="font-bold title-font">Prepared quickly</span>
                            </div>
                        </div>
                        <div className="w-full p-1">
                            <div className="flex items-center h-full p-2 text-2xl rounded">
                                <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                                <span className="font-bold title-font">Food hygeine guaranteed</span>
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
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about-section" className="py-16 bg-white">
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
                                <div className="w-32 h-32 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-white text-4xl font-bold">KS</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Kartavya Sandhu</h3>
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
                                    <p className="mb-1">📧 kartavya.sandhu@iitmandi.ac.in</p>
                                    <p>🏛️ Indian Institute of Technology Mandi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Campus Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-500 mb-2">5+</div>
                            <div className="text-gray-600">Partner Restaurants</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-500 mb-2">10+</div>
                            <div className="text-gray-600">Delivery Locations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-500 mb-2">1000+</div>
                            <div className="text-gray-600">Happy Students</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                            <div className="text-gray-600">Service Hours</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </Layout>
    );
}

export default Home;
