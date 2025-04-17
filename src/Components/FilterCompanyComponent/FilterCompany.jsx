import React from 'react'

function FilterCompany({ companyName, imgPath }) {
    return (
        <div className="filter-company-item-container">
            <div class="checkbox-wrapper-39 d-flex aligm-items-center">
                <label className='mt-1'>
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                </label>
                <span className='me-2 filter-item-text'>{companyName}</span>
            </div>

            <div className="">
                <img src={imgPath} className='filter-brand-img' alt="watch-brand-image" />
            </div>
        </div>
    )
}

export default FilterCompany
