import '../styles/reservationPage.css';
import Nav from '../components/Nav';
import ReservationSlider from '../components/ReservationSlider';
import ReservationDetails from '../components/ReservationDetails';

function ReservationPage() {
    return(
        <div className="reservation-page">
            <Nav />
            <ReservationSlider />
            <ReservationDetails />
        </div>
    )
}

export default ReservationPage;