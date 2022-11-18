
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../NavBar/logo.png'
import '../NavBar/NavBar.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav>
    <div className = 'logo'>
    <NavLink to='/'><img  src={logo} alt='logo'/></NavLink>
    </div>

    <div className='menu'>
        <NavLink to='/'>INICIO</NavLink>
        <NavLink to='/categoria/frutas'>FRUTAS </NavLink>
        <NavLink to='/categoria/verduras'>VERDURAS</NavLink>
        <NavLink to='/cart'><CartWidget/></NavLink>
        
    </div>

    

</nav>
  )
}

export default NavBar