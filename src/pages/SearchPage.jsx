import { Link } from "react-router-dom";
import HouseImg from '../images&logos/The-Balmoral-Executive-View-Room-e1682260891619.jpg';
import StarsIcon from '../images&logos/five_star_rating.svg';
import '../styles/searchPage.css';
import Nav from "../components/Nav";

function SearchPage() {

    const search = localStorage.getItem('search');

    const handleTarget = (_id) => {
        if (search !== null) {
            const target = Object.values(JSON.parse(search)).find((x) => x._id === _id);
            localStorage.setItem('offerPressed', JSON.stringify(target));
        }
    };

    return(
        <div className="search-page">
            <Nav />

            {
                search !== null && Object.values(JSON.parse(search)).map((x) => (
                    <Link onClick={() => handleTarget(x._id)} to='/reservation' className='offer-container'>
                        <div className="images-grid">
                            <img className='offer-img' src={`https://project-w.onrender.com/${x.offerImages[0]}`} alt={x.offerImages[0]} />
                            <img className='offer-img' src={`https://project-w.onrender.com/${x.offerImages[1]}`} alt={x.offerImages[1]} />
                            <img className='offer-img' src={`https://project-w.onrender.com/${x.offerImages[2]}`} alt={x.offerImages[2]} />
                        </div>

                        <div className="details">
                            <div className="title-stars-container">
                                <p>{x.title}</p>
                                <img className='stars' src={StarsIcon} alt="" />
                            </div>
                            <p className='price'><span>${x.price}</span>/night</p>
                            <div className="features-container">
                                <p>{`${x.bathrooms} Bathrooms`}</p>
                                <p>{`${x.beds} Beds`}</p>
                                <p className='last-feature'>{`${x.bedrooms} Bedrooms`}</p>
                            </div>
                            <button>Book now</button>
                        </div>
                    </Link>
                ))
            }
            <Link to='/reservation' className='offer-container'>
                <div className="images-grid">
                    <img className='offer-img' src={HouseImg} alt="" />
                    <img className='offer-img' src={HouseImg} alt="" />
                    <img className='offer-img' src={HouseImg} alt="" />
                </div>

                <div className="details">
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
            <Link to='/reservation' className='offer-container'>
                <div className="images-grid">
                    <img className='offer-img' src={HouseImg} alt="" />
                    <img className='offer-img' src={HouseImg} alt="" />
                    <img className='offer-img' src={HouseImg} alt="" />
                </div>

                <div className="details">
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
            <Link to='/reservation' className='offer-container'>
                <div className="images-grid">
                    <img className='offer-img' src={HouseImg} alt="" />
                    <img className='offer-img' src={HouseImg} alt="" />
                    <img className='offer-img' src={HouseImg} alt="" />
                </div>

                <div className="details">
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
            <Link to='/reservation' className='offer-container'>
                <div className="images-grid">
                    <img className='offer-img' src={HouseImg} alt="" />
                    <img className='offer-img' src={HouseImg} alt="" />
                    <img className='offer-img' src={HouseImg} alt="" />
                </div>

                <div className="details">
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
            <Link to='/reservation' className='offer-container'>
                <div className="images-grid">
                    <img className='offer-img' src={HouseImg} alt="" />
                    <img className='offer-img' src={HouseImg} alt="" />
                    <img className='offer-img' src={HouseImg} alt="" />
                </div>

                <div className="details">
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
            <Link to='/reservation' className='offer-container'>
                <div className="images-grid">
                    <img className='offer-img' src={HouseImg} alt="" />
                    <img className='offer-img' src={HouseImg} alt="" />
                    <img className='offer-img' src={HouseImg} alt="" />
                </div>

                <div className="details">
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
};

export default SearchPage;