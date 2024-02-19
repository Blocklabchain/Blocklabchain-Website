import './Btn.css'
const Btn = ({transDelay}) => {

  return (
    <button className='main__btn' data-aos = 'fade-up' data-aos-delay={transDelay} >Let’s Talk</button>
  )
}

export default Btn