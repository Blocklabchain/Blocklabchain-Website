import './Header.css'
import {useContext, useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import {navLinks}  from "../../constants/index";
import logo from '../../assets/logo.png'
import Btn from '../Btn/Btn'
import {Chevron} from "../icons/Chevron.jsx";
import { useTranslation } from 'react-i18next';
import i18next from "i18next";


const langs = {
  en: {nativeName: 'En'},
  fr: {nativeName: 'Fr'},
}


const Header = ({windowWidth}) => {
  const {t} = useTranslation();

  const [currentLang, setCurrentLang] = useState(langs[i18next.resolvedLanguage].nativeName)
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);


    const toggleNav = () => {
        setIsNavOpen(prevState => !prevState);
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

    const langHandler = (lang) => {
      setCurrentLang(lang);
      setIsLangOpen(false);
    }

    const langHanlder = (key) => {
        i18next.changeLanguage(key);
        langHandler(langs[key].nativeName);
    }

    return (
        <header className='header'>
            <img className='header__logo' src={logo} data-aos = 'fade-up'/>

          <nav className={`header__nav ${isNavOpen ? 'open' : ''}`}>

            {navLinks.map((link, i) => <Link to={link.id} smooth className='header__link' key={link.id}
                                             data-aos='fade-up' data-aos-delay={`${(i + 1) * 50}`}
                                             onClick={() => setIsNavOpen(!isNavOpen)}>{t(link.title) || link.title}</Link>)}

            <div className={'header__lang header__lang--mobile'}>
              <div className={`header__lang-current ${isLangOpen ? 'open' : ''}`}
                   onClick={() => setIsLangOpen(true)}>{currentLang} <Chevron/></div>
              {isLangOpen && (
                <div className={'header__lang-items'}>
                  {Object.keys(langs).map(key => <button key={key} disabled={i18next.resolvedLanguage === key}
                                                         onClick={() => langHanlder(key)}>{langs[key].nativeName}</button>)}
                </div>
              )}


            </div>
          </nav>


          <div className={'header__lang header__lang--desktop'}>
            <div className={`header__lang-current ${isLangOpen ? 'open' : ''}`}
                 onClick={() => setIsLangOpen(true)}>{currentLang} <Chevron/></div>
            {isLangOpen && (
              <div className={'header__lang-items'}>
                {Object.keys(langs).map(key => <button key={key} disabled={i18next.resolvedLanguage === key}
                                                       onClick={() => langHanlder(key)}>{langs[key].nativeName}</button>)}
              </div>
            )}


          </div>
          {windowWidth > 1050 ? <Btn transDelay={(navLinks.length + 1) * 50}/> : <Hamburger/>}

        </header>
    )
}
export default Header

