import React from 'react';
import styleFM from './FooterMobile.module.css';
import logoWhite from '../../assets/icons/logoWhite.svg';
import fmVKIcon from '../../assets/icons/fm-vk-icon.svg';
import { NavLink } from 'react-router-dom';


const FooterMobile = () => {
  return (
    <footer className={styleFM.FooterMobile}>
      <div className={"MainContainerWrap"}>
        <div className={styleFM.footerMobileWrap}>
          <div className={styleFM.FMLogoBlock}><NavLink exact to={"/"} ><img src={logoWhite} alt="белый логотип"/></NavLink></div>

          <div className={styleFM.FMContactsBlockWrap}>
            <div className={styleFM.FMContactsBlock}>
              <div><a href="tel:+79776220921">+7 (977) 622-09-21</a></div>
              <div><a href="tel:+79775741346">+7 (977) 574-13-46</a></div>
            </div>
          </div>

          <div className={styleFM.FMGroupVKBlockWrap}>
            <div className={styleFM.FMGroupVKBlock}>
              <div className={styleFM.FMGroupVKBlockImg}><a target="blank" href="https://vk.com/catchmefish"><img src={fmVKIcon} alt="иконка"/></a></div>
              <div className={styleFM.FMGroupVKBlockText}><a target="blank" href="https://vk.com/catchmefish">Мы ВКонтакте</a></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default FooterMobile;