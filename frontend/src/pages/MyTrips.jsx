import { MoreInfoButton } from "../components/Buttons";

function MyTrips() {
    return (
        <div className="bg-white bg-hero-image h-screen bg-cover bg-no-repeat relative bg-center " >
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-full mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-3 lg:ml-3 h-full bg-overlay-color bg-opacity-60" ></div>
            </div>

            <div class="h-full w-2/3 relative inset-x-0 top-0 z-50 flex flex-col items-center justify-center px-4 py-8 mx-auto md:h-screen lg:py-0 ">
                <div className="px-1 w-full">
                    <button className="-mx-3 block rounded-lg px-3 text-base font-semibold leading-7 text-gray-900 hover:text-button-purple-highlight" >
                        Back
                    </button>
                </div>
                <a href="#" class="flex items-center mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-15 h-auto mr-2" src="/images/logo.png" alt="logo" />

                </a>

                <div class="min-w-3/4 bg-gradient-to-br from-bg-purple-light to-bg-purple-dark shadow  md:mt-0 sm:max-w-md xl:p-0 border-none">

                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
                        <h1 class="text-xl font-bold text-center leading-tight tracking-tight text-orange-light md:text-2xl ">
                            My Trips
                        </h1>
                        <div>
                            <p class="block mb-2 text-lg font-extrabold text-orange-light" > Current Trip</p>
                            <div class="block mb-2 text-sm font-light text-text-beige" >
                                <p>Destination : <span>Mars</span></p>
                                <p>Spaceship No : <span>Ref123W</span></p>
                                <p>Ticket No : <span>Ref123W</span></p>
                                <p>Booking Reference : <span>1425-7893-3225-8963</span></p>
                                {/* if available */}
                                <p>Cargo Booking Reference : <span>1425-7893-3225-8964</span></p>
                            </div>
                        </div>
                        <div>
                            <p class="block mb-2 text-lg font-extrabold text-orange-light" >Previous Trips</p>
                            <div class="grid grid-cols-2 mb-2 border-t-0.5 border-text-beige">
                                <div class="mt-2">
                                    <p class="block text-sm font-light text-orange-light">Date : 2160-08-2815:30</p>
                                    <p class="block text-sm font-light text-text-beige" >Destination : Mars</p>
                                    <p class="block text-sm font-light text-text-beige" >Ticket No : Ref123W</p>
                                </div>
                                <div class="flex justify-end " ><MoreInfoButton /></div>
                            </div>
                            <div class="grid grid-cols-2 mb-2 border-t-0.5 border-text-beige">
                                <div class="mt-2">
                                    <p class="block text-sm font-light text-orange-light">Date : 2160-08-2815:30</p>
                                    <p class="block text-sm font-light text-text-beige" >Destination : Mars</p>
                                    <p class="block text-sm font-light text-text-beige" >Ticket No : Ref123W</p>
                                </div>
                                <div class="flex justify-end" ><MoreInfoButton /></div>
                            </div>
                            <div class="grid grid-cols-2 mb-2 border-t-0.5 border-text-beige">
                                <div class="mt-2">
                                    <p class="block text-sm font-light text-orange-light">Date : 2160-08-2815:30</p>
                                    <p class="block text-sm font-light text-text-beige" >Destination : Mars</p>
                                    <p class="block text-sm font-light text-text-beige" >Ticket No : Ref123W</p>
                                </div>
                                <div class="flex justify-end" ><MoreInfoButton /></div>
                            </div>
                            <div class="grid grid-cols-2 mb-2 border-t-0.5 border-text-beige">
                                <div class="mt-2">
                                    <p class="block text-sm font-light text-orange-light">Date : 2160-08-2815:30</p>
                                    <p class="block text-sm font-light text-text-beige" >Destination : Mars</p>
                                    <p class="block text-sm font-light text-text-beige" >Ticket No : Ref123W</p>
                                </div>
                                <div class="flex justify-end" ><MoreInfoButton /></div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default MyTrips;