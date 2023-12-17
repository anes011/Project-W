import '../styles/offers.css';
import HouseImg from '../images&logos/The-Balmoral-Executive-View-Room-e1682260891619.jpg';
import StarsIcon from '../images&logos/five_star_rating.svg';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import data from '../Context';
import { getTranslation } from '../translations/translationService';

function Offers() {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const offersApi = async () => {
            try {
                const response = await fetch('https://project-w.onrender.com/addOffer');
                const data = await response.json();
                setApiData(data.offers);
            } catch (err) {
                console.error(err);
            }
        };

        offersApi();
    }, []);

    const user = localStorage.getItem('userAccount');

    const offerClicked = (_id) => {
        const clickedOffer = apiData.find((x) => x._id === _id);
        localStorage.setItem('offerPressed', JSON.stringify(clickedOffer));
    }

    return(
        <div className="offers">
            {
                apiData.map((x) => {
                    if (user !== null) {
                        if (x.hostID !== JSON.parse(user)._id) {
                            return (
                                <Link onClick={() => offerClicked(x._id)} to='/reservation' className='Link'>
                                    <img className='house-img' src={x.offerImages[0]} alt={x.offerImages[0]} />
    
                                    <div className="details-container">
                                        <div className="title-stars-container">
                                            <p>{x.title}</p>
                                            <img className='stars' src={StarsIcon} alt="" />
                                        </div>
                                        <p className='price'><span>{x.price}</span>DA /{getTranslation(localStorage.getItem('language'), 'price')}</p>
                                        <div className="features-container">
                                            <p>{`${x.bathrooms} ${getTranslation(localStorage.getItem('language'), 'mainPage offer feature-1')}`}</p>
                                            <p>{`${x.beds} ${getTranslation(localStorage.getItem('language'), 'mainPage offer feature-2')}`}</p>
                                            <p className='last-feature'>{`${x.bedrooms} ${getTranslation(localStorage.getItem('language'), 'mainPage offer feature-3')}`}</p>
                                        </div>
                                        <button>{getTranslation(localStorage.getItem('language'), 'mainPage offer button')}</button>
                                    </div>
                                </Link>
                            )
                        }
                    } else {
                        return (
                            <Link onClick={() => offerClicked(x._id)} to='/reservation' className='Link'>
                                <img className='house-img' src={x.offerImages[0]} alt={x.offerImages[0]} />

                                <div className="details-container">
                                    <div className="title-stars-container">
                                        <p>{x.title}</p>
                                        <img className='stars' src={StarsIcon} alt="" />
                                    </div>
                                    <p className='price'><span>{x.price}</span>DA /{getTranslation(localStorage.getItem('language'), 'price')}</p>
                                    <div className="features-container">
                                        <p>{`${x.bathrooms} ${getTranslation(localStorage.getItem('language'), 'mainPage offer feature-1')}`}</p>
                                        <p>{`${x.beds} ${getTranslation(localStorage.getItem('language'), 'mainPage offer feature-2')}`}</p>
                                        <p className='last-feature'>{`${x.bedrooms} ${getTranslation(localStorage.getItem('language'), 'mainPage offer feature-3')}`}</p>
                                    </div>
                                    <button>{getTranslation(localStorage.getItem('language'), 'mainPage offer button')}</button>
                                </div>
                            </Link>
                        )
                    }
                })
            }
        </div>
    )
}

export default Offers;