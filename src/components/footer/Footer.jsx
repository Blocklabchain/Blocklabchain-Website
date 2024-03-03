import './Footer.css'
import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import {footerLinksData} from '../../constants/index'
import {useTranslation} from "react-i18next";




const Footer = ({handleButtonClick}) => {
  const {t} = useTranslation();

  const LinkColumn = ({columnName, links, pos}) => {

    let empty;

    return (
      <div className='footer__links-column'>
        <h5 className='footer__links-column-name'>{t(`footer_link_columnName_${pos+1}`)}</h5>

        {
        (columnName === 'resources') ?
        (links.map((link, i) => <NavLink to={link.link} className='footer__link'  key={i} onClick={() => window.scrollTo(0, 0)}>{t(`footer_link_col${pos+1}_${i}`)}</NavLink>)) :
        (links.map((link, i) => <Link to={link.link} smooth className='footer__link'  key={i} onClick={link.special === 'services' ? (() => handleButtonClick(link.name)) : empty}>{t(`footer_link_col${pos+1}_${i}`)}</Link>))
        }

      </div>
    )
  }

  return (
    <footer className="footer">
        <div className="footer__header">
          <img className='footer__logo' src={logo} alt="blochlabchain logo"/>
          <div className='footer__links'>
            {footerLinksData.map((linksColumn, i) => <LinkColumn key={linksColumn.columnName} pos={i} {...linksColumn}/>)}
          </div>
        </div>
        <div className="footer__copy-right">
          <p className='footer__copy-right-p p-l'>Since 2024. All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer
