import React from 'react'
import './AboutWatch.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function AboutWatch() {

  return (
    <section className='py-5 px-3'>
      <Container>
        <Row className='align-items-center mt-5'>
          <Col className='col-12 col-md-4' style={{textAlign: 'right'}}>
            <div className='py-3'>
              <p>تعداد موتور : 8</p>
            </div>
            <div className='py-3'>
              <p>جنس بند : استیل</p>
            </div>
            <div className='py-3'>
              <p>جنس شیشه : ضدخش و نشکن</p>
            </div>
          </Col>
          <Col className='col-12 col-md-4'>
          <img src='./images/Watch/png-transparent-rolex-daytona-rolex-datejust-rolex-submariner-watch-u52b3u529bu58ebu5b87u5b99u8ba1u578bu8feau901au62ff-black-rolex-watch-black-hair-watch-accessory-black-white-removebg-preview-min.png' alt='' className='img-fluid' />
          </Col> 
          <Col className='col-12 col-md-4' style={{textAlign: 'left'}}>
          <div className='py-3'>
              <p>تعداد عقربه : 3</p>
            </div>
            <div className='py-3'>
              <p>گارانتی : 5 سال</p>
            </div>
            <div className='py-3'>
              <p>کشور سازنده : کانادا</p>
            </div>
          </Col>
          <div className='d-flex justify-content-center mt-4'>
            <button className='buy-watch-btn w-25 text-center'>مشاهده بیشتر</button>
          </div>
        </Row>
      </Container>
    </section>
  )
}
