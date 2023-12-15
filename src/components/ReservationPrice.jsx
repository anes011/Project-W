import '../styles/reservationPrice.css';
import ReserveIcon from '../images&logos/calendar-checkmark-line-icon.svg';
import { useNavigate } from 'react-router-dom';
import { getTranslation } from '../translations/translationService';

function ReservationPrice() {

    const redirect = useNavigate();

    const offer = localStorage.getItem('offerPressed');
    const user = localStorage.getItem('userAccount');

    const reserve = () => {
        if (user === null) {
            redirect('/signing-page');
        } else {
            if (offer !== null && user !== null) {
                const reservationApi = async () => {
                    try {
                        const response = await fetch('https://project-w.onrender.com/reservation', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                reservistID: JSON.parse(user)._id,
                                hostID: JSON.parse(offer).hostID,
                                reservistPhoto: JSON.parse(user).profilePhoto,
                                reservistName: JSON.parse(user).userName,
                                offerTitle: JSON.parse(offer).title,
                                offerLocation: JSON.parse(offer).location,
                                Status: 'Pending'
                            })
                        });
                        const data = await response.json();
                        alert('Reservation placed successfully!');
                        redirect('/reservations-cart');
                    } catch (err) {
                        console.error(err);
                        alert(err);
                    }
                };

                reservationApi();
            }
        }
    };

    return(
        <div className="reservation-price">
            <div className="price-table">
                {
                    offer !== null && (
                        <p className='res-price'><span>${JSON.parse(offer).price}</span>/{getTranslation(localStorage.getItem('language'), 'price')}</p>
                    )
                }

                {
                    offer !== null && (
                        <div className="dates-container">
                            <div className="check-in">
                                <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-11 check-in')}</p>
                                <p>{JSON.parse(offer).checkIn}</p>
                            </div>

                            <div className="check-out">
                                <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-11 check-out')}</p>
                                <p>{JSON.parse(offer).checkOut}</p>
                            </div>
                        </div>
                    )
                }

                {
                    user !== null && offer !== null ? JSON.parse(user)._id !== JSON.parse(offer).hostID && (
                        <button onClick={reserve} className="reserve-btn">
                            <p>{getTranslation(localStorage.getItem('language'), 'reserve')}</p>
                            <img src={ReserveIcon} alt="" />
                        </button>
                    ) : (
                        <button onClick={reserve} className="reserve-btn">
                            <p>{getTranslation(localStorage.getItem('language'), 'reserve')}</p>
                            <img src={ReserveIcon} alt="" />
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default ReservationPrice;