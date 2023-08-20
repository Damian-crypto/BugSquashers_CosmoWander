import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from 'react-router-dom';
import Carousel from "../components/Carousel";
import {
    PackageInformationCardPassenger, PackageInformationCardCargo,
    PackageInformationCardSpecial, PackageInformationCardPnC
} from "../components/PackageInformationCard";

function PackageInformation() {

    const navigate = useNavigate();
    const location = useLocation();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mode, setMode] = useState(0);
    // 0 = passenger 
    // 1 = passenger & cargo 
    // 2 = cargo 
    // 3 = special 
    useEffect(() => {
        if (location.pathname === "/packageinformation/0") {
          setMode(0);
        }
        if (location.pathname === "/packageinformation/1") {
            setMode(1);
          }
          if (location.pathname === "/packageinformation/2") {
            setMode(2);
          }
          if (location.pathname === "/packageinformation/3") {
            setMode(3);
          }
      }, [location.pathname]);

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


    const handleBookButtonClick1 = () => {
        navigate('/booking/0');
    }
    const handleBookButtonClick2 = () => {
        navigate('/booking/1');
    }
    const handleBookButtonClick3 = () => {
        navigate('/booking/2');
    }
    const handleBookButtonClick4 = () => {
        navigate('/booking/3');
    }

    return (

        <div className="bg-gradient-to-br from-bg-purple-light to-bg-purple-dark sm:bg-white sm:bg-hero-image sm:h-auto sm:bg-cover sm:bg-local bg-center relative flex justify-center" >
            <div className="absolute inset-0 flex justify-center items-center h-full invisible sm:visible">
                <div className="w-full mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-3 lg:ml-3 h-full bg-overlay-color bg-opacity-60" ></div>
            </div>
            <div>
                <Navbar />
            </div>


            <div class="sm:h-fit h-auto w-screen sm:w-2/3 relative lg:mt-32 sm:mt-10 mt-16 z-10 flex flex-col items-center px-6 py-8 mx-auto lg:py-0">


                <Carousel
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                    nextSlide={nextSlide}
                    prevSlide={prevSlide}
                />


                {mode === 0 && (
                    <PackageInformationCardPassenger
                        selectedRadio={selectedRadio}
                        handleRadioChange={handleRadioChange}
                        handleBookButtonClick={handleBookButtonClick1}
                    />
                )}

                {mode === 1 && (
                    <PackageInformationCardPnC
                        selectedRadio={selectedRadio}
                        handleRadioChange={handleRadioChange}
                        handleBookButtonClick={handleBookButtonClick2}
                    />
                )}

                {mode === 2 && (
                    <PackageInformationCardCargo
                        selectedRadio={selectedRadio}
                        handleRadioChange={handleRadioChange}
                        handleBookButtonClick={handleBookButtonClick3}
                    />
                )}

                {mode === 3 && (
                    <PackageInformationCardSpecial
                        selectedRadio={selectedRadio}
                        handleRadioChange={handleRadioChange}
                        handleBookButtonClick={handleBookButtonClick4}
                    />
                )}

            </div >
        </div >


    );
}

export default PackageInformation;

