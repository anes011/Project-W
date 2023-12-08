import { useContext, useEffect, useRef, useState } from 'react';
import '../styles/nav.css';
import { Link } from 'react-router-dom';
import data from '../Context';
import { useNavigate } from 'react-router-dom';
import { getTranslation } from '../translations/translationService';

function Nav() {

    const redirect = useNavigate();

    const user = localStorage.getItem('userAccount');

    const menuBtn = useRef(null);
    const menuDropDown = useRef(null);
    const nav = useRef(null);
    const searchBtn = useRef(null);
    const searchInput = useRef(null);

    const [dropDown, setDropDown] = useState(false);
    const [languageClicked, setLanguageClicked] = useState(false);
    const [addOfferInMenu, setAddOfferInMenu] = useState(false);
    const [profileInMenu, setProfileInMenu] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [userName, setUserName] = useState(null);
    const [openSearch, setOpenSearch] = useState(false);

    /*Notification code*/
    const [apiDataAccepted, setApiDataAccepted] = useState([]);
    const [apiDataRes, setApiDataRes] = useState([]);
    const [notificationIndicator, setNotificationIndicator] = useState(false);
    const [acceptedResIndicator, setAcceptedResIndicator] = useState(false);
    const [notificationIndicatorRes, setNotificationIndicatorRes] = useState(false);

    useEffect(() => {
        const acceptedReservationApi = async () => {
            try {
                const response = await fetch('http://localhost:4000/acceptedReservation');
                const data = await response.json();
                setApiDataAccepted(data.acceptedReservations);
            } catch (err) {
                console.error(err);
            }
        };

        acceptedReservationApi();
    }, []);

    useEffect(() => {
        user !== null && apiDataAccepted.map((x) => {
            if (x.reservistID === JSON.parse(user)._id) {
                if (x.new) {
                    setNotificationIndicator(true);
                    setAcceptedResIndicator(true);
                };
            }
        })
    });

    useEffect(() => {
        const reservationApi = async () => {
            try {
                const response = await fetch('http://localhost:4000/reservation');
                const data = await response.json();
                setApiDataRes(data.reservations);
            } catch (err) {
                console.error(err);
            }
        };

        reservationApi();
    }, []);

    useEffect(() => {
        user !== null && apiDataRes.map((x) => {
            if (x.hostID === JSON.parse(user)._id) {
                if (x.new) {
                    setNotificationIndicator(true);
                    setNotificationIndicatorRes(true);
                }
            }
        })
    });
    /*end of notification code*/

    const handleMenuDropDown = (e) => {
        e.stopPropagation();
        setDropDown(!dropDown);
    }

    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target !== menuBtn.current || e.target !== menuDropDown.current) {
                setDropDown(false);
                setLanguageClicked(false);
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target !== searchBtn.current || e.target !== searchInput.current) {
                setOpenSearch(false);
            }
        });
    });

    const responsiveNav = () => {
        window.addEventListener('resize', () => {
            if (nav.current) {
                if (nav.current.clientWidth <= 844) {
                    setAddOfferInMenu(true);
                } else {
                    setAddOfferInMenu(false);
                }

                if (nav.current.clientWidth <= 396) {
                    setProfileInMenu(true);
                } else {
                    setProfileInMenu(false);
                }
            }
        })
    
        if (nav.current) {
            if (nav.current.clientWidth <= 844) {
                setAddOfferInMenu(true);
            } else {
                setAddOfferInMenu(false);
            }

            if (nav.current.clientWidth <= 396) {
                setProfileInMenu(true);
            } else {
                setProfileInMenu(false);
            }
        }
    }

    useEffect(() => {
        responsiveNav();
    });

    useEffect(() => {
        if (user !== null) {
            setProfilePhoto(JSON.parse(user).profilePhoto);
            setUserName(JSON.parse(user).userName);
        }
    });    

    const logout = () => {
        localStorage.removeItem('userAccount');
        localStorage.setItem('signRoutes', 'true');
        redirect('/');
        window.location.reload();
    };

    const handleOpenSearch = (e) => {
        e.stopPropagation();
        setOpenSearch(!openSearch);
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            const searchApi = async () => {
                try {
                    const response = await fetch(`http://localhost:4000/addOffer/search?q=${searchInput.current.value}`);
                    const data = await response.json();
                    localStorage.setItem('search', JSON.stringify(data.result));
                    redirect('/search');
                    window.location.reload();
                } catch (err) {
                    console.error(err);
                }
            };

            if (searchInput.current.value !== '') {
                searchApi();
            }
        }
    };

    const setLanguageToArabic = () => {
        localStorage.setItem('language', 'ar');
        window.location.reload();
    };

    const setLanguageToEnglish = () => {
        localStorage.setItem('language', 'en');
        window.location.reload();
    };

    return(
        <div ref={nav} className="nav">
            <button ref={menuBtn} onClick={handleMenuDropDown} className="menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
                {
                    notificationIndicator && (
                        <div className="notification-dot"></div>
                    )
                }
            </button>

            {
                dropDown && (
                    <div onClick={(e) => e.stopPropagation()} ref={menuDropDown} className={localStorage.getItem('userAccount') === null ? 'menu-dropdown-no-account' : 'menu-dropdown'}>
                        {
                            profileInMenu && (
                                <div onClick={() => localStorage.getItem('userAccount') === null ? redirect('/signing-page') : redirect('/profile-page')} className="profile-section">
                                    <img src={profilePhoto !== null ? `http://localhost:4000/${profilePhoto}` : 'https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="" className="profile-photo" />
                                    <p>{userName !== null ? userName : 'User'}</p>
                                </div>
                            )
                        }

                        {
                            addOfferInMenu && (
                                <div onClick={() => localStorage.getItem('userAccount') === null ? redirect('/signing-page') : redirect('/add-offer')} className='add-offer-container menu-element'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-dotted" viewBox="0 0 16 16">
                                        <path d="M2.5 0c-.166 0-.33.016-.487.048l.194.98A1.51 1.51 0 0 1 2.5 1h.458V0H2.5zm2.292 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zm1.833 0h-.916v1h.916V0zm1.834 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zM13.5 0h-.458v1h.458c.1 0 .199.01.293.029l.194-.981A2.51 2.51 0 0 0 13.5 0zm2.079 1.11a2.511 2.511 0 0 0-.69-.689l-.556.831c.164.11.305.251.415.415l.83-.556zM1.11.421a2.511 2.511 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415L1.11.422zM16 2.5c0-.166-.016-.33-.048-.487l-.98.194c.018.094.028.192.028.293v.458h1V2.5zM.048 2.013A2.51 2.51 0 0 0 0 2.5v.458h1V2.5c0-.1.01-.199.029-.293l-.981-.194zM0 3.875v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 5.708v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 7.542v.916h1v-.916H0zm15 .916h1v-.916h-1v.916zM0 9.375v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .916v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .917v.458c0 .166.016.33.048.487l.98-.194A1.51 1.51 0 0 1 1 13.5v-.458H0zm16 .458v-.458h-1v.458c0 .1-.01.199-.029.293l.981.194c.032-.158.048-.32.048-.487zM.421 14.89c.183.272.417.506.69.689l.556-.831a1.51 1.51 0 0 1-.415-.415l-.83.556zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373c.158.032.32.048.487.048h.458v-1H2.5c-.1 0-.199-.01-.293-.029l-.194.981zM13.5 16c.166 0 .33-.016.487-.048l-.194-.98A1.51 1.51 0 0 1 13.5 15h-.458v1h.458zm-9.625 0h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zm1.834-1v1h.916v-1h-.916zm1.833 1h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                    </svg>
                                    <p>{getTranslation(localStorage.getItem('language'), 'menuBtn-7')}</p>
                                </div>
                            )
                        }

                        {
                            localStorage.getItem('userAccount') !== null && (
                                <Link className='link' to='/accepted-offers'>
                                    <div className="accepted-reservations menu-element">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ui-checks-grid" viewBox="0 0 16 16">
                                            <path d="M2 10h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm9-9h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 9a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-3zm0-10a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-3zM2 9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H2zm7 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3zM0 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.354.854a.5.5 0 1 0-.708-.708L3 3.793l-.646-.647a.5.5 0 1 0-.708.708l1 1a.5.5 0 0 0 .708 0l2-2z"/>
                                        </svg>
                                        <p>{getTranslation(localStorage.getItem('language'), 'menuBtn-1')}</p>
                                        {
                                            acceptedResIndicator && (
                                                <div className="notification-dot-accepted"></div>
                                            )
                                        }
                                    </div>
                                </Link>
                            )
                        }

                        {
                            localStorage.getItem('userAccount') !== null && (
                                <Link className='link' to='/my-offers'>
                                    <div className="my-offers menu-element">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-menu-button-wide-fill" viewBox="0 0 16 16">
                                            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                        <p>{getTranslation(localStorage.getItem('language'), 'menuBtn-2')}</p>
                                    </div>
                                </Link>
                            )
                        }

                        {
                            localStorage.getItem('userAccount') !== null && (
                                <Link className='link' to='/reservations-cart'>
                                    <div className="reservations-cart-container menu-element">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-houses-fill" viewBox="0 0 16 16">
                                            <path d="M7.207 1a1 1 0 0 0-1.414 0L.146 6.646a.5.5 0 0 0 .708.708L1 7.207V12.5A1.5 1.5 0 0 0 2.5 14h.55a2.51 2.51 0 0 1-.05-.5V9.415a1.5 1.5 0 0 1-.56-2.475l5.353-5.354L7.207 1Z"/>
                                            <path d="M8.793 2a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Z"/>
                                        </svg>
                                        <p>{getTranslation(localStorage.getItem('language'), 'menuBtn-3')}</p>
                                    </div>
                                </Link>
                            )
                        }

                        {
                            localStorage.getItem('userAccount') !== null && (
                                <Link className='link' to='/reservations-submitted'>
                                    <div className="received-reservations menu-element">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16">
                                            <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                                            <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                        <p>{getTranslation(localStorage.getItem('language'), 'menuBtn-4')}</p>
                                        {
                                            notificationIndicatorRes && (
                                                <div className="notification-dot-received"></div>
                                            )
                                        }
                                    </div>
                                </Link>
                            )
                        }

                        {
                            localStorage.getItem('userAccount') !== null && (
                                <div onClick={logout} className="logout menu-element">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                                        <path d="M7.5 1v7h1V1h-1z"/>
                                        <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
                                    </svg>
                                    <p>{getTranslation(localStorage.getItem('language'), 'menuBtn-5')}</p>
                                </div>
                            )
                        }

                        <div onClick={() => setLanguageClicked(!languageClicked)} className="language menu-element">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
                                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
                                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"/>
                            </svg>
                            <p>{getTranslation(localStorage.getItem('language'), 'menuBtn-6')}</p>
                        </div>

                        {
                            languageClicked && (
                                <div onClick={() => setLanguageClicked(false)} className='language-dropdown'>
                                    <p onClick={setLanguageToArabic}>العربية</p>
                                    <p onClick={setLanguageToEnglish}>English</p>
                                </div>
                            )
                        }
                    </div>
                )
            }

            <div onClick={() => redirect('/')} className="logo">LOGO</div>

            <div className="right-side-container">
                <button onClick={() => localStorage.getItem('userAccount') === null ? redirect('/signing-page') : redirect('/add-offer')} className='add-offer'>
                    <p>{getTranslation(localStorage.getItem('language'), 'menuBtn-7')}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-dotted" viewBox="0 0 16 16">
                        <path d="M2.5 0c-.166 0-.33.016-.487.048l.194.98A1.51 1.51 0 0 1 2.5 1h.458V0H2.5zm2.292 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zm1.833 0h-.916v1h.916V0zm1.834 0h-.917v1h.917V0zm1.833 0h-.917v1h.917V0zM13.5 0h-.458v1h.458c.1 0 .199.01.293.029l.194-.981A2.51 2.51 0 0 0 13.5 0zm2.079 1.11a2.511 2.511 0 0 0-.69-.689l-.556.831c.164.11.305.251.415.415l.83-.556zM1.11.421a2.511 2.511 0 0 0-.689.69l.831.556c.11-.164.251-.305.415-.415L1.11.422zM16 2.5c0-.166-.016-.33-.048-.487l-.98.194c.018.094.028.192.028.293v.458h1V2.5zM.048 2.013A2.51 2.51 0 0 0 0 2.5v.458h1V2.5c0-.1.01-.199.029-.293l-.981-.194zM0 3.875v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 5.708v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zM0 7.542v.916h1v-.916H0zm15 .916h1v-.916h-1v.916zM0 9.375v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .916v.917h1v-.917H0zm16 .917v-.917h-1v.917h1zm-16 .917v.458c0 .166.016.33.048.487l.98-.194A1.51 1.51 0 0 1 1 13.5v-.458H0zm16 .458v-.458h-1v.458c0 .1-.01.199-.029.293l.981.194c.032-.158.048-.32.048-.487zM.421 14.89c.183.272.417.506.69.689l.556-.831a1.51 1.51 0 0 1-.415-.415l-.83.556zm14.469.689c.272-.183.506-.417.689-.69l-.831-.556c-.11.164-.251.305-.415.415l.556.83zm-12.877.373c.158.032.32.048.487.048h.458v-1H2.5c-.1 0-.199-.01-.293-.029l-.194.981zM13.5 16c.166 0 .33-.016.487-.048l-.194-.98A1.51 1.51 0 0 1 13.5 15h-.458v1h.458zm-9.625 0h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zm1.834-1v1h.916v-1h-.916zm1.833 1h.917v-1h-.917v1zm1.833 0h.917v-1h-.917v1zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg>
                </button>

                <div onClick={() => localStorage.getItem('userAccount') === null ? redirect('/signing-page') : redirect('/profile-page')} className="profile-container">
                    <img src={profilePhoto !== null ? `http://localhost:4000/${profilePhoto}` : 'https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="" className="profile-photo" />
                    <div className="profile-p">
                        <p>{getTranslation(localStorage.getItem('language'), 'menuBtn profile-greeting')}</p>
                        <p>{userName !== null ? userName : 'User'}</p>
                    </div>
                </div>

                <button ref={searchBtn} onClick={handleOpenSearch} className='search-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </button>

                {
                    openSearch && (
                        <input onKeyDown={handleSearch} onClick={(e) => e.stopPropagation()} ref={searchInput} type="text" className="search-bar" placeholder={getTranslation(localStorage.getItem('language'), 'menuSearch placeholder')} />
                    )
                }
            </div>
        </div>
    )
}

export default Nav;