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
import StepsEndPage from './pages/StepsEndPage';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from './Context';
import { useState } from 'react';

function App() {

  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [placeType, setPlaceType] = useState(null);
  const [spaceGiven, setSpaceGiven] = useState(null);
  const [location, setLocation] = useState(null);
  const [guests, setGuests] = useState(1);
  const [bedrooms, setBedrooms] = useState(3);
  const [beds, setBeds] = useState(1);
  const [bathrooms, setBathrooms] = useState(2);
  const [wifi, setWifi] = useState(false);
  const [tv, setTv] = useState(false);
  const [washer, setWasher] = useState(false);
  const [parking, setParking] = useState(false);
  const [airConditioning, setAirConditioning] = useState(false);
  const [pool, setPool] = useState(false);
  const [firstAidKit, setFirstAidKit] = useState(false);
  const [fireDistinguisher, setFireDistinguisher] = useState(false);
  const [offerImages, setOfferImages] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const signRoutes = localStorage.getItem('signRoutes');

  return (
    <data.Provider value={{ userName, setUserName, email, setEmail, password, setPassword,
    placeType, setPlaceType, spaceGiven, setSpaceGiven, location, setLocation, guests,
    setGuests, bedrooms, setBedrooms, beds, setBeds, bathrooms, setBathrooms, wifi, setWifi,
    tv, setTv, washer, setWasher, parking, setParking, airConditioning, setAirConditioning,
    pool, setPool, firstAidKit, setFirstAidKit, fireDistinguisher, setFireDistinguisher, offerImages,
    setOfferImages, title, setTitle, description, setDescription, price, setPrice, checkIn,
    setCheckIn, checkOut, setCheckOut }}>
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
              <Route path='/steps-end' element={<StepsEndPage />} />
              <Route path='/search' element={<SearchPage />} />
            </Routes>
          </Router>
        </div>
    </data.Provider>
  );
}

export default App;
