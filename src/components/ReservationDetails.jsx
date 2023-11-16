import '../styles/reservationDetails.css';
import SuccessIcon from '../images&logos/success-svgrepo-com.svg';
import StarsIcon from '../images&logos/five_star_rating.svg';

function ReservationDetails() {
    return(
        <div className="reservation-details">
            <h1>Lorem, ipsum dolor.</h1>

            <div className="profile">
                <img src="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="profile-photo" />
                <p>User</p>
                <img src={SuccessIcon} alt="" />
            </div>

            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore totam amet architecto voluptatum corporis eveniet fuga porro officiis quibusdam perferendis magnam, laboriosam ipsa debitis iste voluptates cum! Optio, ea ad.</p>
            </div>

            <div className="accommodation-type-rate">
                <div className="type-container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
                        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                    </svg>

                    <p>House</p>
                </div>

                <img className='stars' src={StarsIcon} alt="" />
            </div>
        </div>
    )
}

export default ReservationDetails;