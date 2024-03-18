import React from 'react';
import './cotnact.css';
import {IconContact} from "../icons/IconContact.jsx";
import {CloseIcone2} from "../icons/CloseIcone2.jsx";
import IconWhatsApp from "../icons/IconWhatsApp.jsx";
import IconInstagram from "../icons/IconInstagram.jsx";
import IconFacebook from "../icons/IconFacebook.jsx";
import IconPhone from "../icons/IconPhone.jsx";
import IconMail from "../icons/IconMail.jsx";
import {useOutsideClick} from "../../hooks/useOutsideClick.jsx";

export const Contact = () => {
  const [isShow, setIsShow] = React.useState(false);
  const ref = useOutsideClick(() => setIsShow(false))
  return (<div ref={ref} className={'contact-wrapper'}>
    <button onClick={() => setIsShow(true)} className={'contact-btn'}>
     <IconContact />
      <span>Contact</span></button>
    {isShow && (
      <div className={'contact-modal'}>
        <div className={'contact-modal-header'}>
          <h3>Blocklabchain</h3>
          <button onClick={() => setIsShow(false)} className={'contact-modal-close-btn'}><CloseIcone2/></button>
        </div>
        <div className={'contact-modal-body'}>
          <a rel="noreferrer" href={'https://wa.me/33345689002'} target={"_blank"}
             className="contact-modal-contact contact-modal-contact--w">
            <div className="contact-modal-icon-wrapper">
              <IconWhatsApp/>
            </div>
            <span>WhatsApp</span>
          </a>
          {/*<a href={'/'} className="contact-modal-contact contact-modal-contact--i">*/}
          {/*  <div className="contact-modal-icon-wrapper">*/}
          {/*    <IconInstagram/>*/}
          {/*  </div>*/}
          {/*  <span>Instagram</span>*/}
          {/*</a>*/}
          {/*<a href={'/'} className="contact-modal-contact contact-modal-contact--f">*/}
          {/*  <div className="contact-modal-icon-wrapper">*/}
          {/*    <IconFacebook/>*/}
          {/*  </div>*/}
          {/*  <span>Facebook</span>*/}
          {/*</a>*/}
          <a href={'tel:33345689002'} className="contact-modal-contact contact-modal-contact--t">
            <div className="contact-modal-icon-wrapper">
              <IconPhone/>
            </div>
            <span>+33 3 45 68 90 02</span>
          </a>
          <a href={'mailto:contact@blocklabchain.com'} className="contact-modal-contact contact-modal-contact--m">
            <div className="contact-modal-icon-wrapper">
              <IconMail/>
            </div>
            <span>contact@blocklabchain.com</span>
          </a>
        </div>
      </div>
    )}

  </div>);
}
