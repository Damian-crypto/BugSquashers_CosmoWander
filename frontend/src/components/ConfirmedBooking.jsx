function ConfirmedBooking(props) {

    const { handleDownloadButtonClick } = props;

    return (
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
            <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-orange-light md:text-2xl ">
                Booking Confirmation
            </h1>
            <div class="text-center text-white-white">
                <p>Ticket No: 3647889S</p>
            </div>
            <div class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-32 h-32 text-green-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </div>
            <div class="text-center text-white-white">
                <p>Celestial traveler, your trip is confirmed! </p>
            </div>
            <div class="flex justify-center">
                <button class="mx-4  w-48 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                    onClick={handleDownloadButtonClick}
                >

                    <span class="mx-auto w-48 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0">
                        Download Ticket
                    </span>
                </button>
            </div>
        </div>
    );
}

export default ConfirmedBooking;