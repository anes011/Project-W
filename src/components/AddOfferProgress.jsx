import { useState } from 'react';
import '../styles/addOfferProgress.css';
import SuccessIcon from '../images&logos/success-svgrepo-com.svg';

function AddOfferProgress() {

    const [guestsCount, setGuestsCount] = useState(1);
    const [bedroomsCount, setBedroomsCount] = useState(3);
    const [bedsCount, setBedsCount] = useState(1);
    const [bathroomsCount, setBathroomsCount] = useState(2);

    const [wifi, setWifi] = useState(false);
    const [tv, setTv] = useState(false);
    const [washer, setWasher] = useState(false);
    const [parking, setParking] = useState(false);
    const [airConditioning, setAirConditioning] = useState(false);
    const [pool, setPool] = useState(false);
    const [firstAid, setFirstAid] = useState(false);
    const [fireDistinguisher, setFireDistinguisher] = useState(false);

    const handleGuestsMinus = () => {
        if (guestsCount >= 1) {
            setGuestsCount(guestsCount - 1);
        }else {
            return
        }
    }

    const handleGuestsPlus = () => {
        setGuestsCount(guestsCount + 1);
    }

    const handleBedroomsMinus = () => {
        if (bedroomsCount >= 1) {
            setBedroomsCount(bedroomsCount - 1);
        }else {
            return
        }
    }

    const handleBedroomsPlus = () => {
        setBedroomsCount(bedroomsCount + 1);
    }

    const handleBedsMinus = () => {
        if (bedsCount >= 1) {
            setBedsCount(bedsCount - 1);
        }else {
            return
        }
    }

    const handleBedsPlus = () => {
        setBedsCount(bedsCount + 1);
    }

    const handleBathroomsMinus = () => {
        if (bathroomsCount >= 1) {
            setBathroomsCount(bathroomsCount - 1);
        }else {
            return
        }
    }

    const handleBathroomsPlus = () => {
        setBathroomsCount(bathroomsCount + 1);
    }

    return(
        <div className="add-offer-progress">
            <div className="steps-container">
                {/* <div className="step-1-container">
                    <p><span>Lorem ipsum</span> dolor sit amet consectetur, adipisicing elit. Nihil maiores exercitationem, libero cupiditate blanditiis reprehenderit odio atque quos? Facilis doloremque itaque commodi ea esse ab recusandae rem nam accusantium adipisci.</p>
                    <img src="https://cdn.wallpapersafari.com/39/91/RaQBrU.jpg" alt="" />
                </div> */}

                {/* <div className="step-2-container">
                    <h1>Which of these best describes your place?</h1>
                    <div className="accommodation-btns">
                        <button className="house-btn">
                            <img src={HouseIcon} alt="" />
                            <p>House</p>
                        </button>

                        <button className="apartment-btn">
                            <img src={ApartmentIcon} alt="" />
                            <p>Apartment</p>
                        </button>
                    </div>
                </div> */}

                {/* <div className="step-3-container">
                    <h1>What type of place will guests have?</h1>

                    <button className="entire-house-btn">
                        <div className="description-container">
                            <p>An entire place</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, exercitationem.</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                        </svg>
                    </button>

                    <button className="room-btn">
                        <div className="description-container">
                            <p>A room</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae, eos fugiat inventore quidem similique quos voluptas explicabo aut commodi!</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
                            <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                        </svg>
                    </button>

                    <button className="shared-room-btn">
                        <div className="description-container">
                            <p>A shared room</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nam in repellat omnis, quia voluptate!</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                        </svg>
                    </button>
                </div> */}

                {/* <div className="step-4-container">
                    <h1>Where's your place located?</h1>
                    <p>Your address is only shared with guests after they’ve made a reservation.</p>

                    <div className="address-input">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <input type="text" placeholder='Your address...?'/>
                    </div>
                </div> */}

                {/* <div className="step-5-container">
                    <h1>Share some basics about your place</h1>
                    <p>You'll add more details later, like bed types.</p>

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
                </div> */}

                {/* <div className="step-6-container">
                    <h1>Tell guests what your place has to offer</h1>

                    <div className="amenities-container">
                        <button onClick={() => setWifi(!wifi)} className={wifi ? 'wifi-btn amen-btn-active' : 'wifi-btn amen-btn'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 6c3.537 0 6.837 1.353 9.293 3.809l1.414-1.414C19.874 5.561 16.071 4 12 4c-4.071.001-7.874 1.561-10.707 4.395l1.414 1.414C5.163 7.353 8.463 6 12 6zm5.671 8.307c-3.074-3.074-8.268-3.074-11.342 0l1.414 1.414c2.307-2.307 6.207-2.307 8.514 0l1.414-1.414z"></path><path d="M20.437 11.293c-4.572-4.574-12.301-4.574-16.873 0l1.414 1.414c3.807-3.807 10.238-3.807 14.045 0l1.414-1.414z"></path><circle cx="12" cy="18" r="2"></circle></svg>
                            <p>wifi</p>
                        </button>

                        <button onClick={() => setTv(!tv)} className={tv ? 'tv-btn amen-btn-active' : 'tv-btn amen-btn'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tv-fill" viewBox="0 0 16 16">
                                <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z"/>
                            </svg>
                            <p>TV</p>
                        </button>

                        <button onClick={() => setWasher(!washer)} className={washer ? 'washer-btn amen-btn-active' : 'washer-btn amen-btn'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 22h16a1 1 0 0 0 1-1V5c0-1.654-1.346-3-3-3H6C4.346 2 3 3.346 3 5v16a1 1 0 0 0 1 1zM18 3.924a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path><path d="M12.766 16.929c1.399-.261 2.571-1.315 3.023-2.665a3.853 3.853 0 0 0-.153-2.893.482.482 0 0 0-.544-.266c-.604.149-1.019.448-1.5.801-.786.577-1.765 1.294-3.592 1.294-.813 0-1.45-.146-1.984-.354l-.013.009a4.006 4.006 0 0 0 4.763 4.074z"></path></svg>
                            <p>Washer</p>
                        </button>

                        <button onClick={() => setParking(!parking)} className={parking ? 'parking-btn amen-btn-active' : 'parking-btn amen-btn'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
                                <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
                            </svg>
                            <p>Parking</p>
                        </button>

                        <button onClick={() => setAirConditioning(!airConditioning)} className={airConditioning ? 'air-conditioning-btn amen-btn-active' : 'air-conditioning-btn amen-btn'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-snow" viewBox="0 0 16 16">
                                <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585A1.5 1.5 0 0 1 5 12.5z"/>
                                <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1.293l.646-.647a.5.5 0 0 1 .708.708L9 5.207v1.927l1.669-.963.495-1.85a.5.5 0 1 1 .966.26l-.237.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.884.237a.5.5 0 1 1-.26.966l-1.848-.495L9.5 8l1.669.963 1.849-.495a.5.5 0 1 1 .258.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.237.883a.5.5 0 1 1-.966.258L10.67 9.83 9 8.866v1.927l1.354 1.353a.5.5 0 0 1-.708.708L9 12.207V13.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                            <p>Air conditioning</p>
                        </button>

                        <button onClick={() => setPool(!pool)} className={pool ? 'pool-btn amen-btn-active' : 'pool-btn amen-btn'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.996 9c1.413 0 2.16-.747 2.705-1.293.49-.49.731-.707 1.292-.707s.802.217 1.292.707C11.83 8.253 12.577 9 13.991 9c1.415 0 2.163-.747 2.71-1.293.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 8.253 20.585 9 22 9V7c-.563 0-.804-.217-1.295-.707C20.159 5.747 19.411 5 17.996 5s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708-.562 0-.802-.217-1.292-.707C12.154 5.747 11.407 5 9.993 5s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 5.747 3.413 5 2 5v2c.561 0 .801.217 1.291.707C3.836 8.253 4.583 9 5.996 9zm0 5c1.413 0 2.16-.747 2.705-1.293.49-.49.731-.707 1.292-.707s.802.217 1.292.707c.545.546 1.292 1.293 2.706 1.293 1.415 0 2.163-.747 2.71-1.293.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 13.253 20.585 14 22 14v-2c-.563 0-.804-.217-1.295-.707-.546-.546-1.294-1.293-2.709-1.293s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708-.562 0-.802-.217-1.292-.707C12.154 10.747 11.407 10 9.993 10s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 10.747 3.413 10 2 10v2c.561 0 .801.217 1.291.707C3.836 13.253 4.583 14 5.996 14zm0 5c1.413 0 2.16-.747 2.705-1.293.49-.49.731-.707 1.292-.707s.802.217 1.292.707c.545.546 1.292 1.293 2.706 1.293 1.415 0 2.163-.747 2.71-1.293.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 18.253 20.585 19 22 19v-2c-.563 0-.804-.217-1.295-.707-.546-.546-1.294-1.293-2.709-1.293s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708-.562 0-.802-.217-1.292-.707C12.154 15.747 11.407 15 9.993 15s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 15.747 3.413 15 2 15v2c.561 0 .801.217 1.291.707C3.836 18.253 4.583 19 5.996 19z"></path></svg>
                            <p>Pool</p>
                        </button>

                        <button onClick={() => setFirstAid(!firstAid)} className={firstAid ? 'first-aid-btn amen-btn-active' : 'first-aid-btn amen-btn'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bandaid" viewBox="0 0 16 16">
                                <path d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242ZM12.293 8 8.027 3.734 3.738 8.031 8 12.293 12.293 8Zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492.001-.002Z"/>
                                <path d="M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707ZM8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707Z"/>
                            </svg>
                            <p>First aid kit</p>
                        </button>

                        <button onClick={() => setFireDistinguisher(!fireDistinguisher)} className={fireDistinguisher ? 'fire-distinguisher-btn amen-btn-active' : 'fire-distinguisher-btn amen-btn'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                                <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
                            </svg>
                            <p>Fire distinguisher</p>
                        </button>
                    </div>
                </div> */}

                {/* <div className="step-7-container">
                    <h1>Add some photos of your house</h1>

                    <label className='upload-photo-container' htmlFor="file-input">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
                            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
                        </svg>
                        <p>Drag your photos here</p>
                    </label>
                    <input className='input-file' type="file" id='file-input' />
                </div> */}

                {/* <div className="step-8-container">
                    <h1>Now, let's give your house a title</h1>
                    <p>Short titles work best. Have fun with it—you can always change it later.</p>

                    <textarea className='text-area' name="" id="" cols="47" rows="4"></textarea>
                </div> */}

                {/* <div className="step-9-container">
                    <h1>Create your description</h1>
                    <p>Share what makes your place special.</p>

                    <textarea className='text-area' name="" id="" cols="47" rows="4"></textarea>
                </div> */}

                {/* <div className="step-10-container">
                    <h1>Now, set your price</h1>
                    <p>You can change it anytime.</p>

                    <div className="price-container">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
                            <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                        </svg>
                        <input type="text" />
                    </div>
                </div> */}

                <div className="steps-end-container">
                    <img className='watch-gif' src="https://i.pinimg.com/originals/c9/bd/7a/c9bd7a16beae0bd10b56eb511434b73c.gif" alt="" />

                    <div className="success-container">
                        <img src={SuccessIcon} alt="" />
                        <p>Your offer has been created successfully!</p>
                        <p>Give it some time untill people can see your offer</p>
                    </div>
                </div>

                <div className="progress-bar"></div>
            </div>

            <div className="back-next-container">
                <button className="back-btn">Back</button>
                <button className="next-btn">Next</button>
            </div>
        </div>
    )
}

export default AddOfferProgress;