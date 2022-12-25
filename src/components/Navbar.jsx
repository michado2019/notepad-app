import React, { useState } from 'react'
import './Navbar.css'
import appLogo from '../components/assets/notepadLogo.png'
import { Link, NavLink } from 'react-router-dom'
import { CancelOutlined, MenuOutlined } from '@mui/icons-material'

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

  const [style, setStyle] = useState(false)

  // Handler
  function handleMenu(){
  setStyle(prev => !prev)
  }
  function handleCancel(){
    setStyle(true)
    }
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
        {
            style ?
            <MenuOutlined className='menu' onClick={handleMenu}/> :
            <CancelOutlined className='menu' onClick={handleCancel}/>
        }
        <ul className='navbarList2' 
        style={{display: style? 'none' : 'flex', transition: 'all 1s', marginRight:'-50px'}}
        onMouseOut={handleCancel}
        >
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