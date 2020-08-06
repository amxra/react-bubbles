import React from "react";
import { Link } from "react-router-dom";


const Nav = (logout) =>{

    const onLogout = event => {
        localStorage.removeItem('token');
        localStorage.removeItem('user')
    }

    return(
        <nav>
            <button>{logout ? <Link to='/' onClick={onLogout}>LOGOUT</Link> : null}</button>
        </nav>
    )
}

export default Nav