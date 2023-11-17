import '../styles/reservationsCart.css';
import Nav from '../components/Nav';
import ReservationsTable from '../components/ReservationsTable';

function ReservationsCart() {
    return(
        <div className="reservations-cart">
            <Nav />
            <ReservationsTable />
        </div>
    )
}

export default ReservationsCart;