import React from 'react';
import './select.style.css';
import {useOutsideClick} from "../../hooks/useOutsideClick.jsx";

export const DefaultSelect = ({value, label, isRequired, data, onChange}) => {
  const [isVis, setIsVis] = React.useState(false);
  const ref = useOutsideClick(() => setIsVis(false));


  return (
    <div className="ask-for-a-quote__form-field-wrapper">
      <label htmlFor="projectCountry">{label} {isRequired && <span>*</span>}</label>
      <div ref={ref} onClick={() => setIsVis(true)} className={'select'} id={'projectCountry'}>{value || <span>Select</span>}</div>
      {isVis && (
        <div className={'select-data'}>
          {data.map((itm) => (
            <div key={itm.value} onClick={() => {
              onChange(itm.value);
              setIsVis(false);
            }} className={'select-data-item'}>{itm.value}</div>))}
        </div>
      )}

    </div>
  );
}
