import '../styles/step8.css';
import data from '../Context';
import { useContext } from 'react';

function Step8() {

    const {setTitle} = useContext(data);

    const titleRegex = /(?:[a-zA-Z].*){4,}/;

    return(
        <div className="step-8">
            <h1>Provide a short title for your place</h1>
            <p>please don't write a long description, because the next step will be the description</p>

            <textarea onChange={(e) => titleRegex.test(e.target.value) ? setTitle(e.target.value) : setTitle(null)} className='text-area' name="" id=""></textarea>
        </div>
    )
}

export default Step8;