import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getproductDetails } from "../../Redux/Slices/ProductSlice";
import Layout from "../../Layouts/Layout";
import { addProductToCart, getCartDetails, removeProductFromCart } from "../../Redux/Slices/CartSlice";

function ProductDetails() {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [productDetails, setProductDetails] = useState({});
    const [isInCart, setIsInCart] = useState(false); // Check if product is in cart
    const [quantity, setQuantity] = useState(1); // Quantity selector
    // 

    async function fetchProductDetails() {
        try {
            const details = await dispatch(getproductDetails(productId));
            if (details?.payload?.data?.data) {
                setProductDetails(details.payload.data.data);
            } else {
                setProductDetails({});
            }
        } catch (error) {
            setProductDetails({});
        }
    }

    async function handleCart() {
        try {
            // Add the product to cart multiple times based on quantity
            for (let i = 0; i < quantity; i++) {
                await dispatch(addProductToCart(productId));
            }
            setIsInCart(true);
            dispatch(getCartDetails());
        } catch (error) {
            // Error handling for cart operations
        }
    }

    // Quantity control functions
    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value >= 1) {
            setQuantity(value);
        }
    };

    async function handleRemove() {
        try {
            const response = await dispatch(removeProductFromCart(productId));
            if(response?.payload?.data?.success) {
                setIsInCart(false);
                dispatch(getCartDetails());
            }
        } catch (error) {
            // Error handling for cart operations
        }
    }

    useEffect(() => {
        fetchProductDetails();
    }, [productId]);

    return (
        <Layout>
        <section className="overflow-hidden text-gray-600 body-font bg-gradient-to-br from-gray-50 to-orange-50 min-h-screen">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap mx-auto lg:w-4/5 animate-fadeInUp">
              <div className="w-full lg:w-1/2 animate-fadeInLeft">
                <img
                  alt="Product"
                  className="object-cover object-center w-full h-64 lg:h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 card-hover"
                  src={productDetails?.productImage}
                />
              </div>
              <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-20 xl:py-28 lg:mt-0 animate-fadeInRight">
                <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift">
                  <h2 className="text-sm tracking-widest text-orange-500 font-semibold mb-2 uppercase">
                    {productDetails?.category}
                  </h2>
                  <h1 className="mb-4 text-3xl font-bold text-gray-900 gradient-text">
                    {productDetails?.productName}
                  </h1>
                  <p className="leading-relaxed mb-6 text-gray-600 text-lg">
                    {productDetails?.description}
                  </p>

                  {/* Quantity Selector */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Quantity
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={decreaseQuantity}
                        className="w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200 hover:scale-105 active:scale-95"
                        disabled={quantity <= 1}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-16 h-10 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-semibold"
                      />
                      
                      <button
                        onClick={increaseQuantity}
                        className="w-10 h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200 hover:scale-105 active:scale-95"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                      
                      <span className="ml-2 text-sm text-gray-600">
                        Total: ₹{(productDetails?.price * quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
    
                  <div className="flex items-center pt-5 border-t border-gray-200">
                    <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                      ₹{productDetails?.price}
                    </span>
                    {isInCart ? (
                      <button
                        className="flex px-8 py-3 ml-auto text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 border-0 rounded-xl focus:outline-none transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold button-bounce"
                        onClick={() => handleRemove(productId)}
                      >
                        Remove from cart
                      </button>
                    ) : (
                      <button
                        className="flex px-8 py-3 ml-auto text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 border-0 rounded-xl focus:outline-none transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold button-bounce animate-glow"
                        onClick={handleCart}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    
    )
}


export default ProductDetails;