import React from "react";
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate();

    const handleLoginButtonClick = () => {
        navigate('/home');
    }
    const handleBackButtonClick = () => {
        navigate('/');
    }
    const handleRegisterButtonClick = () => {   
        navigate('/register');
    }


    return (
        <div className="bg-white bg-hero-image h-screen bg-cover bg-no-repeat relative bg-center sm:hidden" >
            <div className="absolute inset-0 flex justify-center items-center sm:hidden">
                <div className="w-full mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-3 lg:ml-3 h-full bg-overlay-color bg-opacity-60" ></div>
            </div>


            <div class=" w-2/3 relative inset-x-0 top-0 z-50 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="px-1 w-full">
                    <button className="-mx-3 block rounded-lg px-3 text-base font-semibold leading-7 text-gray-900 hover:text-button-purple-highlight" onClick={handleBackButtonClick} >
                        Back 
                    </button>
                </div>
                <a href="#" class="flex items-center mb-1 text-2xl font-semibold ">
                    <img class="w-15 h-auto mr-2" src="/images/logo.png" alt="logo" />

                </a>
                <div class="w-full bg-gradient-to-br from-bg-purple-light to-bg-purple-dark rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-orange-light md:text-2xl dark:text-orange-light">
                            Login
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div class="text-white-white text-center">
                                <p>“Step beyond the familiar, and embrace the extraordinary”</p>
                            </div>
                            <div class="text-white-white text-center">
                            <p><span class="font-bold" >CosmosWander</span> invites you to explore the unknown, marvel at the universe, and find your next adventure in the vast expanse</p>
                            </div>

                            <div className="mt-10 grid grid-rows-2 items-center justify-center">

                                <div>
                                    <input type="text" name="location" id="location" placeholder="•   •   •   •   •" class="text-center block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" />
                                    <label for="location" class="text-center block mb-2 text-sm font-medium text-orange-light ">Code</label>
                                </div>

                                <button class="mx-auto w-36 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm "
                                    onClick={handleLoginButtonClick}
                                >

                                    <span class="mx-auto w-36 relative px-5 py-2.5 transition-all ease-in duration-75 flex items-center justify-center">
                                        <img class="w-auto h-auto mr-2" src="/images/fingerprint.png" alt="logo" />
                                    </span>
                                </button>
                            </div>

                            <p class="text-sm font-light text-orange-light dark:text-orange-light">
                                Don’t have an account yet? <button class="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={handleRegisterButtonClick}>Register Now</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )


}

export default Login