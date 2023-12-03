import '../styles/reservationsSubmitted.css';
import ReserveIcon from '../images&logos/calendar-checkmark-line-icon.svg';
import { useEffect, useState } from 'react';

function ReservationsSubmitted() {

    const [apiData, setApiData] = useState([]);

    const user = localStorage.getItem('userAccount');

    useEffect(() => {
        const reservationApi = async () => {
            try {
                const response = await fetch('http://localhost:4000/reservation');
                const data = await response.json();
                setApiData(data.reservations);
            } catch (err) {
                console.error(err);
            }
        };

        reservationApi();
    }, []);

    const acceptReservation = (_id) => {
        const target = apiData.find((x) => x._id === _id);

        const deleteReservationApi = async () => {
            try {
                const response = await fetch(`http://localhost:4000/reservation/${target._id}`, {
                    method: 'DELETE'
                });
                const data = await response.json();
            } catch (err) {
                console.error(err);
            }
        };

        if (user !== null) {
            const acceptReservationApi = async () => {
                try {
                    const response = await fetch('http://localhost:4000/acceptedReservation', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            reservistID: target.reservistID,
                            offerTitle: target.offerTitle,
                            hostPhoto: JSON.parse(user).profilePhoto,
                            hostName: JSON.parse(user).userName,
                            hostEmail: JSON.parse(user).email,
                            hostPhone: JSON.parse(user).phoneNumber
                        })
                    });
                    const data = await response.json();
                    deleteReservationApi();
                    window.location.reload();
                } catch (err) {
                    console.error(err);
                }
            };

            acceptReservationApi();
        }
    };

    const rejectReservation = (_id) => {
        const target = apiData.find((x) => x._id === _id);

        const deleteReservationApi = async () => {
            try {
                const response = await fetch(`http://localhost:4000/reservation/${target._id}`, {
                    method: 'DELETE'
                });
                const data = await response.json();
                window.location.reload();
            } catch (err) {
                console.error(err);
            }
        };

        deleteReservationApi();
    };

    return(
        <div className="reservations-submitted">
            <div className="center-container">
                <div className="person-reserved">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                    <p>Person reserved</p>
                </div>

                <div className="reservations">
                    <img src={ReserveIcon} alt="" />
                    <p>Reservations</p>
                </div>

                <div className="reservation-date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    <p>Date</p>
                </div>

                <div className="decision">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 16 16">
                        <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                        <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    </svg>
                    <p>Decision</p>
                </div>



                {
                    user !== null && apiData.map((x) => {
                        if (x.hostID === JSON.parse(user)._id) {
                            return(
                                <>
                                    <div className="person">
                                        <img src={`http://localhost:4000/${x.reservistPhoto}`} alt={x.reservistPhoto} className="profile-photo" />
                                        <p>{x.reservistName}</p>
                                    </div>

                                    <div className="res-title">
                                        <p>{x.offerTitle}</p>
                                    </div>

                                    <div className="res-date">
                                        <p>{x.date}</p>
                                    </div>

                                    <div className="decision-btns">
                                        <button onClick={() => acceptReservation(x._id)} className="accept">Accept</button>
                                        <button onClick={() => rejectReservation(x._id)} className="reject">Delete</button>
                                    </div>
                                </>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default ReservationsSubmitted;