import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BlogCard from '../BlodCardComponent/BlogCard'

function Blogs({ dwwd }) {
    return (
        <section className='py-5 px-3'>
            <Container>
                <h4>وبلاگ ها</h4>
                <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5 mt-5 ${}'>
                    <Col className=''>
                        <BlogCard
                            cardClassName='card card--1'
                            timeToRead='15 min'
                            watchBrand='Rolex'
                            title='ساعت لیمیت ادیشن 30 ساله رولکس'
                            writtenBy='آروین فرجی'
                        />
                    </Col>

                    <Col className=''>
                        <BlogCard
                            cardClassName='card card--2'
                            timeToRead='5 min'
                            watchBrand='Siaco'
                            title='ساعت های محبوب کاسیو رنگ طلایی'
                            writtenBy='سروش'
                        />
                    </Col>

                    <Col className=''>
                        <BlogCard
                            cardClassName='card card--3'
                            timeToRead='12 min'
                            watchBrand='Siaco'
                            title='نحوه درست نگهداری از ساعت های بند چرم'
                            writtenBy='سروش'
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Blogs
