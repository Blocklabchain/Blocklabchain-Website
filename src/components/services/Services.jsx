import './Servises.css' 
import {ServicesData}  from "../../constants/index";
import ChangeSliderBtns from '../changeSliderBtns/ChangeSliderBtns'




const Services = ({windowWidth, handleButtonClick, activeServicesbtn}) => {

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
      
        
        const buttons = ['development', 'marketing', 'design', 'video'];
      
        return (
          <>
            
            {buttons.map((name) => (
             
              <swiper-slide
              class='services__btn-panel'
              key={name}
              onClick={() => handleButtonClick(name)}
              style={{ color: activeServicesbtn === name ? 'var(--white)' : 'var(--paragraph-clr)', fontWeight: activeServicesbtn === name ? '500' : '400' }}
              >
                <button className='services__btn'>
                {name}
                </button>
              </swiper-slide>
             
            ))}
          </>
        );
      };


  return (
    <section className='services' id = "services">
        
        <h5 className='services__h5' data-aos = 'fade-up'>Services</h5>
        <h2 className='about__h2' data-aos = 'fade-up' data-aos-delay= '50'>Blocklabchain <br /> Agency <br /> Web2 & Web3</h2>
        
        <div className="services__btns-panel-box">

        <swiper-container class="services__btns-panel" direction = {windowWidth > 1050 ? 'vertical' : 'horizontal'} slides-per-view = {windowWidth > 620 ? '4' : '2'} data-aos = 'fade-up'>
            <ButtonGroup />
        </swiper-container>
        
       {windowWidth < 620 && <ChangeSliderBtns section = {"services"} direction='hor'/>}

        </div>
        <div className="services__boxes">
            {ServicesData[activeServicesbtn].map((service, i) => <Box key = {service.id} icon =  {service.icon} title = {service.title} content = {service.content} i = {i}/>)}
        </div>
        
    </section>
  )
}

export default Services