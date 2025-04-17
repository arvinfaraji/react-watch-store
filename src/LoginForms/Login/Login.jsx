import React, { useEffect, useState } from 'react'
import './Login.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {

  return (
    <section className='py-3 px-3 con'>
      <Container className=''>
        <h4 className='text-center pt-3'>به صفحه ورود خوش آمدید</h4>
        <Row className='border-row my-4 align-items-center'>
          <Col className='col-12 col-md-6 bg-img-display p-0' style={{ overflow: 'hidden' }}>
            <div className='bg-login-img'>

            </div>
          </Col>
          <Col className='col-12 col-md-6'>
            <div className='logins-signin-btns'>
              <div className='btn-border'>
                <Link to='/Signup' className='btns'>ثبت نام</Link>
                <Link to='/Login' className='btns text-warning'>ورود</Link>
              </div>
            </div>

            <div className='input-section'>
              <form className='form-input-con'>
                <div className='input'>
                  <input type='text'  className='form-input' placeholder='' />
                  <label className='floating-label'>نام و نام خانوادگی</label>
                </div>
                <div className='input'>
                  <input type='password' className='form-input' placeholder='' />
                  <label className='floating-label'>رمز عبور</label>
                </div>

                <div className='submmit-btn'>
                  <button className='btn btn-outline-warning px-5 my-3'>تایید ورود</button>
                </div>

                <div className='links'>
                  <Link to='/Signup' className='btn text-white my-3'>حساب کاربری ندارید؟ ثبت نام کنید</Link>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login