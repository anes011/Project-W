import '../styles/step8.css';
import data from '../Context';
import { useContext } from 'react';

function Step8() {

    const {setTitle} = useContext(data);

    const titleRegex = /(?:[a-zA-Z].*){4,}/;

    return(
        <div className="step-8">
            <h1>Now, let's give your house a title</h1>
            <p>Short titles work best. Have fun with it—you can always change it later.</p>

            <textarea onChange={(e) => titleRegex.test(e.target.value) ? setTitle(e.target.value) : setTitle(null)} className='text-area' name="" id=""></textarea>
        </div>
    )
}

export default Step8;