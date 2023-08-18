import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'



function Register() {

    const [registerButton, showRegisterButton] = useState(false)
    const [fingerprintButton, showFingerprintButton] = useState(true)
    const navigate = useNavigate();

    const handleRegisterButtonClick = () => {
        navigate('/login');
    }
    const handleBackButtonClick = () => {
        navigate('/');
    }

    const handleCancelButtonClick = () => {
        showRegisterButton(false)
        showFingerprintButton(true)
    }

    const handleFingerprintClick = () => {
        showRegisterButton(true)
        showFingerprintButton(false)
    }

    return (
        <div className="bg-white bg-hero-image h-screen bg-cover bg-no-repeat relative bg-center " >
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-full mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-3 lg:ml-3 h-full bg-overlay-color bg-opacity-60" ></div>
            </div>


            <div class=" w-2/3 relative inset-x-0 top-0 z-50 flex flex-col items-center justify-center px-4 py-8 mx-auto md:h-screen lg:py-0 ">
                <div className="px-1 w-full">
                    <button className="-mx-3 block rounded-lg px-3 text-base font-semibold leading-7 text-gray-900 hover:text-button-purple-highlight" onClick={handleBackButtonClick} >
                        Back 
                    </button>
                </div>
                <a href="#" class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-15 h-auto mr-2" src="/images/logo.png" alt="logo" />

                </a>
                <div class="min-w-3/4 bg-gradient-to-br from-bg-purple-light to-bg-purple-dark rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 border-none">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
                        <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-orange-light md:text-2xl ">
                            Registration 
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <table class="w-full">
                                <tr class="grid gap-4 grid-cols-2">
                                    <td>
                                        <div>
                                            <label for="fname" class="block mb-2 text-sm font-medium text-orange-light ">First Name</label>
                                            <div class="border-l-2 border-orange-light w-full ">
                                                <input type="text" name="fname" id="fname" value="First Name" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none focus:textColor" required="" disabled />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <label for="lname" class="block mb-2 text-sm font-medium text-orange-light ">Last Name</label>
                                            <div class="border-l-2 border-orange-light w-full ">
                                                <input type="text" name="lname" id="lname" value="Last Name" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" disabled />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>
                                            <label for="location" class="block mb-2 text-sm font-medium text-orange-light ">Location</label>
                                            <div class="border-l-2 border-orange-light w-full ">
                                                <input type="text" name="location" id="location" value="Planet" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" disabled />
                                            </div>
                                        </div>
                                    </td>
                                </tr>

                            </table>


                            {fingerprintButton && (

                                <div className="mt-10 grid grid-rows-2 items-center justify-center">

                                    <div>
                                        <input type="text" name="location" id="location" placeholder="•   •   •   •   •" class="text-center block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" />
                                        <label for="location" class="text-center block mb-2 text-sm font-medium text-orange-light ">Code</label>
                                    </div>

                                    <button class="mx-auto w-36 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm "
                                        onClick={handleFingerprintClick}
                                    >

                                        <span class="mx-auto w-36 relative px-5 py-2.5 transition-all ease-in duration-75 flex items-center justify-center">
                                            <img class="w-auto h-auto mr-2" src="/images/fingerprint.png" alt="logo" />
                                        </span>
                                    </button>
                                </div>
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
                                Already have an account? <button class="font-medium text-primary-600 hover:underline dark:text-primary-500" onClick={handleRegisterButtonClick}>Login</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )


}

export default Register