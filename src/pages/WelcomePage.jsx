import Nav from "../components/Nav";
import Hero from "../components/Hero";
import '../styles/welcomePage.css';

function WelcomePage() {
    return(
        <div className="welcome-page">
            <Hero />
            <Nav />
        </div>
    )
}

export default WelcomePage;