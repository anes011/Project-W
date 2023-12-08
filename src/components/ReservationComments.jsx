import { useEffect, useRef, useState } from 'react';
import '../styles/reservationComments.css';
import { useNavigate } from 'react-router-dom';
import { getTranslation } from '../translations/translationService';

function ReservationComments() {

    const redirect = useNavigate();

    const commentInput = useRef(null);

    const [apiData, setApiData] = useState([]);

    const user = localStorage.getItem('userAccount');
    const offer = localStorage.getItem('offerPressed');

    const commentsApi = async () => {
        try {
            const response = await fetch('http://localhost:4000/comments');
            const data = await response.json();
            setApiData(data.comments);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        commentsApi();
    }, []);

    const sendComment = () => {
        const sendCommentApi = async () => {
            if (user !== null && offer !== null) {
                try {
                    const response = await fetch('http://localhost:4000/comments', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            commentWriterPhoto: JSON.parse(user).profilePhoto,
                            commentWriterName: JSON.parse(user).userName,
                            commentReceiverID: JSON.parse(offer)._id,
                            comment: commentInput.current.value
                        })
                    });
                    const data = await response.json();
                } catch (err) {
                    console.error(err);
                    alert(err)
                }
            }
        };

        if (commentInput.current.value === '') {
            alert('Oops, you forgot to write a comment!');
        } else {
            if (user !== null) {
                sendCommentApi();
                commentsApi();
                commentInput.current.value = '';
            } else {
                redirect('/signing-page');
            }
        }
    };

    return(
        <div className="reservation-comments">
            {
                user !== null && offer !== null ? JSON.parse(user)._id !== JSON.parse(offer).hostID && (
                    <div className="add-comment">
                        <input onKeyDown={(e) => e.key === 'Enter' && sendComment()} ref={commentInput} type="text" placeholder={getTranslation(localStorage.getItem('language'), 'comment placeholder')} />
                        <button onClick={sendComment} className="send-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path></svg>
                        </button>
                    </div>
                ) : (
                    <div className="add-comment">
                        <input onKeyDown={(e) => e.key === 'Enter' && sendComment()} ref={commentInput} type="text" placeholder='What do you think?' />
                        <button onClick={sendComment} className="send-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='currentColor'><path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path></svg>
                        </button>
                    </div>
                )
            }

            <div className="comments-field">
                {
                    offer !== null && apiData.map((x) => {
                        if (x.commentReceiverID === JSON.parse(offer)._id) {
                            return (
                                <div className="comment-container">
                                    <div className='comment-profile'>
                                        <img src={`http://localhost:4000/${x.commentWriterPhoto}`} alt={x.commentWriterPhoto} className="profile-photo" />
                                        <p>{x.commentWriterName}</p>
                                        <p>{`${x.date.slice(0, 4)}/${x.date.slice(5, 7)}/${x.date.slice(8, 10)}`}</p>
                                    </div>
    
                                    <div className="comment">{x.comment}</div>
                                </div>
                            )
                        }
                    })
                }
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