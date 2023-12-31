import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import BookingFormPassenger from "../components/BookingFormPassenger";
import BookingFormPnC from "../components/BookingFormPnC";
import BookingFormCargo from "../components/BookingFormCargo";
import BookingFormSpecial from "../components/BookingFormSpecial";
import ConfirmedBooking from "../components/ConfirmedBooking";
import ConfirmationModal from "../components/ConfirmationModal";
function Booking() {

    const [regularButtons, showRegularButtons] = useState(true)
    const [bookingCancellation, showBookingCancellation] = useState(false)
    const [bookingConfirmation, showBookingConfirmation] = useState(false)
    const [fingerprintButton, showFingerprintButton] = useState(false)
    const [bookingForm, showBookingForm] = useState(true)
    const [bookingConfirmed, showBookingConfirmed] = useState(false)
    const [bookingType, setBookingType] = useState(0)
    // 0 = passenger booking
    // 1 = passenger & cargo booking
    // 2 = cargo booking
    // 3 = special booking
    const [isCancellation, setIsCancellation] = useState(false)
    const navigate = useNavigate();

    const handleCancelButtonClick = () => {
        setIsCancellation(true)
        showBookingCancellation(true)
    }
    const handleConfirmButtonClick = () => {
        setIsCancellation(false)
        showBookingConfirmation(true)
    }

    const handleBackButtonClick = () => {
        navigate('/packageinformation');
    }
    const handleYesButtonClick = () => {
        if (isCancellation) {
            navigate('/home');
        } else {
            showRegularButtons(false)
            showBookingConfirmation(false)
            showFingerprintButton(true)
        }
    }
    const handleNoButtonClick = () => {
        if (isCancellation) {
            showBookingCancellation(false)
        } else {
            showBookingConfirmation(false)
        }
    }

    const handleFingerprintClick = () => {
        showBookingForm(false)
        showFingerprintButton(false)
        showBookingCancellation(false)
        showBookingConfirmation(false)
        showBookingConfirmed(true)
    }

    const [selectedRadio, setSelectedRadio] = useState('default-radio-1');

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.id);
    };

    return (
        <div className="bg-gradient-to-br from-bg-purple-light to-bg-purple-dark sm:bg-white sm:bg-hero-image sm:h-auto sm:bg-cover sm:bg-local bg-center relative flex justify-center" >
            <div className="absolute inset-0 flex justify-center items-center h-full invisible sm:visible">
                <div className="w-full mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-3 lg:ml-3 h-full bg-overlay-color bg-opacity-60" ></div>
            </div>

            {/* <div class="h-full w-2/3 relative inset-x-0 top-0 z-50 flex flex-col items-center justify-center px-4 py-8 mx-auto md:h-screen lg:py-0 "> */}
            <div class="min-h-screen sm:h-fit h-auto w-screen sm:w-2/3 relative sm:my-2 mt-4 z-10 flex flex-col items-center px-6 sm:py-8 py-6 mx-auto lg:py-0 sm:mb-8">
                <a href="#" class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-15 h-auto mr-2" src="/images/logo.png" alt="logo" />

                </a>

                <div class="h-max w-full bg-transparent sm:bg-gradient-to-br from-bg-purple-light to-bg-purple-dark sm:shadow  md:mt-0 sm:max-w-md xl:p-0 border-none">

                    {bookingForm && bookingType === 0 && (

                        <BookingFormPassenger
                            selectedRadio={selectedRadio}
                            handleRadioChange={handleRadioChange}
                            fingerprintButton={fingerprintButton}
                            handleFingerprintClick={handleFingerprintClick}
                            regularButtons={regularButtons}
                            handleCancelButtonClick={handleCancelButtonClick}
                            handleConfirmButtonClick={handleConfirmButtonClick}
                        />
                    )}
                    {bookingForm && bookingType === 1 && (

                        <BookingFormPnC
                            selectedRadio={selectedRadio}
                            handleRadioChange={handleRadioChange}
                            fingerprintButton={fingerprintButton}
                            handleFingerprintClick={handleFingerprintClick}
                            regularButtons={regularButtons}
                            handleCancelButtonClick={handleCancelButtonClick}
                            handleConfirmButtonClick={handleConfirmButtonClick}
                        />
                    )}
                    {bookingForm && bookingType === 2 && (

                        <BookingFormCargo
                            selectedRadio={selectedRadio}
                            handleRadioChange={handleRadioChange}
                            fingerprintButton={fingerprintButton}
                            handleFingerprintClick={handleFingerprintClick}
                            regularButtons={regularButtons}
                            handleCancelButtonClick={handleCancelButtonClick}
                            handleConfirmButtonClick={handleConfirmButtonClick}
                        />
                    )}
                    {bookingForm && bookingType === 3 && (

                        <BookingFormSpecial
                            selectedRadio={selectedRadio}
                            handleRadioChange={handleRadioChange}
                            fingerprintButton={fingerprintButton}
                            handleFingerprintClick={handleFingerprintClick}
                            regularButtons={regularButtons}
                            handleCancelButtonClick={handleCancelButtonClick}
                            handleConfirmButtonClick={handleConfirmButtonClick}
                        />
                    )}

                    {bookingConfirmed && (
                        <ConfirmedBooking
                            handleDownloadButtonClick={() => navigate('/mytrips')}
                        />
                    )}

                </div>



            </div>
            {bookingCancellation && (
                <ConfirmationModal
                    message="Do you want to cancel this booking?"
                    handleYesButtonClick={handleYesButtonClick}
                    handleNoButtonClick={handleNoButtonClick}
                />
            )}

            {bookingConfirmation && (
                <ConfirmationModal
                    message="Do you want to book a ticket for this journey?"
                    handleYesButtonClick={handleYesButtonClick}
                    handleNoButtonClick={handleNoButtonClick}
                />
            )}

        </div>
    )


}

export default Booking

