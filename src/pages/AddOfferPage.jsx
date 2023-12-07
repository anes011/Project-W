import '../styles/addOfferPage.css';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import Step4 from '../components/Step4';
import Step5 from '../components/Step5';
import Step6 from '../components/Step6';
import Step7 from '../components/Step7';
import Step8 from '../components/Step8';
import Step9 from '../components/Step9';
import Step10 from '../components/Step10';
import Step11 from '../components/Step11';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import data from '../Context';

function AddOfferPage() {

    const redirect = useNavigate();

    const {placeType, spaceGiven, location, guests, bedrooms, beds, bathrooms, wifi, tv,
    washer, parking, airConditioning, pool, firstAidKit, fireDistinguisher, offerImages, title, 
    description, price, checkIn, checkOut} = useContext(data);

    const [steps, setSteps] = useState(1);

    const progressBar = useRef(null);

    const user = localStorage.getItem('userAccount');

    const handleStepsMinus = () => {
        if (steps > 1) {
            setSteps(steps - 1);
        }else {
            return
        }
    };

    const handleStepsPlus = () => {
        if (steps < 12) {
            setSteps(steps + 1);
        }else {
            return
        }
    };

    useEffect(() => {
        if (steps === 3) {
            if (placeType === null) {
                setSteps(2);
                alert('please choose one!');
            }
        };

        if (steps === 4) {
            if (spaceGiven === null) {
                setSteps(3);
                alert('please choose one!');
            }
        };
        
        if (steps === 5) {
            if (location === null) {
                setSteps(4);
                alert('location must be at least 4 characters long, and at least one letter!');
            }
        };

        if (steps === 8) {
            if (offerImages === null || Object.values(offerImages).length < 3) {
                setSteps(7);
                alert('please add at least 3 images!');
            }
        };

        if (steps === 9) {
            if (title === null) {
                setSteps(8);
                alert('title must be at least 4 letters!');
            }
        };

        if (steps === 10) {
            if (description === null) {
                setSteps(9);
                alert('please enter at least 10 characters!');
            }
        };

        if (steps === 11) {
            if (price === null) {
                setSteps(10);
                alert('please enter a valid price, and without letters!');
            }
        };

        if (steps === 12) {
            if (checkIn === null && checkOut === null || checkIn === null || checkOut === null) {
                setSteps(11);
                alert('please insert valid dates!');
            } else {
                if (placeType !== null && spaceGiven !== null && location !== null &&
                offerImages !== null && title !== null && description !== null && price !== null &&
                checkIn !== null && checkOut !== null && user !== null) {
                    const formData = new FormData();
                    formData.append('hostID', JSON.parse(user)._id);
                    formData.append('placeType', placeType);
                    formData.append('spaceGiven', spaceGiven);
                    formData.append('location', location);
                    formData.append('guests', guests);
                    formData.append('bedrooms', bedrooms);
                    formData.append('beds', beds);
                    formData.append('bathrooms', bathrooms);
                    formData.append('wifi', wifi);
                    formData.append('tv', tv);
                    formData.append('washer', washer);
                    formData.append('parking', parking);
                    formData.append('airConditioning', airConditioning);
                    formData.append('pool', pool);
                    formData.append('firstAidKit', firstAidKit);
                    formData.append('fireDistinguisher', fireDistinguisher);
                    Object.values(offerImages).map((x) => {
                        formData.append('offerImages', x);
                    });
                    formData.append('title', title);
                    formData.append('description', description);
                    formData.append('price', price);
                    formData.append('checkIn', checkIn);
                    formData.append('checkOut', checkOut);
                    const addOfferApi = async () => {
                        try {
                            const response = await fetch('http://localhost:4000/addOffer', {
                                method: 'POST',
                                body: formData
                            });
                            const data = await response.json();
                            redirect('/steps-end');
                        } catch (err) {
                            console.error(err);
                            alert(err);
                        }
                    };

                    addOfferApi();
                }
            }
        };
    })

    if (progressBar.current) {
        switch (steps) {
            case 1:
                progressBar.current.style.width = '10%';
            break;
            case 2:
                progressBar.current.style.width = '20%';
            break;
            case 3:
                progressBar.current.style.width = '30%';
            break;
            case 4:
                progressBar.current.style.width = '40%';
            break;
            case 5:
                progressBar.current.style.width = '50%';
            break;
            case 6:
                progressBar.current.style.width = '60%';
            break;
            case 7:
                progressBar.current.style.width = '70%';
            break;
            case 8:
                progressBar.current.style.width = '80%';
            break;
            case 9:
                progressBar.current.style.width = '90%';
            break;
            case 10:
                progressBar.current.style.width = '95%';
            break;
            case 11:
                progressBar.current.style.width = '100%';
            break;
        }
    }

    return(
        <div className="add-offer-page">
            <div className="steps-container">
                {steps === 1 && (<Step1 />)}
                {steps === 2 && (<Step2 />)}
                {steps === 3 && (<Step3 />)}
                {steps === 4 && (<Step4 />)}
                {steps === 5 && (<Step5 />)}
                {steps === 6 && (<Step6 />)}
                {steps === 7 && (<Step7 />)}
                {steps === 8 && (<Step8 />)}
                {steps === 9 && (<Step9 />)}
                {steps === 10 && (<Step10 />)}
                {steps === 11 && (<Step11 />)}
                <div ref={progressBar} className={steps === 12 ? 'progress-bar-hide' : 'progress-bar'}></div>
            </div>

            <div className="back-next-container">
                <button onClick={handleStepsMinus} className="back-btn">Back</button>
                <button onClick={handleStepsPlus} className="next-btn">Next</button>
            </div>
        </div>
    )
}

export default AddOfferPage;