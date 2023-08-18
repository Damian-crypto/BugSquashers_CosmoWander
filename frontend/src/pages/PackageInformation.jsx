import React, { useState } from "react";
import Navbar from "../components/Navbar";

function PackageInformation() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeRadio, setActiveRadio] = useState(0);
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === 4 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? 4 : prev - 1));
    };

    
        const [selectedRadio, setSelectedRadio] = useState('default-radio-1');

        const handleRadioChange = (event) => {
            setSelectedRadio(event.target.id);
        };
   

    return (
        <div className="bg-gradient-to-br from-bg-purple-light to-bg-purple-dark sm:bg-white sm:bg-hero-image h-auto bg-cover bg-no-repeat relative bg-center " >
            <div className="absolute inset-0 flex justify-center items-center invisible sm:visible">
                <div className="w-full mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-3 lg:ml-3 h-full bg-overlay-color bg-opacity-60" ></div>
            </div>
            <Navbar />

            <div class=" w-screen sm:w-2/3 relative inset-x-0 top-0 z-10 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">


                <div id="indicators-carousel" class="sm:top-0 relative z-20 w-full" data-carousel="static">
                    {/* <!-- Carousel wrapper --> */}
                    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {/* <!-- Item 1 --> */}
                        <div class={currentSlide === 0 ? "duration-700 ease-in-out" : "hidden"} data-carousel-itemScope="active">
                            <img src="../src/assets/package_images/6.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div class={currentSlide === 1 ? "duration-700 ease-in-out" : "hidden"} data-carousel-item>
                            <img src="../src/assets/package_images/2.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        {/* <!-- Item 3 --> */}
                        <div class={currentSlide === 2 ? "duration-700 ease-in-out" : "hidden"} data-carousel-item>
                            <img src="../src/assets/package_images/3.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        {/* <!-- Item 4 --> */}
                        <div class={currentSlide === 3 ? "duration-700 ease-in-out" : "hidden"} data-carousel-item>
                            <img src="../src/assets/package_images/4.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                        {/* <!-- Item 5 --> */}
                        <div class={currentSlide === 4 ? "duration-700 ease-in-out" : "hidden"} data-carousel-item>
                            <img src="../src/assets/package_images/5.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                    </div>
                    {/* <!-- Slider indicators --> */}
                    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" class={currentSlide === 0 ? "bg-button-purple-highlight w-3 h-3 rounded-full" : "bg-white w-3 h-3 rounded-full"} aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0" onClick={() => setCurrentSlide(0)}></button>
                        <button type="button" class={currentSlide === 1 ? "bg-button-purple-highlight w-3 h-3 rounded-full" : "bg-white w-3 h-3 rounded-full"} aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1" onClick={() => setCurrentSlide(1)}></button>
                        <button type="button" class={currentSlide === 2 ? "bg-button-purple-highlight w-3 h-3 rounded-full" : "bg-white w-3 h-3 rounded-full"} aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2" onClick={() => setCurrentSlide(2)}></button>
                        <button type="button" class={currentSlide === 3 ? "bg-button-purple-highlight w-3 h-3 rounded-full" : "bg-white w-3 h-3 rounded-full"} aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3" onClick={() => setCurrentSlide(3)}></button>
                        <button type="button" class={currentSlide === 4 ? "bg-button-purple-highlight w-3 h-3 rounded-full" : "bg-white w-3 h-3 rounded-full"} aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4" onClick={() => setCurrentSlide(4)}></button>
                    </div>
                    {/* <!-- Slider controls --> */}
                    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={prevSlide}>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent  group-hover:bg-transparent  group-focus:ring-4 group-focus:ring-transparent  group-focus:outline-none">
                            <svg class="w-4 h-4 text-white hover:text-button-purple-highlight focus:text-button-purple-highlight " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={nextSlide}>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent  group-hover:bg-transparent  group-focus:ring-4 group-focus:ring-transparent  group-focus:outline-none">
                            <svg class="w-4 h-4 text-white hover:text-button-purple-highlight focus:text-button-purple-highlight" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>


                <div class="w-full bg-transparent sm:bg-gradient-to-br from-bg-purple-light to-bg-purple-dark sm:rounded-lg sm:shadow border-none sm:mt-6 sm:p-5 ">
                    {/* <div class=" space-y-4 md:space-y-6 sm:p-8"> */}
                    <h1 class="mb-14 sm:mb-0 text-2xl font-bold text-left leading-tight tracking-tight text-orange-light md:text-2xl dark:text-orange-light">
                        Package Name
                    </h1>
                    <div class="flex flex-col sm:flex-row sm:space-x-4 justify-between text-text-beige">
                        <p>$90 pp (Regular)</p>
                        <p>2160-08-2815:30</p>
                    </div>
                    <form class="space-y-4 md:space-y-6 mb-4" action="#">

                        {/* <div className="mt-10 grid grid-rows-2 items-center justify-center"> */}

                        <table class="w-full ">
                            <tr class="grid gap-4 grid-cols-2">
                                <td>
                                    <div>
                                        <label for="fname" class="block mb-2 text-sm font-medium text-orange-light ">Mode</label>
                                        <div class="border-l-2 border-orange-light w-full ">
                                            <input type="text" name="fname" id="fname" value="First Name" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none focus:textColor" required="" disabled />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <label for="lname" class="block mb-2 text-sm font-medium text-orange-light ">Remaining Seats</label>
                                        <div class="border-l-2 border-orange-light w-full ">
                                            <input type="text" name="lname" id="lname" value="Last Name" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" disabled />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="grid gap-4 grid-cols-2">
                                <td>
                                    <div>
                                        <label for="location" class="block mb-2 text-sm font-medium text-orange-light ">Starting Point</label>
                                        <div class="border-l-2 border-orange-light w-full ">
                                            <input type="text" name="location" id="location" value="Planet" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" disabled />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <label for="location" class="block mb-2 text-sm font-medium text-orange-light ">Destination</label>
                                        <div class="border-l-2 border-orange-light w-full ">
                                            <input type="text" name="location" id="location" value="Planet" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" disabled />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <label for="location" class="block mb-2 text-sm font-medium text-orange-light ">Your Station</label>
                                        <div class="border-l-2 border-orange-light w-full ">
                                            <input type="text" name="location" id="location" value="Planet" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" disabled />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <label for="location" class="block mb-2 text-sm font-medium text-orange-light ">Special Features</label>
                                        <div class="border-l-2 border-orange-light w-full ">
                                            <div class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none">
                                                <ul class="list-disc ml-5">
                                                    <li>
                                                        Panoramic Windows : Enjoy stunning views while exploring other planets
                                                    </li>
                                                    <li>
                                                        VR Suites: Immerse yourself in virtual worlds during the journey
                                                    </li>
                                                    <li>
                                                        Customized Cabins

                                                        <div class="grid grid-rows-4">
                                                            <div className="grid grid-rows items-center mb-4">
                                                                <div className="ml-2 flex items-center">
                                                                    <input
                                                                        id="default-radio-1"
                                                                        type="radio"
                                                                        value=""
                                                                        name="radio-group"
                                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                                        checked={selectedRadio === 'default-radio-1'}
                                                                        onChange={handleRadioChange}
                                                                    />
                                                                    <label
                                                                        htmlFor="default-radio-1"
                                                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                    >
                                                                        Default radio
                                                                    </label>
                                                                </div>
                                                                <div className="ml-8 text-sm">
                                                                    {selectedRadio === 'default-radio-1' && (
                                                                        <p className="text-xs font-normal text-gray-500 dark:text-gray-300">
                                                                            description for the first radio
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className="grid grid-rows-2 items-center mb-4">
                                                                <div className="ml-2 flex items-center">
                                                                    <input
                                                                        id="default-radio-2"
                                                                        type="radio"
                                                                        value=""
                                                                        name="radio-group"
                                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                                        checked={selectedRadio === 'default-radio-2'}
                                                                        onChange={handleRadioChange}
                                                                    />
                                                                    <label
                                                                        htmlFor="default-radio-2"
                                                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                    >
                                                                        Default radio
                                                                    </label>
                                                                </div>
                                                                <div className="ml-8 text-sm">
                                                                    {selectedRadio === 'default-radio-2' && (
                                                                        <p className="text-xs font-normal text-gray-500 dark:text-gray-300">
                                                                            description for the second radio
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            {/* <div class="grid grid-rows items-center mb-4">
                                                                <div class="ml-2 flex items-center">
                                                                    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={handleRadioClick(0)} />
                                                                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>

                                                                </div>
                                                                <div class={activeRadio === 0 ? "ml-8 text-sm" : "invisible"}>
                                                                    <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">For orders shipped from $25 in books or $29 in other categories</p>
                                                                </div>
                                                            </div>
                                                            <div class="grid grid-rows-2 items-center mb-4">
                                                                <div class="ml-2 flex items-center">
                                                                    <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={handleRadioClick(1)} />
                                                                    <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>

                                                                </div>
                                                                <div class={activeRadio === 1 ? "ml-8 text-sm" : "invisible"}>
                                                                    <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">For orders shipped from $25 in books or $29 in other categories</p>
                                                                </div>
                                                            </div>
                                                            <div class="grid grid-rows-2 items-center mb-4">
                                                                <div class="ml-2 flex items-center">
                                                                    <input id="default-radio-3" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={handleRadioClick(2)} />
                                                                    <label for="default-radio-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>

                                                                </div>
                                                                <div class={activeRadio === 2 ? "ml-8 text-sm" : "invisible"}>
                                                                    <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">For orders shipped from $25 in books or $29 in other categories</p>
                                                                </div>
                                                            </div>
                                                            <div class="grid grid-rows-2 items-center mb-4">
                                                                <div class="ml-2 flex items-center">
                                                                    <input id="default-radio-4" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={handleRadioClick(3)} />
                                                                    <label for="default-radio-4" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>

                                                                </div>
                                                                <div class={activeRadio === 3 ? "ml-8 text-sm" : "invisible"}>
                                                                    <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">For orders shipped from $25 in books or $29 in other categories</p>
                                                                </div>
                                                            </div> */}

                                                        </div>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                        </table>


                        {/* </div> */}

                    </form>
                    <button class="mx-4  w-36 inline-flex items-center justify-center float-right p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"

                    >
                        <span class="mx-auto w-36 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0">
                            Book Now
                        </span>
                    </button>
                    {/* </div> */}
                </div>
            </div >
        </div >
    );
}

export default PackageInformation;

