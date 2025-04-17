import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './ShoppingCart.css'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { DataContext } from '../../Context/Store'
import Typewriter from 'typewriter-effect'
// Icons 
import { IoIosColorPalette } from "react-icons/io";
import { MdOutlineWatch } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";


function ShoppingCart() {

    const context = useContext(DataContext)

    const deletHandler = (productId) => {
        let removeProduct = context.userCart.filter(item => item.id !== productId)

        context.setUserCart(removeProduct)
    }

    return (
        <>
            <Header />
            <section className='py-5 px-3'>
                <Container>
                    <h4>سبد خرید</h4>

                    <Typewriter className='Typewriter'
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('با هدیه دادن یه ساعت به خودت حال خودت رو خوب کن 😉')
                                .start()
                                .pauseFor(2000)
                                .deleteAll()
                                .start()
                                .typeString('فروشگاه رولکس ، همیشه بهترین')
                                .start()
                                .pauseFor(2000)
                                .deleteAll()
                                .start()
                                .typeString('با رولکس استایل خودت رو کامل کن')
                                .start()
                                .pauseFor(2000)
                                .deleteAll()
                                .start()
                                .typeString('با ضمانت چند ساله رولکس دیگه نگران چیزی نباش')
                                .start()
                                .pauseFor(2000)
                                .deleteAll()
                                .start()
                        }}

                        options={{
                            loop: true
                        }}
                    />
                    {context.userCart.length == 0 ? (
                        <>
                            <Row className='mt-5'>
                                <div>
                                    <h3 className='text-center'>چیزی برای <span className='text-danger'>خرید</span> ندارید.</h3>
                                </div>
                            </Row>
                        </>
                    ) : (

                        context.userCart.map(product => (
                            <section className='pt-4'>
                                <Row className='mt-5 row-cols-1 row-cols-md-3 d-flex align-items-center'>

                                    <Col className=''>
                                        <div className="right-section d-flex">
                                            <div className="showNum">
                                                <p>{product.productNum}</p>
                                            </div>

                                            <div className='me-3 max-trash-icon-display'>
                                                <button className='trash-btn' onClick={(e) => {
                                                    e.stopPropagation()

                                                    deletHandler(product.id)
                                                }}><FaRegTrashCan /></button>
                                            </div>

                                            <img src={product.img} alt='' className='all-watch-img' />

                                            <div className='me-3 min-trash-icon-display'>
                                                <button className='trash-btn'><FaRegTrashCan /></button>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col className=''>
                                        <div className="right-section">
                                            <div className='py-2'>
                                                <Link to={`/BuyPage/${product.id}`} className='py-4 min-shoping-cart-textAlign max-shoping-cart-textAlign watch-link'>{product.title}</Link>

                                                <div className='watch-colors d-flex align-items-cneter pt-3'>
                                                    <p>رنگ :</p>
                                                    <div className={`${product.colorName} mx-2`}>

                                                    </div>
                                                    <div className={`${product.colorName2}} mx-2`}>

                                                    </div>
                                                </div>
                                                <p className='fs-6 yekan'><MdOutlineWatch /> سایز : 32 </p>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col className=''>
                                        <div className="left-section">
                                            <div className='all-watch-price d-flex align-items-center'>
                                                <p className='yekan'>{product.price} میلیون</p><span  className='fs-6 mb-3 me-1 text-warning'>تومان</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <hr className='my-3 w-100' />

                                </Row>
                            </section>
                        ))
                    )}
                   {
                   context.userCart.length == 0 ? <></> :  
                   <div className="d-flex justify-content-center py-3">
                        <Link to='/PaymentPage' className='btn btn-outline-warning px-4'>رفتن به صفحه پرداخت</Link>
                    </div>
                    }
                </Container>
            </section >
            <Footer />
        </>
    )
}

export default ShoppingCart