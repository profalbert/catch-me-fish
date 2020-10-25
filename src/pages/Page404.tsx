import React from 'react';
import stylePage404 from './Page404.module.css';
import { NavLink } from 'react-router-dom';
import cn from 'classnames'


const Page404 = () => {
  return (
    <div className={stylePage404.Page404Wrap}>

      <div className={stylePage404.Page404BlockWrap}>
        <div className={"MainContainerWrap"}>
          <div className={stylePage404.Page404Block}>
            <div className={stylePage404.Page404BlockMainText}>Страница не найдена</div>
            <div className={stylePage404.Page404Block404}>404</div>
            <div className={stylePage404.Page404BlockButtonBlock}><NavLink className={cn(stylePage404.Page404BlockButton, "hoverButtonsMainClass")} exact to="/">На главную</NavLink></div>
          </div>
        </div>
      </div>

    </div>
  );
}


export default Page404;