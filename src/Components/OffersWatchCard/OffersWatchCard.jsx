import React from 'react'
import './OffersWatchCard.css'
import { Link } from 'react-router-dom'

function OffersWatchCard({ watchId ,title, watchImgSrc, oldPrice, offer, newPrice }) {
    return (
        <div className="offers-card-container">
            <img src={watchImgSrc} className='offer-watch-img mb-2' alt="" />
            <Link to={`/BuyPage/${watchId}`} className='text-center fs-5 text-black offer-link'>{title}</Link>

            <div className="watch-offer-price mt-5">
                <div className="d-flex">
                    <p className='old-price text-center fs-5 text-muted'>{oldPrice}</p>
                    <div className="total-offer mx-2">{offer}%</div>
                </div>
                <div className="d-flex justify-content-center">
                    <p className='text-center text-black fs-5 fw-bold'>{newPrice}</p>
                    <p className='text-muted me-2 mt-1'>تومان</p>
                </div>
            </div>
        </div>
    )
}

export default OffersWatchCard
