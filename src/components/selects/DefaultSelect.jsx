import React from 'react';
import './select.style.css';
import {useOutsideClick} from "../../hooks/useOutsideClick.jsx";

export const DefaultSelect = ({value, label, isRequired, data, onChange}) => {
  const [isVis, setIsVis] = React.useState(false);
  const ref = useOutsideClick(() => setIsVis(false));
  const [searchValue, setSearchValue] = React.useState('d');
  const [selectData, setSelectData] = React.useState(data);

  const onchangeHandler = (e) => {
    const v = e.target.value;
    setSearchValue(v);
    if(v.length < 1) {
      return setSelectData(data);
    }

    const newData = data.filter(itm => itm.value.toLowerCase().includes(v.toLowerCase()));

    setSelectData(newData);
  }
  return (
    <div ref={ref} className="ask-for-a-quote__form-field-wrapper">
      <label htmlFor="projectCountry">{label} {isRequired && <span>*</span>}</label>
      <div  onClick={() => setIsVis(true)} className={'select'} id={'projectCountry'}>{value || <span>Select</span>}</div>
      {isVis && (
        <div className={'select-data'}>
          <div style={{padding: '10px'}}>
            <input name={'search'} value={searchValue} onChange={onchangeHandler}  style={{height: '35px', color: 'black', padding: '0 10px', border: '1px solid lightgray'}} type="text"/>
          </div>
          {selectData.map((itm) => (
            <div key={itm.value} onClick={() => {
              onChange(itm.value);
              setIsVis(false);
            }} className={'select-data-item'}>{itm.value}</div>))}
        </div>
      )}

    </div>
  );
}
