import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsFillBox2HeartFill } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import OffersWatchCard from '../OffersWatchCard/OffersWatchCard';
import AllWatchDatas from '../../Datas/AllWatches';

function OfferSection() {

    const [offerWatchData, setOfferWatchData] = useState(AllWatchDatas)

    return (
        <div className="d-flex justify-content-center mb-5 mt-5">
            <section className='py-5 offer-container-styles'>
                <Container>
                    <Row className='d-flex justify-content-between align-items-center gy-5'>
                        <Col className='col-12 col-md-3 offer-awarad-card' style={{ height: '100%' }}>
                            <BsFillBox2HeartFill style={{ fontSize: '100px' }} />
                            <h3 className='mt-4'>تخفیفات داغ هفته</h3>
                        </Col>

                        <Col className='col-12 col-md-8 me-4 d-flex' style={{ overflowX: 'auto' }}>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={40}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    // when window width is >= 640px (تبلت)
                                    700: {
                                        slidesPerView: 2,
                                    },
                                    // when window width is >= 1024px (لپ‌تاپ و بزرگتر)
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }}

                                modules={[Pagination]}
                                className="comments-swiper"
                            >
                                {
                                    offerWatchData.slice(0, 8).map((data, id) => {
                                        return (
                                            <SwiperSlide className='comments-swiper-slide' key={id}>
                                                <OffersWatchCard
                                                    watchId={data.id}
                                                    watchImgSrc={data.img}
                                                    title={data.watchName}
                                                    oldPrice='3,700,000'
                                                    offer='40'
                                                    newPrice='2,200,000'
                                                />
                                            </SwiperSlide>
                                        )
                                    })
                                }

                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default OfferSection
