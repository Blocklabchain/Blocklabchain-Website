import './SliderSection.css'
import React from 'react';
import ChangeSliderBtns from '../changeSliderBtns/ChangeSliderBtns';
import {useTranslation} from "react-i18next";





const SliderSection = ({name, images, numberSlideColumns, windowWidth}) => {
    const {t} = useTranslation();
    let sliderImages = images
    let sliders = [];

    if (windowWidth > 620) {
      for (let i = 0; i < sliderImages.length; i+=3) {
        sliders.push(<swiper-slide class = "slider-section__slide" key = {i}> <img className='slider-section__slide-img' key = {sliderImages[i].id} src = {sliderImages[i].img} /><img className='slider-section__slide-img' key = {sliderImages[i+1].id} src = {sliderImages[i+1].img} /><img className='slider-section__slide-img' key = {sliderImages[i+2].id} src = {sliderImages[i+2].img}/> </swiper-slide> )
    }
    } else {
      sliders = sliderImages.map((img, i)=> <swiper-slide key = {i}><img className='slider-section__slide-img' key = {img.id} src = {img.img} /></swiper-slide>)
    }

    const h5Content = (
                      t(`${name}Data_subHeading`).split('\n').map((line, index, array) => (
                      <React.Fragment key={index}>
                        {line}
                        {index !== array.length - 1 && <br />} {/* Add <br/> except for the last line */}
                      </React.Fragment>
                      ))
                      )
    const h2Content = (
                      t(`${name}Data_heading`).split('\n').map((line, index, array) => (
                        <React.Fragment key={index}>
                          {line}
                          {index !== array.length - 1 && <br />} {/* Add <br/> except for the last line */}
                        </React.Fragment>
                      ))
    )




  return (
    <section className = {`${name} slider-section`} id = {`${name}`} >
      <h5 className='slider-section__h5' data-aos = 'fade-up'>
        {h5Content}
      </h5>
      <h2 className='slider-section__h2' data-aos = 'fade-up' data-aos-delay='50'>
        {h2Content}
      </h2>

     {name === 'web3' && <span className={`gradient-effect work__gradient-effect`}></span>}


        <p className='slider-section__desc p-s p-ltr-space' data-aos = 'fade-up' data-aos-delay='50'>{t(`${name}Data_paragraph`)}</p>

       {windowWidth > 620 && <ChangeSliderBtns section={name} direction = 'ver'/>}

        <swiper-container class = "slider-section__swiper" slides-per-view={windowWidth > 620 ? numberSlideColumns : '1.3'} direction = {windowWidth > 620 ? 'vertical' : 'horizontal'} scrollbar = {windowWidth < 620 ? 'true' : 'false'} data-aos = 'fade-up'>
            {sliders}
        </swiper-container>

    </section>
  )
}
export default SliderSection
