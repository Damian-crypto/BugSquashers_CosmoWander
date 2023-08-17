import React from "react";
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate();

    const handleLoginButtonClick = () => {
        navigate('/home');
    }

    return (
        <div className="bg-white bg-hero-image h-screen bg-cover bg-no-repeat relative bg-center " >
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-full mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-3 lg:ml-3 h-full bg-overlay-color bg-opacity-60" ></div>
            </div>


            <div class=" absolute inset-x-0 top-0 z-50 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-15 h-auto mr-2" src="/images/logo.png" alt="logo" />

                </a>
                <div class="w-full bg-gradient-to-br from-bg-purple-light to-bg-purple-dark rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-orange-light md:text-2xl dark:text-orange-light">
                            Login
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-orange-light dark:text-orange-light">Your email</label>
                                <input type="email" name="email" id="email" class="bg-white-white border-l-2 border-orange-light text-gray-900 sm:text-sm  block w-full p-2.5 opacity-10" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-orange-light dark:text-orange-light">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-white-white opacity-10 border-l-2 border-orange-light border-opacity-100 text-gray-900 sm:text-sm  block w-full p-2.5 " required="" />
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50  " required="" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-orange-light dark:text-orange-light">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" class="text-sm text-orange-light font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <div className="mt-10 flex items-center justify-center">

                            <button class="mx-auto w-36 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                            onClick={handleLoginButtonClick}
                            >

                                <span class="mx-auto w-36 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                                    Login
                                </span>
                            </button>
                            </div>
                            <p class="text-sm font-light text-orange-light dark:text-orange-light">
                                Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Register Now</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )


}

export default Login