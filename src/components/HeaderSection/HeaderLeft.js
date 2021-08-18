import React from 'react'
import HeaderSearch from './HeaderSearch'
import './header.css'
function HeaderLeft() {
    return (
        <div className = "header__left">
           
            <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
            <HeaderSearch/>
        </div>
    )
}

export default HeaderLeft