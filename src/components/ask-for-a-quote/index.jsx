import React, {useContext} from 'react';
import './ask-for-a-quote.css';
import {CloseIcon} from "../icons/closeIcon.jsx";
import {DefaultSelect} from "../selects/DefaultSelect.jsx";
import {useTranslation} from "react-i18next";
import {GlobalContext} from "../../../store/index.jsx";

const FORM_DATA = {
  name: '',
  twitterOrTelegram: '',
  projectName: '',
  projectTelegram: '',
  projectEmail: '',
  projectWebsite: '',
  projectCountry: '',
  services: '',
  additionalInformation: ''
}


export const AskForAQuote = () => {
  const [formData, setFormData] = React.useState(FORM_DATA);
  const [countries, setCountries] = React.useState([]);
  const wrapperRef = React.useRef(null);
  // const [successSend, setSuccessSend] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const {t} = useTranslation();
  const [errors, setErrors] = React.useState('');
  const {dispatch} = useContext(GlobalContext);

  const CHECKBOXES = [
    t('formCheckBox1'),
    t('formCheckBox2'),
    t('formCheckBox3'),
    t('formCheckBox4'),
    t('formCheckBox5')
  ]

  const closeHandler = () => dispatch({type: 'hide'})
  React.useEffect(() => {
    (async () => {
      try {
        const resp = await fetch('https://restcountries.com/v3.1/all?fields=name');
        const respJson = await resp.json();

        const data = respJson.map(c => ({value: c.name.common})).sort((a, b) => a.value.localeCompare(b.value))
        setCountries(data);
      } catch (e) {
        console.log("=>(index.jsx:30) e", e);
      }

    })();
  }, [])

  React.useEffect(() => {
    const handleClick = (event) => {
      if (event.target.classList.contains('ask-for-a-quote__modal-wrapper')) {
        closeHandler();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [])

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newData = {...formData};
    newData[name] = value;

    console.log("=>(index.jsx:30) newData", newData);

    setFormData(newData);
  }

  const sendHandler = async () => {
    setErrors('');

    if(!formData.name || !formData.services || !formData.projectCountry || !formData.projectEmail) {
      setErrors('Error: (*) Required fields');

      setTimeout(() => {
        setErrors('');
      }, 4000);
      return null
    }

    setLoading(true);

    const services = formData.services.split(' ').filter(d=>d).join(', ');
    const data = {
      "name": formData.name,
      "projectEmail": formData.projectEmail,
      "country": formData.projectCountry,
      services,
      "projectTelegram": formData.projectTelegram,
      "projectName":  formData.projectName,
      "twitterOrTelegram": formData.twitterOrTelegram,
      "projectWebsite": formData.projectWebsite,
      "additionalInformation": formData.additionalInformation,
    }

    try {
      const resp = await fetch('/api/send-email.php', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      console.log("=>(index.jsx:96) resp", resp);
      closeHandler();
    } catch (e) {
        console.log("=>(index.jsx:97) e", e);
      setErrors('Error - try again later');
    } finally {
      setLoading(false);
    }

    setTimeout(() => {
      setErrors('');
    }, 4000);

  };

  return (<div ref={wrapperRef} className={'ask-for-a-quote__modal-wrapper'}>
    <div className={'ask-for-a-quote__modal-content'}>
      <div className="ask-for-a-quote__modal-header">
        <div>
          <h2>{t('formTitle')}</h2>
          <div dangerouslySetInnerHTML={{__html: t('formDesc')}} />
        </div>
        <button type={'button'} onClick={closeHandler}>
          <CloseIcon />
        </button>
      </div>
      <div className="ask-for-a-quote__modal-body">
        <form className="ask-for-a-quote__modal-form">
          <div className="ask-for-a-quote__form-row">
            <div className="ask-for-a-quote__form-field-wrapper">
              <label htmlFor="name"> {t('label1')} <span>*</span></label>
              <input onChange={onChange} required value={formData.name} placeholder={t('defPlaceHolder')} type="text"
                     name={'name'}
                     id={'name'}/>
            </div>
            <div className="ask-for-a-quote__form-field-wrapper">
              <label htmlFor="twitterOrTelegram">{t('label2')}</label>
              <input onChange={onChange} value={formData.twitterOrTelegram} placeholder={t('defPlaceHolder')} type="text"
                     name={'twitterOrTelegram'}
                     id={'twitterOrTelegram'}/>
            </div>
          </div>
          <div className="ask-for-a-quote__form-row">
            <div className="ask-for-a-quote__form-field-wrapper">
              <label htmlFor="projectName">{t('label3')}</label>
              <input onChange={onChange} value={formData.projectName} placeholder={t('defPlaceHolder')} type="text"
                     name={'projectName'}
                     id={'projectName'}/>
            </div>
          </div>
          <div className="ask-for-a-quote__form-row">
            <div className="ask-for-a-quote__form-field-wrapper">
              <label htmlFor="projectTelegram">{t('label6')}</label>
              <input onChange={onChange} value={formData.projectTelegram} placeholder={t('defPlaceHolder')} type="text"
                     name={'projectTelegram'}
                     id={'projectTelegram'}/>
            </div>
            <div className="ask-for-a-quote__form-field-wrapper">
              <label htmlFor="projectEmail">{t('label7')} <span>*</span></label>
              <input required onChange={onChange} value={formData.projectEmail} placeholder={t('defPlaceHolder')}
                     type="text"
                     name={'projectEmail'}
                     id={'projectEmail'}/>
            </div>
          </div>
          <div className="ask-for-a-quote__form-row">
            <div className="ask-for-a-quote__form-field-wrapper">
              <label htmlFor="projectWebsite">{t('label8')}</label>
              <input onChange={onChange} value={formData.projectWebsite} placeholder={t('defPlaceHolder')} type="text"
                     name={'projectWebsite'}
                     id={'projectWebsite'}/>
            </div>
            <DefaultSelect
              value={formData.projectCountry}
              label={t('label9')}
              isRequired={true}
              data={countries}
              onChange={(value) => {
                const newData = {...formData};
                newData.projectCountry = value;
                setFormData(newData);
              }}
            />
          </div>
          <div>
            <h3>{t('label10')} <span>*</span></h3>
            <div className={'ask-for-a-quote__form-checkboxes-wrapper'}>
              {CHECKBOXES.map(checkbox => (
                <div
                  key={checkbox}
                  onClick={() => {
                    const newData = {...formData};
                    if (newData.services.includes(checkbox)) {
                      newData.services = newData.services.replace(` ${checkbox}`, '');
                    } else {
                      newData.services += ` ${checkbox}`;
                    }
                    setFormData(newData);
                  }}
                  className={`ask-for-a-quote__form-checkbox ${formData.services.includes(checkbox) && 'checked'}`}>
                  <div className={'icon-check-wrapper'}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      className={'icon-check'}
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="#302F2F"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 10v7a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2h11"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#9B5EFFFF"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 011.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 01-1.065.02L3.217 8.384a.757.757 0 010-1.06.733.733 0 011.047 0l3.052 3.093 5.4-6.425z"></path>
                    </svg>
                  </div>
                  <span>{checkbox}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className={'ask-for-a-quote__label-text'}>{t('label11')}</p>
            <div className="ask-for-a-quote__form-field-wrapper">
              <input name={'additionalInformation'}
                     id={'additionalInformation'}
                     value={formData.additionalInformation}
                     onChange={onChange}
                     placeholder={t('defPlaceHolder')}
                     type="text"/>
            </div>
          </div>
          {errors &&  (
            <div>
              <p className="required-text" style={{color: 'red'}}>
                {errors || 'Error: (*) Required fields'}
              </p>
            </div>
          )}
          <div className={'ask-for-a-quote__btn-wrapper'}>
            <button disabled={isLoading} onClick={sendHandler} type={'button'} className={'ask-for-a-quote__btn-send'}>

              {isLoading ? (<span className={'loader'}></span>) : (<span>{t('btnSend')}</span>)}

            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
}
