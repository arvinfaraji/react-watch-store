import React, { useEffect } from 'react'
import './PapularWatch.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function PapularWatch( props ) {
    
    return (
        <section className='py-5 px-3' style={{ direction: 'rtl' }}>
            <Container>
                <h3 className='text-center'>{props.title}</h3>
                <Row className='mt-5 align-items-center gy-5'>
                    <Col className='col-12 col-md-6'>
                    <h5>{props.model} <span className='text-warning'>{props.modelColor}</span></h5>
                    <p className='py-4 text-justify Byekan fs-5'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، ....
                    </p>
                    <button className='buy-watch-btn'>رفتن به صفحه خرید</button>
                    </Col>
                    <Col className='col-12 col-md-6'>
                        <img src={props.ImgSrc} alt='' className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
