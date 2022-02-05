import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div className='navbar'>
            <a href="/Home"><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo"></img></a>
            <ul>
                <li><a href='/Home'>Home</a></li>
                <li><a href='/Tv Shows'>Tv Shows</a></li>
                <li><a href='/Movies'>Movies</a></li>
                <li><a href='/Recently Added'>Recently Added</a></li>
                <li><a href='/My list'>My List</a></li>
            </ul>
            <input className='type' type='text' placeholder='Search'></input>
            <a href="/Home"><img className='search' src="/assets/search.png" alt="netflix search"></img></a>
            <a href="/Home"><img className='noti' src="/assets/notification.png" alt="netflix logo"></img></a>
            <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        
        
        </div>
    )
}

export default Navbar
