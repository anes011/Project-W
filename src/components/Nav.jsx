import '../styles/nav.css';

function Nav() {
    return(
        <div className="nav">
            <button className="menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </button>

            <div className="logo">LOGO</div>

            <div className="profile-book-container">
                <div className="profile-container">
                    <img src="https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="profile-photo" />
                    <div className="profile-p">
                        <p>Hello</p>
                        <p>User</p>
                    </div>
                </div>

                <button className="book-btn">Book your stay</button>
            </div>
        </div>
    )
}

export default Nav;