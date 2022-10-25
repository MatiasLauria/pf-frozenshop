
import React from 'react'
import { Button } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../NavBar/logo.png'
import '../NavBar/NavBar.css'


const NavBar = () => {
  return (
    <nav>
    <div className = 'logo'>
        <img src={logo} alt='logo' />
    </div>

    <div className='menu'>
        <Button>INICIO</Button>
        <Button>FRUTAS </Button>
        <Button>VERDURAS</Button>
        <Button>ALMACÉN</Button>
        <Button>CONTACTO</Button>
    </div>

    <div className='cart'>

        <CartWidget/>
        
    </div>

</nav>
  )
}

export default NavBar