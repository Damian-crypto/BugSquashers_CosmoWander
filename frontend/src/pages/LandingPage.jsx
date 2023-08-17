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

    <div className="bg-white bg-hero-image h-screen bg-cover bg-repeat-y relative bg-center " >
      <div className="absolute inset-0 flex justify-center items-center h-screen">
        <div className="w-full mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-3 lg:ml-3 h-screen bg-overlay-color bg-opacity-60" ></div>
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
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-orange-50"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
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

      
        
        <div className="relative isolate mx-auto max-w-2xl py-32 sm:py-48 lg:py-48 h-screen">
         
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-6xl">
              Journey Beyond the Stars: Explore Limitless Horizons With Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              “Step beyond the familiar, and embrace the extraordinary. 'CosmoWander' is an invitation to discover the uncharted,
              to be captivated by the cosmos, and to find your next adventure waiting in the infinite expanse”
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button class="w-36 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              onClick={handleRegisterButtonClick}>
                <span class="w-36 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0">
                  Register Now
                </span>
              </button>
              <button class="w-36 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
              onClick={handleLoginButtonClick}
              >
                <span class="w-36 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0">
                  Login
                </span>
              </button>
            </div>



          </div>
        </div>
        
      {/* </div> */}
      {/* <div className="relative isolate px-6 pt-14 lg:px-8 h-screen"></div> */}
    </div>
  )
}

export default LandingPage;