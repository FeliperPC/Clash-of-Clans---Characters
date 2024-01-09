import { NavLink } from "react-router-dom"
import './style.css'

function Menu(){
  return(
    <nav className='menu'>
       <NavLink to={'/'} className='item'>Home</NavLink>
       <NavLink to={'/about'} className='item'>Sobre</NavLink>
       <NavLink to={'/favorites'} className='item'>Favoritos</NavLink>
    </nav>
  )
}

export default Menu