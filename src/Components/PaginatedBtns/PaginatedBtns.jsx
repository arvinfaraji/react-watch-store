import React from 'react'
import './PaginatedBtns.css'
import { Button } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';


function PaginatedBtns({ totalPosts, productsPerPage, setCurrentPage, currentPage }) {
    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts / productsPerPage); i++) {
        pages.push(i)
    }

    return (
        <>
            <Pagination className='d-flex justify-content-center mt-5' >
                {
                    pages.map((page, index) => {
                        return (
                            <Pagination.Item key={index} onClick={() => setCurrentPage(page)} className={`${page == currentPage ? 'active' : ''}`}>
                                {page}
                            </Pagination.Item>
                        )
                    })
                }
            </Pagination>

        </>
    )
}

export default PaginatedBtns
