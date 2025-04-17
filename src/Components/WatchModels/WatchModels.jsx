import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import WatchModelComponent from '../WatchModelComponent/WatchModelComponent'

export default function WatchModels() {

    return (
        <section className='py-5 px-3'>
            <Container fluid>
                <h3 className='text-center'>چه مدل ساعتی میخوای ؟</h3>
                <Row className='row-cols-1 row-cols-md-2 row-cols-lg-4 gy-5 mt-5'>
                    <Col>
                        <WatchModelComponent title='ساعت اسپورت' imgSrc={'./images/Landing/sport-watch-min.jpg'} />
                    </Col>
                    <Col>
                        <WatchModelComponent title='ساعت مردانه' imgSrc={'./images/Landing/men-watch-min.jpg'} />
                    </Col>
                    <Col>
                        <WatchModelComponent title='ساعت زنانه' imgSrc={'./images/Landing/women-watch-min.jpg'} />
                    </Col>
                    <Col>
                        <WatchModelComponent title='ساعت کلاسیک' imgSrc={'./images/Landing/classic-watch-min.jpg'} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
