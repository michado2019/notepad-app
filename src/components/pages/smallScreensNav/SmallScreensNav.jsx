
import React from 'react'
import { Link } from 'react-router-dom'
import './SmallScreensNav.css'
function SmallScreensNav({handleCancel}) {
  
  return (
    <div className='smallScreenWrapper'>
        <div className='smallScreen-nav_div'>
           <nav className='smallScreen-nav'>
            <ul className='smallScreen-nav_lists'>
                <Link to="/" className='smallScreen-nav_links' onClick={handleCancel}>
                <li className='smallScreen-nav_list'>
                 Home
                </li>
                </Link>
                <Link to="/notes" className='smallScreen-nav_links' onClick={handleCancel}>
                <li className='smallScreen-nav_list'>
                 Notes 
                </li>
                </Link>
                <Link to="/createNotes" className='smallScreen-nav_links' onClick={handleCancel}>
                <li className='smallScreen-nav_list'>
                Create 
                </li>
                </Link>
            </ul>
           </nav>
        </div>
    </div>
  )
}

export default SmallScreensNav