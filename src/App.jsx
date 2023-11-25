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
import data from './Context';
import { useEffect, useState } from 'react';

function App() {

  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const signRoutes = localStorage.getItem('signRoutes');

  return (
    <data.Provider value={{ userName, setUserName, email, setEmail, password, setPassword }}>
        <div className="App">
          <Router>
            <Routes>
              <Route path='/' element={<WelcomePage />} />
              <Route path={signRoutes === 'false' ? '' : '/signing-page'} element={<SignPage />} />
              <Route path={signRoutes === 'false' ? '' : '/more-user-info'} element={<MoreUserInfoPage />} />
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
    </data.Provider>
  );
}

export default App;
