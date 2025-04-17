import React from 'react'

function FilterItem({filterText}) {
    return (
        <div className="filter-item-container">
            <p className='filter-item-text'>{filterText}</p>

            <div class="checkbox-wrapper-39 d-flex aligm-items-center">
                <label className='mt-1'>
                    <input type="checkbox" />
                    <span class="checkbox"></span>
                </label>
            </div>
        </div>
    )
}

export default FilterItem
