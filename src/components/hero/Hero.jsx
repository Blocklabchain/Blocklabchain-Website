import './Hero.css'
import blockchainGraphic from '../../assets/blockchain-graphic.png'
import Btn from '../Btn/Btn'
import {useTranslation} from "react-i18next";

function Hero() {
  const {t} = useTranslation();

  return (
    <section className='hero'>
      <img className='hero__blockchain-graphic' src={blockchainGraphic} alt="blockchain-graphic" data-aos = 'fade-up' data-aos-delay="650"/>
      <div className="hero__txt">
      <span className='gradient-effect hero__gradient-effect-top'></span>
        <h5 data-aos = 'fade-up' data-aos-delay="450">{t('hero_subtitle1')}</h5>
        <h1 className='hero__h1' data-aos = 'fade-up' data-aos-delay="500"><span className='hero__h1-big-part'>{t('hero_title1')}</span> <br/> <span className='hero__h1-small-part'>Technology</span></h1>
        <p className='hero__desc' data-aos = 'fade-up' data-aos-delay="550">{t('hero_desc')}</p>
        <Btn transDelay = {600}/>
      </div>
      <span className='gradient-effect hero__gradient-effect-bottom'></span>
    </section>
  )
}

export default Hero
