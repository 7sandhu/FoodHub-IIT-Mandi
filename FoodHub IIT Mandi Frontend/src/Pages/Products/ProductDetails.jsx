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
            const response = await dispatch(addProductToCart(productId));
            if(response?.payload?.data?.success) {
                setIsInCart(true);
                dispatch(getCartDetails());
            }
        } catch (error) {
            // Error handling for cart operations
        }
    }

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