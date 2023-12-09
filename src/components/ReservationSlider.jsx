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
            </div>
        </div>
    )
}

export default ReservationSlider;