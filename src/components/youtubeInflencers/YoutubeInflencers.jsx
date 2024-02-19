import './YoutubeInflencers.css' 
import {youtubeInflencersData}  from "../../constants/index";
import youtubeLogo from '../../assets/youtube-logo.png'


const YoutubeInflencers = () => {

  const Box = ({bg, icon, heading, subHeading, subscribesNumer, earningNumer, earningNumer2, avgViewsNumer, i}) => {
  
    return (   
       <div className='youtube-inflencers__box gradient-panel gradient-panel__main' data-aos = 'fade-up' data-aos-delay={i * 50} >
          <div className="youtube-inflencers__box-bg-wrapper">
            <img className='youtube-inflencers__box-bg' src={bg} />
          </div>
          <div className="youtube-inflencers__box-icon-wrapper">
            <img className='youtube-inflencers__box-icon' src={icon} />
          </div>
          <div className="youtube-inflencers__infos">
            <div className="headings">
            <h4 className='youtube-inflencers__infos-heading'>{heading}</h4>
            <h6 className='youtube-inflencers__infos-sub-heading h6-l'>{subHeading}</h6>
            </div>
            <div className="youtube-inflencers__youtube-logo-wrapper">
              <img className="youtube-inflencers__youtube-logo" src={youtubeLogo} />
            </div>
          </div>
          <div className="youtube-inflencers__statistics">
            <div className="youtube-inflencers__subscribes youtube-inflencers__statistic">
              <span className='youtube-inflencers__statistics-label'>Subscribes</span>
              <h6 className='h6-l'>{subscribesNumer}</h6>
            </div>
            {window.innerWidth < 620 && <span className="youtube-inflencers__statistics-line"></span>}
            <div className="youtube-inflencers__earning youtube-inflencers__statistic">
              <span className='youtube-inflencers__statistics-label'>Earning</span>
              <h6 className='h6-l'>{earningNumer}</h6>
            </div>
            {window.innerWidth < 620 && <span className="youtube-inflencers__statistics-line"></span>}
            <div className="youtube-inflencers__avg-views youtube-inflencers__statistic">
              <span className='youtube-inflencers__statistics-label'>Avg Views</span>
              <h6 className='h6-l'>{avgViewsNumer}</h6>
            </div>
            </div>
        </div>
        )
  }

  return (
    <section className='youtube-inflencers'>
        <span className='gradient-effect youtube-inflencers__gradient-effect youtube-inflencers__gradient-effect-left'></span>
        <span className='gradient-effect youtube-inflencers__gradient-effect youtube-inflencers__gradient-effect-right'></span>
        <h2 className='h2-has-bold' data-aos = 'fade-up'>Get Access To 1900 <br /><span className='h2-bold'>YouTube</span> Influencers</h2>
        <div className='youtube-inflencers__Boxes'>
        {youtubeInflencersData.map((influencer, i) => <Box key={influencer.id} {...influencer} i = {i}/>)}
        </div>
    </section>
  )
}

export default YoutubeInflencers