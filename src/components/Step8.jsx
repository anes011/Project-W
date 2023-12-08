import '../styles/step8.css';
import data from '../Context';
import { useContext } from 'react';
import { getTranslation } from '../translations/translationService';

function Step8() {

    const {setTitle} = useContext(data);

    const titleRegex = /(?:[a-zA-Z].*){4,}/;

    return(
        <div className="step-8">
            <h1>{getTranslation(localStorage.getItem('language'), 'addOffer step-8 title')}</h1>
            <p>{getTranslation(localStorage.getItem('language'), 'addOffer step-8 title part-2')}</p>

            <textarea onChange={(e) => titleRegex.test(e.target.value) ? setTitle(e.target.value) : setTitle(null)} className='text-area' name="" id=""></textarea>
        </div>
    )
}

export default Step8;