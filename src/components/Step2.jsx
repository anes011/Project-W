import '../styles/step2.css';
import HouseIcon from '../images&logos/pngwing.com (1).png';
import ApartmentIcon from '../images&logos/pngwing.com.png';

function Step2() {
    return(
        <div className="step-2">
            <h1>Which of these best describes your place?</h1>
            <div className="accommodation-btns">
                <button className="house-btn">
                    <img src={HouseIcon} alt="" />
                    <p>House</p>
                </button>

                <button className="apartment-btn">
                    <img src={ApartmentIcon} alt="" />
                    <p>Apartment</p>
                </button>
            </div>
        </div>
    )
}

export default Step2;