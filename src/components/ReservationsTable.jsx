import '../styles/reservationsTable.css';
import ReserveIcon from '../images&logos/calendar-checkmark-line-icon.svg';
import StatusIcon from '../images&logos/output-onlinepngtools.png';
import SuccessIcon from '../images&logos/output-onlinepngtools (2).png';
import { useEffect, useState } from 'react';


function ReservationsTable() {

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

    return(
        <div className="reservations-table">
            <div className="center-content">
                <div className="reservations">
                    <img src={ReserveIcon} alt="" />
                    <p>Reservations</p>
                </div>

                <div className="dates">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    <p>Dates</p>
                </div>

                <div className="location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                    <p>Location</p>
                </div>

                <div className="status">
                    <img src={StatusIcon} alt="" />
                    <p>Status</p>
                </div>
                
                
                
                {
                    user !== null && apiData.map((x) => {
                        if (x.reservistID === JSON.parse(user)._id) {
                            return(
                                <>
                                    <p className="res-title">{x.offerTitle}</p>
                                    <p className='res-date'>{`${x.date.slice(0, 4)} / ${x.date.slice(5, 7)} / ${x.date.slice(8, 10)}`}</p>
                                    <p className='res-location'>{x.offerLocation}</p>
                                    <p className='res-status-pending'>
                                        {
                                            x.Status === 'Pending' && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                                </svg>
                                            )
                                        }

                                        {
                                            x.Status === 'Succeeded' && (
                                                <img src={SuccessIcon} alt="" />
                                            )
                                        }

                                        {
                                            x.Status === 'Rejected' && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                                </svg>
                                            )
                                        }

                                        {x.Status}
                                    </p>
                                </>
                            )
                        }
                    })
                }

                <p className="res-title">Lorem, ipsum dolor.</p>
                <p className='res-date'>05/10/2023</p>
                <p className='res-location'>Lorem, ipsum.</p>
                <p className='res-status-rejected'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                    Rejected
                </p>

                <p className="res-title">Lorem, ipsum dolor.</p>
                <p className='res-date'>05/10/2023</p>
                <p className='res-location'>Lorem, ipsum.</p>
                <p className='res-status-succeeded'>
                    <img src={SuccessIcon} alt="" />
                    Succeeded
                </p>
            </div>
        </div>
    )
}

export default ReservationsTable;