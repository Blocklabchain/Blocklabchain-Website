
import Hero from '../hero/Hero'
import About from '../about/About'
import Services from '../services/Services'
import {workData, web3Data} from '../../constants/index';
import SliderSection from '../sliderSection/SliderSection'
import Clients from '../clients/Clients'
import Testimonials from '../testimonials/Testimonials'
import YoutubeInflencers from '../youtubeInflencers/YoutubeInflencers'
import Business from '../business/Business'
import Alert from '../alert/Alert'


const Home = ({windowWidth, handleButtonClick, activeServicesbtn}) => {

    

  return (
    <>
    <Hero />
    <About windowWidth = {windowWidth} />
    <Services windowWidth = {windowWidth} handleButtonClick = {handleButtonClick} activeServicesbtn = {activeServicesbtn}/>
    <SliderSection {...workData} windowWidth = {windowWidth} />
    <SliderSection {...web3Data} windowWidth = {windowWidth} />
    <Clients windowWidth = {windowWidth} />
    <Testimonials />
    <YoutubeInflencers />
    <Business />
    <Alert />
    </>
  )
}

export default Home