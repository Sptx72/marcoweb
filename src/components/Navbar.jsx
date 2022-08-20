import {  NavLink  } from 'react-router-dom'
import './css/navbar.css'

export const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'>
            Inicio
        </NavLink>
        <NavLink to='/aboutme'>
            Sobre mi
        </NavLink>
        <NavLink to='/skills'>
            Skills
        </NavLink>
    </nav>
  )
}
