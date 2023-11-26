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
import StepsEnd from '../components/StepsEnd';
import { useContext, useEffect, useRef, useState } from 'react';
import data from '../Context';

function AddOfferPage() {

    const {placeType, spaceGiven, location} = useContext(data);

    const [steps, setSteps] = useState(1);

    const progressBar = useRef(null);

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
                {steps === 12 && (<StepsEnd />)}
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