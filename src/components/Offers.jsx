import '../styles/offers.css';
import HouseImg from '../images&logos/The-Balmoral-Executive-View-Room-e1682260891619.jpg';
import StarsIcon from '../images&logos/five_star_rating.svg';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import data from '../Context';

function Offers() {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const offersApi = async () => {
            try {
                const response = await fetch('http://localhost:4000/addOffer');
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
                                    <img className='house-img' src={`http://localhost:4000/${x.offerImages[0]}`} alt={x.offerImages[0]} />
    
                                    <div className="details-container">
                                        <div className="title-stars-container">
                                            <p>{x.title}</p>
                                            <img className='stars' src={StarsIcon} alt="" />
                                        </div>
                                        <p className='price'><span>{x.price}</span>/night</p>
                                        <div className="features-container">
                                            <p>{`${x.bathrooms} Bathrooms`}</p>
                                            <p>{`${x.beds} Beds`}</p>
                                            <p className='last-feature'>{`${x.bedrooms} Bedrooms`}</p>
                                        </div>
                                        <button>Book now</button>
                                    </div>
                                </Link>
                            )
                        }
                    } else {
                        return (
                            <Link onClick={() => offerClicked(x._id)} to='/reservation' className='Link'>
                                <img className='house-img' src={`http://localhost:4000/${x.offerImages[0]}`} alt={x.offerImages[0]} />

                                <div className="details-container">
                                    <div className="title-stars-container">
                                        <p>{x.title}</p>
                                        <img className='stars' src={StarsIcon} alt="" />
                                    </div>
                                    <p className='price'><span>{x.price}</span>/night</p>
                                    <div className="features-container">
                                        <p>{`${x.bathrooms} Bathrooms`}</p>
                                        <p>{`${x.beds} Beds`}</p>
                                        <p className='last-feature'>{`${x.bedrooms} Bedrooms`}</p>
                                    </div>
                                    <button>Book now</button>
                                </div>
                            </Link>
                        )
                    }
                })
            }
            <Link to='/reservation' className='Link'>
                <img className='house-img' src={HouseImg} alt="" />

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                        <img className='stars' src={StarsIcon} alt="" />
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                    <button>Book now</button>
                </div>
            </Link>
            <Link to='/reservation' className='Link'>
                <img className='house-img' src={HouseImg} alt="" />

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                        <img className='stars' src={StarsIcon} alt="" />
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                    <button>Book now</button>
                </div>
            </Link>
            <Link to='/reservation' className='Link'>
                <img className='house-img' src={HouseImg} alt="" />

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                        <img className='stars' src={StarsIcon} alt="" />
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                    <button>Book now</button>
                </div>
            </Link>
            <Link to='/reservation' className='Link'>
                <img className='house-img' src={HouseImg} alt="" />

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                        <img className='stars' src={StarsIcon} alt="" />
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                    <button>Book now</button>
                </div>
            </Link>
            <Link to='/reservation' className='Link'>
                <img className='house-img' src={HouseImg} alt="" />

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                        <img className='stars' src={StarsIcon} alt="" />
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                    <button>Book now</button>
                </div>
            </Link>
            <Link to='/reservation' className='Link'>
                <img className='house-img' src={HouseImg} alt="" />

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                        <img className='stars' src={StarsIcon} alt="" />
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                    <button>Book now</button>
                </div>
            </Link>
            <Link to='/reservation' className='Link'>
                <img className='house-img' src={HouseImg} alt="" />

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                        <img className='stars' src={StarsIcon} alt="" />
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                    <button>Book now</button>
                </div>
            </Link>
            <Link to='/reservation' className='Link'>
                <img className='house-img' src={HouseImg} alt="" />

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                        <img className='stars' src={StarsIcon} alt="" />
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                    <button>Book now</button>
                </div>
            </Link>
            <Link to='/reservation' className='Link'>
                <img className='house-img' src={HouseImg} alt="" />

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                        <img className='stars' src={StarsIcon} alt="" />
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                    <button>Book now</button>
                </div>
            </Link>
            <Link to='/reservation' className='Link'>
                <img className='house-img' src={HouseImg} alt="" />

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                        <img className='stars' src={StarsIcon} alt="" />
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                    <button>Book now</button>
                </div>
            </Link>
            <Link to='/reservation' className='Link'>
                <img className='house-img' src={HouseImg} alt="" />

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                        <img className='stars' src={StarsIcon} alt="" />
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                    <button>Book now</button>
                </div>
            </Link>
            <Link to='/reservation' className='Link'>
                <img className='house-img' src={HouseImg} alt="" />

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                        <img className='stars' src={StarsIcon} alt="" />
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                    <button>Book now</button>
                </div>
            </Link>
            <Link to='/reservation' className='Link'>
                <img className='house-img' src={HouseImg} alt="" />

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                        <img className='stars' src={StarsIcon} alt="" />
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                    <button>Book now</button>
                </div>
            </Link>
            <Link to='/reservation' className='Link'>
                <img className='house-img' src={HouseImg} alt="" />

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                        <img className='stars' src={StarsIcon} alt="" />
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                    <button>Book now</button>
                </div>
            </Link>
            <Link to='/reservation' className='Link'>
                <img className='house-img' src={HouseImg} alt="" />

                <div className="details-container">
                    <div className="title-stars-container">
                        <p>Lorem ipsum</p>
                        <img className='stars' src={StarsIcon} alt="" />
                    </div>
                    <p className='price'><span>$120</span>/night</p>
                    <div className="features-container">
                        <p>1 Bed</p>
                        <p>Kitchen</p>
                        <p className='last-feature'>Living room</p>
                    </div>
                    <button>Book now</button>
                </div>
            </Link>
        </div>
    )
}

export default Offers;