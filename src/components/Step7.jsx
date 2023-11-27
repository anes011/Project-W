import '../styles/step7.css';
import data from '../Context';
import { useContext, useEffect, useState } from 'react';

function Step7() {

    const {offerImages, setOfferImages} = useContext(data);

    return(
        <div className="step-7">
            <h1>Add some photos of your house</h1>

            <label className='upload-photo-container' htmlFor="file-input">
                {
                    offerImages !== null && Object.values(offerImages).length >= 3 ? (
                        <img src="https://i.pinimg.com/originals/e8/06/52/e80652af2c77e3a73858e16b2ffe5f9a.gif" alt="" />
                    ) : (
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
                                <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z"/>
                            </svg>
                            <p>Drag your photos here</p>
                        </div>
                    )
                }
            </label>
            <input onChange={(e) => setOfferImages(e.target.files)} className='input-file' type="file" id='file-input' multiple />
        </div>
    )
}

export default Step7;