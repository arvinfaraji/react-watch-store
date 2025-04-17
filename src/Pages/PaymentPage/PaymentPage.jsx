import React, { useContext } from 'react'
import './PaymentPage.css'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { DataContext } from '../../Context/Store'

function PaymentPage() {

    const context = useContext(DataContext)
    const totalAmount = context.userCart.reduce((total, product) => total + product.price * product.productNum, 0);

    return (
        <>
            <Header />
            <section className='py-5 px-3'>
                <Container>
                    <Row>
                        <h5 className='py-4'>تکمیل اطلاعات</h5>
                        <ul className='description-pay-section'>
                            <li>لطفا در درست پر کردن اطلاعات دقت فرمایید</li>
                            <li>همه اطلاعات مهم شما بصورت محرمانه در کنار ما محفوظ خواهد بود</li>
                            <li>در صورت هر گونه مشکل و نارضایتی تا ظرف 10 روز میتوانید محصول را مرجوع کنید</li>
                            <li>زمان ارسال برای تهران حداقل 4 روز و برای شهرستان حداقل 12 روز بوده</li>
                            <li>هزینه ارسال محصول بر عهده فروشگاه خواهد بود</li>
                            <div className="d-flex align-items-center">
                            <li>سفارشات شما :</li>
                            {context.userCart.map(productName => (
                                <span className='mx-3 yekan text-warning' key={productName.id}>{productName.title}</span>
                            ))}
                            </div>

                            <li>مبلغ قابل پرداخت : <span className='mx-3 yekan text-warning'>{totalAmount === 0 ? 'چیزی برای خرید ندارید' : `${totalAmount} تومان`}</span></li>
                        </ul>

                        <Col className='col-12 d-flex justify-content-center'>
                        <form className='form-input py-4'>
                            <Col className='col-12 col-md-6'>
                                <div className="inputs-display">
                                <div className='input'>
                                    <input type='text' className='form-input' placeholder='' />
                                    <label className='floating-label'>نام و نام خانوادگی</label>
                                </div>

                                <div className="inputs-margin"></div>

                                <div className='input'>
                                    <input type='tel' className='form-input' placeholder='+98' />
                                    <label className='floating-label'>شماره تلفن</label>
                                </div>
                                </div>
                            </Col>
                            
                            <Col className='col-12 col-md-6'>
                                <div className="inputs-display">
                                <div className='input'>
                                    <input type='text' className='form-input' placeholder='' />
                                    <label className='floating-label'>استان</label>
                                </div>

                                <div className="inputs-margin"></div>

                                <div className='input'>
                                    <input type='text' className='form-input' placeholder='' />
                                    <label className='floating-label'>شهر</label>
                                </div>
                                </div>
                            </Col>

                            <Col className='col-12 col-md-6'>
                                <div className="inputs-display">
                                <div className='input'>
                                    <input type='text' className='form-input' placeholder='' />
                                    <label className='floating-label'>آدرس محل سکونت</label>
                                </div>

                                <div className="inputs-margin"></div>

                                <div className='input'>
                                    <input type='password' className='form-input' placeholder='' />
                                    <label className='floating-label'>ایمیل (اختیاری)</label>
                                </div>
                                </div>
                            </Col>

                            <Col className='col-12 d-flex justify-content-center pt-3'>
                                <button className='btn btn-outline-warning'>تایید و رفتن به صفحه پرداخت نهایی</button>
                            </Col>
                        </form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default PaymentPage