import { useEffect, useRef } from 'react';
import '../styles/hero.css';
import { getTranslation } from '../translations/translationService';

function Hero() {

    const imageContainer = useRef(null);

    useEffect(() => {
        const interval1 = setInterval(() => {
            if (imageContainer.current) {
                imageContainer.current.scrollLeft += imageContainer.current.clientWidth;
            }
        }, 1000);

        const interval2 = setInterval(() => {
            if (imageContainer.current) {
                imageContainer.current.scrollLeft = 0;
            }
        }, 5000);

        imageContainer.current.addEventListener('mouseover', () => {
            clearInterval(interval1);
            clearInterval(interval2);
        });
    }, []);

    return(
        <div className="hero">
            <h1 className='hero-text'>{getTranslation(localStorage.getItem('language'), 'heroText part-1')} <span className='places'>{getTranslation(localStorage.getItem('language'), 'heroText part-2')}</span></h1>
            <div className="slide-container">
                <div ref={imageContainer} className="image-container">
                    <img className='model' src="https://foyr.com/learn/wp-content/uploads/2022/05/family-room-in-a-house-1024x683.jpg" alt="" />
                    <img className='model' src="https://cdn.homedsgn.com/wp-content/uploads/2012/11/House-of-Three-Rooms-01.jpg" alt="" />
                    <img className='model' src="https://cdn.homedsgn.com/wp-content/uploads/2012/11/House-of-Three-Rooms-02.jpg" alt="" />
                    <img className='model' src="https://cdn.homedsgn.com/wp-content/uploads/2012/11/House-of-Three-Rooms-03-800x535.jpg" alt="" />
                    <img className='model' src="https://cdn.homedsgn.com/wp-content/uploads/2012/11/House-of-Three-Rooms-04-800x533.jpg" alt="" />
                </div>
                <div className="our-offers">
                    <p>Our offers</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default Hero;