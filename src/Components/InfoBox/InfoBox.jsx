import React, { useState } from 'react'
import './InfoBox.css'
import { Container, Row, Col } from 'react-bootstrap'
// Icons 
import { RxSize } from "react-icons/rx";
import { MdOutlineWatch } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoMdColorPalette } from "react-icons/io";
import { GoNumber } from "react-icons/go";
import { CiBadgeDollar } from "react-icons/ci";

function InfoBox(props) {


    return (
        <section className='py-5 px-3'>
            <Container>
                <Row className='row-cols-2 row-cols-md-3 gy-5'>
                        <Col>
                            <div className='info-boxes text-center'>
                                <div className='top-info-box'>
                                    <i className='fs-4 ms-1'>{props.icon}</i>
                                    <p className='fs-6 d-block'>{props.title}</p>
                                </div>
                                <span>
                                    {props.size}
                                </span>
                            </div>
                        </Col>
                </Row>
            </Container>
        </section>
    )
}

export default InfoBox