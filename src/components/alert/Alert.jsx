import './Alert.css'
import alertIcon  from "../../assets/alert.png";
import {useTranslation} from "react-i18next";
import {useContext, useEffect} from "react";
import {GlobalContext} from "../../../store/index.jsx";

const Alert = () => {
  const {t} = useTranslation();
  const {dispatch} = useContext(GlobalContext);

  useEffect(() => {

    const handleClick = (event) => {
      if(event.target.className.includes('alert__if-need-link')) {
        dispatch({type: 'show'})
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [])

  return (
    <section className='alert' id='contact'>
        <div className="alert__box gradient-panel">
        <img className='alert__icon' src={alertIcon}  alt="alert icon" data-aos = 'fade-up'/>
        <div className="alert__box-txt">
        <h2 data-aos = 'fade-up' data-aos-delay='50' >{t('alert_title')}</h2>
        <p className='p-l alert__no-longer-p' data-aos = 'fade-up' data-aos-delay='50' >{t('alert_desc')}</p>
        <p className='p-l alert__if-need-p' data-aos = 'fade-up' data-aos-delay='50' dangerouslySetInnerHTML={{__html: t('needServ')}}  />
        </div>
        <span className="alert__box-shadow gradient-panel"></span>
        </div>
        <span className='gradient-effect alert__gradient-effect'></span>
    </section>
  )
}

export default Alert
