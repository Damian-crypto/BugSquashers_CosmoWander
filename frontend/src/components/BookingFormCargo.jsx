import RadioGroupPayment from "./RadioGroupPayment";
import FingerprintButton from "./FingerprintButton";
import { CancelBookingButton } from "./Buttons";

function BookingFormCargo(props) {

    const { selectedRadio, handleRadioChange, fingerprintButton, handleFingerprintClick, regularButtons, handleCancelButtonClick, handleConfirmButtonClick } = props;

    return (
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
            <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-orange-light md:text-2xl ">
                Cargo booking
            </h1>
            <form class="space-y-4 md:space-y-6 sm:text-sm text-xs" action="#">
                <table class="w-full">
                    <tr>
                        <td>
                            <div>
                                <label for="location" class="block mb-2 text-sm font-medium text-orange-light ">Cargo Booking Reference</label>
                                <div class="border-l-2 border-orange-light w-full ">
                                    <input type="text" name="location" id="location" value="Planet" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" disabled />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="grid gap-4 grid-cols-2">
                        <td>
                            <div>
                                <label for="fname" class="block mb-2 text-sm font-medium text-orange-light ">Departure Date</label>
                                <div class="border-l-2 border-orange-light w-full ">
                                    <input type="text" name="fname" id="fname" value="First Name" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none focus:textColor" required="" disabled />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <label for="lname" class="block mb-2 text-sm font-medium text-orange-light ">Departure Time</label>
                                <div class="border-l-2 border-orange-light w-full ">
                                    <input type="text" name="lname" id="lname" value="Last Name" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" disabled />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="grid gap-4 grid-cols-2">
                        <td>
                            <div>
                                <label for="location" class="block mb-2 text-sm font-medium text-orange-light ">Space Ship</label>
                                <div class="border-l-2 border-orange-light w-full ">
                                    <input type="text" name="location" id="location" value="Planet" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" disabled />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <label for="location" class="block mb-2 text-sm font-medium text-orange-light ">Weight(kgs)</label>
                                <div class="border-l-2 border-orange-light w-full ">
                                    <input type="number" name="location" id="location" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" />
                                </div>
                            </div>
                        </td>
                    </tr>

                </table>
                <div>
                    <label for="location" class="block mb-2 text-sm font-medium text-orange-light ">Price</label>
                    <p class="text-text-beige text-2xl">$800</p>
                </div>
                <div>
                    <label for="location" class="block mb-2 text-sm font-medium text-orange-light ">Payment Methods</label>
                    <RadioGroupPayment
                        selectedRadio={selectedRadio}
                        handleRadioChange={handleRadioChange}
                    />
                </div>

                {fingerprintButton && (

                    <div className="h-auto flex flex-col items-center">

                        <div>
                            <FingerprintButton handleFingerprintButtonClick={handleFingerprintClick} />
                        </div>
                        <div class="h-12 w-full flex justify-center my-4" ><CancelBookingButton /></div>

                    </div>
                )}

                {regularButtons && (

                    <div className="mt-10 flex items-center justify-center">

                        <button type="button" class="mx-4 w-36 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                            onClick={handleCancelButtonClick}
                        >
                            <span class="mx-auto w-36 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0">
                                Cancel
                            </span>
                        </button>
                        <button type="button" class="mx-4  w-36 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                            onClick={handleConfirmButtonClick}
                        >
                            <span class="mx-auto w-36 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0">
                                Confirm
                            </span>
                        </button>
                    </div>
                )}

            </form>
        </div>
    );
}

export default BookingFormCargo;