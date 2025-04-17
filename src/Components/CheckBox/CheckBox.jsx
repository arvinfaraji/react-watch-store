import React from 'react'
import './CheckBox.css'

function CheckBox({checkBoxLabel}) {
    return (
        <div class="checkbox-wrapper-39 d-flex aligm-items-center me-3">
            <label>
                <input type="checkbox" />
                <span class="checkbox"></span>
            </label>
            <span className='fs-5 me-2'>{checkBoxLabel}</span>
        </div>
    )
}

export default CheckBox
