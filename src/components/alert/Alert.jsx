import './Alert.css'
import alertIcon  from "../../assets/alert.png";

const Alert = () => {
  return (
    <section className='alert' id='contact'>
        <div className="alert__box gradient-panel">
        <img className='alert__icon' src={alertIcon}  alt="alert icon" data-aos = 'fade-up'/>
        <div className="alert__box-txt">
        <h2 data-aos = 'fade-up' data-aos-delay='50' >Hello friends</h2>
        <p className='p-l alert__no-longer-p' data-aos = 'fade-up' data-aos-delay='50' >We are no longer providing website, development, dapps, smart contract, blockchain, NFT, CRM, design, marketing & PR services as an
        agency cause our team is fully focused on the development.</p>
        <p className='p-l alert__if-need-p' data-aos = 'fade-up' data-aos-delay='50' >If you need service <a href="#" className='alert__if-need-link'>click on the link</a> click on the link or send email to <a href='mailto:contact@blocklabchain.com' className='alert__if-need-link'>contact@blocklabchain.com</a></p>
        </div>
        <span className="alert__box-shadow gradient-panel"></span>
        </div>
        <span className='gradient-effect alert__gradient-effect'></span>
    </section>
  )
}

export default Alert