import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CountdownTimer from "../components/CountdownTimer";
import PackageCard from "../components/PackageCard";
import Carousel from "../components/Carousel";
import { useNavigate } from 'react-router-dom';



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
      
      <Carousel
                        currentSlide={currentSlide}
                        setCurrentSlide={setCurrentSlide}
                        nextSlide={nextSlide}
                        prevSlide={prevSlide}
      />

      </div>

      <div className="relative isolate mx-auto max-w-2xl py-32 sm:py-48 lg:py-48 h-full">



        <div className="flex justify-center">
          <CountdownTimer />

        </div>

        {/* card container started*/}
        <div className="flex flex-wrap justify-center">

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

      </div>
      {/* corsol end */}
    </div>
  );
}

export default Home;