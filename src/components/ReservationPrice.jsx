import '../styles/reservationPrice.css';
import ReserveIcon from '../images&logos/calendar-checkmark-line-icon.svg';
import PaymentIcon from '../images&logos/face-to-face-payment-2-512.png';
import { useNavigate } from 'react-router-dom';

function ReservationPrice() {

    const redirect = useNavigate();

    const offer = localStorage.getItem('offerPressed');
    const user = localStorage.getItem('userAccount');

    return(
        <div className="reservation-price">
            <div className="price-table">
                {
                    offer !== null && (
                        <p className='res-price'><span>${JSON.parse(offer).price}</span>/night</p>
                    )
                }

                {
                    offer !== null && (
                        <div className="dates-container">
                            <div className="check-in">
                                <p>CHECK-IN</p>
                                <p>{JSON.parse(offer).checkIn}</p>
                            </div>

                            <div className="check-out">
                                <p>CHECK-OUT</p>
                                <p>{JSON.parse(offer).checkOut}</p>
                            </div>
                        </div>
                    )
                }

                {
                    user !== null && offer !== null ? JSON.parse(user)._id !== JSON.parse(offer).hostID && (
                        <button onClick={() => user === null && redirect('/signing-page')} className="reserve-btn">
                            <p>Reserve</p>
                            <img src={ReserveIcon} alt="" />
                        </button>
                    ) : (
                        <button onClick={() => user === null && redirect('/signing-page')} className="reserve-btn">
                            <p>Reserve</p>
                            <img src={ReserveIcon} alt="" />
                        </button>
                    )
                }
            </div>

            <div className="payment-instructions">
                <h1>How do I pay?</h1>

                <div className="payment-description">
                    <img src={PaymentIcon} alt="" />
                    <p>Our face-to-face payment method offers a secure and convenient way for users to settle transactions after a reservation has been accepted. This method ensures a personal and direct exchange between the involved parties, fostering trust and transparency in the payment process.</p>
                </div>

                <h1>After the reservation is accepted:</h1>

                <div className="step-1-res">
                    <p className='step-title'>Step 1:</p>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
                            <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                        </svg>
                        <p>You will need to pay us a small fee in order to receive the host's contact information.<br /> Please note that this fee is not involved in the accommodation's price. This fee is only to support our efforts in maintaining this platform.</p>
                    </div>
                </div>

                <div className="step-2-res">
                    <p className='step-title'>Step 2:</p>

                    <p>After the payment's success, you will be granted the host's contact information:</p>

                    <div className="contact-info">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <p>His phone number</p>
                        </div>

                        <p className='and'>And</p>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                            </svg>
                            <p>His email</p>
                        </div>
                    </div>
                </div>

                <div className="step-3-res">
                    <p className='step-title'>Step 3:</p>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        <p>Now that you have the host's contact, you can feel free to plan your discussion and payment <span>Personally</span> with the host him self. Using any method of payment you and the host agree on.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservationPrice;