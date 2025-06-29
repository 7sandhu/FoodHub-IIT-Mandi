import IconArrowRight from "../Components/Icons/ArrowRight";

import PizzaImage from '../assets/Images/pizza2.png';
import CookingImage from '../assets/Images/cooking1.png';
import IconPatchCheck from "../Components/Icons/IconPatchCheck";
import OrderFood from '../assets/Images/orderFood.png';
import Pickup from '../assets/Images/pickup.png';
import Enjoy from '../assets/Images/enjoy.png';
import Layout from "../Layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../Redux/Slices/ProductSlice";
import { Link } from "react-router-dom";

function Home() { 
    const dispatch = useDispatch();

    const { productsData } = useSelector((state) => state.product);

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
                id="about-section"
                className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300"
            >
                <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
                    <div className="flex justify-center text-4xl md:justify-normal">
                        <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
                            Enjoy the Slice {' '}
                        </h1>
                        <h1>
                            😋
                        </h1>
                    </div>

                    <p className="pb-4 text-[#6B7280]">
                        The Pizza App lets you order your favorite pizza from the comfort of your home. 
                        Enjoy the best pizza in town with just a few clicks.
                    </p>

                    <button className="flex items-center px-4 py-2 text-xl text-white transition duration-300 ease-in-out bg-orange-500 rounded-md hover:bg-orange-600">
                        Order now
                        <IconArrowRight />
                    </button>

                </div>

                <div>
                    <img
                        src={PizzaImage}
                        alt="pizza image"
                        width={550}
                        height={550}
                    />
                </div>

            </section>

            <section id="services-section" className="lg:pt-[50px] pb-10 lg:pb-20 bg-white">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                                <span className="mb-2 block text-lg font-semibold text-primary text-orange-500">
                                    Why Choose Us
                                </span>
                                <h2 className="mb-3 text-3xl font-bold text-dark  sm:text-4xl md:text-[40px] md:leading-[1.2]">
                                    Made by the original Authentic way
                                </h2>
                                <p className="text-base text-body-color text-[#637381]">
                                    We serve the best pizza in town, made with fresh ingredients and authentic recipes.
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
                                    Premium Quality
                                </h4>
                                <p className="mb-8 text-body-color text-[#637381] lg:mb-9">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
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
                                    Fastest Delivery
                                </h4>
                                <p className="mb-8 text-body-color text-[#637381] lg:mb-9">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
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
                                    Original Taste
                                </h4>
                                <p className="mb-8 text-body-color text-[#637381] lg:mb-9">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
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
                                            As easy as 1, 2, 3. Just select your favorite pizza and place your order.
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
                                            As soon as you get your order, enjoy the delicious pizza with your loved ones.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="menu-section" className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Delicious Menu</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choose from our amazing selection of freshly made pizzas, sides, and beverages
                        </p>
                    </div>
                    
                    <div className="mx-auto">
                        <div className="flex flex-wrap justify-center">
                            {products.length === 0 ? (
                                <div className="w-full text-center">
                                    <p className="text-gray-500">No products available or still loading...</p>
                                </div>
                            ) : (
                                products.map((item) => {
                                    // Ensure item is an object and has required properties
                                    if (!item || typeof item !== 'object' || !item._id) {
                                        return null;
                                    }

                                    return (
                                        item.inStock && (
                                            <div className="p-4 md:w-1/3" key={item._id}>
                                                <Link to={`/product/${item._id}`}>
                                                    <div className="overflow-hidden border rounded-lg border-opacity-60 hover:shadow-lg transition-shadow duration-300">
                                                        <img 
                                                            src={item.productImage || '/vite.svg'}
                                                            alt={item.productName || 'Product'}
                                                            className="object-cover object-center w-full lg:h-48 md:h-36"
                                                        />
                                                        <div className="p-6 border">
                                                            <h2 className="text-xs font-medium tracking-widest text-gray-400 title-font uppercase">
                                                                {item.category || 'Unknown'}
                                                            </h2>
                                                            <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                                                                {item.productName || 'Unnamed Product'}
                                                            </h1>
                                                            <p className="mb-4 text-base leading-relaxed text-gray-600">
                                                                {item.description || 'No description'}
                                                            </p>
                                                            <p className="text-xl font-bold text-orange-500">
                                                                ${item.price || '0'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    )
                                })
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </Layout>
    );
}

export default Home;
