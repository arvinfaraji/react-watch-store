import React from 'react'

function WatchInfoBox({ iconName, title, body }) {
    return (
        <div className='info-boxes text-center'>
            <div className='top-info-box'>
                {iconName}
                <p className='fs-6 d-block'>{title} :</p>
            </div>
            <span>
                {body}
            </span>
        </div>
    )
}

export default WatchInfoBox
