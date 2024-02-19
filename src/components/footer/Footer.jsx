import './Footer.css'
import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import {footerLinksData} from '../../constants/index'




const Footer = ({handleButtonClick}) => {

  const LinkColumn = ({columnName, links}) => {

    let empty;

    return (
      <div className='footer__links-column'>
        <h5 className='footer__links-column-name'>{columnName}</h5>
        
        {
        (columnName === 'resources') ? links.map((link, i) => <NavLink to={link.link} className='footer__link'  key={i} onClick={link.special === 'services' ? (() => handleButtonClick(link.name)) : link.special === 'sub-page' ? (() => window.scrollTo(0, 0)) : empty}>{link.name}</NavLink>) : 
        links.map((link, i) => <Link to={link.link} smooth className='footer__link'  key={i} onClick={link.special === 'services' ? (() => handleButtonClick(link.name)) : empty}>{link.name}</Link>)
        }
        
      </div>
    )
  }

  return (
    <footer className="footer">
        <div className="footer__header">
          <img className='footer__logo' src={logo} alt="blochlabchain logo"/>
          <div className='footer__links'>
            {footerLinksData.map((linksColumn) => <LinkColumn key={linksColumn.columnName} {...linksColumn}/>)}
          </div>
        </div>
        <div className="footer__copy-right">
          <p className='footer__copy-right-p p-l'>Since 2024. All Rights Reserved</p> 
        </div>
    </footer>
  )
}

export default Footer