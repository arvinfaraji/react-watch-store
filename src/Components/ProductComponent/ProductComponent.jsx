import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductsCard from '../ProductsCard/ProductsCard';

function ProductComponent({ AllWatchDatas }) {

    return (
        <>
            {
                AllWatchDatas.map((watchData) => {
                    return (
                        <ProductsCard key={watchData.id} datas={watchData} />
                    )
                })
            }
        </>
    )
}

export default ProductComponent
