import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import CardProduct from '../components/common/CardProduct';
import styleOCG from './OpenCardGoodPage.module.css';
import cn from 'classnames'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SwiperCore, { Navigation, A11y, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { TypeGood, TypeGoodInBasket, TypeActiveTypeJokes } from '../types/types';
import { AppStateType } from '../store/redux-store';
import { addTypeGoodInBasketThunk, changeCountGoodThunk } from '../store/basket-reducer';
import { compose } from 'redux';


SwiperCore.use([Navigation, A11y, Thumbs]);


const openCardGoodPageWrapRef = React.createRef<HTMLDivElement>();


type MapStatePropsType = {
  goodsList: Array<TypeGood>
  goodsInBasket: Array<TypeGoodInBasket>
}
type MapDispatchPropsType = {
  addGoodInBasket: (good: TypeGood, activeTypeJokes: TypeActiveTypeJokes) => void
  changeCountGood: (goodBasket: TypeGoodInBasket, changeCountNum: number) => void
}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const OpenCardGoodPageContainer: React.FC<PropsType> = ({goodsList, goodsInBasket, addGoodInBasket, changeCountGood}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState()
  const good = goodsList[3]
  const thisGoodInBasketOneJoke = goodsInBasket.find(item => 
    item.id === good.id && item.activeTypeJokes.nameActiveTypeJokes === "oneJoke"
  )
  const thisGoodInBasketPackageJoke = goodsInBasket.find(item => 
    item.id === good.id && item.activeTypeJokes.nameActiveTypeJokes === "packageJoke"
  )

  useEffect(() => {
    if (window.document.body.scrollWidth < 992) {
      if (!!openCardGoodPageWrapRef.current) {
        openCardGoodPageWrapRef.current.scrollIntoView({block: "start", behavior: "smooth"})
      }
    }
  }, [])

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


  return (
    <div ref={openCardGoodPageWrapRef} className={styleOCG.OpenCardGoodPageWrap}>

      <div className={styleOCG.OpenCardGoodPage}>
        <div className={"MainContainerWrap"}>
          <div className={styleOCG.OCGContent}>
            <div className={styleOCG.OCGActiveGood}>
              <div className={styleOCG.OCGActiveGoodTitle}>Аксессуары для рыбалки - Светлячки</div>

              <div className={styleOCG.OCGActiveGoodBlock}>
                <div className={cn(styleOCG.OCGActiveGoodImgWrap, "OCGActiveGoodImgWrapSlider")}>
                  <Swiper 
                    thumbs={{ swiper: thumbsSwiper }}
                    spaceBetween={100}
                    navigation
                  >
                    {good.images.length === 0
                      ? <SwiperSlide>
                          <div className={cn(styleOCG.OCGActiveGoodImg, styleOCG.OCGActiveGoodImg__none)}></div>
                        </SwiperSlide>
                      : good.images.map((item, index) => (
                          <SwiperSlide key={index}>
                            <div className={styleOCG.OCGActiveGoodImg}><img src={item} alt="картинка"/></div>
                          </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className={styleOCG.OCGActiveGoodSliderImgWrap}>
                    <div className={cn(styleOCG.OCGActiveGoodSliderImgBlock, "OCGActiveGoodSliderImgBlock")}>
                      <Swiper 
                        onSwiper={(e: any) => setThumbsSwiper(e)}
                        slidesPerView={4}
                        spaceBetween={33}
                        freeMode={true}
                        watchSlidesVisibility={true}
                        watchSlidesProgress={true}
                        breakpoints={{
                          320: {
                            spaceBetween: 15,
                            slidesPerView: 3,
                          },
                          576: {
                            spaceBetween: 33,
                            slidesPerView: 4,
                          },
                        }}
                      >
                        {good.images.length === 0
                          ? <SwiperSlide>
                              <div className={cn(styleOCG.OCGActiveGoodSliderImg, styleOCG.OCGActiveGoodSliderImg__none, "OCGActiveGoodSliderImg")}></div>
                            </SwiperSlide>
                          : good.images.map((item, index) => (
                              <SwiperSlide key={index}>
                                <div className={cn(styleOCG.OCGActiveGoodSliderImg, "OCGActiveGoodSliderImg")}><img src={item} alt="картинка"/></div>
                              </SwiperSlide>
                          ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
                
                <div className={styleOCG.OCGActiveGoodDescr}>
                  <div className={styleOCG.OCGActiveGoodDescrTitle}>{good.title}</div>
                  <div className={styleOCG.OCGActiveGoodDescrText}>
                    {good.descr.map((item, index) => (
                      <span key={index}>{item} <br/></span>
                    ))}
                  </div>
                  <div className={styleOCG.OCGActiveGoodDescrPrice}>
                    
                    {good.oneJoke && 
                      <div className={styleOCG.OCGAGDPriceBlock}>
                        <div className={styleOCG.OCGAGDPriceTextWrap}>
                          <div className={styleOCG.OCGAGDPriceText}>Цена за <span className={styleOCG.OCGAGDPriceMinitext}>{good.oneJoke.count} шт</span></div>
                          <div className={styleOCG.OCGAGDPriceTextprice}>{good.oneJoke.price} ₽</div>
                        </div>
                        <div className={styleOCG.OCGAGDPriceButtonWrap}>
                        <button
                          onClick={() => onTransferGoodInBasket(good, "oneJoke")} 
                          className={cn(styleOCG.OCGAGDPriceButton, {[styleOCG.OCGAGDPriceButton__active]: thisGoodInBasketOneJoke})}
                        >
                          {thisGoodInBasketOneJoke && thisGoodInBasketOneJoke.count > 0 && 
                            <span className={styleOCG.OCGAGDPriceButtonCountThisGood}>{thisGoodInBasketOneJoke.count}</span>
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
                      <div className={styleOCG.OCGAGDPriceBlock}>
                        <div className={styleOCG.OCGAGDPriceTextWrap}>
                          <div className={styleOCG.OCGAGDPriceText}>Упаковка <span className={styleOCG.OCGAGDPriceMinitext}>({good.packageJoke.count} шт.)</span></div>
                          <div className={styleOCG.OCGAGDPriceTextprice}>{good.packageJoke.price} ₽</div>
                        </div>
                        <div className={styleOCG.OCGAGDPriceButtonWrap}>
                        <button
                          onClick={() => onTransferGoodInBasket(good, "packageJoke")} 
                          className={cn(styleOCG.OCGAGDPriceButton, {[styleOCG.OCGAGDPriceButton__active]: thisGoodInBasketPackageJoke})}
                        >     
                          {thisGoodInBasketPackageJoke && thisGoodInBasketPackageJoke.count > 0 && 
                            <span className={styleOCG.OCGAGDPriceButtonCountThisGood}>{thisGoodInBasketPackageJoke.count}</span>
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
            </div>

            <div className={styleOCG.OCGSimilarGoods}>
              <div className={styleOCG.OCGSimilarGoodsTitle}>Похожие товары</div>
              <div className={cn(styleOCG.OCGSimilarGoodsContainer, "OCGSimilarGoodsContainer")}>
                <Swiper
                  breakpoints={{
                    320: {
                      spaceBetween: 10,
                      slidesPerView: 1,
                    },
                    576: {
                      spaceBetween: 0,
                      slidesPerView: 2,
                    },
                    768: {
                      spaceBetween: 25,
                      slidesPerView: 3,
                    },
                    992: {
                      spaceBetween: 26,
                      slidesPerView: 4,
                    },
                    1200: {
                      spaceBetween: 0,
                      slidesPerView: 3,
                    },
                    1440: {
                      spaceBetween: 0,
                      slidesPerView: 4,
                    },
                  }}
                >
                  {goodsList.map((item) => (
                    <SwiperSlide key={item.id}>
                      <CardProduct good={item}/>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    goodsList: state.allGoodsPage.goodsList,
    goodsInBasket: state.basketPage.goodsInBasket,
  }
}
let mapDispatchToProps: MapDispatchPropsType = {
  addGoodInBasket: addTypeGoodInBasketThunk,
  changeCountGood: changeCountGoodThunk,
}


const OpenCardGoodPage = compose<React.ComponentType>(
	connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)
)(OpenCardGoodPageContainer);

export default OpenCardGoodPage;





