import './Clients.css'
import {clientsData}  from "../../constants/index";
import ChangeSliderBtns from '../changeSliderBtns/ChangeSliderBtns';
import {useTranslation} from "react-i18next";


export const Clients = ({windowWidth}) => {
  const {t} = useTranslation();

  return (
    <section className='clients' id='trusted'>
        <span className={`gradient-effect clients__gradient-effect`}></span>
        <div className="clients__heading">
        <h2 className='h2-has-bold' data-aos = 'fade-up' dangerouslySetInnerHTML={{__html: t('clients_heading')}} />
        {windowWidth > 620 && <ChangeSliderBtns section='clients' direction = 'hor'/>}
        </div>
        <swiper-container class = "clients_swiper" slides-per-view= {windowWidth > 1050  ? '4' : windowWidth > 600 ? '2' : '1.5'} pagination={windowWidth > 1050 ? 'true' : 'false'} scrollbar = {windowWidth < 620 ? 'true' : 'false'}>

        {clientsData.map((client, i) => <swiper-slide class = "clients_slide" key = {client.id} data-aos = 'fade-up' data-aos-delay={i * 50} ><div className='clients__gradient-panel gradient-panel gradient-panel__main'><img className='clients__logo' src= {client.logo}  /> <h4>{t(client.id + '_number')}</h4></div> </swiper-slide>)}
        </swiper-container>
    </section>
  )
}
export default Clients
