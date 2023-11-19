import './styles/universal.css';
import SignPage from './pages/SignPage';
import WelcomePage from './pages/WelcomePage';
import AddOfferPage from './pages/AddOfferPage';
import ReservationPage from './pages/ReservationPage';
import ReservationsCart from './pages/ReservationsCart';
import ReservationsSubmittedPage from './pages/ReservationsSubmittedPage';
import MoreUserInfoPage from './pages/MoreUserInfoPage';
import MyOffersPage from './pages/MyOffersPage';
import AcceptedOffersPage from './pages/AcceptedOffersPage';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/signing-page' element={<SignPage />} />
          <Route path='/more-user-info' element={<MoreUserInfoPage />} />
          <Route path='/add-offer' element={<AddOfferPage />} />
          <Route path='/reservation' element={<ReservationPage />} />
          <Route path='/reservations-cart' element={<ReservationsCart />} />
          <Route path='/reservations-submitted' element={<ReservationsSubmittedPage />} />
          <Route path='/my-offers' element={<MyOffersPage />} />
          <Route path='/accepted-offers' element={<AcceptedOffersPage />} />
          <Route path='/profile-page' element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
