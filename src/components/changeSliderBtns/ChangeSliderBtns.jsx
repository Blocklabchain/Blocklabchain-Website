import './changeSliderBtns.css'
import NextSlideBtnHorizontal from '../../assets/next-slide-horizontal.svg'
import PrevSlideBtnHorizontal from '../../assets/prev-slide-horizontal.svg'
import NextSlideBtnVertical from '../../assets/next-slide.svg'
import PrevSlideBtnVertical from '../../assets/prev-slide.svg'

const changeSliderBtns = ({section, direction, onClick}) => {

    return (
        <div className={`${section}__change-slide-btns swiper-change-btns ${direction === 'ver' && 'vertical'}`}>
            <button className="swiper-change-btn swiper-change-btn-prev" data-aos = 'fade-up' onClick={() => {
                document.querySelector(`.${section} swiper-container`).swiper.slidePrev();
                onClick('-');
            }}><img className="swiper-change-vector" src={direction === 'hor'? PrevSlideBtnHorizontal : PrevSlideBtnVertical} /></button>
            <button className="swiper-change-btn swiper-change-btn-next" data-aos = 'fade-up' onClick={() => {
                document.querySelector(`.${section} swiper-container`).swiper.slideNext();
                onClick('+');
            }}><img className="swiper-change-vector" src={direction === 'hor'? NextSlideBtnHorizontal : NextSlideBtnVertical} /></button>
        </div>
      )
}

export default changeSliderBtns