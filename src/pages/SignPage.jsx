import Sign from "../components/Sign";
import '../styles/signPage.css';

function SignPage() {
    return(
        <div className="sign-page">
            <div className="logo-container">
                <h1 className="logo-sign">LOGO</h1>
            </div>
            <Sign />
        </div>
    )
}

export default SignPage;