import '../styles/reservationPage.css';
import Nav from '../components/Nav';
import ReservationSlider from '../components/ReservationSlider';
import ReservationDetails from '../components/ReservationDetails';
import ReservationPrice from '../components/ReservationPrice';
import ReservationComments from '../components/ReservationComments';
import Footer from '../components/Footer';

function ReservationPage() {
    return(
        <div className="reservation-page">
            <Nav />
            <ReservationSlider />
            <div className="details-price-container">
                <ReservationDetails />
                <ReservationPrice />
            </div>
            <ReservationComments />
            <Footer />
        </div>
    )
}

export default ReservationPage;