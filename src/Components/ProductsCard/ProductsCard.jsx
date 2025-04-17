import React from 'react'
import './ProductsCard.css'
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

function ProductsCard({datas}) {
    console.log('cardas', datas);
    
    return (
        <Col>
        <div className="watch-card-container" key={datas.id}>
            <div className="image-watch-container d-flex flex-column justify-content-center">
                <img src={datas.img} className='products-watch-image' alt="" />
                <Link to={`/BuyPage/${datas.id}`} className='watch-title'>{datas.watchName}</Link>
            </div>
            <div className="body-watch-info d-flex justify-content-end mt-4">
                <p className='Byekan'>{datas.price}</p>
                <span className='me-2'>تومان</span>
            </div>
        </div>
        </Col>
    )
}

export default ProductsCard
