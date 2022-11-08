import './Navbar.scss'
import React, { useState } from 'react'
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/');
    };

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        let pos = window.pageYOffset;
        setIsScrolled(pos === 0 ? false: true);
        return () => {window.onscroll = null}
    };

  return (
    <div className={isScrolled? 'navbar scrolled' : 'navbar'}>
        <div className="container">
            <div className="left">
                <img src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='Netflix Lite'></img>
                <HashLink to='#mm' smooth><span>Movies</span></HashLink>
                <HashLink to='#ss' smooth><span>Serials</span></HashLink>
                <HashLink to='#pp' smooth><span>Popular</span></HashLink>
                <HashLink to='#wl' smooth><span>Watch List</span></HashLink>
                {/* <span>Movies</span>
                <span>Serials</span>
                <span>Popular</span>
                <span>Watch List</span> */}
            </div>
            <div className="right">
                <Search className='icon'/>

                <Notifications className='icon'/>

                <div className="profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options" onClick={navigateToLogin}>
                        <span>Settings</span>
                        <span>Log Out</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar;