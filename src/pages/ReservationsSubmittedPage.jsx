import '../styles/reservationsSubmittedPage.css';
import Nav from '../components/Nav';
import ReservationsSubmitted from '../components/ReservationsSubmitted';

function ReservationsSubmittedPage() {
    return(
        <div className="reservations-submitted-page">
            <Nav />
            <ReservationsSubmitted />
        </div>
    )
}

export default ReservationsSubmittedPage;