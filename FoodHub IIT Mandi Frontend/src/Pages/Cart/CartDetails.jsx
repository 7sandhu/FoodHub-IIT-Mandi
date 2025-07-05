import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartDetails, removeProductFromCart, clearCart } from "../../Redux/Slices/CartSlice";
import Layout from "../../Layouts/Layout";
import { Link } from "react-router-dom";
import ProductImage from '../../assets/Images/product image.png';

function CartDetails() {

    const [cartDetails, setCartDetails] = useState();
    const { cartsData } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    async function fetchCartDetails() {
        const response = await dispatch(getCartDetails());
        setCartDetails(response?.payload?.data?.data);
    }

    async function handleRemove(productId) {
        try {
            const response = await dispatch(removeProductFromCart(productId));
            if(response?.payload?.data?.success) {
                await dispatch(getCartDetails());
                fetchCartDetails();
            }
        } catch (error) {
            // Error handling for cart operations
        }
    }
    async function handleClearCart() {
        try {
            const response = await dispatch(clearCart());
            if(response?.payload?.data?.success) {
                await dispatch(getCartDetails());
                fetchCartDetails();
            }
        } catch (error) {
            // Error handling for cart operations
        }
    }

    useEffect(() => {
        fetchCartDetails();
    }, [cartsData?.items?.length]);


    return (
        <Layout>
        <section className="py-8 antialiased md:py-16 bg-gradient-to-br from-gray-50 to-orange-50 min-h-screen">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="text-center mb-8 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-900 gradient-text mb-4">
              Your Cart
            </h2>
            <p className="text-gray-600 text-lg">Review your selected items from FoodHub IIT Mandi</p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mt-4 rounded-full"></div>
            
            {/* Empty Cart Button - Only show if cart has items */}
            {cartDetails?.items?.length > 0 && (
              <button
                onClick={handleClearCart}
                className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Empty Cart
              </button>
            )}
          </div>
          {cartDetails?.items?.length > 0 ? (
            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div className="flex-none w-full mx-auto lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-6">
                  {cartDetails?.items.map((item, index) => (
                    <div 
                      key={item._id} 
                      className="p-6 text-gray-900 rounded-2xl shadow-lg bg-white border border-gray-100 card-hover animate-fadeInUp"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <img
                          className="hidden w-24 h-24 md:block rounded-xl object-contain shadow-md hover:scale-110 transition-transform duration-300 bg-gray-50"
                          src={ProductImage}
                          alt={item?.product?.productName}
                        />
                        <div className="flex-1 w-full min-w-0 md:order-2 md:max-w-md">
                          <p className="text-base font-semibold text-gray-900 hover:text-orange-600 transition-colors duration-300 mb-2">
                            <Link to={`/product/${item?.product?._id}`} className="hover:underline">
                              {`${item?.product?.productName}, ${item?.product?.description}, Category: ${item?.product?.category}`}
                            </Link>
                          </p>
                          <p className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-4">
                            ₹{item?.product?.price}
                          </p>

                          <div className="flex items-center gap-4">
                            {item._id && (
                              <button
                                type="button"
                                onClick={() => handleRemove(item?.product?._id)}
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-xl hover:bg-red-100 hover:text-red-800 transition-all duration-300 transform hover:scale-105 button-bounce shadow-md hover:shadow-lg"
                              >
                                <svg
                                  className="me-1.5 h-4 w-4"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18 17.94 6M18 18 6.06 6"
                                  />
                                </svg>
                                Remove
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 max-w-4xl mx-auto mt-6 space-y-6 lg:mt-0 lg:w-full">
                <div className="p-8 space-y-6 text-gray-800 border border-gray-200 rounded-2xl shadow-xl bg-white glass-effect hover-lift animate-fadeInRight">
                  <p className="text-2xl font-bold text-gray-900 gradient-text">
                    Order Summary
                  </p>

                  <div className="space-y-4">
                    <div className="space-y-3">
                      <dl className="space-y-3">
                        {
                            cartDetails?.items.map((item) => {
                                return (
                                    <div key={item?.product?._id} className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                                        <div>
                                            <dd className="text-base font-medium text-gray-900">
                                                {item?.product?.productName} x {item?.quantity}
                                            </dd>
                                            <p className="text-sm text-gray-500">₹{item?.product?.price} each</p>
                                        </div>
                                        <span className="font-bold text-orange-600">
                                            ₹{item?.product?.price * item?.quantity}
                                        </span>
                                    </div>
                                )
                            })
                        }
                      </dl>
                    </div>

                    <dl className="flex items-center justify-between gap-4 pt-4 border-t-2 border-gradient-to-r from-orange-200 to-yellow-200">
                      <dt className="text-xl font-bold text-gray-900">Total</dt>
                      <dd className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                        ₹
                        {cartDetails?.items.length === 0
                          ? ''
                          : cartDetails?.items.reduce((acc, item) => acc + item?.quantity*item?.product?.price , 0) }
                      </dd>
                    </dl>
                  </div>
                  {cartDetails?.items.length > 0 && (
                    <Link
                      to={'/order'}
                      className="flex justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 border border-orange-500 rounded-xl shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:shadow-xl transform hover:scale-105 button-bounce animate-glow"
                    >
                      Proceed to Checkout
                    </Link>
                  )}

                  <div className="flex items-center justify-center gap-2 pt-4 border-t border-gray-100">
                    <span className="text-sm font-normal text-gray-500">
                      or
                    </span>
                    <Link
                      to={'/'}
                      className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-800 underline hover:no-underline transition-all duration-300 hover:scale-105"
                    >
                      Continue Shopping
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 animate-fadeInUp">
              <div className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-xl hover-lift">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-full flex items-center justify-center animate-float">
                  <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 gradient-text">Your cart is empty</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">Start adding delicious items from our campus restaurants!</p>
                <Link 
                  to="/" 
                  className="inline-flex items-center px-8 py-4 text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold button-bounce"
                >
                  Browse Menu
                </Link>
              </div>
            </div>
          )}
        </div>
        </section>
        </Layout>
    )
}

export default CartDetails;