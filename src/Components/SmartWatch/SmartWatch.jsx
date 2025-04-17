import React from 'react'
import './SmartWatch.css'
import { Container, Row, Col } from 'react-bootstrap'

function SmartWatch() {
    return (
        <section className='py-5 mt-5'>
            <Container fluid className='smart-watch-container'>
                <Row className='gy-5 justify-content-center align-items-center'>
                    <Col className='col-12 col-md-4'>
                        <img src="./images/Landing/output-onlinegiftools.gif" className='img-fluid max-smart-watch-gif' style={{ backgroundColor: 'transparent !important' }} alt="" />
                    </Col>
                    <Col className='col-12 col-md-5'>
                        <div className="">
                            <h4 className='text-warning'>ورود به دنیای ساعت های هوشمند</h4>
                            <p className='fs-4 py-3 Byekan'>مجموعه‌ای از با کیفیت‌ترین‌ها و برترین مدل‌های ساعت هوشمند با قیمت‌های بسیار ویژه، گارانتی 6 ماهه برای تمامی محصولات این دسته...</p>
                            <div className="d-flex justify-content-end">
                                <button className='btn btn-outline-warning px-5 py-2 fs-4'>دیدن بیشتر</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SmartWatch
