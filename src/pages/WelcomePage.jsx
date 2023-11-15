import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Book from "../components/Book";
import Offers from "../components/Offers";
import '../styles/welcomePage.css';

function WelcomePage() {
    return(
        <div className="welcome-page">
            <Nav />
            <Hero />
            <Book />
            <Offers />
        </div>
    )
}

export default WelcomePage;