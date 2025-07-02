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
        <section className="overflow-hidden text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap mx-auto lg:w-4/5">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto"
                src={productDetails?.productImage}
              />
              <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-20 xl:py-28 lg:mt-0">
                <h2 className="text-sm tracking-widest text-gray-500 title-font">
                  {productDetails?.category}
                </h2>
                <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font">
                  {productDetails?.productName}
                </h1>
                <p className="leading-relaxed mb-6">{productDetails?.description}</p>
  
                <div className="flex items-center pt-5">
                  <span className="text-2xl font-medium text-gray-900 title-font">
                    ₹{productDetails?.price}
                  </span>
                  {isInCart ? (
                    <button
                      className="flex px-6 py-2 ml-auto text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600"
                      onClick={() => handleRemove(productId)}
                    >
                      Remove from cart
                    </button>
                  ) : (
                    <button
                      className="flex px-6 py-2 ml-auto text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600"
                      onClick={handleCart}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    
    )
}


export default ProductDetails;