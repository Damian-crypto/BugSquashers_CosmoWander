function RadioGroupPayment(props) {

    const { selectedRadio, handleRadioChange } = props;

    return (
        <div class="grid grid-rows-2 grid-cols-2">
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
                        Crypto Debit Card
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
                        (P2P) Payment Wallet
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
                        Bio-metric Crypto Wallet
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


        </div>
    );
}

export default RadioGroupPayment;