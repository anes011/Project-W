import { useContext, useEffect, useState } from 'react';
import '../styles/step5.css';
import data from '../Context';

function Step5() {

    const {setGuests, setBedrooms, setBeds, setBathrooms} = useContext(data);

    const [guestsCount, setGuestsCount] = useState(1);
    const [bedroomsCount, setBedroomsCount] = useState(3);
    const [bedsCount, setBedsCount] = useState(1);
    const [bathroomsCount, setBathroomsCount] = useState(2);

    useEffect(() => {
        setGuests(guestsCount);
        setBedrooms(bedroomsCount);
        setBeds(bedsCount);
        setBathrooms(bathroomsCount);
    });

    const handleGuestsMinus = () => {
        if (guestsCount > 0) {
            setGuestsCount(guestsCount - 1);
        }else {
            return
        }
    }

    const handleGuestsPlus = () => {
        setGuestsCount(guestsCount + 1);
    }

    const handleBedroomsMinus = () => {
        if (bedroomsCount > 0) {
            setBedroomsCount(bedroomsCount - 1);
        }else {
            return
        }
    }

    const handleBedroomsPlus = () => {
        setBedroomsCount(bedroomsCount + 1);
    }

    const handleBedsMinus = () => {
        if (bedsCount > 0) {
            setBedsCount(bedsCount - 1);
        }else {
            return
        }
    }

    const handleBedsPlus = () => {
        setBedsCount(bedsCount + 1);
    }

    const handleBathroomsMinus = () => {
        if (bathroomsCount > 0) {
            setBathroomsCount(bathroomsCount - 1);
        }else {
            return
        }
    }

    const handleBathroomsPlus = () => {
        setBathroomsCount(bathroomsCount + 1);
    }

    return(
        <div className="step-5">
            <h1>What does your place offer?</h1>

            <div className="guests-container">
                <p>Guests</p>

                <div className="minus-plus-container">
                    <button onClick={handleGuestsMinus} className="minus-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </button>
                    <p>{guestsCount}</p>
                    <button onClick={handleGuestsPlus} className="plus-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="bedrooms-container">
                <p>Bedrooms</p>

                <div className="minus-plus-container">
                    <button onClick={handleBedroomsMinus} className="minus-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </button>
                    <p>{bedroomsCount}</p>
                    <button onClick={handleBedroomsPlus} className="plus-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="beds-container">
                <p>Beds</p>

                <div className="minus-plus-container">
                    <button onClick={handleBedsMinus} className="minus-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </button>
                    <p>{bedsCount}</p>
                    <button onClick={handleBedsPlus} className="plus-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="bathrooms-container">
                <p>Bathrooms</p>

                <div className="minus-plus-container">
                    <button onClick={handleBathroomsMinus} className="minus-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </button>
                    <p>{bathroomsCount}</p>
                    <button onClick={handleBathroomsPlus} className="plus-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Step5;