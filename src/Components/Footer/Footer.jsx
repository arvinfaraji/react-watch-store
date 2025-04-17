import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap'
// Icons 
import { GiWatch } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { TbShoppingCart } from "react-icons/tb";
import { TbDeviceWatchStar } from "react-icons/tb";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='py-5 px-3'>
            <Container>
                <Row className='mt-5 gy-5 align-items-center'>
                    <hr />

                    <Col className='col-12 col-md-4'>
                        <h5>درباره ما</h5>
                        <p className='Byekan fs-5 text-justify py-4'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                        </p>
                    </Col>


                    <Col className='col-12 col-md-4 footer-links-align'>
                        <h5>ساعت رولکس</h5>
                        <div className='py-3 pt-4'>
                            <GiWatch className='fs-5 ms-2' />
                            <a href='#' className='footer-links'>همه ساعت ها</a>
                        </div>
                        <div className='py-3'>
                            <CgProfile className='fs-5 ms-2' />
                            <a href='#' className='footer-links'>پروفایل من</a>
                        </div>
                        <div className='py-3'>
                            <TbShoppingCart className='fs-5 ms-2' />
                            <a href='#' className='footer-links'>سبد خرید</a>
                        </div>
                        <div className='py-3'>
                            <TbDeviceWatchStar className='fs-5 ms-2' />
                            <a href='#' className='footer-links'>جدیدترین ها</a>
                        </div>
                    </Col>

                    

                    <Col className='col-12 col-md-4'>
                        <h5>ارتباط با ما</h5>
                        <div className='py-3 pt-4'>
                            <p>شماره موبایل : <span>09149812128</span></p>
                        </div>
                        <div className='py-3'>
                            <p>ایمیل : <span>arvinfaraji52@gmail.com</span></p>
                        </div>
                        <div className='icons'>
                            <ul className='icons-ul'>
                            <a href='tel:+989149812128'>
                            <button className='play-btn'><BsFillTelephoneFill /></button>
                            </a>

                                <li><TbBrandTelegram /></li>
                                <li><FaInstagram /></li>
                                <li><CiTwitter /></li>
                                <li><FaYoutube /></li>
                            </ul>
                        </div>
                        
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}
