import '../styles/book.css';
import { getTranslation } from '../translations/translationService';

function Book() {
    return(
        <div className="book">
            <h1>{getTranslation(localStorage.getItem('language'), 'blackBoxTitle')}</h1>
            <div className="arrow-btn-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                <button>{getTranslation(localStorage.getItem('language'), 'blackBoxButton')}</button>
            </div>
        </div>
    )
}

export default Book;