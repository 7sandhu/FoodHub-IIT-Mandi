import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Slices/AuthSlice";
import LoginPresentation from "./LoginPresentation";
import { useNavigate } from "react-router-dom";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    function handleUserInput(e) {
        const {name, value} = e.target;
        setLoginData({
         ...loginData,
         [name]: value
        })
     }

     async function handleFormSubmit(e) {
        e.preventDefault(); // prevent the form from reloading the page

        // Add validations for the form input
        if(!loginData.email || !loginData.password ) {
            toast.error("Missing values from the form")
            return;
        }

        // check email
        if(!loginData.email.includes('@') || !loginData.email.includes('.')) {
            toast.error("Invalid email address")
            return;
        }

        try {
            const apiResponse = await dispatch(login(loginData));
            
            // Check if the login was successful
            if(apiResponse.payload?.data?.success) {
                navigate('/');
            } else {
                toast.error("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error("Login failed. Please try again.");
        }
    }

    return (
        <LoginPresentation handleFormSubmit={handleFormSubmit} handleUserInput={handleUserInput} />
    )
}

export default Login;