import '../styles/acceptedOffersPage.css';
import Nav from '../components/Nav';
import AcceptedOffer from '../components/AcceptedOffer';

function AcceptedOffersPage() {
    return(
        <div className="accepted-offers-page">
            <Nav />
            <AcceptedOffer />
        </div>
    )
}

export default AcceptedOffersPage;