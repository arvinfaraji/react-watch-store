import React from 'react'
import './CommentComponent.css'
import { FiWatch } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";

function CommentComponent({userName, userImgSrc, userSatisfaction, description, watchModel, buyDate}) {
    return (
        <div className="comment-box">
            <div className="top-box mx-2 mb-2 mt-4">
                <div className="box-display">
                    <img src={userImgSrc} alt="" height={50} width={50} style={{ borderRadius: '50%' }} />
                    <p className='me-3 fs-5 mt-2'>{userName}</p>
                </div>

                <div className="box-display">
                    <AiOutlineLike className='fs-2' style={{ color: userSatisfaction == "قابل قبول" ? 'yellow' : '#46D098' }} />
                    <p className='fs-5 mt-3 mx-2' style={{ color: userSatisfaction == "قابل قبول" ? 'yellow' : '#46D098' }}>{userSatisfaction}</p>
                </div>
            </div>
            <div className="body-box">
                <p>
                    {description}
                </p>
                <div className="d-flex" style={{ flexDirection: "row-reverse" }}>
                    <hr className='mx-3' style={{ width: '85%' }} />
                    <FiWatch className='fs-2 text-warning' />
                </div>
                <div className="bottom-body">
                    <p className='fs-5'>{watchModel}</p>
                    <p className='fs-5'>{buyDate}</p>
                </div>
            </div>
        </div>
    )
}

export default CommentComponent
