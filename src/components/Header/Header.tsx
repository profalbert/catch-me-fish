import React, {useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styleHeader from './Header.module.css';
import logo from '../../assets/icons/logo.svg';
import SearchIcon from '@material-ui/icons/Search';
import shopIcon from '../../assets/icons/shop-icon.svg';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppStateType } from '../../store/redux-store';
import { TypeGood, TypeGoodInBasket } from '../../types/types';
import { compose } from 'redux';
import cn from 'classnames'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


type MapStatePropsType = {
  goodsInBasket: Array<TypeGoodInBasket>
  goodsList: Array<TypeGood>
}
type MapDispatchPropsType = {}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const HeaderContainer: React.FC<PropsType> = ({goodsInBasket, goodsList}) => {
  const classes = useStyles();

  const goodsInBasketAllCount = goodsInBasket.map(item => item.count).reduce((sumCount, currentCount) => sumCount + currentCount, 0)
  const [valueInputSearche, setValueInputSearche] = useState<string>('')
  const [focusInputSearche, setFocusInputSearche] = useState<boolean>(false)

  const onChangeInputSearche = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueInputSearche(e.target.value)
  };
  const onSearcheGoods = () => {
    if (valueInputSearche.length > 0) {
      setValueInputSearche('')
    }
  };

  return (
    <header className={styleHeader.Header}>
      <div className={classes.root}>
        <div className={"MainContainerWrap"}>
          <div className={styleHeader.headerWrap}>
            <div className={styleHeader.headerLogoBlock}><NavLink exact to={"/"} ><img src={logo} alt="логотип"/></NavLink></div>

            <div>
              <div className={styleHeader.headerSearcheBlock}>
                <input 
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInputSearche(e)}
                  onFocus={() => setFocusInputSearche(true)}
                  onBlur={() => setFocusInputSearche(false)}
                  value={valueInputSearche} 
                  className={styleHeader.headerSearcheInput} 
                  type="text" 
                  placeholder="Поиск товаров"
                />
                <button
                  onClick={() => onSearcheGoods()} 
                  className={cn(styleHeader.headerSearcheButton, "headerSearcheButton")}
                >
                  <SearchIcon style={{ fontSize: 35 }}/>
                </button>

                {focusInputSearche && valueInputSearche.length > 0 &&
                  <div className={styleHeader.headerSearcheListGoodsBlockWrap}>
                    {[goodsList[3]].map(good => (
                      <div key={good.id} className={styleHeader.headerSearcheListGoodsBlock}>
                        <div className={styleHeader.headerSearcheListGoodsImgBlock}>
                          <img className={styleHeader.headerSearcheListGoodsImg} src={good.images[0]} alt="картинка"/>
                        </div>
                        <div className={styleHeader.headerSearcheListGoodsTitleBlock}>
                          <div className={styleHeader.headerSearcheListGoodsTitle}>{valueInputSearche}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                }                
              </div>

              
              <div className={styleHeader.headerNavBlockWrap}>
                <nav className={styleHeader.headerNavBlock}>
                  <ul>
                    <li><NavLink activeClassName={styleHeader.headerNavBlockActiveItem} exact to="/">Главная</NavLink></li>
                    <li><NavLink activeClassName={styleHeader.headerNavBlockActiveItem} to={`/allGoods/${"Летняя рыбалка"}`}>Летняя рыбалка</NavLink></li>
                    <li><NavLink activeClassName={styleHeader.headerNavBlockActiveItem} to={`/allGoods/${"Зимняя рыбалка"}`}>Зимняя рыбалка</NavLink></li>
                    <li><NavLink activeClassName={styleHeader.headerNavBlockActiveItem} to={`/allGoods/${"Охота"}`}>Охота</NavLink></li>
                    <li><NavLink activeClassName={styleHeader.headerNavBlockActiveItem} to={`/allGoods/${"Туризм"}`}>Туризм</NavLink></li>
                    <li><NavLink activeClassName={styleHeader.headerNavBlockActiveItem} to={`/contactsDelivery`}>Контакты и доставка</NavLink></li>
                  </ul>
                </nav>
                <div className={styleHeader.headerBuscketBlock}>
                  <NavLink to="/basket" className={styleHeader.headerBuscketButton}>
                    {goodsInBasketAllCount > 0 && 
                      <span className={styleHeader.headerBuscketButtonCountGoods}>{goodsInBasketAllCount}</span>
                    }
                    <img src={shopIcon} alt="иконка"/>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className={styleHeader.headerContactsBlockWrap}>
              <div className={styleHeader.headerContactsBlock}>
                <div className={styleHeader.headerContactsContentWrap}>
                  <div className={styleHeader.headerContactsIcon}><WhatsAppIcon style={{fontSize: 55, color: "#f3c256"}}/></div>
                  <div className={styleHeader.headerContactsNumbers}>
                    <div><a href="tel:+79776220921">+7 (977) 622-09-21</a></div>
                    <div><a href="tel:+79775741346">+7 (977) 574-13-46</a></div>
                  </div>
                </div>
                <div className={styleHeader.headerContactsText}>
                  Мы работаем
                </div>
                <div className={styleHeader.headerContactsTextmini}>
                  24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    goodsList: state.allGoodsPage.goodsList,
    goodsInBasket: state.basketPage.goodsInBasket,
  }
}
let mapDispatchToProps: MapDispatchPropsType = {
}


const Header = compose<React.ComponentType>(
	connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)
)(HeaderContainer);

export default Header;
