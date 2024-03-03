import './Btn.css'
import {useTranslation} from "react-i18next";
import {useContext} from "react";
import {GlobalContext} from "../../../store/index.jsx";
const Btn = ({transDelay}) => {
  const {t} = useTranslation();
  const {dispatch} = useContext(GlobalContext);

  return (
    <button onClick={() => {
      dispatch({type: 'show'})
    }} className='main__btn' data-aos = 'fade-up' data-aos-delay={transDelay} >{t('hero_btn1')}</button>
  )
}

export default Btn
