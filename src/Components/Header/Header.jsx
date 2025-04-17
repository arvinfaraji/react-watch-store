import React, { useContext } from 'react'
import './Header.css'
import { Container, Row, Col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Icons 
import { LiaShoppingBagSolid } from "react-icons/lia";
import { LiaHomeSolid } from "react-icons/lia";
import { FiWatch } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { DataContext } from '../../Context/Store';
import { GoPeople } from "react-icons/go";


export default function Header() {

  const context = useContext(DataContext)


  return (
    <>
      <Navbar expand="lg" className="navbar p-3 fixed-top mb-5">
        <Container>
          <Navbar.Brand href="#home" style={{ color: 'white' }}>رولکس</Navbar.Brand>
          {/* <input type="text" placeholder='جستجو ساعت ... ' className='Byekan header-search-input' /> */}

          <div className="d-flex d-lg-none" style={{ flexDirection: 'row-reverse' }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }} />
            
            <div className='profile-section ms-3'>
              <Link to='/Login' className='btn text-white'>ثبت نام / ورود</Link>
            </div>
          </div>
          <Navbar.Collapse id="basic-navbar-nav text-warning">
            <Nav className="me-auto nav-link-2">
            </Nav>
            <Nav className='me-md-4 d-flex nav-link-2'>
            <Link to='/' className='margin-top-bottom-breakpoint mx-2 lg-margin-links-breakpoint' style={{ color: 'white', textDecoration: 'none' }}>
                <LiaHomeSolid className='fs-4 ms-2' />
                صفحه اصلی
              </Link>
              <Link to='/AboutUs' className='margin-top-bottom-breakpoint mx-2 lg-margin-links-breakpoint' style={{ color: 'white', textDecoration: 'none' }}>
                <GoPeople className='fs-4 ms-2' />
                درباره ما
              </Link>
              <Link to='/NewAllProducts' className='margin-top-bottom-breakpoint mx-2 lg-margin-links-breakpoint' style={{ color: 'white', textDecoration: 'none' }}>
                <FiWatch className='fs-4 ms-2' />
                ساعت ها
              </Link>
              <Link to='/ShoppingCart' className='margin-top-bottom-breakpoint mx-2 lg-margin-links-breakpoint' style={{ color: 'white', textDecoration: 'none' }}>
                <LiaShoppingBagSolid className='fs-4 ms-2' />
                سبد خرید
                <span className='product-number'>{context.userCart.length}</span>
              </Link>
              <Nav.Link href="#link" style={{ color: 'white' }} className='login-btn-display-breakpoint'>
                <div className='profile-section login-btn-breakpoint margin-top-bottom-breakpoint'>
                  <Link to='/Login' className='btn text-white'>ثبت نام / ورود</Link>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className='max-nav2-watch-items' style={{ marginTop: '100px' }}>
        <Row className='' style={{ height: '100px', backgroundColor: '#343432' }}>
          <div className="links-contet-section">
            <div className="nav2-item">
              <Link to='/' className='nav2-links-style'>صفحه اصلی</Link>
            </div>
            <div className="nav2-item">
              <Link to='/NewAllProducts' className='nav2-links-style'> ساعت مچی</Link>
              <div className='menu-item-links p-3'>
                <div className="ms-4">
                  <h4 className='text-warning'>برند ها</h4>
                  <a href="#" className='watch-brand'>کاسیو</a>
                  <a href="#" className='watch-brand'>کاسیو</a>
                  <a href="#" className='watch-brand'>کاسیو</a>
                  <a href="#" className='watch-brand'>کاسیو</a>
                  <a href="#" className='watch-brand'>کاسیو</a>
                  <a href="#" className='watch-brand'>کاسیو</a>
                </div>

                <div className="me-5 ms-4">
                  <h4 className='text-warning'>مدل و ویژگی</h4>
                  <a href="#" className='watch-brand'>دیجیتال</a>
                  <a href="#" className='watch-brand'>اتوماتیک</a>
                  <a href="#" className='watch-brand'>اتوماتیک</a>
                  <a href="#" className='watch-brand'>سولار (خورشیدی)</a>
                  <a href="#" className='watch-brand'>کرونوگراف</a>
                  <a href="#" className='watch-brand'>بند چرمی</a>
                  <a href="#" className='watch-brand'>بند استیل</a>
                </div>

                <div className="me-5">
                  <h4 className='text-warning'> بر اساس قیمت</h4>
                  <a href="#" className='watch-brand'>تا یک میلیون تومان</a>
                  <a href="#" className='watch-brand'>یک تا دو میلیون تومان</a>
                  <a href="#" className='watch-brand'>دو تا سه میلیون تومان</a>
                  <a href="#" className='watch-brand'>سه تا پنج میلیون تومان</a>
                  <a href="#" className='watch-brand'>پنج تا ده میلیون تومان</a>
                  <a href="#" className='watch-brand'>ده میلیون تومان و بیشتر</a>
                  <a href="#" className='watch-brand'>بند استیل</a>
                </div>
              </div>
            </div>
            <div className="nav2-item">
              <a href="#" className='nav2-links-style'>ساعت هوشمند</a>
              
            </div>
            <div className="nav2-item">
              <a href="#" className='nav2-links-style'>ساعت مردانه</a>
              
            </div>
            <div className="nav2-item">
              <a href="#" className='nav2-links-style'>ساعت زنانه</a>
              
            </div>
            <div className="nav2-item">
              <a href="#" className='nav2-links-style'>برند ها</a>

            </div>
            <div className="nav2-item">
              <Link to='/NewAllProducts' className='nav2-links-style'>تخفیفات</Link>
            </div>
            <div className="nav2-item">
              <a href="#" className='nav2-links-style'>محبوب های فروشگاه</a>
            </div>
            <div className="nav2-item">
              <a href="#" className='nav2-links-style'>پیشنهاد ویژه</a>
            </div>

          </div>
        </Row>
      </Container>

    </>
  )
}