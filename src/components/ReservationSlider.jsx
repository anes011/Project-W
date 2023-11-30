import '../styles/reservationSlider.css';
import HouseImage from '../images&logos/The-Balmoral-Executive-View-Room-e1682260891619.jpg';
import VillaImage from '../images&logos/villa-sea-view-21.jpg';
import { useRef, useEffect, useContext, useState } from 'react';
import data from '../Context';

function ReservationSlider() {

    const [images, setImages] = useState([]);
    const offer = localStorage.getItem('offerPressed');

    useEffect(() => {
        offer !== null && setImages(JSON.parse(offer).offerImages);
    }, []);

    const sliderContainer = useRef(null);

    const handlePrevious = () => {
        if (sliderContainer.current) {
            sliderContainer.current.scrollLeft -= sliderContainer.current.clientWidth;
        }
    };

    const handleNext = () => {
        if (sliderContainer.current) {
            sliderContainer.current.scrollLeft += sliderContainer.current.clientWidth;
        }
    };

    useEffect(() => {
        const interval1 = setInterval(() => {
            if (sliderContainer.current) {
                sliderContainer.current.scrollLeft += sliderContainer.current.clientWidth;
            }
        }, 1000);

        const interval2 = setInterval(() => {
            if (sliderContainer.current) {
                sliderContainer.current.scrollLeft = 0;
            }
        }, 5000);

        sliderContainer.current.addEventListener('mouseover', () => {
            clearInterval(interval1);
            clearInterval(interval2);
        });
    }, []);

    return(
        <div className="reservation-slider">
            <div className='center'>
                <div ref={sliderContainer} className="slider-container">
                    {
                        images.map((x) => (
                            <img className='house-image' src={`http://localhost:4000/${x}`} alt={x} />
                        ))
                    }
                </div>

                <button onClick={handlePrevious} className="prev-btn-slider">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                    </svg>
                </button>
                <button onClick={handleNext} className="next-btn-slider">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default ReservationSlider;