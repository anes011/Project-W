import '../styles/step2.css';
import HouseIcon from '../images&logos/pngwing.com (1).png';
import ApartmentIcon from '../images&logos/pngwing.com.png';
import data from '../Context';
import { useContext, useEffect } from 'react';

function Step2() {

    const {setPlaceType} = useContext(data);

    return(
        <div className="step-2">
            <h1>Which of these best describes your place?</h1>
            <div className="accommodation-btns">
                <button onClick={() => setPlaceType('house')} className="house-btn">
                    <img src={HouseIcon} alt="" />
                    <p>House</p>
                </button>

                <button onClick={() => setPlaceType('apartment')} className="apartment-btn">
                    <img src={ApartmentIcon} alt="" />
                    <p>Apartment</p>
                </button>
            </div>
        </div>
    )
}

export default Step2;