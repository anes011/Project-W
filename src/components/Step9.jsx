import '../styles/step9.css';
import data from '../Context';
import { useContext } from 'react';
import { getTranslation } from '../translations/translationService';

function Step9() {

    const {setDescription} = useContext(data);

    const descriptionRegex = /.{10,}/;

    return(
        <div className="step-9">
            <h1>{getTranslation(localStorage.getItem('language'), 'addOffer step-9 description')}</h1>
            <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-9 description part-2')}</p>

            <textarea onChange={(e) => descriptionRegex.test(e.target.value) ? setDescription(e.target.value) : setDescription(null)} className='text-area' name="" id="" cols="47" rows="4"></textarea>
        </div>
    )
}

export default Step9;