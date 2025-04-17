import React from 'react'
import './SwiperCards.css'
import { Container, Row, Col } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';

function SwiperCards() {
    return (
        <section className='py-5 px-3'>
            <Container>
                <h3 className='text-center'>پرفروش ترین مدل ها</h3>
                <Row className='mt-5'>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='swiper-watch-card'>
                                <div className='cards-back-img-1'>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-watch-card'>
                            <div className='cards-back-img-2'>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-watch-card'>
                            <div className='cards-back-img-3'>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='swiper-watch-card'>
                            <div className='cards-back-img-4'>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </Row>
            </Container>
        </section>
    )
}

export default SwiperCards