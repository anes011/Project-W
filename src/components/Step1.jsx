import '../styles/step1.css';
import villa3D from '../images&logos/2150760957.jpg';
import { getTranslation } from '../translations/translationService';

function Step1() {
    return(
        <div className="step-1">
            <p><span>{getTranslation(localStorage.getItem('language'), 'addOffer step-1 greeting')}</span>{getTranslation(localStorage.getItem('language'), 'addOffer step-1 intro')}</p>
            <img src={villa3D} alt="" />
        </div>
    )
}

export default Step1;