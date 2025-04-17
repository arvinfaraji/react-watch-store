import React, { useEffect } from 'react'
import './AboutUs.css'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
// Icons 
import { CiMedal } from "react-icons/ci";
import { FaShop } from "react-icons/fa6";
import { MdOutlineWatch } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";


function AboutUs() {

  useEffect(()=> {
    window.scroll(0, 0)
  }, [])
  
  return (
    <>
      <Header />
      <Container className='mt-5 py-3 px-3'>
        <Row className='align-items-center mt-3 gy-5'>
          <Col className='col-12 col-md-6'>
            <h3 className='text-warning fw-bold'>درباره ما</h3>
            <p className='Byekan text-justify py-3 mx-2 fs-5'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
            </p>
          </Col>
          <Col className='col-12 col-md-6'>
            <img src="./images/Landing/The-Watch-Shop-3.png" alt="" className='img-fluid' style={{ borderRadius: '10px' }} />
          </Col>
        </Row>

        <Row className='row-cols-1 row-cols-md-2 row-cols-lg-4 gy-5 mt-5 px-sm-5 px-md-0'>
          <Col>
          <div className="about-us-card-container">
            <CiMedal className='fs-2 mb-3 ms-2' />
            <p className='fs-4'>سال سابقه : <span className='text-warning'>12</span></p>
          </div>
          </Col>
          <Col>
          <div className="about-us-card-container">
            <FaShop className='fs-3 mb-3 ms-2' />
            <p className='fs-4'>تعداد شعبات : <span className='text-warning'>5</span></p>
          </div>
          </Col>
          <Col>
          <div className="about-us-card-container">
          <MdOutlineWatch className='fs-3 mb-3 ms-2' />
            <p className='fs-4'>تعداد برند : <span className='text-warning'>37+</span></p>
          </div>
          </Col>
          <Col>
          <div className="about-us-card-container">
            <FaHandHoldingHeart className='fs-3 mb-3 ms-2' />
            <p className='fs-4'>رضایت مشتری : <span className='text-warning'>95%</span></p>
          </div>
          </Col>
          
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default AboutUs
