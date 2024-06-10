import './Servises.css'
import {ServicesData}  from "../../constants/index";
import ChangeSliderBtns from '../changeSliderBtns/ChangeSliderBtns'
import {useTranslation} from "react-i18next";
import {useState} from "react";


const TITLE = '_title';
const CONTENT = '_content';

const Services = ({windowWidth, handleButtonClick, activeServicesbtn}) => {
  const {t} = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
    const buttons = [{
        id: 'development',
        title: t('sevices-btn-1'),
    }, {
        id: 'marketing',
        title: t('sevices-btn-2'),
    },
        {
            id: 'design',
            title: t('sevices-btn-3'),
        },
        {
            id: 'video',
            title: t('sevices-btn-4'),
        }
    ];
  const Box = ({icon, title, content, i}) => {


    return (
        <div className='services__box gradient-panel gradient-panel__main' data-aos = 'fade-up' data-aos-delay={`${i * 50}`}>
            <div className='service__icon-container gradient-panel gradient-panel__sub'>
            <img className='service__icon' src= {icon} alt ='icon' />
            </div>
            <h4 className='service__h4'>{title}</h4>
            <p className='service__desc p-s p-ltr-space'>{content}</p>
           {title === 'Website' && <span className='gradient-effect services__gradient-effect'></span>}
        </div>
    )
}

    const ButtonGroup = () => {


        // const buttons = ['development', 'marketing', 'design', 'video'];




      return (
          <>

            {buttons.map((name) => (

              <swiper-slide
              class='services__btn-panel'
              key={name}
              onClick={() => {
                  handleButtonClick(name.id);
              }}
              style={{ color: activeServicesbtn === name.id ? 'var(--white)' : 'var(--paragraph-clr)', fontWeight: activeServicesbtn === name.id ? '500' : '400' }}
              >
                <button className='services__btn'>
                {name.title}
                </button>
              </swiper-slide>

            ))}
          </>
        );
      };


  return (
    <section className='services' id = "services">

        <h5 className='services__h5' data-aos = 'fade-up'>{t('services_subTitle')}</h5>
        <h2 className='about__h2' data-aos = 'fade-up' data-aos-delay= '50'>Blocklabchain <br /> {t('services_title')} <br /> Web2 & Web3</h2>

        <div className="services__btns-panel-box">

        <swiper-container class="services__btns-panel" direction = {windowWidth > 1050 ? 'vertical' : 'horizontal'} slides-per-view = {windowWidth > 620 ? '4' : '2'} data-aos = 'fade-up'>
            <ButtonGroup />
        </swiper-container>

       {windowWidth < 620 && <ChangeSliderBtns onClick={(v) => {
           let i = 0;
           if(v === '+' && activeIndex < buttons.length - 1) {
                i = activeIndex + 1;
               setActiveIndex(i)
               handleButtonClick(buttons[i].id);
           } else if(v === '-' && activeIndex > 0) {
               i = activeIndex - 1;
               setActiveIndex(i)
               handleButtonClick(buttons[i].id);
           }



       }} section = {"services"} direction='hor'/>}

        </div>
        <div className="services__boxes">
            {ServicesData[activeServicesbtn].map((service, i) => <Box key = {service.id} icon =  {service.icon} title = {t(service.id + TITLE)} content = {t(service.id + CONTENT)} i = {i}/>)}
        </div>

    </section>
  )
}

export default Services
