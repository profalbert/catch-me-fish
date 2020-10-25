import React, {useState} from 'react';
import styleHM from './HeaderMobile.module.css';
import hmBasketIcon from '../../assets/icons/hm-basket-icon.svg';
import hmPhoneIcon from '../../assets/icons/hm-phone-icon.svg';
import hmContactsIcon from '../../assets/icons/hm-contacts-icon.svg';
import hmSearcheIcon from '../../assets/icons/hm-searche-icon.svg';
import cn from 'classnames'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../../store/redux-store';
import { TypeGood, TypeGoodInBasket } from '../../types/types';
import { compose } from 'redux';
import CloseIcon from '@material-ui/icons/Close';


type MapStatePropsType = {
  goodsInBasket: Array<TypeGoodInBasket>
  goodsList: Array<TypeGood>
}
type MapDispatchPropsType = {}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const HeaderMobileContainer: React.FC<PropsType> = ({goodsInBasket, goodsList}) => {
  const goodsInBasketAllCount = goodsInBasket.map(item => item.count).reduce((sumCount, currentCount) => sumCount + currentCount, 0)
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  const [valueInputSearche, setValueInputSearche] = useState<string>('')
  const [focusInputSearche, setFocusInputSearche] = useState<boolean>(false)
  const [isAddClassInputOpen, setIsAddClassInputOpen] = useState<boolean>(false)
  
  const onOpenMenu = () => {
    setIsOpenMenu(true)
  };
  const onCloseMenu = () => {
    setIsOpenMenu(false)
  };
  const onChangeInputSearche = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInputSearche(e.target.value)
  };
  const onSearcheGoods = () => {
    if (window.document.body.scrollWidth < 576) {
      if (isAddClassInputOpen) {
        setValueInputSearche('')
        setIsAddClassInputOpen(false)
      } else {
        setIsAddClassInputOpen(true)
      }
    } else if (valueInputSearche.length > 0) {
      setValueInputSearche('')
    }
  };


  return (
    <header className={styleHM.HeaderMobile}>
      <div className={"MainContainerWrap"}>
        <div className={styleHM.headerMobileWrap}>
          <div className={styleHM.HMMenuWrap}>
            <button onClick={() => onOpenMenu()} className={styleHM.HMMenuButton}>
              <span className={cn(styleHM.HMMenuButtonSpan, styleHM.HMMenuButtonSpan1)}></span>
              <span className={cn(styleHM.HMMenuButtonSpan, styleHM.HMMenuButtonSpan2)}></span>
              <span className={cn(styleHM.HMMenuButtonSpan, styleHM.HMMenuButtonSpan3)}></span>
            </button>            
          </div>

          <div className={styleHM.HMButtonsWrap}>
            <div className={styleHM.HMSearcheBlock}>
              <input 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputSearche(e)}
                onFocus={() => setFocusInputSearche(true)}
                onBlur={() => setFocusInputSearche(false)}
                value={valueInputSearche} 
                className={cn(styleHM.HMSearcheInput, {[styleHM.HMSearcheInputOpen]: isAddClassInputOpen})} 
                type="text" 
                placeholder="Поиск товаров"
              />

              {focusInputSearche && valueInputSearche.length > 0 &&
                <div className={styleHM.HMSearcheListGoodsBlockWrap}>
                  {[goodsList[3]].map(good => (
                    <div key={good.id} className={styleHM.HMSearcheListGoodsBlock}>
                      <div className={styleHM.HMSearcheListGoodsImgBlock}>
                        <img className={styleHM.HMSearcheListGoodsImg} src={good.images[0]} alt="картинка"/>
                      </div>
                      <div className={styleHM.HMSearcheListGoodsTitleBlock}>
                        <div className={styleHM.HMSearcheListGoodsTitle}>{valueInputSearche}</div>
                      </div>
                    </div>
                  ))}
                </div>
              }                
            </div>

            <button onClick={() => onSearcheGoods()} className={cn(styleHM.HMButton, styleHM.HMButtonSearche, {[styleHM.HMButtonSearcheOpen]: isAddClassInputOpen})}>
              <img src={hmSearcheIcon} alt="иконка"/>
            </button>
            
            {!isAddClassInputOpen && 
              <>
                <button className={styleHM.HMButton}>
                  <NavLink to="/contactsDelivery" className={styleHM.HMBuscketButton}>
                    <img src={hmContactsIcon} alt="иконка"/>
                  </NavLink>               
                </button>
                <button className={styleHM.HMButton}>
                  <NavLink to="/basket" className={styleHM.HMBuscketButton}>
                    {goodsInBasketAllCount > 0 && 
                      <span className={styleHM.HMBuscketButtonCountGoods}>{goodsInBasketAllCount}</span>
                    }
                    <img src={hmBasketIcon} alt="иконка"/>
                  </NavLink>              
                </button>
                <button className={styleHM.HMButton}>
                  <a href="tel:+79775741346"><img src={hmPhoneIcon} alt="иконка"/></a>
                </button>
              </>
            }
          </div>
        </div>
      </div>

      <div className={cn(styleHM.HMMenuBlockWrap, {[styleHM.HMMenuBlockWrapClose]: isOpenMenu === false}, {[styleHM.HMMenuBlockWrapOpen]: isOpenMenu === true})}>
        <div className={"MainContainerWrap"}>
          <div className={styleHM.HMMenuBlock}>
            <div className={cn(styleHM.HMMenuContent, {[styleHM.HMMenuContentClose]: isOpenMenu === false}, {[styleHM.HMMenuContentOpen]: isOpenMenu === true})}>
              <div className={styleHM.HMBlockCloseWrap}>
                <button onClick={() => onCloseMenu()} className={styleHM.HMBlockCloseButton}><CloseIcon style={{ fontSize: 26 }} /></button>
              </div>
              <ul>
                <li><NavLink onClick={() => onCloseMenu()} activeClassName={styleHM.HMNavBlockActiveItem} exact to="/">Главная</NavLink></li>
                <li><NavLink onClick={() => onCloseMenu()} activeClassName={styleHM.HMNavBlockActiveItem} to={`/allGoods/${"Летняя рыбалка"}`}>Летняя рыбалка</NavLink></li>
                <li><NavLink onClick={() => onCloseMenu()} activeClassName={styleHM.HMNavBlockActiveItem} to={`/allGoods/${"Зимняя рыбалка"}`}>Зимняя рыбалка</NavLink></li>
                <li><NavLink onClick={() => onCloseMenu()} activeClassName={styleHM.HMNavBlockActiveItem} to={`/allGoods/${"Охота"}`}>Охота</NavLink></li>
                <li><NavLink onClick={() => onCloseMenu()} activeClassName={styleHM.HMNavBlockActiveItem} to={`/allGoods/${"Туризм"}`}>Туризм</NavLink></li>
                <li><NavLink onClick={() => onCloseMenu()} activeClassName={styleHM.HMNavBlockActiveItem} to={`/contactsDelivery`}>Контакты и доставка</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    goodsInBasket: state.basketPage.goodsInBasket,
    goodsList: state.allGoodsPage.goodsList,
  }
}
let mapDispatchToProps: MapDispatchPropsType = {
}


const HeaderMobile = compose<React.ComponentType>(
	connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)
)(HeaderMobileContainer);

export default HeaderMobile;
