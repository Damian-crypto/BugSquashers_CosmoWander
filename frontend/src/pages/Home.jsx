import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import CountdownTimer from "../components/CountdownTimer";
import PackageCard from "../components/PackageCard";

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

        {/* card container started*/}
        <div className="flex flex-wrap justify-center">
  {Array.from({length: 4}).map((_, index) => (
    <PackageCard
      key={index}
      productImage="/sample-product-image.jpg"
      productName="Product Name"
      productRating={4.5}
      productPrice={19.99}
      onAddToCart={() => console.log("Add to cart clicked")}
    />
  ))}
</div>

        {/* card container ended */}

      </div>
      {/* corsol end */}
    </div>
  );
}

export default Home;