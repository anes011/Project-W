import '../styles/profilePage.css';
import Background from '../images&logos/liquid-pink-blue-abstract.jpg';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import { getTranslation } from '../translations/translationService';

function ProfilePage() {

    const redirect = useNavigate();

    const [changePassword, setChangePassword] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [password, setPassword] = useState(null);
    const [changeProfilePhoto, setChangeProfilePhoto] = useState(null);
    const [newPassword, setNewPassword] = useState(null);

    const currentPasswordInput = useRef(null);
    const newPasswordInput = useRef(null);
    const confirmPasswordInput = useRef(null);

    const user = localStorage.getItem('userAccount');

    useEffect(() => {
        if (user !== null) {
            setProfilePhoto(JSON.parse(user).profilePhoto);
            setUserName(JSON.parse(user).userName);
            setEmail(JSON.parse(user).email);
            setPhoneNumber(JSON.parse(user).phoneNumber);
            setPassword(JSON.parse(user).password);
        }
    }, []);

    const createNewPassword = () => {
        const compareApi = async () => {
            if (email !== null) {
                try {
                    const response = await fetch('https://project-w.onrender.com/users/compare', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email,
                            password: currentPasswordInput.current.value
                        })
                    });
                    const data = await response.json();

                    const passwordRegex = /^.{8,}$/;
                    
                    if (passwordRegex.test(newPasswordInput.current.value) && 
                        passwordRegex.test(confirmPasswordInput.current.value) && 
                        newPasswordInput.current.value === confirmPasswordInput.current.value &&
                        data.status === 'Success') {
                        setNewPassword(confirmPasswordInput.current.value);
                    } else {
                        alert('somthing went wrong, please recheck your credentials!');
                    }
                } catch (err) {
                    console.error(err);
                }
            }
        }

        compareApi();



        if (newPassword !== null && user !== null) {
            const updatePasswordApi = async () => {
                try {
                    const response = await fetch(`https://project-w.onrender.com/users/updatePassword/${JSON.parse(user)._id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            password: newPassword
                        })
                    });
                    const data = await response.json();
                    alert('password changed successfully!');
                    localStorage.setItem('userAccount', JSON.stringify(data.update));
                    window.location.reload();
                } catch (err) {
                    console.error(err);
                }
            };

            updatePasswordApi();
        }
    };

    useEffect(() => {
        if (changeProfilePhoto !== null && user !== null) {
            const formData = new FormData();
            formData.append('profilePhoto', changeProfilePhoto);
            const changePhotoApi = async () => {
                try {
                    const response = await fetch(`https://project-w.onrender.com/users/${JSON.parse(user)._id}`, {
                        method: 'PATCH',
                        body: formData
                    });
                    const data = await response.json();
                    alert('photo changed successfully!');
                    localStorage.setItem('userAccount', JSON.stringify(data.update));
                    window.location.reload();
                } catch (err) {
                    console.error(err);
                }
            }

            changePhotoApi();
        }
    });

    const deleteAccount = () => {
        if (user !== null) {
            const deleteAccountApi = async () => {
                try {
                    const response = await fetch(`https://project-w.onrender.com/users/${JSON.parse(user)._id}`, {
                        method: 'Delete'
                    });
                    const data = await response.json();
                    alert('Your account has been deleted!');
                    localStorage.removeItem('userAccount');
                    localStorage.setItem('signRoutes', 'true');
                    redirect('/');
                } catch (err) {
                    console.error(err);
                }
            };

            deleteAccountApi();
        }
    };

    return(
        <div className="profile-page">
            <Nav />
            <div onClick={() => setChangePassword(false)} className={changePassword ? 'overlay-active' : 'overlay'}></div>
            {
                changePassword && (
                    <div className="password-field">
                        <div>
                            <p>{getTranslation(localStorage.getItem('language'), 'current-password')}</p>
                            <input ref={currentPasswordInput} type="password" />
                        </div>
                        <div>
                            <p>{getTranslation(localStorage.getItem('language'), 'new-password')}</p>
                            <input ref={newPasswordInput} type="password" />
                        </div>
                        <div>
                            <p>{getTranslation(localStorage.getItem('language'), 'confirm-password')}</p>
                            <input ref={confirmPasswordInput} type="password" />
                        </div>

                        <button onClick={createNewPassword}>{getTranslation(localStorage.getItem('language'), 'save')}</button>
                    </div>
                )
            }

            <img className='profile-background' src={Background} alt="" />

            <div className="profile-details">
                <div className='profile-photo-name'>
                    <p>{userName !== null ? userName : 'User'}</p>
                    <img src={profilePhoto !== null ? `${profilePhoto}` : 'https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt={profilePhoto} className="profile-photo" />
                </div>

                <div className="left-section">
                    <div className="profile-email">
                        <p>{getTranslation(localStorage.getItem('language'), 'email')}</p>
                        <p>{email !== null ? email : 'user@gmail.com'}</p>
                    </div>
                    
                    <div className="profile-phone-number">
                        <p>{getTranslation(localStorage.getItem('language'), 'phoneNumber')}</p>
                        <p>{phoneNumber !== null ? phoneNumber : '00011111000111'}</p>
                    </div>
                </div>

                <div className="right-section">
                    <div className="profile-password">
                        <p>{getTranslation(localStorage.getItem('language'), 'password')}</p>
                        <input type="password" readOnly value={password !== null ? password : 'this is a password'} />
                    </div>

                    <div className="buttons-container">
                        <button onClick={() => setChangePassword(true)} className="change-password-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg>
                            <p>{getTranslation(localStorage.getItem('language'), 'change-password')}</p>
                        </button>
                        <button className="change-profile-photo-btn">
                            <label htmlFor="profile-photo">
                                <input onChange={(e) => setChangeProfilePhoto(e.target.files[0])} id='profile-photo' type="file" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                    <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                                </svg>
                                <p>{getTranslation(localStorage.getItem('language'), 'change-profilePhoto')}</p>
                            </label>
                        </button>
                    </div>

                    <button onClick={deleteAccount} className="delete-profile-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                        <p>{getTranslation(localStorage.getItem('language'), 'delete-profile')}</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;