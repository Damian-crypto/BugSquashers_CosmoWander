import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import Carousel from "../components/Carousel";
import {
    PackageInformationCardPassenger, PackageInformationCardCargo,
    PackageInformationCardSpecial, PackageInformationCardPnC
} from "../components/PackageInformationCard";

function PackageInformation() {

    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mode, setMode] = useState(1);
    // 0 = passenger 
    // 1 = passenger & cargo 
    // 2 = cargo 
    // 3 = special 
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


    const handleBookButtonClick = () => {
        navigate('/booking');
    }

    return (
        <div class="h-auto">
            <div className="bg-gradient-to-br from-bg-purple-light to-bg-purple-dark sm:bg-white sm:bg-hero-image sm:h-auto sm:bg-cover sm:bg-local bg-center relative" >
                <div className="absolute inset-0 flex justify-center items-center invisible sm:visible h-full">
                    <div className="w-full mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-3 lg:ml-3 sm:h-full bg-overlay-color bg-opacity-60" ></div>
                </div>
                <Navbar />

                <div class="h-max w-screen sm:w-2/3 relative top-32 z-10 flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">


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
                            handleBookButtonClick={handleBookButtonClick}
                        />
                    )}

                    {mode === 1 && (
                        <PackageInformationCardPnC
                            selectedRadio={selectedRadio}
                            handleRadioChange={handleRadioChange}
                            handleBookButtonClick={handleBookButtonClick}
                        />
                    )}

                    {mode === 2 && (
                        <PackageInformationCardCargo
                            selectedRadio={selectedRadio}
                            handleRadioChange={handleRadioChange}
                            handleBookButtonClick={handleBookButtonClick}
                        />
                    )}

                    {mode === 3 && (
                        <PackageInformationCardSpecial
                            selectedRadio={selectedRadio}
                            handleRadioChange={handleRadioChange}
                            handleBookButtonClick={handleBookButtonClick}
                        />
                    )}

                </div >
            </div >
        </div>

    );
}

export default PackageInformation;

