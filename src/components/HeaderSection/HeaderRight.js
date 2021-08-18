import React from 'react'
import './header.css'
import HeaderOptions from './HeaderOptions'
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/Work';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
function HeaderRight() {
    // const link = "https://media-exp1.licdn.com/dms/image/C5603AQEgXO4fm914sg/profile-displayphoto-shrink_400_400/0/1628181777500?e=1634774400&v=beta&t=msTy5_vmK0Tl0Ur5X9QVzpQ4C_RWHeYdJjcsYWcpdSA";
    return (
        <div className="header__right">
            <HeaderOptions Icon={HomeIcon} title="Home"/>
            <HeaderOptions Icon={SupervisorAccountIcon} title = "My Network"/>
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOptions Icon={ChatIcon} title = "Messaging"/>
            <HeaderOptions Icon={NotificationsIcon} title="Nofifications"/>
            <HeaderOptions avatar="https://p.kindpng.com/picc/s/154-1541688_tony-stark-png-tony-stark-transparent-png.png" title = "Me"/>

        </div>
    )
}

export default HeaderRight
