import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './header.css'
function HeaderSearch() {
    return (
        <div className="header__search">
            {/* {Search Icon} */}
            <SearchIcon />
            <input className="input_field" type="text" id="searchbartext"/>
            {/* <label className="labeltext" htmlFor="searchbartext">Search for jobs, people, posts...</label> */}
        </div>
    )
}

export default HeaderSearch
