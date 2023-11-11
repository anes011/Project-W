import '../styles/sign.css';
import SignBackground from '../images&logos/liquid-pink-blue-abstract.jpg';
import { useRef, useState } from 'react';

function Sign() {

    const [inputActiveUserName, setInputActiveUserName] = useState(false);
    const [inputActiveEmail, setInputActiveEmail] = useState(false);
    const [inputActivePassword, setInputActivePassword] = useState(false);
    const [signIn, setSignIn] = useState(false);

    const userNameContainer = useRef(null);
    const emailContainer = useRef(null);
    const passwordContainer = useRef(null);

    const handleInputActiveUserName = (e) => {
        e.stopPropagation();
        setInputActiveUserName(true);
    }

    const handleInputActiveEmail = (e) => {
        e.stopPropagation();
        setInputActiveEmail(true);
    }

    const handleInputActivePassword = (e) => {
        e.stopPropagation();
        setInputActivePassword(true);
    }

    document.addEventListener('click', (e) => {
        e.target !== userNameContainer.current && setInputActiveUserName(false);
        e.target !== emailContainer.current && setInputActiveEmail(false);
        e.target !== passwordContainer.current && setInputActivePassword(false);
    });

    const moveToSignIn = () => {
        setSignIn(true);
    }

    const moveToSignUp = () => {
        setSignIn(false);
    }

    return(
        <div className="sign-container">
            <img src={SignBackground} alt="Sign background" className={signIn ? 'background-image-active' : 'background-image'} />
            <div className={signIn ? 'right-side-active' : 'right-side'}>
                <div className='signup-signin-container'>
                    <h1 onClick={moveToSignIn} className='sign-in'>SIGN IN</h1>
                    <h1 onClick={moveToSignUp} className='sign-up'>SIGN UP</h1>
                    <div className={signIn ? 'bottom-outline-active' : 'bottom-outline'}></div>
                </div>

                {
                    signIn ? (
                        <div className="sign-in-container">
                            <div ref={emailContainer} onClick={handleInputActiveEmail} className="email-container">
                                <p className={inputActiveEmail ? 'email-p-active' : 'email-p'}>Email:</p>
                                <input type="email" className="email-input" />
                            </div>

                            <div ref={passwordContainer} onClick={handleInputActivePassword} className="password-container">
                                <p className={inputActivePassword ? 'password-p-active' : 'password-p'}>Password:</p>
                                <input type="password" className="password-input" />
                            </div>

                            <button className="sign-up-btn">SIGN IN</button>
                        </div>
                    ) : (
                        <div className="sign-up-container">
                            <div ref={userNameContainer} onClick={handleInputActiveUserName} className="user-name-container">
                                <p className={inputActiveUserName ? 'user-name-p-active' : 'user-name-p'}>User Name:</p>
                                <input type="text" className="user-name-input" />
                            </div>

                            <div ref={emailContainer} onClick={handleInputActiveEmail} className="email-container">
                                <p className={inputActiveEmail ? 'email-p-active' : 'email-p'}>Email:</p>
                                <input type="email" className="email-input" />
                            </div>

                            <div ref={passwordContainer} onClick={handleInputActivePassword} className="password-container">
                                <p className={inputActivePassword ? 'password-p-active' : 'password-p'}>Password:</p>
                                <input type="password" className="password-input" />
                            </div>

                            <div className="term-of-services">
                                <input type="checkbox" />
                                <p>I agree to <a href="">terms of services</a></p>
                            </div>

                            <button className="sign-up-btn">SIGN UP</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Sign;