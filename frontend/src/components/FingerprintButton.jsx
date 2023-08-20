function FingerprintButton(props) {

    const { handleFingerprintButtonClick, fingerprintCode, setFingerprintCode } = props;

    return (
        <div className="mt-2 grid grid-rows-2 items-center justify-center">

            <div>
                <input type="text" name="location" id="location" placeholder="•   •   •   •   •" value={fingerprintCode} class="text-center block w-full p-2.5 bg-white-white  text-white-white sm:text-sm bg-opacity-10 text-opacity-100 font-bold focus:outline-none" required="" onChange={(e) => setFingerprintCode(e.target.value)} />
                <label for="location" class="text-center block mb-2 text-sm font-medium text-orange-light ">Code</label>
            </div>

            <button class="mx-auto w-36 inline-flex items-center justify-center p-0.5 overflow-hidden text-sm "
                onClick={handleFingerprintButtonClick}
            >

                <span class="mx-auto w-36 relative px-5 py-2.5 transition-all ease-in duration-75 flex items-center justify-center">
                    <img class="w-auto h-auto mr-2" src="/images/fingerprint.png" alt="logo" />
                </span>
            </button>
        </div>
    );
}

export default FingerprintButton;