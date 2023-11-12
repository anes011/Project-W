import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Book from "../components/Book";
import '../styles/welcomePage.css';

function WelcomePage() {
    return(
        <div className="welcome-page">
            <Nav />
            <Hero />
            <Book />
        </div>
    )
}

export default WelcomePage;