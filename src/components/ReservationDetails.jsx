import '../styles/reservationDetails.css';
import SuccessIcon from '../images&logos/success-svgrepo-com.svg';
import StarsIcon from '../images&logos/five_star_rating.svg';
import MapIcon from '../images&logos/—Pngtree—map icon vector illustration in_4182330.png';
import { useEffect, useState } from 'react';
import { getTranslation } from '../translations/translationService';

function ReservationDetails() {

    const offer = localStorage.getItem('offerPressed');

    const [host, setHost] = useState(null);

    useEffect(() => {
        const userByIdApi = async () => {
            if (offer !== null) {
                try {
                    const response = await fetch(`http://localhost:4000/users/${JSON.parse(offer).hostID}`);
                    const data = await response.json();
                    setHost(data.user);
                } catch (err) {
                    console.error(err);
                }
            }
        };

        userByIdApi();
    }, []);

    return(
        <div className="reservation-details">
            {
                offer !== null && (
                    <h1 className='title'>{JSON.parse(offer).title}</h1>
                )
            }

            {
                host !== null && (
                    <div className="profile">
                        <img src={`http://localhost:4000/${host.profilePhoto}`} alt={host.profilePhoto} className="profile-photo" />
                        <p>{host.userName}</p>
                        <img src={SuccessIcon} alt="" />
                    </div>
                )
            }

            <div className="description">
                {
                    offer !== null && (
                        <p>{JSON.parse(offer).description}</p>
                    )
                }
            </div>

            <div className="accommodation-type-rate">
                {
                    offer !== null && (
                        <div className="type-container">
                            {
                                JSON.parse(offer).placeType === 'house' ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                                        </svg>
                                        <p>{getTranslation(localStorage.getItem('language'), 'house')}</p>
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building-fill" viewBox="0 0 16 16">
                                            <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"/>
                                        </svg>
                                        <p>{getTranslation(localStorage.getItem('language'), 'apartment')}</p>
                                    </>
                                )
                            }
                        </div>
                    )
                }

                <img className='stars' src={StarsIcon} alt="" />
            </div>

            <div className="place-type">
                <h1>{getTranslation(localStorage.getItem('language'), 'offerPage spaceGiven')}</h1>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
                        <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                    </svg>

                    {
                        offer !== null && JSON.parse(offer).spaceGiven === 'entirePlace' && (
                            <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-3 entirePlace')}</p>
                        )
                    }

                    {
                        offer !== null && JSON.parse(offer).spaceGiven === 'room' && (
                            <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-3 room')}</p>
                        )
                    }

                    {
                        offer !== null && JSON.parse(offer).spaceGiven === 'sharedRoom' && (
                            <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-3 sharedRoom')}</p>
                        )
                    }
                </div>
            </div>

            <div className="address-container">
                <h1>{getTranslation(localStorage.getItem('language'), 'location')}</h1>

                <div className="location">
                    <img src={MapIcon} alt="" />
                    {
                        offer !== null && (
                            <p>{JSON.parse(offer).location}</p>
                        )
                    }
                </div>
            </div>

            {
                offer !== null && (
                    <div className="more-details">
                        <div className="guests">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                            </svg>
                            <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-5 guests')}</p>
                            <p>{JSON.parse(offer).guests}</p>
                        </div>

                        <div className="bedrooms">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 9.556V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.526 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.474-.811-2.75-2-3.444zM11 9H6V7h5v2zm7 0h-5V7h5v2z"></path></svg>
                            <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-5 bedrooms')}</p>
                            <p>{JSON.parse(offer).bedrooms}</p>
                        </div>

                        <div className="beds">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 9.556V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.526 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.474-.811-2.75-2-3.444zM11 9H6V7h5v2zm7 0h-5V7h5v2z"></path></svg>
                            <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-5 beds')}</p>
                            <p>{JSON.parse(offer).beds}</p>
                        </div>

                        <div className="bathrooms">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 18.33A6.78 6.78 0 0 0 19.5 15a6.73 6.73 0 0 0-1.5 3.33 1.51 1.51 0 1 0 3 0zM11 20.33A6.78 6.78 0 0 0 9.5 17 6.73 6.73 0 0 0 8 20.33 1.59 1.59 0 0 0 9.5 22a1.59 1.59 0 0 0 1.5-1.67zM16 20.33A6.78 6.78 0 0 0 14.5 17a6.73 6.73 0 0 0-1.5 3.33A1.59 1.59 0 0 0 14.5 22a1.59 1.59 0 0 0 1.5-1.67zM6 18.33A6.78 6.78 0 0 0 4.5 15 6.73 6.73 0 0 0 3 18.33 1.59 1.59 0 0 0 4.5 20 1.59 1.59 0 0 0 6 18.33zM2 12h20v2H2zM13 4.07V2h-2v2.07A8 8 0 0 0 4.07 11h15.86A8 8 0 0 0 13 4.07z"></path></svg>
                            <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-5 bathrooms')}</p>
                            <p>{JSON.parse(offer).bathrooms}</p>
                        </div>
                    </div>
                )
            }

            {
                offer !== null && (
                    <div className="provided-amenities">
                        {
                            JSON.parse(offer).wifi && (
                                <div className="wifi">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M12 6c3.537 0 6.837 1.353 9.293 3.809l1.414-1.414C19.874 5.561 16.071 4 12 4c-4.071.001-7.874 1.561-10.707 4.395l1.414 1.414C5.163 7.353 8.463 6 12 6zm5.671 8.307c-3.074-3.074-8.268-3.074-11.342 0l1.414 1.414c2.307-2.307 6.207-2.307 8.514 0l1.414-1.414z"></path><path d="M20.437 11.293c-4.572-4.574-12.301-4.574-16.873 0l1.414 1.414c3.807-3.807 10.238-3.807 14.045 0l1.414-1.414z"></path><circle cx="12" cy="18" r="2"></circle></svg>
                                    <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-6 wifi')}</p>
                                </div>
                            )
                        }

                        {
                            JSON.parse(offer).tv && (
                                <div className="tv">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tv-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z"/>
                                    </svg>
                                    <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-6 tv')}</p>
                                </div>
                            )
                        }

                        {
                            JSON.parse(offer).washer && (
                                <div className="washer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M4 22h16a1 1 0 0 0 1-1V5c0-1.654-1.346-3-3-3H6C4.346 2 3 3.346 3 5v16a1 1 0 0 0 1 1zM18 3.924a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path><path d="M12.766 16.929c1.399-.261 2.571-1.315 3.023-2.665a3.853 3.853 0 0 0-.153-2.893.482.482 0 0 0-.544-.266c-.604.149-1.019.448-1.5.801-.786.577-1.765 1.294-3.592 1.294-.813 0-1.45-.146-1.984-.354l-.013.009a4.006 4.006 0 0 0 4.763 4.074z"></path></svg>
                                    <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-6 washer')}</p>
                                </div>
                            )
                        }

                        {
                            JSON.parse(offer).parking && (
                                <div className="parking">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front-fill" viewBox="0 0 16 16">
                                        <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
                                    </svg>
                                    <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-6 parking')}</p>
                                </div>
                            )
                        }

                        {
                            JSON.parse(offer).airConditioning && (
                                <div className="air-conditioning">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-thermometer-snow" viewBox="0 0 16 16">
                                        <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585A1.5 1.5 0 0 1 5 12.5z"/>
                                        <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1.293l.646-.647a.5.5 0 0 1 .708.708L9 5.207v1.927l1.669-.963.495-1.85a.5.5 0 1 1 .966.26l-.237.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.884.237a.5.5 0 1 1-.26.966l-1.848-.495L9.5 8l1.669.963 1.849-.495a.5.5 0 1 1 .258.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.237.883a.5.5 0 1 1-.966.258L10.67 9.83 9 8.866v1.927l1.354 1.353a.5.5 0 0 1-.708.708L9 12.207V13.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5z"/>
                                    </svg>
                                    <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-6 airConditioning')}</p>
                                </div>
                            )
                        }

                        {
                            JSON.parse(offer).pool && (
                                <div className="pool">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="M5.996 9c1.413 0 2.16-.747 2.705-1.293.49-.49.731-.707 1.292-.707s.802.217 1.292.707C11.83 8.253 12.577 9 13.991 9c1.415 0 2.163-.747 2.71-1.293.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 8.253 20.585 9 22 9V7c-.563 0-.804-.217-1.295-.707C20.159 5.747 19.411 5 17.996 5s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708-.562 0-.802-.217-1.292-.707C12.154 5.747 11.407 5 9.993 5s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 5.747 3.413 5 2 5v2c.561 0 .801.217 1.291.707C3.836 8.253 4.583 9 5.996 9zm0 5c1.413 0 2.16-.747 2.705-1.293.49-.49.731-.707 1.292-.707s.802.217 1.292.707c.545.546 1.292 1.293 2.706 1.293 1.415 0 2.163-.747 2.71-1.293.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 13.253 20.585 14 22 14v-2c-.563 0-.804-.217-1.295-.707-.546-.546-1.294-1.293-2.709-1.293s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708-.562 0-.802-.217-1.292-.707C12.154 10.747 11.407 10 9.993 10s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 10.747 3.413 10 2 10v2c.561 0 .801.217 1.291.707C3.836 13.253 4.583 14 5.996 14zm0 5c1.413 0 2.16-.747 2.705-1.293.49-.49.731-.707 1.292-.707s.802.217 1.292.707c.545.546 1.292 1.293 2.706 1.293 1.415 0 2.163-.747 2.71-1.293.491-.49.732-.707 1.295-.707s.804.217 1.295.707C19.837 18.253 20.585 19 22 19v-2c-.563 0-.804-.217-1.295-.707-.546-.546-1.294-1.293-2.709-1.293s-2.162.747-2.709 1.292c-.491.491-.731.708-1.296.708-.562 0-.802-.217-1.292-.707C12.154 15.747 11.407 15 9.993 15s-2.161.747-2.706 1.293c-.49.49-.73.707-1.291.707s-.801-.217-1.291-.707C4.16 15.747 3.413 15 2 15v2c.561 0 .801.217 1.291.707C3.836 18.253 4.583 19 5.996 19z"></path></svg>
                                    <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-6 pool')}</p>
                                </div>
                            )
                        }

                        {
                            JSON.parse(offer).firstAidKit && (
                                <div className="first-aid">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bandaid" viewBox="0 0 16 16">
                                        <path d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242ZM12.293 8 8.027 3.734 3.738 8.031 8 12.293 12.293 8Zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492.001-.002Z"/>
                                        <path d="M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707ZM8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707Z"/>
                                    </svg>
                                    <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-6 firstAidKit')}</p>
                                </div>
                            )
                        }

                        {
                            JSON.parse(offer).fireDistinguisher && (
                                <div className="fire-distinguisher">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                                        <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
                                    </svg>
                                    <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-6 fireExtinguisher')}</p>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default ReservationDetails;