import CountdownTimer from "./CountdownTimer";

function Carousel2 (props) {

    const {currentSlide, setCurrentSlide, nextSlide, prevSlide} = props;
    return(
        <div id="indicators-carousel" class="sm:top-0 relative z-20 h-1/2 w-full" data-carousel="static">
                        {/* <!-- Carousel wrapper --> */}
                        <div class="relative h-44 lg:h-72 overflow-hidden">
                            {/* <!-- Item 1 --> */}
                            <div class={currentSlide === 0 ? "duration-700 ease-in-out" : "hidden"} data-carousel-itemScope="active">
                                <div className="flex justify-center">
                                    <CountdownTimer />
                                </div>
                                <img src="../src/assets/package_images/6.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                
                            </div>
                            {/* <!-- Item 2 --> */}
                            <div class={currentSlide === 1 ? "duration-700 ease-in-out" : "hidden"} data-carousel-item>
                                <img src="../src/assets/package_images/2.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            {/* <!-- Item 3 --> */}
                            <div class={currentSlide === 2 ? "duration-700 ease-in-out" : "hidden"} data-carousel-item>
                                <img src="../src/assets/package_images/3.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            {/* <!-- Item 4 --> */}
                            <div class={currentSlide === 3 ? "duration-700 ease-in-out" : "hidden"} data-carousel-item>
                                <img src="../src/assets/package_images/4.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            {/* <!-- Item 5 --> */}
                            <div class={currentSlide === 4 ? "duration-700 ease-in-out" : "hidden"} data-carousel-item>
                                <img src="../src/assets/package_images/5.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                        </div>
                        {/* <!-- Slider indicators --> */}
                        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        
                            <button type="button" class={currentSlide === 0 ? "bg-button-purple-highlight w-3 h-3 rounded-full" : "bg-white w-3 h-3 rounded-full"} aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0" onClick={() => setCurrentSlide(0)}></button>
                            <button type="button" class={currentSlide === 1 ? "bg-button-purple-highlight w-3 h-3 rounded-full" : "bg-white w-3 h-3 rounded-full"} aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1" onClick={() => setCurrentSlide(1)}></button>
                            <button type="button" class={currentSlide === 2 ? "bg-button-purple-highlight w-3 h-3 rounded-full" : "bg-white w-3 h-3 rounded-full"} aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2" onClick={() => setCurrentSlide(2)}></button>
                            <button type="button" class={currentSlide === 3 ? "bg-button-purple-highlight w-3 h-3 rounded-full" : "bg-white w-3 h-3 rounded-full"} aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3" onClick={() => setCurrentSlide(3)}></button>
                            <button type="button" class={currentSlide === 4 ? "bg-button-purple-highlight w-3 h-3 rounded-full" : "bg-white w-3 h-3 rounded-full"} aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4" onClick={() => setCurrentSlide(4)}></button>
                       
                        </div>
                        {/* <!-- Slider controls --> */}
                        <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={prevSlide}>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent  group-hover:bg-transparent  group-focus:ring-4 group-focus:ring-transparent  group-focus:outline-none">
                                <svg class="w-4 h-4 text-white hover:text-button-purple-highlight focus:text-button-purple-highlight " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={nextSlide}>
                            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent  group-hover:bg-transparent  group-focus:ring-4 group-focus:ring-transparent  group-focus:outline-none">
                                <svg class="w-4 h-4 text-white hover:text-button-purple-highlight focus:text-button-purple-highlight" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
    );
}

export default Carousel2;