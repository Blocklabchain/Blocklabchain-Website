import './Testimonials.css'
import {TestimonialsData}  from "../../constants/index";
import xIcon  from "../../assets/x-icon.svg";
import ChangeSliderBtns from '../changeSliderBtns/ChangeSliderBtns'


const TestimonialSlide = ({icon, heading, subHeading, content, time}) => {

  return (
    <swiper-slide class = "testimonials__slide gradient-panel gradient-panel__main">
      <div className="testimonials__slide-header">
      <div className="testimonials__slide-infos">
        <img className='testimonials__icon' src={icon} />
        <div className="testimonials__slide-headings">
        <h6 className="testimonials__slide-heading h6-s">{heading}</h6>
        <span className="testimonials__slide-sub-heading">{subHeading}</span>
        </div>
      </div>
      <div className="testimonials__x-wrapper">
        <img className='testimonials__x-icon' src={xIcon}/>
      </div>
      </div>
      <p className='testimonials__content'>{content}</p>
      <div className='testimonials__footer'>
        <button className='testimonials__view-x-btn'>View in Twitter</button>
        <span className='testimonials__twit-time'>{time}</span>
      </div>
    </swiper-slide>
  )
}

const Testimonials = () => {
  return (
    <section className='testimonials' id = 'testimonials'>
      <span className='gradient-effect testimonials__gradient-effect'></span>
        <h2 data-aos = 'fade-up'>Our Testimonials</h2>
        <swiper-container class = "testimonials__swiper" slides-per-view="3" loop = "true" data-aos = 'fade-up'>
        {TestimonialsData.map(testimonial => <TestimonialSlide key={testimonial.id} {...testimonial}/>)}
        </swiper-container>
        {window.innerWidth > 620 && <ChangeSliderBtns section = {"testimonials"} direction='hor'/> }
    </section>
  )
}

export default Testimonials