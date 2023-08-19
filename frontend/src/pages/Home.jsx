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
      
      <Carousel
                        currentSlide={currentSlide}
                        setCurrentSlide={setCurrentSlide}
                        nextSlide={nextSlide}
                        prevSlide={prevSlide}
      />

      </div>

      <div className="relative isolate mx-auto max-w-2xl pb-8 pt-32 sm:pt-48 lg:pt-48 h-full">



        <div className=" mx-5 sm:mx-8 md:mx-16 flex justify-center">
          <CountdownTimer />

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

      
      {/* corsol end */}
    </div>
  );
}

export default Home;