import React from 'react'
import './WatchModelComponent.css'

function WatchModelComponent({ title, imgSrc }) {
    return (
        <div className="box-watch-model-parent">
            <div className="watch-model-child watch-model-child-1">
                <img src={imgSrc} width={'140px'} alt="" />
            </div>
            <div className="">
                <p className='fs-4 ms-3'>{title}</p>
            </div>
        </div>
    )
}

export default WatchModelComponent
