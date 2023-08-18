import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import CountdownTimer from "../components/CountdownTimer";

function Home() {
 

  return (
    <div className="bg-white bg-hero-image sm:h-auto sm:bg-cover sm:bg-local bg-center relative ">
      <div className="absolute inset-0 flex justify-center items-center h-full">
        <div className="w-full mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-3 lg:ml-3 h-full bg-overlay-color bg-opacity-60"></div>
      </div>
      <Navbar />

      {/* corsol start */}
      <div className="relative isolate mx-auto max-w-2xl py-32 sm:py-48 lg:py-48 h-full">
         
          
            
            <div className="flex justify-center">
                <CountdownTimer />
                
            </div>
            {/* carousel */}
            <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-6xl">
              Journey Beyond the Stars: Explore Limitless Horizons With Us
            </h1>            
            <p className="mt-6 text-lg leading-8 text-white">
              “Step beyond the familiar, and embrace the extraordinary. 'CosmoWander' is an invitation to discover the uncharted,
              to be captivated by the cosmos, and to find your next adventure waiting in the infinite expanse”
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              
            </div>



          </div>
        </div>
      {/* corsol end */}
    </div>
  );
}

export default Home;