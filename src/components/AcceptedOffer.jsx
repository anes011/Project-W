import '../styles/acceptedOffer.css';
import ReserveIcon from '../images&logos/calendar-checkmark-line-icon.svg';
import { useContext, useEffect, useState } from 'react';
import data from '../Context';
import { getTranslation } from '../translations/translationService';

function AcceptedOffer() {

    const user = localStorage.getItem('userAccount');

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const acceptedReservationApi = async () => {
            try {
                const response = await fetch('https://project-w.onrender.com/acceptedReservation');
                const data = await response.json();
                setApiData(data.acceptedReservations);
            } catch (err) {
                console.error(err);
            }
        };

        acceptedReservationApi();
    }, []);

    const markAsSeen = (_id) => {
        const target = apiData.find((x) => x._id === _id);

        const notificationApi = async () => {
            try {
                const response = await fetch(`https://project-w.onrender.com/acceptedReservation/${target._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        new: false
                    })
                });
                const data = await response.json();
                window.location.reload();
            } catch (err) {
                console.error(err);
            }
        };

        notificationApi();
    };

    const handleDelete = (_id) => {
        const target = apiData.find((x) => x._id === _id);

        const deleteApi = async () => {
            try {
                const response = await fetch(`https://project-w.onrender.com/acceptedReservation/${target._id}`, {
                    method: 'DELETE'
                });
                const data = await response.json();
                window.location.reload();
            } catch (err) {
                console.error(err);
            }
        };

        deleteApi();
    };

    return(
        <div className="accepted-offer">
            <div className="center-div">
                <div className="host">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                    <p>{getTranslation(localStorage.getItem('language'), 'host')}</p>
                </div>

                <div className="reservations">
                    <img src={ReserveIcon} alt="" />
                    <p>{getTranslation(localStorage.getItem('language'), 'reservations')}</p>
                </div>

                <div className="accepted-on">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    <p>{getTranslation(localStorage.getItem('language'), 'date')}</p>
                </div>

                <div className="email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                        <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                        <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                    </svg>
                    <p>{getTranslation(localStorage.getItem('language'), 'email')}</p>
                </div>

                <div className="phone-number">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <p>{getTranslation(localStorage.getItem('language'), 'phoneNumber')}</p>
                </div>

                {
                    user !== null && apiData.map((x) => {
                        if (x.reservistID === JSON.parse(user)._id) {
                            return(
                                <>
                                    <div className="host-profile">
                                        {
                                            x.new && (
                                                <button onClick={() => markAsSeen(x._id)} className='notification'></button>
                                            )
                                        }
                                        <button onClick={() => handleDelete(x._id)} className='delete-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                            </svg>
                                        </button>
                                        <img src={x.hostPhoto} alt={x.hostPhoto} className="profile-photo" />
                                        <p>{x.hostName}</p>
                                    </div>

                                    <div className="reservation-title">{x.offerTitle}</div>

                                    <div className="accepted-on-date">{`${x.date.slice(0, 4)} / ${x.date.slice(5, 7)} / ${x.date.slice(8, 10)}`}</div>

                                    <div className="host-email">{x.hostEmail}</div>

                                    <div className="host-phone">{x.hostPhone}</div>
                                </>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default AcceptedOffer;