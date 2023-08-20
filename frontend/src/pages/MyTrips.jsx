import { MoreInfoButton } from "../components/Buttons";
import Navbar from "../components/Navbar";

function MyTrips() {
    return (
        <div className="bg-gradient-to-br from-bg-purple-light to-bg-purple-dark sm:bg-white sm:bg-hero-image sm:h-auto sm:bg-cover sm:bg-local bg-center relative flex justify-center" >
            <div className="absolute inset-0 flex justify-center items-center h-full invisible sm:visible">
                <div className="w-full mr-2 ml-2 md:mr-2 md:ml-2 lg:mr-3 lg:ml-3 h-full bg-overlay-color bg-opacity-60" ></div>
            </div>
            <div>
                <Navbar />
            </div>


            <div class="sm:h-fit h-auto w-screen sm:w-2/3 relative lg:mt-32 sm:mt-10 mt-16 z-10 flex flex-col items-center px-6 py-8 mx-auto lg:py-0">


                <div class="mb-8 min-w-3/4 bg-gradient-to-br from-bg-purple-light to-bg-purple-dark sm:shadow  md:mt-0 sm:max-w-md xl:p-0 border-none">

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
                            <div class="sm:grid sm:grid-cols-2 grid grid-rows-2 mb-2 border-t-0.5 border-text-beige">
                                <div class="mt-2">
                                    <p class="block text-sm font-light text-orange-light">Date : 2160-08-2815:30</p>
                                    <p class="block text-sm font-light text-text-beige" >Destination : Mars</p>
                                    <p class="block text-sm font-light text-text-beige" >Ticket No : Ref123W</p>
                                </div>
                                <div class="flex justify-end " ><MoreInfoButton /></div>
                            </div>
                            <div class="sm:grid sm:grid-cols-2 grid grid-rows-2 mb-2 border-t-0.5 border-text-beige">
                                <div class="mt-2">
                                    <p class="block text-sm font-light text-orange-light">Date : 2160-08-2815:30</p>
                                    <p class="block text-sm font-light text-text-beige" >Destination : Mars</p>
                                    <p class="block text-sm font-light text-text-beige" >Ticket No : Ref123W</p>
                                </div>
                                <div class="flex justify-end" ><MoreInfoButton /></div>
                            </div>
                            <div class="sm:grid sm:grid-cols-2 grid grid-rows-2 mb-2 border-t-0.5 border-text-beige">
                                <div class="mt-2">
                                    <p class="block text-sm font-light text-orange-light">Date : 2160-08-2815:30</p>
                                    <p class="block text-sm font-light text-text-beige" >Destination : Mars</p>
                                    <p class="block text-sm font-light text-text-beige" >Ticket No : Ref123W</p>
                                </div>
                                <div class="flex justify-end" ><MoreInfoButton /></div>
                            </div>
                            <div class="sm:grid sm:grid-cols-2 grid grid-rows-2 mb-2 border-t-0.5 border-text-beige">
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