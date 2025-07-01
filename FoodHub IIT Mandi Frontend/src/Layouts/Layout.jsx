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

            <nav className="flex items-center justify-around h-16 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-mono border-none shadow-lg">

                <div className="flex items-center justify-center cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    <p className="mr-3 font-bold text-lg">FoodHub IIT Mandi</p>
                    <img src={FoodIcon} alt="FoodHub logo" className="w-10 h-10 filter brightness-0 invert" />
                </div>

                <div className='hidden md:block'>
                    <ul className='flex gap-4'>

                        <li className='hover:text-yellow-200 cursor-pointer transition-colors duration-300'
                            onClick={() => navigateToHomeSection('menu-section')}
                        >
                            { ' ' }
                            <p>Menu {' '}</p>
                        </li>

                        <li className='hover:text-yellow-200 cursor-pointer transition-colors duration-300'
                            onClick={() => navigateToHomeSection('services-section')}
                        >
                            { ' ' }
                            <p>Services {' '}</p>
                        </li>

                        <li className='hover:text-yellow-200 cursor-pointer transition-colors duration-300'
                            onClick={() => navigateToHomeSection('about-section')}
                        >
                            { ' ' }
                            <p>About {' '}</p>
                        </li>

                    </ul>
                </div>

                <div>
                    <ul className='flex gap-4'>
                        <li className='hover:text-yellow-200 transition-colors duration-300'>
                            {isLoggedIn ? (
                                <Link onClick={handleLogout}>Logout</Link>
                            ) : (
                                <Link to={'/auth/login'}>Login</Link>
                            )}
                        </li>

                        {isLoggedIn && (
                            <Link to={'/cart'}>
                                <li className='flex items-center hover:text-yellow-200 transition-colors duration-300'>
                                    <img src={CartIcon} className='w-8 h-8 inline filter brightness-0 invert' />
                                    {' '}
                                    <p className='inline ml-1 bg-yellow-500 text-orange-800 px-2 py-1 rounded-full text-sm font-bold'>{cartsData?.items?.length}</p>
                                </li>
                            </Link>
                            
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