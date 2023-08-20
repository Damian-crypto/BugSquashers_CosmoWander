import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import FingerprintButton from "../components/FingerprintButton";
import axios from "axios";

function Register() {

    const [registerButton, showRegisterButton] = useState(false)
    const [fingerprintButton, showFingerprintButton] = useState(true)
    const [fingerprintCode, setFingerprintCode] = useState("")
    const [responseData, setResponseData] = useState({})
    const navigate = useNavigate();

    const userData1 = {
        firstName: "Amani",
        lastName: "Vidanage",
        location: "Earth"
    }

    const userData2 = {
        firstName: "Pulara",
        lastName: "Weerasinghe",
        location: "Mars"
    }

    const noData = { 
        firstName: "",
        lastName: "",
        location: "" 
    }

    const handleRegisterButtonClick = async () => {
        // try {
        //     const response = await axios.post(`http://localhost:8080/api/v1/auth/register`, { 'sid': fingerprintCode });
        //     localStorage.setItem('token', response.data.jwtToken);
        //     // showRegisterButton(true)
        //     // showFingerprintButton(false)
        //     navigate('/login');
        // } catch (error) {
        //     console.error(error);
        // }
        navigate('/login')
    }
    const handleBackButtonClick = () => {
        navigate('/');
    }

    const handleCancelButtonClick = () => {
        showRegisterButton(false)
        showFingerprintButton(true)
        setResponseData(noData)
        setFingerprintCode("")
    }

    const handleFingerprintClick = async () => {
        const fingerprint = fingerprintCode;
        // try {
        //     const response = await axios.get(`http://localhost:8080/api/v1/universe/${fingerprint}`);
        //     setResponseData(response.data);
        //     showRegisterButton(true)
        //     showFingerprintButton(false)
        // } catch (error) {
        //     console.error(error);
        // }
        if(fingerprint === '4456'){
            setResponseData(userData1)
        }else{
            setResponseData(userData2)
        }
        showRegisterButton(true)
        showFingerprintButton(false)
        
        
    };

    return (
        <div className="bg-gradient-to-br from-bg-purple-light to-bg-purple-dark sm:bg-white sm:bg-hero-image sm:h-max bg-cover bg-no-repeat relative bg-center " >
            <div className="absolute inset-0 flex justify-center items-center invisible sm:visible">
                <div className="w-full mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-3 lg:ml-3 h-full bg-overlay-color bg-opacity-60" ></div>
            </div>


            <div class=" w-screen sm:w-2/3 relative z-50 flex flex-col items-center 2xl:top-1/5 px-4 py-8 mx-auto h-screen lg:py-0 ">
                <div className="px-1 w-full inline-flex">
                    <button className="invisible sm:visible -mx-3 block rounded-lg px-3 text-base font-semibold leading-7 text-gray-900 hover:text-button-purple-highlight" onClick={handleBackButtonClick} >
                        Back
                    </button>
                    <button className="visible sm:invisible -mx-3 block rounded-lg px-3 text-base font-semibold leading-7 text-button-purple-highlight" onClick={handleBackButtonClick} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>

                    </button>
                </div>
                <a href="#" class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-32 xl:w-36 lg:w-32 md:w-28  sm:w-24 h-auto mr-2" src="/images/logo.png" alt="logo" />

                </a>
                <div class="min-w-3/4 bg-transparent sm:bg-gradient-to-br from-bg-purple-light to-bg-purple-dark sm:shadow  md:mt-0 sm:max-w-md xl:p-0 border-none mb-5">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
                        <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-orange-light md:text-2xl ">
                            Registration
                        </h1>
                        <form class="space-y-4 md:space-y-6 sm:text-sm text-xs" action="#">
                            <table class="w-full">
                                <tr class="grid gap-4 grid-cols-2">
                                    <td>
                                        <div>
                                            <label for="fname" class="block mb-2 text-sm font-medium text-orange-light ">First Name</label>
                                            <div class="border-l-2 border-orange-light w-full ">
                                                <input type="text" name="fname" id="fname" placeholder="First Name" value={responseData['firstName']} class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none focus:textColor" required="" disabled />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <label for="lname" class="block mb-2 text-sm font-medium text-orange-light ">Last Name</label>
                                            <div class="border-l-2 border-orange-light w-full ">
                                                <input type="text" name="lname" id="lname" placeholder="Last Name" value={responseData['lastName']} class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" disabled />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>
                                            <label for="location" class="block mb-2 text-sm font-medium text-orange-light ">Location</label>
                                            <div class="border-l-2 border-orange-light w-full ">
                                                <input type="text" name="location" id="location" placeholder="Planet" value={responseData['location']} class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" disabled />
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                            </table>


                            {fingerprintButton && (

                                <FingerprintButton
                                    handleFingerprintButtonClick={handleFingerprintClick}
                                    fingerprintCode={fingerprintCode}
                                    setFingerprintCode={setFingerprintCode}
                                />
                            )}

                            {registerButton && (

                                <div className="mt-10 flex items-center justify-center">

                                    <button class="mx-4 w-36 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                                        onClick={handleCancelButtonClick}
                                    >

                                        <span class="mx-auto w-36 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0">
                                            Cancel
                                        </span>
                                    </button>
                                    <button class="mx-4  w-36 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                                        onClick={handleRegisterButtonClick}
                                    >

                                        <span class="mx-auto w-36 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0">
                                            Register
                                        </span>
                                    </button>
                                </div>
                            )}


                            <p class="text-center text-sm font-light text-orange-light ">
                                Already have an account? <button class=" text-primary-600 hover:underline dark:text-primary-500 font-bold" onClick={handleRegisterButtonClick}>Login</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )


}

export default Register