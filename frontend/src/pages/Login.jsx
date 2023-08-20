import React from "react";
import { useNavigate} from 'react-router-dom';
import FingerprintButton from "../components/FingerprintButton";
import { useState } from 'react'    

function Login() {
    const navigate = useNavigate();
    const [fingerprintCode, setFingerprintCode] = useState("")
    const [alert, setAlert] = useState("")

    const handleLoginButtonClick = async () => {
        if (fingerprintCode === "4456") {
            navigate('/home');
        } else {
            setAlert("User Not Found!");
            setFingerprintCode("");
            navigate('/login');

        }
    }
    const handleBackButtonClick = () => {
        navigate('/');
    }
    const handleRegisterButtonClick = () => {
        navigate('/register');
    }


    return (
        <div className="bg-gradient-to-br from-bg-purple-light to-bg-purple-dark sm:bg-white sm:bg-hero-image h-screen bg-cover bg-no-repeat relative bg-center " >
            <div className="absolute inset-0 flex justify-center items-center invisible sm:visible">
                <div className="w-full mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-3 lg:ml-3 h-full bg-overlay-color bg-opacity-60" ></div>
            </div>


            <div class=" w-screen sm:w-2/3 relative inset-x-0 top-0 z-50 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
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
                <a href="#" class="flex items-center mb-1 text-2xl font-semibold ">
                    <img class=" w-20 h-14 mr-2" src="/images/logo.png" alt="logo" />
                </a>
                <div class="w-full bg-transparent sm:bg-gradient-to-br from-bg-purple-light to-bg-purple-dark sm:shadow border-none md:mt-0 sm:max-w-md xl:p-0 ">
                    <div class=" space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="mb-14 sm:mb-0 text-2xl font-bold text-center leading-tight tracking-tight text-orange-light md:text-2xl dark:text-orange-light">
                            Login
                        </h1>
                        <form class="text-xs sm:text-base space-y-4 md:space-y-6" action="#">
                            <div class="text-white-white text-center">
                                <p>“Step beyond the familiar, and embrace the extraordinary”</p>
                            </div>
                            <div class="text-white-white text-center">
                                <p><span class="font-bold" >CosmosWander</span> invites you to explore the unknown, marvel at the universe, and find your next adventure in the vast expanse</p>
                            </div>

                            <FingerprintButton
                                handleFingerprintButtonClick={handleLoginButtonClick}
                                fingerprintCode={fingerprintCode}
                                setFingerprintCode={setFingerprintCode}
                            />
                            <span class="flex justify-center text-center text-sm font-light text-red-600" >{alert}</span>
                            <p class="text-center text-sm font-light text-orange-light dark:text-orange-light">
                                Don’t have an account yet? <button class="font-bold text-primary-600 hover:underline dark:text-primary-500" onClick={handleRegisterButtonClick}>Register Now</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )


}

export default Login