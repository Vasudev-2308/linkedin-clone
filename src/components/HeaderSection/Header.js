import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import './header.css'

function Header() {
    return (
        <div className="header">
            <HeaderLeft/>
            <HeaderRight/>
        </div>
    )
}

export default Header
