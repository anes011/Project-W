import { useContext, useEffect, useRef, useState } from 'react';
import '../styles/moreUserInfo.css';
import data from '../Context';
import SuccessIcon from '../images&logos/success-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';

function MoreUserInfo() {

    const redirect = useNavigate();

    const {userName, email, password} = useContext(data);

    const [profilePhoto, setProfilePhoto] = useState(null);
    const [registerLoading, setRegisterLoading] = useState(false);
    const [disableBtn, setDisableBtn] = useState(false);

    const phoneNumberInput = useRef(null);
    const locationInput = useRef(null);

    const createUser = () => {
        setDisableBtn(true);
        
        const phoneNumberRegex = /^\d{10,}$/;
        const locationRegex = /^(?=.*[A-Za-z]).{4,}$/;

        if (phoneNumberRegex.test(phoneNumberInput.current.value) &&
            locationRegex.test(locationInput.current.value) &&
            profilePhoto !== null) {
                const formData = new FormData();

                if (userName !== null && email !== null && password !== null) {
                    formData.append('userName', userName);
                    formData.append('email', email);
                    formData.append('password', password);
                    formData.append('profilePhoto', profilePhoto);
                    formData.append('phoneNumber', phoneNumberInput.current.value);
                    formData.append('location', locationInput.current.value);

                    const createUserApi = async () => {
                        try {
                            const response = await fetch('https://project-w.onrender.com/users', {
                                method: 'POST',
                                body: formData
                            });
                            const data = await response.json();
                            if (data.Status === 'success') {
                                setRegisterLoading(true);
                                localStorage.setItem('userAccount', JSON.stringify(data.user));
                                
                                setTimeout(() => {
                                    redirect('/');
                                    setRegisterLoading(false);
                                    setDisableBtn(false);
                                    localStorage.setItem('signRoutes', 'false');
                                }, 2000);
                            } else if (data.Status === 'failure') {
                                const duplicateUsernameRegex = /\bduplicate\b/i;
                                duplicateUsernameRegex.test(data.Error) ? alert('please change the username!') : alert('somthing went wrong!');
                                setDisableBtn(false);
                            }
                        } catch (err) {
                            console.error(err);
                            setDisableBtn(false);
                        }
                    };

                    createUserApi();
                } else {
                    alert('somthing went wrong, please try again!');
                    setDisableBtn(false);
                }
        } else {
            alert(`if you haven't inserted a photo, please do so! and if you did already, check the other fields!`)
            alert('location must be at least 4 characters long and must include at least one letter!');
            alert('phone number only accepts (Numbers) and they must be at least 10 numbers long!');
            setDisableBtn(false);
        }
    };

    return(
        <div className="more-user-info">
            <div className="add-photo">
                <p>Add a profile photo:</p>
                <label className='photo-input-container' htmlFor="photo-input">
                    {
                        profilePhoto !== null ? (
                            <img src={SuccessIcon} alt="Success Icon" />
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                        )
                    }
                </label>
                <input onChange={(e) => setProfilePhoto(e.target.files[0])} id='photo-input' type="file" />
            </div>

            <div className="location-phone-container">
                <div className="location-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    <input ref={locationInput} type="text" placeholder='Where do you live?' />
                </div>
                
                <div className="phone-number-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                    <input ref={phoneNumberInput} type="text" placeholder='Enter your phone number...' />
                </div>

                <button onClick={createUser} disabled={disableBtn}>
                    {
                        registerLoading ? (
                            <div className="loading"></div>
                        ) : (
                            <p>Register</p>
                        )
                    }
                </button>

                <p>Note: your phone number is private and not shared with anyone, untill they reserve one of your offers and you accept it.</p>
            </div>
        </div>
    )
}

export default MoreUserInfo;