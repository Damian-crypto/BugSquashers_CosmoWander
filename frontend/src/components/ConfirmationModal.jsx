function ConfirmationModal (props) {

    const { message, handleYesButtonClick, handleNoButtonClick } = props;    

    return(
        <div class="z-50 backdrop-blur-sm bg-white/30 h-full w-full top-0  flex flex-col items-center justify-center absolute sm:w-2/3 sm:h-90 sm:top-10 border-l-2 border-orange-light text-bg-purple-dark text-2xl font-bold">
                        <div class="w-2/3 text-center">
                            <p>{message}</p>
                        </div>
                        <div class="mt-52">
                            <button type="button" class="mx-4 w-36 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                                onClick={handleNoButtonClick}
                            >

                                <span class="mx-auto w-36 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0">
                                    No
                                </span>
                            </button>
                            <button type="button" class="mx-4  w-36 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                                onClick={handleYesButtonClick}
                            >

                                <span class="mx-auto w-36 relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 group-hover:bg-opacity-0">
                                    Yes
                                </span>
                            </button>
                        </div>

                    </div>
    );
}

export default ConfirmationModal;