import { Link } from "react-router-dom";
import HouseImg from '../images&logos/The-Balmoral-Executive-View-Room-e1682260891619.jpg';
import StarsIcon from '../images&logos/five_star_rating.svg';
import '../styles/searchPage.css';
import Nav from "../components/Nav";
import { getTranslation } from "../translations/translationService";

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
                            <p className='price'><span>${x.price}</span>DA /{getTranslation(localStorage.getItem('language'), 'price')}</p>
                            <div className="features-container">
                                <p>{`${x.bathrooms} ${getTranslation(localStorage.getItem('language'), 'addOffer step-5 bathrooms')}`}</p>
                                <p>{`${x.beds} ${getTranslation(localStorage.getItem('language'), 'addOffer step-5 beds')}`}</p>
                                <p className='last-feature'>{`${x.bedrooms} ${getTranslation(localStorage.getItem('language'), 'addOffer step-5 bedrooms')}`}</p>
                            </div>
                            <button>{getTranslation(localStorage.getItem('language'), 'mainPage offer button')}</button>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
};

export default SearchPage;