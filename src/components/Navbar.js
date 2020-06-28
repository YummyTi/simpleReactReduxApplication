import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='ui primary menu container'>
            <Link className='item' to='/'>Songs</Link>
            <Link className='item' to='/user'>Users</Link>
        </div>
    )
};

export default Navbar;