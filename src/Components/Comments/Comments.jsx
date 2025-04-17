import React, { useRef, useState } from 'react'
import './Comments.css'
import { Container, Row, Col } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { FiWatch } from "react-icons/fi";
import { AiOutlineLike } from "react-icons/ai";
import CommentComponent from '../CommentComponent/CommentComponent';


function Comments() {
  return (
    <section className='py-5 px-2'>
      <Container>
        <h3 className='text-warning'>نظرات مشتریان</h3>

        <Row className='mt-5'>
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              // when window width is >= 640px (تبلت)
              800: {
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
            <SwiperSlide className='comments-swiper-slide'>
              <CommentComponent
                userImgSrc='./images/Users/team-member.jpg'
                userName='آروین فرجی'
                userSatisfaction='پیشنهاد میکنم'
                description=' نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و'
                watchModel='رولکس'
                buyDate='1401/12/8'
              />
            </SwiperSlide>
            <SwiperSlide className='comments-swiper-slide'>
              <CommentComponent
                userImgSrc='./images/Users/team-member-03.jpg'
                userName='سروش فرجی'
                userSatisfaction='پیشنهاد میکنم'
                description=' نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و'
                watchModel='کاسیو'
                buyDate='1400/5/21'
              />
            </SwiperSlide>
            <SwiperSlide className='comments-swiper-slide'>
              <CommentComponent
                userImgSrc='./images/Users/team-member-01.jpg'
                userName='افسانه فلاحی'
                userSatisfaction='قابل قبول'
                description=' نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و'
                watchModel='سیکو'
                buyDate='1403/12/1'
              />
            </SwiperSlide>
            <SwiperSlide className='comments-swiper-slide'>
              <CommentComponent
                userImgSrc='./images/Users/team-member-03.jpg'
                userName='الهام حیدری'
                userSatisfaction='پیشنهاد میکنم'
                description=' نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و'
                watchModel='سیتیزن'
                buyDate='1401/5/9'
              />
            </SwiperSlide>
          </Swiper>
        </Row>
      </Container>
    </section>
  )
}

export default Comments
