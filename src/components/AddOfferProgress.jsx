import '../styles/addOfferProgress.css';
import HouseIcon from '../images&logos/pngwing.com (1).png';
import ApartmentIcon from '../images&logos/pngwing.com.png';

function AddOfferProgress() {
    return(
        <div className="add-offer-progress">
            <div className="steps-container">
                {/* <div className="step-1-container">
                    <p><span>Lorem ipsum</span> dolor sit amet consectetur, adipisicing elit. Nihil maiores exercitationem, libero cupiditate blanditiis reprehenderit odio atque quos? Facilis doloremque itaque commodi ea esse ab recusandae rem nam accusantium adipisci.</p>
                    <img src="https://cdn.wallpapersafari.com/39/91/RaQBrU.jpg" alt="" />
                </div> */}

                {/* <div className="step-2-container">
                    <h1>Which of these best describes your place?</h1>
                    <div className="accommodation-btns">
                        <button className="house-btn">
                            <img src={HouseIcon} alt="" />
                            <p>House</p>
                        </button>

                        <button className="apartment-btn">
                            <img src={ApartmentIcon} alt="" />
                            <p>Apartment</p>
                        </button>
                    </div>
                </div> */}

                {/* <div className="step-3-container">
                    <h1>What type of place will guests have?</h1>

                    <button className="entire-house-btn">
                        <div className="description-container">
                            <p>An entire place</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, exercitationem.</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                        </svg>
                    </button>

                    <button className="room-btn">
                        <div className="description-container">
                            <p>A room</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae, eos fugiat inventore quidem similique quos voluptas explicabo aut commodi!</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
                            <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                        </svg>
                    </button>

                    <button className="shared-room-btn">
                        <div className="description-container">
                            <p>A shared room</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nam in repellat omnis, quia voluptate!</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                        </svg>
                    </button>
                </div> */}

                <div className="step-4-container">
                    <h1>Where's your place located?</h1>
                    <p>Your address is only shared with guests after they’ve made a reservation.</p>

                    <div className="address-input">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <input type="text" placeholder='Your address...?'/>
                    </div>
                </div>

                <div className="progress-bar"></div>
            </div>

            <div className="back-next-container">
                <button className="back-btn">Back</button>
                <button className="next-btn">Next</button>
            </div>
        </div>
    )
}

export default AddOfferProgress;