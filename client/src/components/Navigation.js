import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation() {

    return(
        <div>
            <Link to='/login'>Login</Link>
            {localStorage.getItem('token') && <Link to='/bubblepaget'>Colors</Link>}
            {/* {localStorage.getItem('token') && <Link to='/addfriend'>Add Friend</Link>} */}
        </div>
    )
} 