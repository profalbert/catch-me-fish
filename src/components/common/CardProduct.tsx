import React from 'react';
import styleCP from './CardProduct.module.css';
import { NavLink } from 'react-router-dom';
import { TypeActiveTypeJokes, TypeGood, TypeGoodInBasket } from '../../types/types';
import { connect } from 'react-redux';
import { AppStateType } from '../../store/redux-store';
import { addTypeGoodInBasketThunk, changeCountGoodThunk } from '../../store/basket-reducer';
import cn from 'classnames'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


type MapStatePropsType = {
  goodsInBasket: Array<TypeGoodInBasket>
}
type MapDispatchPropsType = {
  addGoodInBasket: (good: TypeGood, activeTypeJokes: TypeActiveTypeJokes) => void
  changeCountGood: (goodBasket: TypeGoodInBasket, changeCountNum: number) => void
}
type OwnPropsType = {
  good: TypeGood
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const CardProductContainer: React.FC<PropsType> = ({good, goodsInBasket, addGoodInBasket, changeCountGood, ...props}) => {
  const thisGoodInBasketOneJoke = goodsInBasket.find(item => 
    item.id === good.id && item.activeTypeJokes.nameActiveTypeJokes === "oneJoke"
  )
  const thisGoodInBasketPackageJoke = goodsInBasket.find(item => 
    item.id === good.id && item.activeTypeJokes.nameActiveTypeJokes === "packageJoke"
  )

  const onTransferGoodInBasket = (good: TypeGood, nameActiveTypeJokes: string) => {
    if (nameActiveTypeJokes === "oneJoke") {
      if (!thisGoodInBasketOneJoke) {
        addTransferGoodInBasket(good, nameActiveTypeJokes, addGoodInBasket)
      } else {
        changeCountGood(thisGoodInBasketOneJoke, 1)
      }
    }
    if (nameActiveTypeJokes === "packageJoke") {
      if (!thisGoodInBasketPackageJoke) {
        addTransferGoodInBasket(good, nameActiveTypeJokes, addGoodInBasket)
      } else {
        changeCountGood(thisGoodInBasketPackageJoke, 1)
      }
    }    
  }

  const addTransferGoodInBasket = (good: TypeGood, nameActiveTypeJokes: string, processFunc: Function) => {
    let activeTypeJokes: TypeActiveTypeJokes | null = null;
    if (nameActiveTypeJokes === "oneJoke" && good.oneJoke) {
      activeTypeJokes = {...good.oneJoke, nameActiveTypeJokes}
      processFunc(good, activeTypeJokes)
    }
    if (nameActiveTypeJokes === "packageJoke" && good.packageJoke) {
      activeTypeJokes = {...good.packageJoke, nameActiveTypeJokes}
      processFunc(good, activeTypeJokes)
    }
  }


  if (!good) return <></>
  return (
    <div className={styleCP.CPBlockWrap}>
      <div className={styleCP.CPBlock}>
        <div>
          <div className={styleCP.CPImg}><img src={good.images[0]} alt="картинка"/></div>

          <div className={styleCP.CPDescr}>
            <NavLink to={`/allGoods/:typeFishing/:categoryGoods/:subcategoryGoods/${good.id}`}>
              <span className={styleCP.CPDescrTitle}>{good.title}</span> <br/>
              {good.descr.join(' ').slice(0, 55)}...
            </NavLink>
          </div>
        </div>

        <div className={styleCP.CPPriceBlockWrap}>
          {good.oneJoke &&
            <div className={styleCP.CPPriceBlock}>
              <div className={styleCP.CPPriceTextWrap}>
                <div className={styleCP.CPPriceText}>Цена за <span className={styleCP.CPPriceMinitext}>{good.oneJoke.count} шт</span></div>
                <div className={styleCP.CPPriceTextprice}>{good.oneJoke.price} ₽</div>
              </div>
              <div className={styleCP.CPPriceButtonWrap}>
                <button
                  onClick={() => onTransferGoodInBasket(good, "oneJoke")} 
                  className={cn(styleCP.CPPriceButton, {[styleCP.CPPriceButton__active]: thisGoodInBasketOneJoke})}
                >
                  {thisGoodInBasketOneJoke && thisGoodInBasketOneJoke.count > 0 && 
                    <span className={styleCP.CPPriceButtonCountThisGood}>{thisGoodInBasketOneJoke.count}</span>
                  }
                  {thisGoodInBasketOneJoke
                    ?<ShoppingCartOutlinedIcon style={{ fontSize: 35, color: "#fff" }}/>
                    :<ShoppingCartOutlinedIcon style={{ fontSize: 35 }}/>
                  }
                </button>
              </div>
            </div>
          }          
          
          {good.packageJoke &&
            <div className={styleCP.CPPriceBlock}>
              <div className={styleCP.CPPriceTextWrap}>
                <div className={styleCP.CPPriceText}>Упаковка <span className={styleCP.CPPriceMinitext}>({good.packageJoke.count} шт.)</span></div>
                <div className={styleCP.CPPriceTextprice}>{good.packageJoke.price} ₽</div>
              </div>
              <div className={styleCP.CPPriceButtonWrap}>
                <button
                  onClick={() => onTransferGoodInBasket(good, "packageJoke")} 
                  className={cn(styleCP.CPPriceButton, {[styleCP.CPPriceButton__active]: thisGoodInBasketPackageJoke})}
                >    
                  {thisGoodInBasketPackageJoke && thisGoodInBasketPackageJoke.count > 0 && 
                    <span className={styleCP.CPPriceButtonCountThisGood}>{thisGoodInBasketPackageJoke.count}</span>
                  }    
                  {thisGoodInBasketPackageJoke
                    ?<ShoppingCartOutlinedIcon style={{ fontSize: 35, color: "#fff" }}/>
                    :<ShoppingCartOutlinedIcon style={{ fontSize: 35 }}/>
                  }
                </button>
              </div>
            </div>
          }          
        </div>
      </div>
    </div>     
  );
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    goodsInBasket: state.basketPage.goodsInBasket,
  }
}
let mapDispatchToProps: MapDispatchPropsType = {
  addGoodInBasket: addTypeGoodInBasketThunk,
  changeCountGood: changeCountGoodThunk,
}


const CardProduct = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(CardProductContainer);

export default CardProduct;