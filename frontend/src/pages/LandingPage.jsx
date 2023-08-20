import React from "react";

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Packages', href: '#' },
  { name: 'Destinations', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact Us', href: '#' },
]


function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate('/login');
  }
  const handleRegisterButtonClick = () => {
    navigate('/register');
  }

  return (

    <div className="bg-white bg-hero-image sm:h-auto sm:bg-cover sm:bg-local bg-center relative " >
      <div className="absolute inset-0 flex justify-center items-center h-full">
        <div className="w-full mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-3 lg:ml-3 h-full bg-overlay-color bg-opacity-60" ></div>
      </div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">CosmoWander</span>
              <img
                className="h-20 w-auto"
                src="/images/logo.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white drop-shadow-3xl hover:text-orange-50"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white drop-shadow-3xl">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white drop-shadow-3xl">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">CosmoWander</span>
                <img
                  className="h-20 w-auto"
                  src="/images/logo.png"
                  alt="logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* Hero Section */}

      <div className="relative isolate mx-5 sm:mx-auto md:mx-auto max-w-6xl pt-32 sm:pt-32 lg:pt-40 h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-10">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-200 drop-shadow-3xl  ">
            Journey Beyond the Stars: Explore Limitless Horizons With Us
          </h1>

          <p className="mt-16 text-lg sm:text-xl md:text-2xl lg:text-2xl leading-8 drop-shadow-3xl text-gray-200 ">
            “Step beyond the familiar, and embrace the extraordinary. 'CosmoWander' is an invitation to discover the uncharted,
            to be captivated by the cosmos, and to find your next adventure waiting in the infinite expanse”
          </p>
          <div className="mt-16 flex items-center justify-center gap-x-6">
            <button class="w-48 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 drop-shadow-3xl"
              onClick={handleRegisterButtonClick}>
              <span class="w-48 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0">
                Register Now
              </span>
            </button>
            <button class="w-48 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 drop-shadow-3xl"
              onClick={handleLoginButtonClick}
            >
              <span class="w-48 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0">
                Login
              </span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="h-90 w-auto"
            src="../src/assets/lp_images/lp2.png"
            alt="logo" />
        </div>

      </div>

      {/* App fetures */}

      <div className="relative flex inset-x-0 z-50 flex-col mx-10 mt-8 items-center justify-center gap-y-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 drop-shadow-3xl  ">
            Explore Our Galactic Advantages
          </h1>
        </div>

        <div class="grid mb-8 shadow-sm border-2 border-indigo-600 md:mb-12 md:grid-cols-2 max-w-6xl backdrop-blur-sm">

          <figure class="flex flex-col items-center justify-center p-8 text-center border-b md:rounded-t-none md:border-r bg-card-purple-light bg-opacity-30 border-gray-700">
            <blockquote class="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-400">
              <h3 class="text-lg font-semibold text-white">Seamless Booking - Easy and Intuitive Process</h3>
              <p class="my-4">Effortlessly secure your interplanetary travel with our user-friendly booking process. From choosing your destination to confirming your seat, we've streamlined every step for a stress-free journey.</p>
            </blockquote>
            <figcaption class="flex items-center justify-center space-x-3">
              <img class="w-12 h-12" src="../src/assets/lp_images/lp3.png" alt="profile picture" />
            </figcaption>
          </figure>

          <figure class="flex flex-col items-center justify-center p-8 text-center  border-b  bg-card-purple-light bg-opacity-30 border-gray-700">
            <blockquote class="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-400">
              <h3 class="text-lg font-semibold text-white">Detailed Destination Info - Explore Beyond the Stars</h3>
              <p class="my-4">Delve into the heart of your chosen destination. Get instant access to climate details, cultural insights, and must-visit attractions. Unearth the secrets of each planet before you even arrive.</p>
            </blockquote>
            <figcaption class="flex items-center justify-center space-x-3">
              <img class=" w-12 h-12" src="../src/assets/lp_images/lp4.png" alt="profile picture" />
            </figcaption>
          </figure>

          <figure class="flex flex-col items-center justify-center p-8 text-center  border-b  md:border-b-0 md:border-r bg-card-purple-light bg-opacity-30 border-gray-700">
            <blockquote class="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-400">
              <h3 class="text-lg font-semibold text-white">Special Life Events Beyond Earth - Make Moments Cosmic</h3>
              <p class="my-4">Elevate life's milestones to a cosmic level. Imagine celebrating weddings, anniversaries, or other special occasions on distant planets. Our 'Special Life Events Beyond Earth' service turns dreams into celestial realities.</p>
            </blockquote>
            <figcaption class="flex items-center justify-center space-x-3">
              <img class="w-12 h-12" src="../src/assets/lp_images/lp5.png" alt="profile picture" />
            </figcaption>
          </figure>

          <figure class="flex flex-col items-center justify-center p-8 text-center    bg-card-purple-light bg-opacity-30 border-gray-700">
            <blockquote class="max-w-2xl mx-auto mb-4 lg:mb-8 text-gray-400">
              <h3 class="text-lg font-semibold text-white">Personalized Recommendations - Tailored Adventures</h3>
              <p class="my-4">Unlock a universe of tailored travel suggestions. We learn your preferences and suggests interplanetary journeys that align with your interests, ensuring every adventure is uniquely yours.</p>
            </blockquote>
            <figcaption class="flex items-center justify-center space-x-3">
              <img class="w-12 h-12" src="../src/assets/lp_images/lp6.png" alt="profile picture" />
            </figcaption>
          </figure>

        </div>

      </div>


      {/* How It Works */}
      <div className="relative flex inset-x-0 z-50 flex-col mx-10 mt-8 items-center justify-center gap-y-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 drop-shadow-3xl  ">
            How It Works
          </h1>
        </div>

        <div className="items-center justify-center max-w-6xl border-2 border-indigo-600 bg-card-purple-light bg-opacity-30 backdrop-blur-sm">
          <ol class="relative border-l-2 mx-8 my-8 border-orange-600">

            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-orange-600 bg-orange-600"></div>
              <h3 class="text-lg font-semibold text-white">Search for a Travel Package </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Begin your voyage by searching for interplanetary travel options. Explore destinations, travel modes, departure dates, and more. Our intuitive search feature puts the cosmos at your fingertips.</p>
            </li>

            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-orange-600 bg-orange-600"></div>
              <h3 class="text-lg font-semibold text-white">Explore Destination Details </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Unveil the universe's secrets before you set foot on new worlds. Dive into detailed destination information, from climate insights to cultural nuances. Get a glimpse of the incredible experiences that await.</p>
            </li>

            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-orange-600 bg-orange-600"></div>
              <h3 class="text-lg font-semibold text-white">Book Tickets </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Secure your cosmic ticket effortlessly. Choose your departure, seating preferences, and any additional services you desire. Our streamlined booking process ensures a seamless reservation.</p>
            </li>

            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-orange-600 bg-orange-600"></div>
              <h3 class="text-lg font-semibold text-white">Manage Bookings </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Keep your cosmic explorations in order. Access your user profile to manage bookings, review itineraries, and make changes if needed. Stay in control of your interplanetary journeys.</p>
            </li>

            <li class="mb-10 ml-4">
              <div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-orange-600 bg-orange-600"></div>
              <h3 class="text-lg font-semibold text-white">Enjoy Your Journey </h3>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Buckle up for an extraordinary cosmic adventure! As you embark on your interplanetary journey, we wish you safe travels and unforgettable experiences. Your voyage beyond the stars begins now.</p>
            </li>


          </ol>
        </div>


      </div>

      <div className="relative flex inset-x-0 z-50 flex-col mx-10 mt-14 items-center justify-center gap-y-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 drop-shadow-3xl  ">
            Beyond the Stars: Voices of Our Explorers
          </h1>
        </div>

        <section class=" border-2 mb-16 border-indigo-600 bg-card-purple-light bg-opacity-30 backdrop-blur-sm">
          <div class="max-w-6xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure class="max-w-6xl mx-auto">
              <svg class="h-12 mx-auto mb-3  text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
              </svg>
              <blockquote>
                <p class="text-base font-normal text-gray-400">"Embarking on a journey beyond our planet was a dream I never thought would come true. Your app made it a reality! From the seamless booking process to the breathtaking views of distant planets, every moment was an adventure of a lifetime. The attention to detail and the warmth of the team made me feel like I was truly part of something extraordinary. Thank you for making me a cosmic explorer!"</p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <img class="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                <div class="flex items-center divide-x-2 divide-gray-700">
                  <div class="pr-3 font-medium text-white">Micheal Gough</div>
                  <div class="pl-3 text-sm font-light text-gray-400">CEO at Rootcode</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </div>

      {/* Footer */}

      <footer class="relative inset-x-0 top-0 z-50">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="#" class="flex items-center">
              <img
                className="h-20 w-auto"
                src="/images/logo.png"
                alt="logo"
              />
                
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">Quick Links</h2>
                <ul class="text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">About Us</a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold  uppercase text-white">Follow us</h2>
                <ul class="text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline ">Facebook</a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">Twitter</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
                <ul class="text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">CosmoWander™</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default LandingPage;