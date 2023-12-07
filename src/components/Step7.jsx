import '../styles/step7.css';
import data from '../Context';
import { useContext, useEffect, useState } from 'react';
import villa3D from '../images&logos/modern-residential-district-with-green-roof-balcony-generated-by-ai.jpg';

function Step7() {

    const {offerImages, setOfferImages} = useContext(data);

    return(
        <div className="step-7">
            <h1>Add photos of your place</h1>

            <label className='upload-photo-container' htmlFor="file-input">
                {
                    offerImages !== null && Object.values(offerImages).length >= 3 ? (
                        <img src="https://i.pinimg.com/originals/e8/06/52/e80652af2c77e3a73858e16b2ffe5f9a.gif" alt="" />
                    ) : (
                        <div>
                            <img src={villa3D} alt="" />
                        </div>
                    )
                }
            </label>
            <input onChange={(e) => setOfferImages(e.target.files)} className='input-file' type="file" id='file-input' multiple />
        </div>
    )
}

export default Step7;