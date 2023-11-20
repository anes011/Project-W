import '../styles/reservationComments.css';

function ReservationComments() {
    return(
        <div className="reservation-comments">
            <div className="add-comment">
                <input type="text" placeholder='What do you think?' />
                <button className="send-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path></svg>
                </button>
            </div>

            <div className="comments-field">
                <div className="comment-container">
                    <div className='comment-profile'>
                        <img src="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="profile-photo" />
                        <p>Lorem, ipsum.</p>
                        <p>10/03/2022</p>
                    </div>

                    <div className="comment">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae eos pariatur voluptate illum sint quo nesciunt dolores cupiditate magnam nostrum!</div>
                </div>
                <div className="comment-container">
                    <div className='comment-profile'>
                        <img src="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="profile-photo" />
                        <p>Lorem, ipsum.</p>
                        <p>10/03/2022</p>
                    </div>

                    <div className="comment">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae eos pariatur voluptate illum sint quo nesciunt dolores cupiditate magnam nostrum!</div>
                </div>
                <div className="comment-container">
                    <div className='comment-profile'>
                        <img src="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="profile-photo" />
                        <p>Lorem, ipsum.</p>
                        <p>10/03/2022</p>
                    </div>

                    <div className="comment">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae eos pariatur voluptate illum sint quo nesciunt dolores cupiditate magnam nostrum!</div>
                </div>
                <div className="comment-container">
                    <div className='comment-profile'>
                        <img src="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="profile-photo" />
                        <p>Lorem, ipsum.</p>
                        <p>10/03/2022</p>
                    </div>

                    <div className="comment">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae eos pariatur voluptate illum sint quo nesciunt dolores cupiditate magnam nostrum!</div>
                </div>
                <div className="comment-container">
                    <div className='comment-profile'>
                        <img src="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="profile-photo" />
                        <p>Lorem, ipsum.</p>
                        <p>10/03/2022</p>
                    </div>

                    <div className="comment">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae eos pariatur voluptate illum sint quo nesciunt dolores cupiditate magnam nostrum!</div>
                </div>
            </div>
        </div>
    )
}

export default ReservationComments;