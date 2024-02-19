import './About.css' 
import {Expertise}  from "../../constants/index";



const About = () => {

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

  return (
    <section className='about' id='about'>
      <div className="about__heading">
        <h5 data-aos = 'fade-up'>About us</h5>
        <h2 className='about__h2' data-aos = 'fade-up'>Expertise in Numbers</h2>
      </div>
        <div className="about__boxes">
        {Expertise.map((exp, i) => <Box key={exp.id} icon = {exp.icon} title = {exp.title} content = {exp.content} i ={i}/>)}
        </div>
    </section>
  )
}

export default About