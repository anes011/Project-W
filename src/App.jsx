import './styles/universal.css';
import SignPage from './pages/SignPage';
import WelcomePage from './pages/WelcomePage';
import AddOfferPage from './pages/AddOfferPage';
import ReservationPage from './pages/ReservationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignPage />} />
          <Route path='/welcome' element={<WelcomePage />} />
          <Route path='/add-offer' element={<AddOfferPage />} />
          <Route path='/reservation' element={<ReservationPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
