import {useTranslation} from "react-i18next";

const RefundServicePolicy = () => {
  const {t} = useTranslation();

  return (
    <div className="sub-page">
    <span className='sub-page__gradient-effect-left sub-page__gradient gradient-effect '></span>
    <span className='sub-page__gradient-effect-middle sub-page__gradient gradient-effect '></span>
    <span className='sub-page__gradient-effect-right sub-page__gradient gradient-effect '></span>
    <h4 className="sub-page__heading">{t('rsp')}</h4>
    <div className="sub-page__content" dangerouslySetInnerHTML={{__html: t('rsp_boyd')}} />


    </div>
  )
}

export default RefundServicePolicy
