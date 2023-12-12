import '../styles/myOffers.css';
import HouseImage from '../images&logos/The-Balmoral-Executive-View-Room-e1682260891619.jpg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function MyOffers() {

    const user = localStorage.getItem('userAccount');

    const [apiData, setApiData] = useState([]);

    const offersApi = async () => {
        try {
            const response = await fetch('https://project-w.onrender.com/addOffer');
            const data = await response.json();
            setApiData(data.offers);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        offersApi();
    }, []);

    const offerClicked = (_id) => {
        const clickedOffer = apiData.find((x) => x._id === _id);
        localStorage.setItem('offerPressed', JSON.stringify(clickedOffer));
    }

    const deleteOffer = (_id) => {
        const deleteOfferApi = async () => {
            try {
                const response = await fetch(`https://project-w.onrender.com/addOffer/${_id}`, {
                    method: 'DELETE'
                });
                const data = await response.json();
            } catch (err) {
                console.error(err);
            }
        };

        deleteOfferApi();
        offersApi();
    }

    return(
        <div className="myoffers">
            {
                user !== null && apiData.map((x) => {
                    if (x.hostID === JSON.parse(user)._id) {
                        return (
                            <div className="offer">
                                <Link onClick={() => offerClicked(x._id)} to='/reservation' className="images-container">
                                    <img src={`https://project-w.onrender.com/${x.offerImages[0]}`} alt={x.offerImages[0]} />
                                    <img src={`https://project-w.onrender.com/${x.offerImages[1]}`} alt={x.offerImages[1]} />
                                    <img src={`https://project-w.onrender.com/${x.offerImages[2]}`} alt={x.offerImages[2]} />
                                </Link>

                                <div className="details-container">
                                    <div className="title-stars-container">
                                        <p>{x.title}</p>
                                    </div>
                                    <p className='price'><span>{x.price}</span>/night</p>
                                    <div className="features-container">
                                        <p>{`${x.bathrooms} Bathrooms`}</p>
                                        <p>{`${x.beds} Beds`}</p>
                                        <p className='last-feature'>{`${x.bedrooms} Bedrooms`}</p>
                                    </div>
                                </div>

                                <Link onClick={() => offerClicked(x._id)} to='/reservation' className='read-comments-btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
                                    </svg>
                                    <p>Read comments</p>
                                </Link>

                                <button onClick={() => deleteOffer(x._id)} className='delete-offer-btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                    </svg>
                                    <p>Delete offer</p>
                                </button>
                            </div>
                        )
                    }
                })
            }
            <div className="offer">
                <div className="images-container">
                    <img src={HouseImage} alt="" />
                    <img src={HouseImage} alt="" />
                    <img src={HouseImage} alt="" />
                    <img src={HouseImage} alt="" />
                </div>

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                </div>

                <button className='read-comments-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
                    </svg>
                    <p>Read comments</p>
                </button>

                <button className='delete-offer-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                    </svg>
                    <p>Delete offer</p>
                </button>
            </div>
            <div className="offer">
                <div className="images-container">
                    <img src={HouseImage} alt="" />
                    <img src={HouseImage} alt="" />
                    <img src={HouseImage} alt="" />
                    <img src={HouseImage} alt="" />
                </div>

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                </div>

                <button className='read-comments-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
                    </svg>
                    <p>Read comments</p>
                </button>

                <button className='delete-offer-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                    </svg>
                    <p>Delete offer</p>
                </button>
            </div>
            <div className="offer">
                <div className="images-container">
                    <img src={HouseImage} alt="" />
                    <img src={HouseImage} alt="" />
                    <img src={HouseImage} alt="" />
                    <img src={HouseImage} alt="" />
                </div>

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                </div>

                <button className='read-comments-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
                    </svg>
                    <p>Read comments</p>
                </button>

                <button className='delete-offer-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                    </svg>
                    <p>Delete offer</p>
                </button>
            </div>
        </div>
    )
}

export default MyOffers;