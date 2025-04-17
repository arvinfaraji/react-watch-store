import React, { useEffect, useState } from 'react'
import './NewAllProducts.css'
import { Container, Row, Col } from 'react-bootstrap';
import AllWatchDatas from '../../Datas/AllWatches';
import Accordion from 'react-bootstrap/Accordion';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import FilterCompany from '../../Components/FilterCompanyComponent/FilterCompany';
import FilterItem from '../../Components/FilterComponent/FilterItem';
import PaginatedBtns from '../../Components/PaginatedBtns/PaginatedBtns';
import ProductComponent from '../../Components/ProductComponent/ProductComponent';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NewAllProducts() {

    const [watchsDatas, setWatchsData] = useState(AllWatchDatas);

    // show filter box for mobiles 
    const [isShowFilterBox, setIsShowFilterBox] = useState(false)

    // current page number 
    const [currentPage, setCurrentPage] = useState(1);

    // the number of show products 
    const [productsPerPage, setProductsPerPage] = useState(9);

    const lastPostIndex = currentPage * productsPerPage;
    const firstPostIndex = lastPostIndex - productsPerPage;

    const currentPost = watchsDatas.slice(firstPostIndex, lastPostIndex);

    useEffect(() => {
        window.scroll(0, 0)
    }, [currentPage])

    const [showOffcanvas, setShowOffcanvas] = useState(false);
    console.log(showOffcanvas);
    

    const handleClose = () => setShowOffcanvas(false);
    const handleShow = () => setShowOffcanvas(true);

    return (
        <>
            <Header />
            <Container fluid className='mt-5'>
                <Row className='d-flex justify-content-between mx-4 mt-5'>
                    <Col className='col-3 filter-section max-filter-display-breakpoit text-white py-5'>
                        <div className="d-flex justify-content-between">
                            <p className='fs-5 text-white' >فیلتر ها</p>
                            <button className='btn btn-outline-warning'>حذف فیلتر ها</button>
                        </div>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0" className='mb-4 mt-4'>
                                <Accordion.Header>برند ها</Accordion.Header>
                                <Accordion.Body>
                                    <div className="mt-4">
                                        <FilterCompany companyName='کاسیو' imgPath='./images/Brands/153f1e53c13f42eeac16d99b5b2d19e7.jpg' />
                                    </div>

                                    <div className="mt-4">
                                        <FilterCompany companyName='سیکو' imgPath='./images/Brands/419bedb805b74e0bb99390784545fd51.jpg' />
                                    </div>

                                    <div className="mt-4">
                                        <FilterCompany companyName='اورلنت' imgPath='./images/Brands/d19ad6c8f266410e81d0655c00dcc761.jpg' />
                                    </div>

                                    <div className="mt-4">
                                        <FilterCompany companyName='کاور' imgPath='./images/Brands/c8721b146b9143b596ea5dfb3903e689.jpg' />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1" className='mb-4'>
                                <Accordion.Header>کشور کالا</Accordion.Header>
                                <Accordion.Body>
                                    <FilterItem filterText='ایتالیا' />
                                    <FilterItem filterText='آمریکا' />
                                    <FilterItem filterText='آلمان' />
                                    <FilterItem filterText='روسیه' />
                                    <FilterItem filterText='سویس' />
                                    <FilterItem filterText='بلژیک' />
                                    <FilterItem filterText='لهستان' />

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2" className='mb-4'>
                                <Accordion.Header>تقویم</Accordion.Header>
                                <Accordion.Body>
                                    <FilterItem filterText='بله' />
                                    <FilterItem filterText='خیر' />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4" className='mb-4'>
                                <Accordion.Header>جنسیت</Accordion.Header>
                                <Accordion.Body>
                                    <FilterItem filterText='مردانه' />
                                    <FilterItem filterText='زنانه' />
                                    <FilterItem filterText='بچگانه' />

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="5" className='mb-4'>
                                <Accordion.Header>جنس شیشه</Accordion.Header>
                                <Accordion.Body>
                                    <FilterItem filterText='کریستال' />
                                    <FilterItem filterText='رزین' />
                                    <FilterItem filterText='هاردلکس' />
                                    <FilterItem filterText='اکریلیک' />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="6" className='mb-4'>
                                <Accordion.Header>رنگ بند</Accordion.Header>
                                <Accordion.Body>
                                    <FilterItem filterText='مشکی' />
                                    <FilterItem filterText='سفید' />
                                    <FilterItem filterText='سبز' />
                                    <FilterItem filterText='سرمه ای' />
                                    <FilterItem filterText='قرمز' />
                                    <FilterItem filterText='زرد' />
                                    <FilterItem filterText='آبی' />
                                    <FilterItem filterText='طوسی' />
                                    <FilterItem filterText='قهوه ای' />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="7" className='mb-4'>
                                <Accordion.Header>جنس بند</Accordion.Header>
                                <Accordion.Body>
                                    <FilterItem filterText='چرم طبیعی' />
                                    <FilterItem filterText='استیل' />
                                    <FilterItem filterText='پارچه' />
                                    <FilterItem filterText='تیتانیوم' />
                                    <FilterItem filterText='آلومینیوم' />
                                    <FilterItem filterText='چرم مصنوعی' />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="9" className='mb-4'>
                                <Accordion.Header>نوع موتور</Accordion.Header>
                                <Accordion.Body>
                                    <FilterItem filterText='سه موتور' />
                                    <FilterItem filterText='پنج موتور' />
                                    <FilterItem filterText='یک موتور دیجیتال' />
                                    <FilterItem filterText='یک موتور آنالوگ' />
                                    <FilterItem filterText='یک موتور مکانیکی' />

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="10" className='mb-4'>
                                <Accordion.Header>رنگ صفحه</Accordion.Header>
                                <Accordion.Body>
                                    <FilterItem filterText='مشکی' />
                                    <FilterItem filterText='سفید' />
                                    <FilterItem filterText='سبز' />
                                    <FilterItem filterText='سرمه ای' />
                                    <FilterItem filterText='قرمز' />
                                    <FilterItem filterText='زرد' />
                                    <FilterItem filterText='آبی' />
                                    <FilterItem filterText='طوسی' />
                                    <FilterItem filterText='قهوه ای' />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>

                    <Col className='min-filter-btn-display-breakpoit col-12 my-5'>
                        <Row className='d-flex align-items-center'>
                            <Col className='col-6'>
                                <div>
                                    <div class="dropdown">
                                        <button class="btn pulse text-white fs-6">ترتیب بر اساس</button>
                                        {/* <IoIosArrowDown className='fs-6' /> */}
                                        <div class="dropdown-content">
                                            <a href="#">جدیدترین</a>
                                            <a href="#">قدیمی ترین</a>
                                            <a href="#">پرفروش ترین</a>
                                            <a href="#">ارزان ترین</a>
                                            <a href="#">گران ترین</a>
                                        </div>
                                    </div>
                                </div>

                            </Col>

                            <Col className='col-6'>
                                <Navbar key={'navbar'} expand="lg" className=" mb-3" style={{ backgroundColor: 'transparent' }}>
                                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`}>
                                        {showOffcanvas ? (
                                          <></>
                                        ) : (
                                            <button className='btn btn-outline-warning p-2 px-md-5 px-4' onClick={handleShow}>فیلتر ها</button>
                                        )}
                                    </Navbar.Toggle>
                                    <Navbar.Offcanvas
                                        id={`offcanvasNavbar-expand`}
                                        aria-labelledby={`offcanvasNavbarLabel-expand`}
                                        placement="end"
                                    >
                                        <Offcanvas.Header closeButton className='' style={{ backgroundColor: '#1D1D1B', }} onClick={handleClose}>
                                            
                                        </Offcanvas.Header>
                                        <Offcanvas.Body className='text-dark' style={{ backgroundColor: '#1D1D1B', }}>
                                            <Col className='col-3 w-100 text-white py-3'>
                                                <div className="d-flex justify-content-between">
                                                    <p className='fs-5 text-white' >فیلتر ها</p>
                                                    <button className='btn btn-outline-warning'>حذف فیلتر ها</button>
                                                </div>
                                                <Accordion defaultActiveKey={['0']} alwaysOpen>
                                                    <Accordion.Item eventKey="0" className='mb-4 mt-4'>
                                                        <Accordion.Header>برند ها</Accordion.Header>
                                                        <Accordion.Body>
                                                            <div className="mt-4">
                                                                <FilterCompany companyName='کاسیو' imgPath='./images/Brands/153f1e53c13f42eeac16d99b5b2d19e7.jpg' />
                                                            </div>

                                                            <div className="mt-4">
                                                                <FilterCompany companyName='سیکو' imgPath='./images/Brands/419bedb805b74e0bb99390784545fd51.jpg' />
                                                            </div>

                                                            <div className="mt-4">
                                                                <FilterCompany companyName='اورلنت' imgPath='./images/Brands/d19ad6c8f266410e81d0655c00dcc761.jpg' />
                                                            </div>

                                                            <div className="mt-4">
                                                                <FilterCompany companyName='کاور' imgPath='./images/Brands/c8721b146b9143b596ea5dfb3903e689.jpg' />
                                                            </div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                    <Accordion.Item eventKey="1" className='mb-4'>
                                                        <Accordion.Header>کشور کالا</Accordion.Header>
                                                        <Accordion.Body>
                                                            <FilterItem filterText='ایتالیا' />
                                                            <FilterItem filterText='آمریکا' />
                                                            <FilterItem filterText='آلمان' />
                                                            <FilterItem filterText='روسیه' />
                                                            <FilterItem filterText='سویس' />
                                                            <FilterItem filterText='بلژیک' />
                                                            <FilterItem filterText='لهستان' />

                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                    <Accordion.Item eventKey="2" className='mb-4'>
                                                        <Accordion.Header>تقویم</Accordion.Header>
                                                        <Accordion.Body>
                                                            <FilterItem filterText='بله' />
                                                            <FilterItem filterText='خیر' />
                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                    <Accordion.Item eventKey="4" className='mb-4'>
                                                        <Accordion.Header>جنسیت</Accordion.Header>
                                                        <Accordion.Body>
                                                            <FilterItem filterText='مردانه' />
                                                            <FilterItem filterText='زنانه' />
                                                            <FilterItem filterText='بچگانه' />

                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                    <Accordion.Item eventKey="5" className='mb-4'>
                                                        <Accordion.Header>جنس شیشه</Accordion.Header>
                                                        <Accordion.Body>
                                                            <FilterItem filterText='کریستال' />
                                                            <FilterItem filterText='رزین' />
                                                            <FilterItem filterText='هاردلکس' />
                                                            <FilterItem filterText='اکریلیک' />
                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                    <Accordion.Item eventKey="6" className='mb-4'>
                                                        <Accordion.Header>رنگ بند</Accordion.Header>
                                                        <Accordion.Body>
                                                            <FilterItem filterText='مشکی' />
                                                            <FilterItem filterText='سفید' />
                                                            <FilterItem filterText='سبز' />
                                                            <FilterItem filterText='سرمه ای' />
                                                            <FilterItem filterText='قرمز' />
                                                            <FilterItem filterText='زرد' />
                                                            <FilterItem filterText='آبی' />
                                                            <FilterItem filterText='طوسی' />
                                                            <FilterItem filterText='قهوه ای' />
                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                    <Accordion.Item eventKey="7" className='mb-4'>
                                                        <Accordion.Header>جنس بند</Accordion.Header>
                                                        <Accordion.Body>
                                                            <FilterItem filterText='چرم طبیعی' />
                                                            <FilterItem filterText='استیل' />
                                                            <FilterItem filterText='پارچه' />
                                                            <FilterItem filterText='تیتانیوم' />
                                                            <FilterItem filterText='آلومینیوم' />
                                                            <FilterItem filterText='چرم مصنوعی' />
                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                    <Accordion.Item eventKey="9" className='mb-4'>
                                                        <Accordion.Header>نوع موتور</Accordion.Header>
                                                        <Accordion.Body>
                                                            <FilterItem filterText='سه موتور' />
                                                            <FilterItem filterText='پنج موتور' />
                                                            <FilterItem filterText='یک موتور دیجیتال' />
                                                            <FilterItem filterText='یک موتور آنالوگ' />
                                                            <FilterItem filterText='یک موتور مکانیکی' />

                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                    <Accordion.Item eventKey="10" className='mb-4'>
                                                        <Accordion.Header>رنگ صفحه</Accordion.Header>
                                                        <Accordion.Body>
                                                            <FilterItem filterText='مشکی' />
                                                            <FilterItem filterText='سفید' />
                                                            <FilterItem filterText='سبز' />
                                                            <FilterItem filterText='سرمه ای' />
                                                            <FilterItem filterText='قرمز' />
                                                            <FilterItem filterText='زرد' />
                                                            <FilterItem filterText='آبی' />
                                                            <FilterItem filterText='طوسی' />
                                                            <FilterItem filterText='قهوه ای' />
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </Col>
                                        </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </Navbar>
                            </Col>
                        </Row>
                    </Col>

                    <Col className='col-12 col-lg-8'>
                        <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 gy-5 d-flex watch-display-breakpoit '>
                            <ProductComponent AllWatchDatas={currentPost} />
                        </Row>
                    </Col>

                    <PaginatedBtns
                        totalPosts={watchsDatas.length}
                        productsPerPage={productsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default NewAllProducts
