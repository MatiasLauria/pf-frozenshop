import React from 'react'
import logo from '../NavBar/logo.png'
import '../NavBar/NavBar.css'

const NavBar = () => {
  return (
    <nav>
    <div className = 'logo'>
        <img src={logo} alt='logo' />
    </div>

    <div className='menu'>
        <button>INICIO</button>
        <button>FRUTAS </button>
        <button>VERDURAS</button>
        <button>ALMACÉN</button>
        <button>CONTACTO</button>
    </div>

    <div className='cart'>
        
    </div>

</nav>
  )
}

export default NavBar