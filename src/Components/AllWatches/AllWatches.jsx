import React, { useState } from 'react'
import './AllWatches.css'
import { Link } from 'react-router-dom';
// Datas 
import AllWatchDatas from '../../Datas/AllWatches';
import { Container, Row, Col } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
// Icons 
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { MdOutlineWatch } from "react-icons/md";


function AllWatches() {

    const [allWatchDatas, setAllWatchDatas] = useState(AllWatchDatas)

    return (
        <section className='py-5 px-3'>
            <Container>
                <h5 className='mt-5'>همه ساعت ها</h5>
                <Row className='mt-5'>
                    <Swiper
                        // slidesPerView={2}
                        breakpoints={{
                            // when window width is >= 640px
                            576: {
                              width: 576,
                              slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                              width: 768,
                              slidesPerView: 2,
                              spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                              },
                          }}
                        // spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="w-100 h-100 dd align-items-center"
                    >
                        
                        { allWatchDatas.map(datas => (
                            <SwiperSlide className='swiper-watch-con' key={datas.id}>
                            <div className='all-watch-container w-100'>
                                <img src={datas.img} alt='' className='all-watch-img' />
                                <div className='all-watch-info'>
                                    <Link to={`/BuyPage/${datas.id}`} className='pt-4 pb-2 text-center watch-link'>{datas.watchName}</Link>
                                </div>
                                <div className='all-watch-color-infos py-2 text-cente'>
                                    <p className='fs-6 yekan'><IoIosColorPalette /> موجود در 2 رنگ : {datas.colors}</p>
                                    <p className='fs-6 yekan'><MdOutlineWatch /> موجود  در سایز های : 30 32 45</p>
                                </div>
                                <hr className='w-75' />
                                <div className='all-watch-price mb-4 d-flex align-items-center'>
                                    <p className='yekan'>{datas.price} میلیون</p><span style={{ writingMode: 'vertical-lr' }} className='fs-6 mb-3 me-1 text-warning'>تومان</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        )) }
                    </Swiper>
                </Row>
            </Container>
        </section>
    )
}

export default AllWatches