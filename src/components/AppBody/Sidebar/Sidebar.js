import { Avatar } from '@material-ui/core'
import React from 'react'
import './sidebar.css'
function Sidebar() {

    const recentItems = (topic) =>{
        <div className="sidebar__recentItems">
            <span className="recent_hashtags">#</span>
            <p>{topic}</p>
        </div>
    };
    return (
        <div className="sidebar">
            <div className="sidebar__top">
            <img src="
           https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" 
            alt="" 
            />
            <Avatar className="sidebar__avatar"/>
            <h2>Vasudeva.S</h2>
            <h4>A Code Enthusiast</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="stat__number">120</p>
                </div>
                <div className="sidebar__stat">
                <p>Views on Post </p>
                    <p className="stat__number">220</p>
                </div>
            </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItems("reactjs")}
            {recentItems("flutter")}
            {recentItems("datastructures")}
            {recentItems("webdev")}
            {recentItems("android")}
        </div>
    </div> 
    );
}

export default Sidebar
