import '../styles/hero.css';

function Hero() {
    return(
        <div className="hero">
            <h1 className='hero-text'>Book your best <span className='places'>Places</span></h1>
            <div className="slide-container">
                <div className="image-container">
                    <img src="https://foyr.com/learn/wp-content/uploads/2022/05/family-room-in-a-house-1024x683.jpg" alt="" />
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