import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
	return (
		<header>
		<Link to='/'><div className='icon'><img className='icon' src="img/HomeIcon.svg" alt="home" /></div></Link>
		<div style={{ color: 'white', fontSize: '28px', margin: '5px' }}>Smart House</div>
		<div ><img className='icon' src="img/hamburger icon.svg" alt="hamburger" /></div>
	</header>
	)
}
