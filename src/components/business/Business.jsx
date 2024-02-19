import './Business.css'
import {businessData}  from "../../constants/index";
import businessIllustration  from "../../assets/blockchain-bottom-ilustration.png";




const Business = () => {

  const Box = ({icon, i}) => {
    return (
      <div className='business__box gradient-panel gradient-panel__sub' data-aos = 'fade-up' data-aos-delay={50 * i} >
          <img className='business__logo' src={icon} />
      </div>
    )
  }

  return (
    <section className='business'>
        <h2 className='h2-has-bold' data-aos = 'fade-up'>60+Business & <br/>
        <span className='h2-bold'>Crypto</span> Media</h2>
        <div className="business__boxes">
            {businessData.map((business, i) => <Box key={business.id} icon = {business.icon} i = {i}/>)}
        </div>
        <span className='gradient-effect business__gradient-effect'></span>
        <img className='business__illustration' src={businessIllustration} alt="business__illustration" data-aos = 'fade-up'/>
    </section>
  )
}

export default Business