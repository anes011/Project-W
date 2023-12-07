import '../styles/step1.css';
import villa3D from '../images&logos/2150760957.jpg';

function Step1() {
    return(
        <div className="step-1">
            <p><span>Welcome</span> in this page you will go through few steps to set-up and fill in your offer information. Please feel comfortable and take your time during this process. If anything goes wrong, you can remove the offer and start another one from scratch. Once it is done, your offer will be published!</p>
            <img src={villa3D} alt="" />
        </div>
    )
}

export default Step1;