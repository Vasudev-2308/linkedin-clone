import { Avatar } from '@material-ui/core'
import React from 'react'
import './headeroptions.css'
function HeaderOptions({avatar, Icon, title}) {
    return (
        <div className ='header__options'>
            {Icon && <Icon className="header__icons" />}
            {
                avatar && (
                    <Avatar className = "header__icons" src = {avatar}/>
                )
            }
            <h3 className='header__options__title'>{title}</h3>
        </div>
    )
}

export default HeaderOptions
