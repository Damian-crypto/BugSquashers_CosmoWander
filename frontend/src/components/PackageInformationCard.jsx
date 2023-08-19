function PackageInformationCard(props) {

    const { selectedRadio, handleRadioChange, handleBookButtonClick } = props;

    return (
        <div class="h-max w-full bg-transparent sm:bg-gradient-to-br from-bg-purple-light to-bg-purple-dark sm:shadow border-none sm:my-6 sm:p-5 ">
            {/* <div class=" space-y-4 md:space-y-6 sm:p-8"> */}
            <h1 class="mb-14 sm:mb-0 text-2xl font-bold text-left leading-tight tracking-tight text-orange-light md:text-2xl dark:text-orange-light">
                Package Name
            </h1>
            <div class="flex flex-col sm:flex-row sm:space-x-4 justify-between text-text-beige">
                <p>$90 pp (Regular)</p>
                <p>2160-08-2815:30</p>
            </div>
            <form class="space-y-4 md:space-y-6 my-4 h-auto" action="#">

                {/* <div className="mt-10 grid grid-rows-2 items-center justify-center"> */}

                <table class="w-full ">
                    <tr class="grid gap-4 grid-cols-2">
                        <td>
                            <div>
                                <label for="fname" class="block mb-2 text-sm font-medium text-orange-light ">Mode</label>
                                <div class="border-l-2 border-orange-light w-full ">
                                    <input type="text" name="fname" id="fname" value="Passenger" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none focus:textColor" required="" disabled />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <label for="lname" class="block mb-2 text-sm font-medium text-orange-light ">Remaining Seats</label>
                                <div class="border-l-2 border-orange-light w-full ">
                                    <input type="text" name="lname" id="lname" value="26 out of 150" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" disabled />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="grid gap-4 grid-cols-2">
                        <td>
                            <div>
                                <label for="location" class="block mb-2 text-sm font-medium text-orange-light ">Starting Point</label>
                                <div class="border-l-2 border-orange-light w-full ">
                                    <input type="text" name="location" id="location" value="Planet A" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" disabled />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <label for="location" class="block mb-2 text-sm font-medium text-orange-light ">Destination</label>
                                <div class="border-l-2 border-orange-light w-full ">
                                    <input type="text" name="location" id="location" value="Planet B" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" disabled />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <label for="location" class="block mb-2 text-sm font-medium text-orange-light ">Your Station</label>
                                <div class="border-l-2 border-orange-light w-full ">
                                    <input type="text" name="location" id="location" value="Jupiter, Ceres, Luna, Earth" class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" disabled />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <label for="location" class="block mb-2 text-sm font-medium text-orange-light ">Special Features</label>
                                <div class="border-l-2 border-orange-light w-full ">
                                    <div class="block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none">
                                        <ul class="list-disc ml-5">
                                            <li>
                                                Panoramic Windows : Enjoy stunning views while exploring other planets
                                            </li>
                                            <li>
                                                VR Suites: Immerse yourself in virtual worlds during the journey
                                            </li>
                                            <li>
                                                Customized Cabins

                                                <RadioGroup 
                                                selectedRadio={selectedRadio}
                                                handleRadioChange={handleRadioChange}
                                                />

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>

                </table>

            </form>
            <button class="mx-4  w-36 inline-flex items-center justify-center float-right p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                onClick={handleBookButtonClick}
            >
                <span class="mx-auto w-36 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0">
                    Book Now
                </span>
            </button>
            {/* </div> */}
        </div>
    );

}

function RadioGroup(props) {

    const { selectedRadio, handleRadioChange } = props;

    return (
        <div class="grid grid-rows-4">
            <div className="grid items-center mb-0">
                <div className="ml-2 flex items-center">
                    <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        name="default-radio-1"
                        className="w-4 h-4 text-orange-light bg-orange-light border-orange-light focus:ring-orange-light  "
                        checked={selectedRadio === 'default-radio-1'}
                        onChange={handleRadioChange}
                    />
                    <label
                        htmlFor="default-radio-1"
                        className={selectedRadio === 'default-radio-1' ? "ml-2 text-sm font-medium text-orange-light " : "ml-2 text-sm font-medium text-white-white "}
                    >
                        Regular
                    </label>
                </div>
                <div className="ml-8 text-sm">
                    {selectedRadio === 'default-radio-1' && (
                        <p className="text-xs font-normal text-text-beige ">
                            description for the first radio
                        </p>
                    )}
                </div>
            </div>
            <div className="grid items-center mb-0">
                <div className="ml-2 flex items-center">
                    <input
                        id="default-radio-2"
                        type="radio"
                        value=""
                        name="default-radio-2"
                        className="w-4 h-4 text-orange-light bg-orange-light border-orange-light focus:ring-orange-light "
                        checked={selectedRadio === 'default-radio-2'}
                        onChange={handleRadioChange}
                    />
                    <label
                        htmlFor="default-radio-2"
                        className={selectedRadio === 'default-radio-2' ? "ml-2 text-sm font-medium text-orange-light " : "ml-2 text-sm font-medium text-white-white "}
                    >
                        Workaholic
                    </label>
                </div>
                <div className="ml-8 text-sm">
                    {selectedRadio === 'default-radio-2' && (
                        <p className="text-xs font-normal text-text-beige">
                            description for the second radio
                        </p>
                    )}
                </div>
            </div>
            <div className="grid items-center mb-0">
                <div className="ml-2 flex items-center">
                    <input
                        id="default-radio-3"
                        type="radio"
                        value=""
                        name="default-radio-3"
                        className="w-4 h-4 text-orange-light bg-orange-light border-orange-light focus:ring-orange-light "
                        checked={selectedRadio === 'default-radio-3'}
                        onChange={handleRadioChange}
                    />
                    <label
                        htmlFor="default-radio-3"
                        className={selectedRadio === 'default-radio-3' ? "ml-2 text-sm font-medium text-orange-light " : "ml-2 text-sm font-medium text-white-white "}
                    >
                        Family Friendly
                    </label>
                </div>
                <div className="ml-8 text-sm">
                    {selectedRadio === 'default-radio-3' && (
                        <p className="text-xs font-normal text-text-beige">
                            description for the third radio
                        </p>
                    )}
                </div>
            </div>
            <div className="grid items-center mb-0">
                <div className="ml-2 flex items-center">
                    <input
                        id="default-radio-4"
                        type="radio"
                        value=""
                        name="default-radio-4"
                        className="w-4 h-4 text-orange-light bg-orange-light border-orange-light focus:ring-orange-light "
                        checked={selectedRadio === 'default-radio-4'}
                        onChange={handleRadioChange}
                    />
                    <label
                        htmlFor="default-radio-4"
                        className={selectedRadio === 'default-radio-4' ? "ml-2 text-sm font-medium text-orange-light " : "ml-2 text-sm font-medium text-white-white "}
                    >
                        Medicruiser
                    </label>
                </div>
                <div className="ml-8 text-sm">
                    {selectedRadio === 'default-radio-4' && (
                        <p className="text-xs font-normal text-text-beige">
                            description for the forth radio
                        </p>
                    )}
                </div>
            </div>

        </div>
    );
}

export default PackageInformationCard;