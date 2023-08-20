export function CommonButton1(props) {

    //for cancel & confrim
    const { buttonText } = props;
    return (
        <div class="z-20 w-auto absolute 
            before:absolute before:w-3 before:h-3 before:top-6 before:left-6 before:border-l-2 before:border-l-orange-dark  before:border-t-2 before:border-t-orange-dark 
            after:absolute after:w-3 after:h-3 after:bottom-6 after:right-6 after:border-b-2 after:border-b-orange-dark   after:border-r-2 after:border-r-orange-dark   ">
            <button class="z-10 w-auto h-auto relative bg-transparent m-6 text-white-white py-2.5 px-10 text-sm font-medium border-orange-dark border-x-4 border-y-4 border-opacity-25">{buttonText}</button>
            <span class="z-20 w-auto absolute 
            before:absolute before:w-3 before:h-3 before:top-60px before:right-151.5px before:border-l-2 before:border-l-orange-dark   before:border-b-2 before:border-b-orange-dark 
            after:absolute after:w-3 after:h-3 after:top-6 after:right-6 after:border-t-2 after:border-t-orange-dark  after:border-r-2 after:border-r-orange-dark"></span>
        </div>
    );
}

export function MoreInfoButton (){
    //for more info
    return (
        <div class="z-20 w-auto absolute 
            before:absolute before:w-3 before:h-3 before:top-6 before:left-6 before:border-l-2 before:border-l-orange-dark  before:border-t-2 before:border-t-orange-dark 
            after:absolute after:w-3 after:h-3 after:bottom-6 after:right-6 after:border-b-2 after:border-b-orange-dark   after:border-r-2 after:border-r-orange-dark   ">
            <button class="z-10 w-auto h-auto relative bg-transparent m-6 text-white-white py-2.5 px-10 text-sm font-medium border-orange-dark border-x-4 border-y-4 border-opacity-25">More Info</button>
            <span class="z-20 w-auto absolute 
            before:absolute before:w-3 before:h-3 before:top-60px before:right-177px before:border-l-2 before:border-l-orange-dark   before:border-b-2 before:border-b-orange-dark 
            after:absolute after:w-3 after:h-3 after:top-6 after:right-6 after:border-t-2 after:border-t-orange-dark  after:border-r-2 after:border-r-orange-dark"></span>
        </div>
    );
}