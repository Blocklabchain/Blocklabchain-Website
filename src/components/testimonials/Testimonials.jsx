import './Testimonials.css'
import {TestimonialsData}  from "../../constants/index";
import xIcon  from "../../assets/x-icon.svg";
import ChangeSliderBtns from '../changeSliderBtns/ChangeSliderBtns'
import {useTranslation} from "react-i18next";


const TestimonialSlide = ({icon, id}) => {
  const {t} = useTranslation();

  return (
    <swiper-slide class = "testimonials__slide gradient-panel gradient-panel__main">
      <div className="testimonials__slide-header">
      <div className="testimonials__slide-infos">
        <img className='testimonials__icon' src={icon} />
        <div className="testimonials__slide-headings">
        <h6 className="testimonials__slide-heading h6-s">{t(id+ '_heading')}</h6>
        <span className="testimonials__slide-sub-heading">{t(id+ '_subHeading')}</span>
        </div>
      </div>
      <div className="testimonials__x-wrapper">
        <img className='testimonials__x-icon' src={xIcon}/>
      </div>
      </div>
      <p className='testimonials__content'>{t(id+ '_content')}</p>
      <div className='testimonials__footer'>
        <button className='testimonials__view-x-btn'>{t('btn_view_on_X')}</button>
        <span className='testimonials__twit-time'>{t(id + '_time')}</span>
      </div>
    </swiper-slide>
  )
}

const Testimonials = () => {
  const {t} = useTranslation();

  return (
    <section className='testimonials' id = 'testimonials'>
      <span className='gradient-effect testimonials__gradient-effect'></span>
        <h2 data-aos = 'fade-up'>{t('testimonials_heading')}</h2>
        <swiper-container class = "testimonials__swiper" slides-per-view="3" loop = "true" data-aos = 'fade-up'>
        {TestimonialsData.map(testimonial => <TestimonialSlide key={testimonial.id} {...testimonial}/>)}
        </swiper-container>
        {window.innerWidth > 620 && <ChangeSliderBtns section = {"testimonials"} direction='hor'/> }
    </section>
  )
}

export default Testimonials
