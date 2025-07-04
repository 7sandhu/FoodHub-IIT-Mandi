import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Components/Footer';
import FoodIcon from '../assets/Images/food.svg';
import CartIcon from '../assets/Images/cart.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logout } from '../Redux/Slices/AuthSlice';
import { useEffect } from 'react';
import { getCartDetails } from '../Redux/Slices/CartSlice';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const { cartsData } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // Function to handle navigation to home sections
    const navigateToHomeSection = (sectionId) => {
        if (location.pathname === '/') {
            // Already on home page, just scroll
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Navigate to home first, then scroll after a brief delay
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    async function handleLogout(e) {
        e.preventDefault();
        dispatch(logout());
        
    }

    async function fetchCartDetails() {
        const res = await dispatch(getCartDetails());
        // Handle unauthorized access gracefully - allow browsing without forced logout
        // if(res?.payload?.isUnauthorized) {
        //     dispatch(logout());
        // }
    }

    useEffect(() => {
        if(isLoggedIn) {
            fetchCartDetails();
        }
    }, [isLoggedIn]);

    return (
        <div>

            <nav className="flex items-center justify-around h-16 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 text-white font-mono border-none shadow-lg backdrop-blur-md sticky top-0 z-50 transition-all duration-300">

                <div className="flex items-center justify-center cursor-pointer hover-lift button-bounce"
                    onClick={() => navigate('/')}
                >
                    <p className="mr-3 font-bold text-lg gradient-text text-shadow">FoodHub IIT Mandi</p>
                    <img src={FoodIcon} alt="FoodHub logo" className="w-10 h-10 filter brightness-0 invert hover:rotate-12 transition-transform duration-300" />
                </div>

                <div className='hidden md:block'>
                    <ul className='flex gap-6'>

                        <li className='hover:text-yellow-200 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1 font-medium relative group'
                            onClick={() => navigateToHomeSection('menu-section')}
                        >
                            <p className="relative z-10">Menu</p>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-200 transition-all duration-300 group-hover:w-full"></span>
                        </li>

                        <li className='hover:text-yellow-200 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1 font-medium relative group'
                            onClick={() => navigateToHomeSection('services-section')}
                        >
                            <p className="relative z-10">Services</p>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-200 transition-all duration-300 group-hover:w-full"></span>
                        </li>

                        <li className='hover:text-yellow-200 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1 font-medium relative group'
                            onClick={() => navigateToHomeSection('about-section')}
                        >
                            <p className="relative z-10">About</p>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-200 transition-all duration-300 group-hover:w-full"></span>
                        </li>

                    </ul>
                </div>

                <div>
                    <ul className='flex gap-4 items-center'>
                        <li className='relative group'>
                            {isLoggedIn ? (
                                <button 
                                    onClick={handleLogout}
                                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium"
                                >
                                    Logout
                                </button>
                            ) : (
                                <Link 
                                    to={'/auth/login'}
                                    className="px-4 py-2 bg-white text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium border border-orange-200"
                                >
                                    Login
                                </Link>
                            )}
                        </li>

                        {isLoggedIn && (
                            <li>
                                <Link to={'/cart'} className="relative group">
                                    <div className='flex items-center hover:text-yellow-200 transition-all duration-300 transform hover:scale-110 cursor-pointer bg-white bg-opacity-20 rounded-lg px-3 py-2 hover:bg-opacity-30'>
                                        <img src={CartIcon} className='w-8 h-8 inline filter brightness-0 invert transition-transform duration-300 group-hover:rotate-12' />
                                        {cartsData?.items?.length > 0 && (
                                            <span className='ml-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-orange-800 px-2 py-1 rounded-full text-sm font-bold animate-pulse shadow-lg'>
                                                {cartsData?.items?.length}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>



            </nav>

                {children}

            <Footer />
        </div>  
    )
}

export default Layout;