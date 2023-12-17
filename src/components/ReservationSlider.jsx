import '../styles/reservationSlider.css';
import { useRef, useEffect, useState } from 'react';

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
                            <img className='house-image' src={x} alt={x} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ReservationSlider;