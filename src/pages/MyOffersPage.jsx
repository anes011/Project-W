import '../styles/myOffersPage.css';
import Nav from '../components/Nav';
import MyOffers from '../components/MyOffers';

function MyOffersPage() {
    return(
        <div className="my-offers-page">
            <Nav />
            <MyOffers />
        </div>
    )
}

export default MyOffersPage;