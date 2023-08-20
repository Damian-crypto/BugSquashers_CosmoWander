import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CountdownTimer from "../components/CountdownTimer";
import PackageCard from "../components/PackageCard";
import { useNavigate } from 'react-router-dom';
import Carousel2 from "../components/Carousel2";



function Home() {

  const packageData = [
    {
      id: 1,
      title: "Cosmo Wander Package No.1",
      departure_time: "2023-03-12",
      ticket_price: "99",
      imageUrl: "../src/assets/package_images/3.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
    },
    {
      id: 2,
      title: "Cosmo Wander Package No.2",
      departure_time: "2022-02-13",
      ticket_price: "99",
      imageUrl: "../src/assets/package_images/1.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
    },
    {
      id: 3,
      title: "Cosmo Wander Package No.3",
      departure_time: "2022-05-12",
      ticket_price: "99",
      imageUrl: "../src/assets/package_images/2.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
    },
    {
      id: 4,
      title: "Cosmo Wander Package No.4",
      departure_time: "2022-05-12",
      ticket_price: "99",
      imageUrl: "../src/assets/package_images/4.png",
      description: "Lorem ipsum dolor sit 123456 amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
    },
    {
      id: 5,
      title: "Cosmo Wander Package No.5",
      departure_time: "2022-05-12",
      ticket_price: "99",
      imageUrl: "../src/assets/package_images/6.png",
      description: "Lorem ipsum dolor sit 12345 amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
    },
    {
      id: 6,
      title: "Cosmo Wander Package No.6",
      departure_time: "2022-05-12",
      ticket_price: "99",
      imageUrl: "../src/assets/package_images/5.png",
      description: "Lorem ipsum dolor sit 1234 amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
    },
    {
      id: 7,
      title: "Cosmo Wander Package No.7",
      departure_time: "2022-05-12",
      ticket_price: "99",
      imageUrl: "../src/assets/package_images/2.png",
      description: "Lorem ipsum dolor sit 123 amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
    },
    {
      id: 8,
      title: "Cosmo Wander Package No.8",
      departure_time: "2022-05-12",
      ticket_price: "99",
      imageUrl: "../src/assets/package_images/1.png",
      description: "Lorem ipsum dolor sit 12 amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
    },
    {
      id: 9,
      title: "Cosmo Wander Package No.9",
      departure_time: "2022-05-12",
      ticket_price: "99",
      imageUrl: "../src/assets/package_images/3.png",
      description: "Lorem ipsum dolor sit 1 amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
    },
    {
      id: 10,
      title: "Cosmo Wander Package No.10",
      departure_time: "2022-05-12",
      ticket_price: "99",
      imageUrl: "../src/assets/package_images/4.png",
      description: "Lorem ipsum dolor sit 1 amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
    },
    {
      id: 11,
      title: "Cosmo Wander Package No.11",
      departure_time: "2022-05-12",
      ticket_price: "99",
      imageUrl: "../src/assets/package_images/5.png",
      description: "Lorem ipsum dolor sit 1 amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis 123 harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
    },
    {
      id: 12,
      title: "Cosmo Wander Package No.12",
      departure_time: "2022-05-12",
      ticket_price: "99",
      imageUrl: "../src/assets/package_images/6.png",
      description: "Lorem ipsum dolor sit 1 amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam 1234 blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum!"
    }
  ]

  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 4 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 4 : prev - 1));
  };



  return (
    <div className="bg-white bg-hero-image sm:h-auto sm:bg-cover sm:bg-local bg-center relative ">
      <div className="absolute inset-0 flex justify-center items-center h-full">
        <div className="w-full mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-3 lg:ml-3 h-full bg-overlay-color bg-opacity-60"></div>
      </div>

      <Navbar />

      {/* corsol start */}

      <div class="h-max w-screen relative sm:w-2/3 top-32 z-0 flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">

        <Carousel2
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />

      </div>
      <div className= 'mx-5'>
      <div className="relative isolate sm:w-2/3 mx-auto pb-8 pt-32 sm:pt-48 lg:pt-48 grid grid-cols-2 sm:grid-cols-3 gap-5">
        <div>
          
          <select id="Destination" class="  block w-full p-2.5  bg-card-purple-light bg-opacity-30 border-2  border-indigo-600 shadow placeholder-card-purple-light text-white focus:ring-blue-500  focus:border-blue-500 ">
            <option selected>Destination</option>
            <option value="VE">Venus</option>
            <option value="MA">Mars</option>
            <option value="JU">Jupiter</option>
            <option value="SA">Saturn</option>
            <option value="NP">Neptune</option>
          </select>
        </div>

        <div>
          
          <select id="countries" class="  block w-full p-2.5   bg-card-purple-light bg-opacity-30 border-2  border-indigo-600 shadow placeholder-card-purple-light text-white focus:ring-blue-500  focus:border-blue-500 ">
            <option selected>Mode</option>
            <option value="pa">Passenger</option>
            <option value="p&c">Passenger & Cargo</option>
            <option value="ca">Cargo</option>
            <option value="sp">Special</option>
          </select>
        </div>

        <div>
          
          <div id="countries" class="  block w-full p-2.5   bg-card-purple-light bg-opacity-30 border-2  border-indigo-600 shadow placeholder-card-purple-light text-white focus:ring-blue-500  focus:border-blue-500 ">
            <option selected>Departure</option>
          </div>
        </div>
      </div>

      </div>

      {/* card container started*/}
      <div className="relative items-center justify-center isolate mx-5 sm:mx-8 md:mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {packageData.map((packagedata) => {
          return (
            <div key={packagedata.id}>
              <PackageCard
                pImage={packagedata.imageUrl}
                pTitle={packagedata.title}
                pDepartureTime={packagedata.departure_time}
                pTicketPrice={packagedata.ticket_price}
                pDescription={packagedata.description}
                onViewMore={() => navigate('/package-information')}
              />
            </div>
          )
        })}


      </div>

      {/* card container ended */}


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
  );
}

export default Home;