import '../styles/sign.css';
import SignBackground from '../images&logos/liquid-pink-blue-abstract.jpg';
import Show from '../images&logos/show-solid-24.png';
import Hide from '../images&logos/hide-solid-24.png';
import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTranslation } from '../translations/translationService';
import data from '../Context';

function Sign() {

    const redirect = useNavigate();

    const {setUserName, setEmail, setPassword} = useContext(data);

    const [inputActiveUserName, setInputActiveUserName] = useState(false);
    const [inputActiveEmail, setInputActiveEmail] = useState(false);
    const [inputActivePassword, setInputActivePassword] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [signUpLoading, setSignUpLoading] = useState(false);
    const [signInLoading, setSignInLoading] = useState(false);

    const userNameInput = useRef(null);
    const emailInputSignUp = useRef(null);
    const passwordInputSignUp = useRef(null);
    const emailInputSignIn = useRef(null);
    const passwordInputSignIn = useRef(null);

    const handleInputActiveUserName = () => {
        setInputActiveUserName(true);
    }

    const handleInputActiveEmail = () => {
        setInputActiveEmail(true);
    }

    const handleInputActivePassword = () => {
        setInputActivePassword(true);
    }

    const moveToSignIn = () => {
        setSignIn(true);
    }

    const moveToSignUp = () => {
        setSignIn(false);
    }

    const createUser = () => {
        const userNameRegex = /^[a-zA-Z]{4}[a-zA-Z0-9]*$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^.{8,}$/;

        if (userNameRegex.test(userNameInput.current.value) &&
            emailRegex.test(emailInputSignUp.current.value) &&
            passwordRegex.test(passwordInputSignUp.current.value)) {
            setUserName(userNameInput.current.value);
            setEmail(emailInputSignUp.current.value);
            setPassword(passwordInputSignUp.current.value);

            setSignUpLoading(true);

            setTimeout(() => {
                setSignUpLoading(false);
                redirect('/more-user-info');
            }, 2000);
        } else {
            alert('user name must be at least 4 letter characters long!');
            alert('email must be valid!');
            alert('password must be at least 8 characters long!');
        };
    };

    const logIn = () => {
        const logInApi = async () => {
            if (emailInputSignIn.current && passwordInputSignIn.current) {
                try {
                    const response = await fetch('http://localhost:4000/users/compare', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: emailInputSignIn.current.value,
                            password: passwordInputSignIn.current.value
                        })
                    });
                    const data = await response.json();
                    if (data.status === 'Success') {
                        setSignInLoading(true);

                        setTimeout(() => {
                            localStorage.setItem('userAccount', JSON.stringify(data.User));
                            redirect('/');
                            localStorage.setItem('signRoutes', 'false');
                        }, 2000);
                    } else {
                        alert('somthing went wrong, please recheck your log-in credentials!')
                    }
                } catch (err) {
                    console.error(err);
                }
            }
        };

        logInApi();
    };

    return(
        <div className="sign-container">
            <img src={SignBackground} alt="Sign background" className={signIn ? 'background-image-active' : 'background-image'} />
            <div className={signIn ? 'right-side-active' : 'right-side'}>
                <div className='signup-signin-container'>
                    <h1 onClick={moveToSignIn} className='sign-in'>{getTranslation(localStorage.getItem('language'), 'sign-in')}</h1>
                    <h1 onClick={moveToSignUp} className='sign-up'>{getTranslation(localStorage.getItem('language'), 'sign-up')}</h1>
                    <div className={signIn ? 'bottom-outline-active' : 'bottom-outline'}></div>
                </div>

                {
                    signIn ? (
                        <div className="sign-in-container">
                            <div onClick={handleInputActiveEmail} className="email-container">
                                <p className={inputActiveEmail ? 'email-p-active' : 'email-p'}>{getTranslation(localStorage.getItem('language'), 'email')}</p>
                                <input ref={emailInputSignIn} type="email" className="email-input" />
                            </div>

                            <div onClick={handleInputActivePassword} className="password-container">
                                <p className={inputActivePassword ? 'password-p-active' : 'password-p'}>{getTranslation(localStorage.getItem('language'), 'password')}</p>
                                <input ref={passwordInputSignIn} type={showPassword ? 'text' : 'password'} className="password-input" />
                                <img onClick={() => setShowPassword(!showPassword)} src={showPassword ? Show : Hide} alt={showPassword ? 'show password icon' : 'hide password icon'} />
                            </div>

                            <button onClick={logIn} className="sign-in-btn">
                                {
                                    signInLoading ? (
                                        <div className="loading"></div>
                                    ) : (
                                        <p>{getTranslation(localStorage.getItem('language'), 'sign-in')}</p>
                                    )
                                }
                            </button>
                        </div>
                    ) : (
                        <div className="sign-up-container">
                            <div onClick={handleInputActiveUserName} className="user-name-container">
                                <p className={inputActiveUserName ? 'user-name-p-active' : 'user-name-p'}>{getTranslation(localStorage.getItem('language'), 'user-name')}</p>
                                <input ref={userNameInput} type="text" className="user-name-input" />
                            </div>

                            <div onClick={handleInputActiveEmail} className="email-container">
                                <p className={inputActiveEmail ? 'email-p-active' : 'email-p'}>{getTranslation(localStorage.getItem('language'), 'email')}</p>
                                <input ref={emailInputSignUp} type="email" className="email-input" />
                            </div>

                            <div onClick={handleInputActivePassword} className="password-container">
                                <p className={inputActivePassword ? 'password-p-active' : 'password-p'}>{getTranslation(localStorage.getItem('language'), 'password')}</p>
                                <input ref={passwordInputSignUp} type={showPassword ? 'text' : 'password'} className="password-input" />
                                <img onClick={() => setShowPassword(!showPassword)} src={showPassword ? Show : Hide} alt={showPassword ? 'show password icon' : 'hide password icon'} />
                            </div>

                            <button onClick={createUser} className="sign-up-btn">
                                {
                                    signUpLoading ? (
                                        <div className="loading"></div>
                                    ) : (
                                        <p>{getTranslation(localStorage.getItem('language'), 'sign-up')}</p>
                                    )
                                }
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Sign;