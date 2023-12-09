import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Book from "../components/Book";
import Offers from "../components/Offers";
import Footer from "../components/Footer";
import '../styles/welcomePage.css';

function WelcomePage() {
    return(
        <div className="welcome-page">
            <Nav />
            <Hero />
            <Book />
            <Offers />
            <Footer />
        </div>
    )
}

export default WelcomePage;