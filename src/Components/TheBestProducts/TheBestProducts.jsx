import React, { useState } from 'react'
import './TheBestProducts.css'
// Datas 
import BestWatches from '../../Datas/BestWatches'
import { Container, Row, Col } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

function TheBestProducts() {

    const [bestWatchData, setBestWatchData] = useState(BestWatches)
    

    return (
        <section className='py-5 px-3'>
            <Container>
                <h5 className='mt-5'>بهترین کارهای گالری</h5>
                <Row className='mt-5'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                          rotate: 50,
                          stretch: 0,
                          depth: 100,
                          modifier: 1,
                          slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="best-watch"
                    >
                        
                        { bestWatchData.map(datas => (
                            <SwiperSlide key={datas.id} className='swiper-best-watch'>
                            <img src={datas.img} className='best-products-img' alt='' />
                        </SwiperSlide>
                        )) }
                    </Swiper>
                </Row>
            </Container>
        </section>
    )
}

export default TheBestProducts