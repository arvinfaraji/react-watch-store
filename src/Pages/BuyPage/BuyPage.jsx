import React, { useContext, useEffect, useState } from 'react'
import './BuyPage.css'
import { Container, Row, Col } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
// Context 
import { DataContext } from '../../Context/Store';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// notify 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
// Icons 
import { RxSize } from "react-icons/rx";
import { MdOutlineWatch } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoMdColorPalette } from "react-icons/io";
import { GoNumber } from "react-icons/go";
import { CiBadgeDollar } from "react-icons/ci";
import { useParams } from 'react-router-dom'
import AllWatchDatas from '../../Datas/AllWatches'
import WatchInfoBox from '../../Components/WatchInfoBox/WatchInfoBox';
import CheckBox from '../../Components/CheckBox/CheckBox';


const paragraphStyles = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
    transition: 'all 2s'
}

function BuyPage() {

    let { id } = useParams()

    // Context 
    const context = useContext(DataContext)

    // swiper 
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [allDatas, setAllDatas] = useState(AllWatchDatas)

    const [buyData, setBuyData] = useState([])

    const [totalPrice, setTotalprice] = useState(0)

    const [productNum, setProductNum] = useState(1)

    const addHandler = () => {
        setProductNum(prevNum => prevNum + 1)
    }

    const minuseHandler = () => {
        setProductNum(prevNum => prevNum - 1)
    }

    useEffect(() => {

        const filterData = allDatas.filter(data => data.id == id)

        if (filterData.length > 0) {
            setBuyData(filterData);
            setTotalprice(filterData[0].price * productNum);
        }

    }, [id, productNum])

    useEffect(() => {
        window.scroll(0, 0)
    }, [id])

    const [isOpen, setIsOpen] = useState(false)

    const notify = () => {
        toast.success('محصول با موفقیت به سبد خرید اضافه شد', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            style: {
                backgroundColor: '#1D1D1B',
            }
        });
    }

    return (
        <>
            <Header />

            {buyData.map(datas => (
                <>
                    {/* Intro  */}
                    <section className='py-5 px-3' key={datas.id}>
                        <Container>
                            <Row className='align-items-center mt-1 gy-5'>
                                <Col className='col-12 col-md-6'>
                                    <h4>{datas.watchName}</h4>
                                    <p className='yekan py-3 text-justify'>
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                    </p>
                                    <div className='watch-colors d-flex align-items-cneter'>
                                        <p>رنگ ها :</p>
                                        <div className={`${datas.colorName} mx-2`}>

                                        </div>
                                        <div className={`${datas.colorName2}} mx-2`}>

                                        </div>
                                    </div>
                                    <div className='watch-sizes d-flex align-items-cneter py-2'>
                                        <p>سایز ها :</p>
                                        <div className='me-1'>
                                            <div class="checkbox-wrapper-12 d-flex">
                                                <CheckBox checkBoxLabel='22' />
                                                <CheckBox checkBoxLabel='22' />
                                                <CheckBox checkBoxLabel='22' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Num-Of-Products d-flex align-items-center py-2">
                                        <p className='ms-4'>تعداد سفارش :</p>
                                        <div className='d-flex align-items-center'>
                                            <button className='add-btn' onClick={addHandler}>+</button>
                                            <p className='mx-3 mt-2'>{productNum}</p>
                                            <button className='miuse-btn' onClick={minuseHandler} disabled={productNum === 1}>-</button>
                                        </div>
                                    </div>
                                    <div className='watch-pricer py-3'>
                                        <p className='fs-4'>{totalPrice} <span>میلیون</span></p>
                                    </div>
                                    <div className='add-to-basket-btn'>
                                        <button className='btn btn-outline-warning' onClick={() => {
                                            notify()

                                            let userCartProducts = {
                                                id: datas.id,
                                                img: datas.img,
                                                title: datas.watchName,
                                                colorName: datas.colorName,
                                                colorName2: datas.colorName2,
                                                // watchSizes: test,
                                                price: totalPrice,
                                                productNum: productNum,
                                            }

                                            context.setUserCart(prevProducts => [...prevProducts, userCartProducts])

                                        }}>اضافه کردن به سبد خرید</button>

                                    </div>
                                </Col>

                                <Col className='col-12 col-md-6'>
                                  {/* images  */}
                                    <Swiper
                                        style={{
                                            '--swiper-navigation-color': '#fff',
                                            '--swiper-pagination-color': '#fff',
                                        }}
                                        loop={true}
                                        spaceBetween={10}
                                        navigation={true}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="buypage-swiper"
                                    >
                                        <SwiperSlide className='buypages-slides top-buyPage-slide'>
                                            <img src="/images/Watch/png-transparent-rolex-daytona-rolex-datejust-watch-movement-rolex-watch-accessory-diamond-rolex-removebg-preview-min.png" className='swiper-buypage-img' />
                                        </SwiperSlide>
                                        <SwiperSlide className='buypages-slides top-buyPage-slide'>
                                            <img src="/images/Watch/rolex_datejust_36mm_16233_w524192_e9a8b19212-w1242.jpg.auto-removebg-preview-min.png" className='swiper-buypage-img' />
                                        </SwiperSlide>
                                        <SwiperSlide className='buypages-slides top-buyPage-slide'>
                                            <img src="/images/Watch/rolex-datejust-rolex-daytona-watch-rolex-gmt-master-ii-silver-rolex-watch-watches-female-form-removebg-preview-min.png" className='swiper-buypage-img' />
                                        </SwiperSlide>
                                        <SwiperSlide className='buypages-slides top-buyPage-slide'>
                                            <img src="/images/Watch/png-transparent-rolex-daytona-rolex-datejust-watch-rolex-oyster-rolex-watch-accessory-gold-steel-removebg-preview-min.png" className='swiper-buypage-img' />
                                        </SwiperSlide>
                                    </Swiper>

                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        loop={true}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="bottom-buypage-swiper"
                                    >
                                        <SwiperSlide className='buypages-slides bottom-buyPage-slide'>
                                            <img src="/images/Watch/png-transparent-rolex-daytona-rolex-datejust-watch-movement-rolex-watch-accessory-diamond-rolex-removebg-preview-min.png" className='swiper-buypage-img' />
                                        </SwiperSlide>
                                        <SwiperSlide className='buypages-slides bottom-buyPage-slide'>
                                            <img src="/images/Watch/rolex_datejust_36mm_16233_w524192_e9a8b19212-w1242.jpg.auto-removebg-preview-min.png" className='swiper-buypage-img' />
                                        </SwiperSlide>
                                        <SwiperSlide className='buypages-slides bottom-buyPage-slide'>
                                            <img src="/images/Watch/rolex-datejust-rolex-daytona-watch-rolex-gmt-master-ii-silver-rolex-watch-watches-female-form-removebg-preview-min.png" className='swiper-buypage-img' />
                                        </SwiperSlide>
                                        <SwiperSlide className='buypages-slides bottom-buyPage-slide'>
                                            <img src="/images/Watch/png-transparent-rolex-daytona-rolex-datejust-watch-rolex-oyster-rolex-watch-accessory-gold-steel-removebg-preview-min.png" className='swiper-buypage-img' />
                                        </SwiperSlide>
                                    </Swiper>
                                </Col>

                            </Row>
                        </Container>
                    </section>

                    {/* info boxes  */}
                    <section className='py-5 px-3'>
                        <Container>
                            <Row className='row-cols-2 row-cols-md-3 gy-5'>
                                <Col>
                                    <WatchInfoBox
                                        iconName={<RxSize className='fs-4 ms-1' />}
                                        title='سایز بندی'
                                        body={datas.sizes}
                                    />
                                </Col>
                                <Col>
                                    <WatchInfoBox
                                        iconName={<MdOutlineWatch className='fs-4 ms-1' />}
                                        title='نوع بند'
                                        body={datas.bandModel}
                                    />
                                </Col>
                                <Col>
                                    <WatchInfoBox
                                        iconName={<MdOutlineWatchLater className='fs-4 ms-1' />}
                                        title='نوع شیشه'
                                        body={datas.glasesModel}
                                    />
                                </Col>
                                <Col>
                                    <WatchInfoBox
                                        iconName={<IoMdColorPalette className='fs-4 ms-1' />}
                                        title='تعداد رنگبندی'
                                        body={datas.numOfColor}
                                    />
                                </Col>
                                <Col>
                                    <WatchInfoBox
                                        iconName={<GoNumber className='fs-4 ms-1' />}
                                        title='تعداد موجود'
                                        body={datas.availableQuantity}
                                    />
                                </Col>
                                <Col>
                                    <WatchInfoBox
                                        iconName={<CiBadgeDollar className='fs-4 ms-1' />}
                                        title='تعداد فروش'
                                        body={datas.numOfSales}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </section>


                    {/* about watch and info  */}
                    <section className='py-5 px-2'>
                        <Container>
                            <Row className='justify-content-center'>
                                <Col className='col-12'>
                                    <div className='full-info-container'>
                                        <h5 className='text-center p-3'>{datas.watchName}</h5>

                                        <ul className='info-ul pe-2'>
                                            <li className='info-li py-3'>
                                                <p>درباره ساعت</p>
                                                <p className='Byekan text-justify py-1'>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                                </p>
                                            </li>
                                            <li className='info-li py-3'>
                                                <p>گارانتی ساعت</p>
                                                <p className='Byekan text-justify py-1'>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                                </p>
                                            </li>
                                            <li className='info-li py-3'>
                                                <p>نحوه تحویل ساعت</p>
                                                <p className='Byekan text-justify py-1' style={isOpen ? null : paragraphStyles}>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                                </p>
                                            </li>
                                            <button className='btn btn-outline-warning' onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'نمایش کمتر' : 'نمایش بیشتر'}</button>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    {/* faq ?  */}
                    <section className='py-5 px-3'>
                        <Container>
                            <Row>
                                <Accordion defaultActiveKey="0" className='accordion-flush'>
                                    <Accordion.Item eventKey="0" className='accordion-item'>
                                        <Accordion.Header>چطور باید ساعت را سفارش دهیم؟</Accordion.Header>
                                        <Accordion.Body className='Byekan faq-paragraph py-3 px-4 accordion-body'>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>تا چند روز ساعت ارسال میشود؟</Accordion.Header>
                                        <Accordion.Body className='Byekan'>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>چطور باید از گارانتی استفاده کنیم؟</Accordion.Header>
                                        <Accordion.Body className='Byekan'>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Row>
                        </Container>
                    </section>

                    {/* Buyers' comments  */}
                    <section className='py-5 px-3'>
                        <Container>
                            <h4>نظرات خریداران</h4>
                            <Row className='mt-5'>
                                <Swiper
                                    effect={'cards'}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                                    className="Buyers-comments"
                                >
                                    <SwiperSlide className='Buyers-comments-slide'>
                                        <div className='buy-comment-container'>
                                            <img src='./../../../public/images/Users/team-member.jpg' alt='' className='buyers-img' />
                                            <p className='fs-5 text-secondary fw-bold py-3'>آروین فرجی</p>
                                            <p className='fs-5 text-secondary'><span>تاریخ :</span> 11,12,1403</p>
                                            <div className='comment-sec'>
                                                <p className='comment-para yekan py-2'>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='Buyers-comments-slide'>
                                        <div className='buy-comment-container'>
                                            <img src='./images/Users/team-member.jpg' alt='' className='buyers-img' />
                                            <p className='fs-5 text-secondary fw-bold py-3'>آروین فرجی</p>
                                            <p className='fs-5 text-secondary'><span>تاریخ :</span> 11,12,1403</p>
                                            <div className='comment-sec'>
                                                <p className='comment-para yekan py-2'>
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                            </Row>
                        </Container>
                    </section>
                </>
            ))}
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default BuyPage