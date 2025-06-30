import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Components/Footer';
import Pizzalogo from '../assets/Images/pizza1.png';
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
        console.log("cart details", res)
        if(res?.payload?.isUnauthorized) {
            console.log("unauthorized");
            dispatch(logout());
        }
    }

    useEffect(() => {
        console.log(typeof(isLoggedIn))
        if(isLoggedIn) {
            fetchCartDetails();
        }
    }, []);

    return (
        <div>

            <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md">

                <div className="flex items-center justify-center"
                    onClick={() => navigate('/')}
                >
                    <p>FoodHub IIT Mandi</p>
                    <img src={Pizzalogo} alt="FoodHub logo" />
                </div>

                <div className='hidden md:block'>
                    <ul className='flex gap-4'>

                        <li className='hover:text-[#FF9110] cursor-pointer'
                            onClick={() => navigateToHomeSection('menu-section')}
                        >
                            { ' ' }
                            <p>Menu {' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110] cursor-pointer'
                            onClick={() => navigateToHomeSection('services-section')}
                        >
                            { ' ' }
                            <p>Services {' '}</p>
                        </li>

                        <li className='hover:text-[#FF9110] cursor-pointer'
                            onClick={() => navigateToHomeSection('about-section')}
                        >
                            { ' ' }
                            <p>About {' '}</p>
                        </li>

                    </ul>
                </div>

                <div>
                    <ul className='flex gap-4'>
                        <li className='hover:text-[#FF9110]'>
                            {isLoggedIn ? (
                                <Link onClick={handleLogout}>Logout</Link>
                            ) : (
                                <Link to={'/auth/login'}>Login</Link>
                            )}
                        </li>

                        {isLoggedIn && (
                            <Link to={'/cart'}>
                                <li>
                                    <img src={CartIcon} className='w-8 h-8 inline' />
                                    {' '}
                                    <p className='text-black inline'>{cartsData?.items?.length}</p>
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