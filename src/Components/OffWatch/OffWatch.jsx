import React, { useState, useRef } from 'react'
import './OffWatch.css'
// Datas 
import OffWatchDatas from '../../Datas/OffWatches';
import { Container, Row, Col } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
// Icons 
import { IoIosColorPalette } from "react-icons/io";
import { MdOutlineWatch } from "react-icons/md";

function OffWatch() {

    const [offwatchData, setOffwatchData] = useState(OffWatchDatas)

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }

    return (
        <section className='py-5 px-3'>
            <Container>
                <h4>تخفیفات پیشنهادی</h4>
                <Row className='mt-5'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="OffSwiper"
                    >

                        {offwatchData.map(datas => (
                            <SwiperSlide className='off-watch-swiper' key={datas.id}>
                                <div className='all-watch-container off-watch-border w-100'>
                                    <img src={datas.img} alt='' className='off-watch-img' />
                                    <div className='all-watch-info'>
                                        <p className='pt-4 text-center watch-link'>{datas.watchName}</p>
                                    </div>
                                    <div className='all-watch-color-infos py-2 text-cente'>
                                        <p className='fs-6 yekan'><IoIosColorPalette /> موجود در 2 رنگ : ⚫ 🟡</p>
                                        <p className='fs-6 yekan'><MdOutlineWatch /> موجود  در سایز های : 30 32 45</p>
                                    </div>
                                    <hr className='w-75 d-block py-2' style={{ margin: 'auto' }} />
                                    <div className='all-watch-price mb-3 d-flex flex-column-reverse justify-content-center align-items-center'>
                                        <p className='yekan old-price'>{datas.oldPrice} میلیون</p>
                                        <div className='d-flex'>
                                            <p className='yekan'>{datas.newPrice} میلیون</p><span style={{ writingMode: 'vertical-lr' }} className='fs-6 mb-3 me-1 text-warning'>تومان</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </Row>
            </Container>
        </section>
    )
}

export default OffWatch