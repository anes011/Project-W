import '../styles/stepsEndPage.css';
import Nav from '../components/Nav';
import SuccessIcon from '../images&logos/success-svgrepo-com.svg';

function StepsEndPage() {
    return(
        <div className="steps-end-page">
            <Nav />
            <img className='watch-gif' src="https://i.pinimg.com/originals/c9/bd/7a/c9bd7a16beae0bd10b56eb511434b73c.gif" alt="" />

            <div className="success-container">
                <img src={SuccessIcon} alt="" />
                <p>Your offer has been created successfully!</p>
                <p>Give it some time untill people can see your offer</p>
            </div>
        </div>
    )
}

export default StepsEndPage;