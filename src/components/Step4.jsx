import '../styles/step4.css';
import data from '../Context';
import { useContext } from 'react';
import { getTranslation } from '../translations/translationService';

function Step4() {

    const {setLocation} = useContext(data);

    const locationRegex = /^(?=.*[A-Za-z]).{4,}$/;

    return(
        <div className="step-4">
            <h1>{getTranslation(localStorage.getItem('language'), 'addOffer step-4 location')}</h1>

            <div className="address-input">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <input onChange={(e) => locationRegex.test(e.target.value) && e.target.value !== '' ? setLocation(e.target.value) : setLocation(null)} type="text" placeholder={getTranslation(localStorage.getItem('language'), 'addOffer step-4 location-placeholder')}/>
            </div>
        </div>
    )
}

export default Step4;