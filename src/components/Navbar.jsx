import React from 'react'
import './Navbar.css'
import appLogo from '../components/assets/notepadLogo.png'
import { Link, NavLink } from 'react-router-dom'

const CustomNavlink = ({to, ...props}) => {
    const activeStyle = {
        color: 'red'
    }
    return (
        <NavLink
        style={({isActive}) => isActive ? activeStyle : {}}
        to={to}
        end
        {...props}
        />
    )
}
const Navbar = () => {

  return (
    <div className='navbarWrapper'>
      <nav className='navbar'>
        <Link to='/' className='navbarLogoLink'>
        <div className='navbarLogoDiv'>
            <img src={appLogo} alt='logo' className='appLogo' />
            <h2 className='logoText'>Notepad</h2> 
        </div>
        </Link>
        <ul className='navbarList'>
            <CustomNavlink to='/' className='navLinks'>
            <li className='navbarLists'>Home</li>
            </CustomNavlink>
            <CustomNavlink to='/notes' className='navLinks'>
            <li className='navbarLists'>Notes</li>
            </CustomNavlink>
            <CustomNavlink to='/createNotes' className='navLinks'>
            <li className='navbarLists'>CreateNotes</li>
            </CustomNavlink>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar