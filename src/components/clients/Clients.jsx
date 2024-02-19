import './Clients.css'
import {clientsData}  from "../../constants/index";
import ChangeSliderBtns from '../changeSliderBtns/ChangeSliderBtns';


export const Clients = ({windowWidth}) => {
  return (
    <section className='clients' id='trusted'>
        <span className={`gradient-effect clients__gradient-effect`}></span>
        <div className="clients__heading">
        <h2 className='h2-has-bold' data-aos = 'fade-up'>Our Trusted <br /><span className='h2-bold'>Clients</span></h2>
        {windowWidth > 620 && <ChangeSliderBtns section='clients' direction = 'hor'/>}
        </div>
        <swiper-container class = "clients_swiper" slides-per-view= {windowWidth > 1050  ? '4' : windowWidth > 600 ? '2' : '1.5'} pagination={windowWidth > 1050 ? 'true' : 'false'} scrollbar = {windowWidth < 620 ? 'true' : 'false'}>
          
        {clientsData.map((client, i) => <swiper-slide class = "clients_slide" key = {client.id} data-aos = 'fade-up' data-aos-delay={i * 50} ><div className='clients__gradient-panel gradient-panel gradient-panel__main'><img className='clients__logo' src= {client.logo}  /> <h4>{client.number}</h4></div> </swiper-slide>)}
        </swiper-container>
    </section>
  )
}
export default Clients