import './Header.css'
import { useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import {navLinks}  from "../../constants/index";
import logo from '../../assets/logo.png'
import Btn from '../Btn/Btn'




const Header = ({windowWidth}) => {


const [isNavOpen, setIsNavOpen] = useState(false);



    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
      };

      const Hamburger = () => {
        return (
            <div className={`hamburger ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
            </div>
        )
    }

    return (
        <header className='header'>
            <img className='header__logo' src={logo} data-aos = 'fade-up'/>

            <nav className={`header__nav ${isNavOpen ? 'open' : ''}`} >

            {navLinks.map((link, i) => <Link to={link.id} smooth className='header__link' key={link.id} data-aos = 'fade-up' data-aos-delay={`${(i + 1) * 50 }`} onClick={() => setIsNavOpen(!isNavOpen)}>{link.title}</Link>)}
              
            </nav>
            
            {windowWidth > 1050 ? <Btn transDelay = {(navLinks.length + 1) * 50} /> : <Hamburger />}
            
            
        </header>
    )
}
export default Header

