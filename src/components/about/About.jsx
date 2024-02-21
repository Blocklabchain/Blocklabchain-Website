import './About.css' 
import {Expertise}  from "../../constants/index";




const About = ({windowWidth}) => {

  const Box = (props) => {

    return (
      <div className='about__box gradient-panel gradient-panel__main' data-aos = 'fade-up' data-aos-delay={`${props.i != 3 && props.i * 50}`}>
      <div className='about__icon-container gradient-panel gradient-panel__sub'>
      <img className='about__icon' src= {props.icon} alt="" />
      </div>
      <h3 className='about__title'>{props.title}</h3>
      <p className='about__desc p-l p-ltr-space'>{props.content}</p>
    </div>
    )
}

const Slider = () => {

  let expertise0 = Expertise[0]
  let expertise1 = Expertise[1]
  let expertise2 = Expertise[2]
  let expertise3 = Expertise[0]
  let expertise4 = Expertise[1]
  let expertise5 = Expertise[2]
    
  return (
    <swiper-container class = "about__swiper" slides-per-view= '1' autoplay>
      <swiper-slide class = "about__slide">
        <Box key={expertise0.id} icon = {expertise0.icon} title = {expertise0.title} content = {expertise0.content} i ={0} />
        <Box key={expertise1.id} icon = {expertise1.icon} title = {expertise1.title} content = {expertise1.content} i ={1} />
        <Box key={expertise2.id} icon = {expertise2.icon} title = {expertise2.title} content = {expertise2.content} i ={2} />
      </swiper-slide>
      <swiper-slide class = "about__slide">
        <Box key={expertise3.id} icon = {expertise3.icon} title = {expertise3.title} content = {expertise3.content} i ={3} />
        <Box key={expertise4.id} icon = {expertise4.icon} title = {expertise4.title} content = {expertise4.content} i ={4} />
        <Box key={expertise5.id} icon = {expertise5.icon} title = {expertise5.title} content = {expertise5.content} i ={5} />
      </swiper-slide>
   </swiper-container> 
  )
}

  return (
    <section className='about' id='about'>
      <div className="about__heading">
        <h5 data-aos = 'fade-up'>About us</h5>
        <h2 className='about__h2' data-aos = 'fade-up'>Expertise in Numbers</h2>
      </div>
        <div className="about__boxes">
        
        {windowWidth > 620 ? Expertise.map((exp, i) => <Box key={exp.id} icon = {exp.icon} title = {exp.title} content = {exp.content} i ={i}/>) : <Slider />}
        </div>
    </section>
  )
}

export default About